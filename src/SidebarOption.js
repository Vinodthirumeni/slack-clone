import React from "react";
import "./SidebarOption.css";
import { useHistory } from "react-router-dom";
import db from "./firebase";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
function SidebarOption({ Icon, title, id, addChannelOption }) {
  const history = useHistory();
  const selectChannel = () => {
    //navigation to different page useHistory Hook will work
    if (id) {
      history.push(`/room/${id}`);
    } else {
      history.push(title);
    }
  };
  const addChannel = () => {
    const channelName = prompt("Please enter channel name...");
    if (channelName) {
      db.collection("rooms").add({
        name: channelName,
      });
    }
  };
  const deleteChannel = () => {
    db.collection("rooms").doc(id).delete();
  };
  return (
    <div
      className="sidebarOption"
      onClick={addChannelOption ? addChannel : selectChannel}
    >
      {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <h3 className="sidebarOption_channel">
          <span className="sidebarOption__hash">#</span>
          {title}
          <DeleteOutlineIcon
            onClick={deleteChannel}
            className="sidebarOption_delete"
          />
        </h3>
      )}
    </div>
  );
}
export default SidebarOption;
