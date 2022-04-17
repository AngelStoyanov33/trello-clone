import React from "react";
import "./dashboardPage.css";
import { appTheme } from "../../themes/appThemes.js";
import {ThemeProvider } from "@mui/material/styles";
import { Button } from "@mui/material";
import { logoutCurrentUser } from "../../../service/userService.js";

function DashboardPage(props) {
  return (
    <ThemeProvider theme={appTheme}>
      <Button onClick={() => { logoutUser(props); }}>Logout</Button>
      <div className="bg">
      <h3>TTTTTTTTTTTTTTTTT</h3>
    </div>
    </ThemeProvider>
  );
}

function logoutUser(props){
  logoutCurrentUser();
  props.history.push("/");
}



export default DashboardPage;

