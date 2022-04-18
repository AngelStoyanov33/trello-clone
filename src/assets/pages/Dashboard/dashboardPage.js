import React from "react";
import "./dashboardPage.css";
import { appTheme } from "../../themes/appThemes.js";
import { ThemeProvider } from "@mui/material/styles";
import { Button } from "@mui/material";
import { logoutCurrentUser } from "../../../service/userService.js";
import Board from "../../components/Board/board";
import Sidebar from "../../components/Sidebar/sideBarComponent";

function DashboardPage(props) {
  const content = (
    <React.Fragment>
      <div className="bg">
        <Board title="Todo Test" />
        <Board title="In progress Test" />
        <Board title="Done test" />
        <Board title="Custom test" />
      </div>
    </React.Fragment>
  );
  return (
    <ThemeProvider theme={appTheme}>
      <Sidebar content={content} />
    </ThemeProvider>
  );
}

function logoutUser(props) {
  logoutCurrentUser();
  props.history.push("/");
}

export default DashboardPage;
