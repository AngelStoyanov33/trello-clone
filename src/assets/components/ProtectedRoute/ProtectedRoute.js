import React from "react";
import { Route, Redirect } from "react-router-dom";

function ProtectedRoute(props, component, ...rest) {
  let protRoute = <Route {...props} render={component} />;
  let redirect = (
    <Redirect to={{ pathname: "/", state: { from: props.location } }} />
  );
  if (checkUserInLocalStorage()) {
    return protRoute;
  } else {
    return redirect;
  }
}

function getUserFromLocalStorage() {
  return JSON.parse(localStorage.getItem("user"));
}

function checkUserInLocalStorage() {
  return getUserFromLocalStorage() !== null;
}

export default ProtectedRoute;
