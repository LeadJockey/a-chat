import React from "react";
import { Switch, Route } from "react-router";
import Home from "../components/templates/Home";
import Counter from "../components/organisms/Counter";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>A Chat</h1>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/counter" component={Counter} />
        </Switch>
      </div>
    );
  }
}

export default App;
