import React from "react";
import { Link } from "react-router-dom";

const data = [
  {
    roomId: 1,
    title: "어디한번 놀아보자"
  },
  {
    roomId: 2,
    title: "도르트문트 소리질러"
  },
  {
    roomId: 3,
    title: "로동의 댓가란"
  },
  {
    roomId: 4,
    title: "이게 다 뭐냐"
  }
];

class Chat extends React.Component {
  renderChatRoom = ({ roomId, title }) => {
    return (
      <li key={roomId}>
        <Link to={`/chat/${roomId}`}>{title}</Link>
      </li>
    );
  };

  render() {
    return (
      <div className="tmpl_chat">
        <h2 className="tit_tmpl">Chat</h2>
        <ul className="list_chat">
          {data.map(item => this.renderChatRoom(item))}
        </ul>
      </div>
    );
  }
}

export default Chat;
