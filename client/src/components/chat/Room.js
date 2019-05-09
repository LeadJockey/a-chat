import React, { Component } from "react";
import * as io from "socket.io-client";
import { Link } from "react-router-dom";
import { SERVER_DOMIAN_URI } from "./../../utils/constants";

import Message from "./Message";

const JOIN_ROOM_CLIENT = "join_room_client";
const MSG_FROM_CLIENT = "msg_from_client";
const MSG_FROM_SERVER = "msg_from_server";

class Room extends Component {
  constructor(porps) {
    super(porps);
    this.input = React.createRef();
    this.roomId = this.props.match.params.roomId;
    this.state = { messages: [] };
    this.socket = io.connect(SERVER_DOMIAN_URI);
    this.socket.on(MSG_FROM_SERVER, opts => {
      console.table(Object.assign({ eventType: MSG_FROM_SERVER }, opts));
      this.setState({ messages: this.state.messages.concat(opts) });
    });
    this.socket.emit(JOIN_ROOM_CLIENT, {
      roomId: this.roomId,
      msg: "can i join the room ?"
    });
  }

  resetInput = () => {
    this.input.current.value = "";
  };

  sendMsg = () => {
    if (this.input.current.value.trim() === "") return;
    this.socket.emit(MSG_FROM_CLIENT, {
      roomId: this.roomId,
      msg: this.input.current.value
    });
    this.resetInput();
  };

  onEnterSendMsg = e => {
    if (e.keyCode !== 13) return;
    this.sendMsg();
  };

  renderMessage = data => <Message key={data.id} data={data} />;

  render() {
    const { messages } = this.state;
    return (
      <div className="comp_frame comp_chat_room">
        <strong className="tit_comp">CHAT ROOM</strong>
        <Link className="btn_leave" to={"/chat"}>
          Leave this room
        </Link>
        <div className="cont_chat">{messages.map(this.renderMessage)}</div>
        <div className="box_chat">
          <button className="btn_send" type="button" onClick={this.sendMsg}>
            Send Message
          </button>
          <input
            className="input_chat"
            type="text"
            placeholder="..."
            ref={this.input}
            onKeyUp={this.onEnterSendMsg}
          />
        </div>
      </div>
    );
  }
}

export default Room;
