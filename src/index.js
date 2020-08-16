import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import ServiceContext from "./components/service-context";
import store from "./store";

import "./index.scss";

ReactDOM.render(
  <Provider store={store}>
    <ServiceContext.Provider>
      <Router>
        <App />
      </Router>
    </ServiceContext.Provider>
  </Provider>,
  document.getElementById("root")
);
