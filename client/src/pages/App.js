import React from "react";
import { Switch, Route } from "react-router";
import socketIOClient from "socket.io-client";

import Home from "../components/templates/Home";
import Counter from "../components/organisms/Counter";

const SERVER_PORT = 'localhost:9000';

class App extends React.Component {
  componentDidMount() {
    console.log('mounted');
    
    const socket = socketIOClient(SERVER_PORT);
    socket.on("test", msg => alert("msg", msg));
  }
  render() {
    return (
      <div>
        <h1>A Chat</h1>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/counter" component={Counter} />
          <Route path="/chat" component={Counter} />
        </Switch>
      </div>
    );
  }
}

export default App;
