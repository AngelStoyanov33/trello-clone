import React from "react";
import "./dashboardPage.css";
import { appTheme } from "../../themes/appThemes.js";
import { ThemeProvider } from "@mui/material/styles";
import { Button } from "@mui/material";
import { logoutCurrentUser } from "../../../service/userService.js";
import Column from "../../components/Column/columnComponent";
import Sidebar from "../../components/Sidebar/sideBarComponent";

function DashboardPage(props) {
  const content = (
    <React.Fragment>
      <div className="bg">
        <Column title="Todo Test" />
        <Column title="In progress Test" />
        <Column title="Done test" />
        <Column title="Custom test" />
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
