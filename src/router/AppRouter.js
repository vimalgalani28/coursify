import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "../components/Header/Header";
import Course from "../pages/Course";
import Home from "../pages/Home";

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/" component={Home} exact={true} />
          <Route path="/course/:id" component={Course} exact={true} />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
