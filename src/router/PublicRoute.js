import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { CoursifyContext } from "../context/CoursifyContext";

const PublicRoute = ({ component: Component, ...rest }) => {
  const { user } = useContext(CoursifyContext);
  const isAuthenticated =
    user.type === "admin" ||
    user.type === "associatepartner" ||
    user.type === "salesteam";
  return (
    <Route
      {...rest}
      component={(props) => {
        if (!isAuthenticated) {
          return <Component {...props} />;
        } else {
          return <Redirect to={`/${user.type}/dashboard`} />;
        }
      }}
    />
  );
};

export default PublicRoute;
