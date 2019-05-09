import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "mobx-react";
import DevTools from "mobx-react-devtools";
import RootStore from "./stores";
import App from "./components/pages/App";

const store = new RootStore();
const rootEl = document.getElementById("app");

render(
  <Provider {...store}>
    <BrowserRouter>
      <App />
      <DevTools />
    </BrowserRouter>
  </Provider>,
  rootEl
);
