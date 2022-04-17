import "./loginPage.css";
import logo from "../../../logo.svg";
import React, { useRef } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

function LoginPage(props) {
  const usernameRef = useRef("");

  const saveUsername = () => {
    let user = { userName: usernameRef.current.value };
    saveUserInLocalStorage(user);
    if (checkUserInLocalStorage()) {
      props.history.push("/dashboard");
    }
  };

  return (
    <React.Fragment>
      {checkUserInLocalStorage() ? props.history.push("/dashboard") : null}
      <header className="App-header">
        <div className="inner">
          <img src={logo} className="App-logo" alt="logo" />
          <br />
          <br />
          <h3>Trello-Based Dashboard</h3>

          <div>
            <TextField
              id="outlined-textarea"
              label="Enter your username"
              placeholder="Username..."
              variant="outlined"
              inputRef={usernameRef}
            />
            <Button
              variant="contained"
              color="primary"
              size="small"
              onClick={saveUsername}
            >
              Continue
            </Button>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
}

function saveUserInLocalStorage(user) {
  localStorage.setItem("user", JSON.stringify(user));
}

function getUserFromLocalStorage() {
  return JSON.parse(localStorage.getItem("user"));
}

function checkUserInLocalStorage() {
  return getUserFromLocalStorage() !== null;
}

export default LoginPage;
