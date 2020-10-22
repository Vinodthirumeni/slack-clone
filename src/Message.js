import React from "react";
import "./Message.css";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import db from "./firebase";

function Message({ message_id, room_id, message, timestamp, user, userImage }) {
  const deleteMessage = () => {
    db.collection("rooms")
      .doc(room_id)
      .collection("messages")
      .doc(message_id)
      .delete();
  };
  return (
    <div className="message">
      <img src={userImage} alt="" />
      <div className="message__info">
        <h4>
          {user}
          <span className="message__timestamp">
            {new Date(timestamp?.toDate()).toUTCString()}
          </span>
        </h4>
        <p>{message}</p>
      </div>
      <DeleteOutlineIcon onClick={deleteMessage} className="message__delete" />
    </div>
  );
}
export default Message;
