import React from "react";
import { Paper, Typography } from "@mui/material";
import Card from "../Card/card.js";
import "./columnComponent.css";
import InputBox from "../InputBox/inputBox.js";

function ColumnTitle(props) {
  return (
    <div>
      <Typography> {props.title} </Typography>
    </div>
  );
}

function Column(props) {
  return (
    <div>
      <Paper variant="main">
        <ColumnTitle title={props.title} />
        <Card content="Test" />
        <Card content="Test" />
        <Card content="Test" />
        <Card content="Test" />
        <InputBox type="card" />
      </Paper>
    </div>
  );
}

export default Column;
