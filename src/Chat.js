import React, { useEffect, useState } from "react";
import "./Chat.css";
import { useParams } from "react-router-dom";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import db from "./firebase";
import Message from "./Message";
import ChatInput from "./ChatInput";
function Chat() {
  const { roomId } = useParams(); // useParams hook used to fetch the id from URL and store in roomId
  const [roomDetails, setRoomDetails] = useState(null);
  const [roomMessages, setRoomMessages] = useState([]);
  useEffect(() => {
    if (roomId) {
      db.collection("rooms")
        .doc(roomId)
        .onSnapshot((snapshot) => setRoomDetails(snapshot.data()));
    }
    db.collection("rooms")
      .doc(roomId)
      .collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setRoomMessages(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            doc: doc.data(),
          }))
        )
      );
  }, [roomId]);
  return (
    <div className="chat">
      <div className="chat__header">
        <div className="chat__headerLeft">
          <h4 className="chat__channelName">
            <strong>#{roomDetails?.name}</strong>
            <StarBorderIcon />
          </h4>
        </div>
        <div className="chat__headerRight">
          <p>
            <InfoOutlinedIcon /> Details
          </p>
        </div>
      </div>

      <div className="chat__messages">
        {roomMessages.map((message) => (
          <Message
            message_id={message.id}
            room_id={roomId}
            message={message.doc.message}
            timestamp={message.doc.timestamp}
            user={message.doc.user}
            userImage={message.doc.userImage}
          />
        ))}
      </div>

      <ChatInput channelName={roomDetails?.name} channelId={roomId} />
    </div>
  );
}
export default Chat;
