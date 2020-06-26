import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import "./assets/main.css";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

import App from "./Components/App.js";
import Home from "./pages/Home.js";
import Settings from "./pages/Settings.js";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";
import reducers from "./reducers";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={createStore(reducers, {}, applyMiddleware(reduxThunk))}>
        <App>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/settings" component={Settings} />
        </App>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
