import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./pages/App/App";
import * as serviceWorker from "./serviceWorker";
import { createBrowserHistory } from "history";
import { BrowserRouter as Router } from "react-router-dom";

const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <App />
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
