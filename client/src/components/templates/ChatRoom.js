import React from "react";
import io from "socket.io-client";
import { SERVER_DOMAIN } from "./../../utils/constants";

class ChatRoom extends React.Component {
  createBtn = React.createRef();
  socket = io(SERVER_DOMAIN);

  createRoom = () => {
    console.log("createRoom called");
    this.socket.on("test", msg => console.log("msg", msg));
    this.socket.emit("JOIN::ROOM", {
      id: 1,
      title: "unnamed",
      pwd: "1234",
      isLock: false
    });
  };

  renderRoomInfo = () => {
    const {
      match: {
        params: { roomId }
      }
    } = this.props;

    console.log("this", this);
    console.log("roomId", roomId);
  };

  componentDidMount() {
    this.socket.on("test", msg => console.log("msg", msg));
    this.socket.on("JOIN::ROOM", msg => console.log("msg", msg));
  }
  render() {
    return (
      <div className="tmpl_chat_room">
        <h2 className="tit_tmpl">ChatRoom</h2>
        <input type="text" />
        <div>heloo</div>
        {this.renderRoomInfo()}
        <button ref={this.createBtn} onClick={this.createRoom}>
          CREATE ROOM
        </button>
      </div>
    );
  }
}

export default ChatRoom;
