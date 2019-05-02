import React from "react";
import { Switch, Route } from "react-router";

import Home from "../components/templates/Home";
import Chat from "../components/templates/Chat";
import Counter from "../components/organisms/Counter";


class App extends React.Component {
  
  render() {
    return (
      <div>
        <h1>A Chat</h1>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/counter" component={Counter} />
          <Route path="/chat" component={Chat} />
        </Switch>
      </div>
    );
  }
}

export default App;
