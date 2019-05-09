import React, { Component } from "react";

class Message extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      data: { clientIp, datetime, msg, color }
    } = this.props;
    const ip = clientIp && clientIp.replace("::ffff:", "@ ") + ' >';
    const time = datetime && datetime.split("/")[1];
    return (
      <div className="comp_chat_message">
        <span className="txt_time">{time}</span>
        <span className="text_ip" style={{color:color}}>{ip}</span>
        <span className="txt_msg">{msg}</span>
      </div>
    );
  }
}

export default Message;
