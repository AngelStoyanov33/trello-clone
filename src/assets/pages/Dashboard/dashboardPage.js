import React from "react";
import "./dashboardPage.css";
import { appTheme } from "../../themes/appThemes.js";
import {ThemeProvider } from "@mui/material/styles";

function DashboardPage() {
  return (
    <ThemeProvider theme={appTheme}>
      <div className="bg">
      <h3>TTTTTTTTTTTTTTTTT</h3>
    </div>
    </ThemeProvider>
  );
}

export default DashboardPage;

