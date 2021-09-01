import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "../components/Header/Header";
import AdminCourse from "../pages/AdminCourse";
import AdminDashboard from "../pages/AdminDashboard";
import AdminLogin from "../pages/AdminLogin";
import Course from "../pages/Course";
import CreateCourse from "../pages/CreateCourse";
import Home from "../pages/Home";
import PrivateAdminRoute from "./PrivateAdminRoute";
import PublicRoute from "./PublicRoute";

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/" component={Home} exact={true} />
          <Route path="/course/:id" component={Course} exact={true} />

          {/* Admin Routes */}
          <PublicRoute path="/admin/login" component={AdminLogin} />
          <PrivateAdminRoute
            path="/admin/dashboard"
            component={AdminDashboard}
          />
          <PrivateAdminRoute
            path="/admin/createcourse"
            component={CreateCourse}
          />
          <PrivateAdminRoute path="/admin/course/:id" component={AdminCourse} />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
