import "./loginPage.css";
import logo from "../../../logo.png";
import React, { useRef } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { appTheme } from "../../themes/appThemes.js";
import {ThemeProvider } from "@mui/material/styles";
import { animations } from "react-animation";
import uuid from 'react-uuid'
import {checkIfUserExists, getUserByUsername, saveUserInLocalStorage, checkUserInLocalStorage} from '../../../service/userService.js';


function LoginPage(props) {
  const usernameRef = useRef("");

  const saveUsername = () => {
    let username = usernameRef.current.value;
    let user = { userName:username };
    //TODO:
    if(!checkIfUserExists(user)){
      user = { userName:username, userId:uuid()};
    }else{
      user = getUserByUsername(username);
    }
    saveUserInLocalStorage(user);
    if (checkUserInLocalStorage()) {
      props.history.push("/dashboard");
    }
  };

  return (
    <ThemeProvider theme={appTheme}>
      <React.Fragment>
      {checkUserInLocalStorage() ? props.history.push("/dashboard") : null}
      <header className="App-header">
        <div className="inner">
          <img src={logo} alt="logo"  style={{ animation: animations.pulse }}/>
          <br />
          <br />
          <h3>Trello-Based Dashboard</h3>

          <div className="outer">
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
    </ThemeProvider>
    
  );
}

export default LoginPage;
