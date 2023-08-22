import React from "react";
import { Route, Navigate } from "react-router-dom";

const AuthenticatedRoute = ({ element: Element, isAuth, ...rest }) => {
  if (isAuth) {
    return <Route {...rest} element={<Element />} />;
  } else {
    return <Navigate to="/login" />;
  }
};

export default AuthenticatedRoute;
