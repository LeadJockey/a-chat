import React from "react";
import io from "socket.io-client";

const SERVER_PORT = "localhost:9000";

class Chat extends React.Component {
  createBtn = React.createRef();
  socket = io(SERVER_PORT);

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

  componentDidMount() {
    this.socket.on("test", msg => console.log("msg", msg));
    this.socket.on("JOIN::ROOM", msg => console.log("msg", msg));
  }
  render() {
    return (
      <div>
        <h2>Chat</h2>
        <button ref={this.createBtn} onClick={this.createRoom}>
          CREATE ROOM
        </button>
      </div>
    );
  }
}

export default Chat;
