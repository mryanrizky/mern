import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CreatePost, DetailsPost, Home } from "../../pages";
import { Footer, Header } from "../../components";
import "./mainapp.scss";

const MainApp = () => {
  return (
    <div className="main-app-wrapper">
      <Header />

      <div className="content-wrapper">
        <Router>
          <Switch>
            <Route path="/create-post">
              <CreatePost />
            </Route>
            <Route path="/details-post">
              <DetailsPost />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
      <Footer />
    </div>
  );
};

export default MainApp;
