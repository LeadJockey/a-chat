import React from "react";
import { Switch, Route } from "react-router";
import Page from "./Page";

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Page} />
        <Route path="/list" component={Page} />
      </Switch>
    );
  }
}

export default App;
