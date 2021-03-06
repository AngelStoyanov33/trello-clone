import "./loginPage.css";
import logo from "../../../logo.png";
import React, { useRef, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { appTheme } from "../../themes/appThemes.js";
import { ThemeProvider } from "@mui/material/styles";
import { animations } from "react-animation";
import uuid from "react-uuid";
import {
  checkIfUserExists,
  getUserByUsername,
  saveUserInLocalStorage,
  checkUserInLocalStorage,
  generateRandomColor,
} from "../../../service/userService.js";

function LoginPage(props) {
  const usernameRef = useRef("");
  const textFieldRef = useRef(null);
  const [inputErrorProps, setInputErrorProps] = useState({});

  const saveUsername = () => {
    setInputErrorProps({});
    let username = usernameRef.current.value;
    let user = { userName: username };
    let regex1 = /^[0-9]{0,100}$/;
    let regex2 = /^[a-zA-Z0-9!@.#*]{5,16}$/;

    if (!checkIfUserExists(user)) {
      if (!username.match(regex2) || username.match(regex1)) {
        setInputErrorProps({
          error: true,
          helperText:
            "Username must be between 5 and 16 characters and can only contain letters, numbers, and !@.#*",
        });
        return;
      }
      user = {
        userName: username,
        userId: uuid(),
        userColor: generateRandomColor(),
      };
    } else {
      user = getUserByUsername(username);
    }

    saveUserInLocalStorage(user);

    if (checkUserInLocalStorage()) {
      props.history.push("/boards");
    }
  };

  return (
    <ThemeProvider theme={appTheme}>
      <React.Fragment>
        {checkUserInLocalStorage() ? props.history.push("/boards") : null}
        <header className="App-header">
          <div className="inner">
            <img
              src={logo}
              alt="logo"
              style={{ animation: animations.pulse }}
            />
            <br />
            <h3>Trello-Based Dashboard</h3>
            <br />

            <div className="outer">
              <TextField
                {...inputErrorProps}
                ref={textFieldRef}
                id="outlined-textarea"
                label="Enter your username"
                placeholder="Username..."
                variant="outlined"
                inputRef={usernameRef}
                color="secondary"
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
    </ThemeProvider>
  );
}

export default LoginPage;
