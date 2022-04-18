import { Paper, Typography } from "@mui/material";
import React from "react";
import "./card.css";

function Card(props) {
  return (
    <div>
      <Paper variant="card">
        <div onClick={handleClick}>{props.content}</div>
      </Paper>
    </div>
  );
}

function handleClick(e) {
  e.preventDefault();
  alert("You clicked me! TEST");
}

export default Card;
