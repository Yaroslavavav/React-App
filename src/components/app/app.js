import React, { Component, useState, useEffect } from "react";
import "./app.css";
import { Route, Switch } from "react-router-dom";

import AppHeader from "../app-header";
import { Home, OurLocation, Feedback, Rooms } from "../nav-pages";

// export const useDebounce = (value, timeout) => {
//   const [state, setState] = useState(value);

//   useEffect(() => {
//     const handler = setTimeout(() => setState(value), timeout);

//     return () => clearTimeout(handler);
//   }, [value, timeout]);

//   return state;
// };

// const Counter = ({ fps }) => {
//   const [value, setValue] = useState(0);
//   const increment = (delta) => {
//     const value = (this.value += delta);

//     setValue(value);
//   };

//   setInterval(() => {
//     const newValue = value + fps;

//     const val = useDebounce(newValue, 1000);
//     console.log(val);
//   }, 100);
// };

export default class App extends Component {
  state = {
    status: "agfas",
  };

  render() {
    return (
      <div className="main-wrapper">
        <AppHeader />
        {/* <Counter fps={60}></Counter> */}
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
