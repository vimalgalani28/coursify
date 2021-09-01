import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { CoursifyContext } from "../context/CoursifyContext";

const PrivateAdminRoute = ({ component: Component, ...rest }) => {
  const { user } = useContext(CoursifyContext);
  const isAuthenticated = user.type === "admin";
  return (
    <Route
      {...rest}
      component={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/admin/login" />
        )
      }
    />
  );
};

export default PrivateAdminRoute;
