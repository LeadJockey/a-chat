import React from "react";
import { Switch, Route } from "react-router";

import Home from "../components/templates/Home";
import Chat from "../components/templates/Chat";
import ChatRoom from "../components/templates/ChatRoom";
import Counter from "../components/organisms/Counter";

import "./../assets/scss/common.scss";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>A Chat</h1>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/counter" component={Counter} />
          <Route exact path="/chat" component={Chat} />
          <Route path="/chat/:roomId" component={ChatRoom} />
        </Switch>
      </div>
    );
  }
}

export default App;
