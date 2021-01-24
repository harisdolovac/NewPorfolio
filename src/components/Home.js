import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from "./App";
import SendMessage from "./SendMessage";
import Navbar from "./Navbar/Navbar";
import "../css/Home.css";

const Home = () => {
  return (
    <Router>
      <div className="wrapper_home">
        <Navbar />
        <Switch>
          <Route strict path="/" exact component={App}>
            <App />
          </Route>

          <Route path="/messages" component={SendMessage}>
            <SendMessage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Home;
