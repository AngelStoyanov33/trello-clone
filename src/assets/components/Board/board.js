import React from "react";
import { Paper, Typography } from "@mui/material";
import Card from "../Card/card.js";
import "./board.css";

function BoardTitle(props) {
  return (
    <div>
      <Typography> {props.title} </Typography>
    </div>
  );
}

function Board(props) {
  return (
    <div>
      <Paper variant="main">
        <BoardTitle title={props.title} />
        <Card content="Test" />
        <Card content="Test" />
        <Card content="Test" />
        <Card content="Test" />
      </Paper>
    </div>
  );
}

export default Board;
