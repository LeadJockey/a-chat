import React, { Component } from "react";
import { Switch, Route } from "react-router";

import Lobby from "./../chat/Lobby";
import Room from "./../chat/Room";

import "./../../assets/scss/common.scss";

class App extends Component {
  render() {
    return (
      <div className="wrap_app">
        <h1 className="tit_app">A Chat</h1>
        <Switch>
          <Route exact path="/chat" component={Lobby} />
          <Route path="/chat/:roomId" component={Room} />
        </Switch>
      </div>
    );
  }
}

export default App;
