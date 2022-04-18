import React from "react";
import { Route, Redirect } from "react-router-dom";
import { getUserFromLocalStorage, checkUserInLocalStorage } from "../../../service/userService.js";

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

export default ProtectedRoute;
