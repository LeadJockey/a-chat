import React, { Component } from "react";

class Message extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { content } = this.props;
    return <div>{content}</div>;
  }
}

export default Message;
