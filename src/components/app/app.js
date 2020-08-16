import React, { Component } from "react";
import "./app.css";
import { Route, Switch } from "react-router-dom";

import AppHeader from "../app-header";
import { Home, OurLocation, Feedback, Rooms } from "../nav-pages";

export default class App extends Component {
  state = {
    status: "agfas",
  };

  render() {
    return (
      <div className="main-wrapper">
        <AppHeader />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/rooms" exact component={Rooms} />
          <Route path="/feedback" component={Feedback} />
          <Route path="/our-location" component={OurLocation} />
        </Switch>
      </div>
    );
  }
}
