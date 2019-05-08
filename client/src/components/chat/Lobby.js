import React, { Component } from "react";
import { Link } from "react-router-dom";
import { API_V1_CHAT } from "./../../utils/constants";

class Lobby extends Component {
  constructor(props) {
    super(props);
    this.state = { roomList: [] };
    this.updateRoomList(API_V1_CHAT);
  }

  updateRoomList = uri => {
    fetch(uri)
      .then(res => res.json())
      .then(data => this.setState({ roomList: data.roomList }))
      .catch(err => console.log("error", err));
  };

  renderRoom = ({ id, title, members }) => {
    return (
      <li key={id}>
        <Link to={`/chat/${id}`}>
          {!!id && <p>아이디 : {id}</p>}
          {!!title && <p>제목 : {title}</p>}
          {!!members.length && <p>인원 : {members.length}</p>}
        </Link>
      </li>
    );
  };

  render() {
    const { roomList } = this.state;
    return (
      <div className="comp_frame comp_chat_robby">
        <strong className="tit_comp">채팅방 목록</strong>
        <ul className="list_room">{roomList.map(this.renderRoom)}</ul>
      </div>
    );
  }
}

export default Lobby;
