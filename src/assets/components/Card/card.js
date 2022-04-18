import "./card.css";
import React, { useState, useRef } from "react";
import { appTheme } from "../../themes/appThemes.js";
import { ThemeProvider } from "@mui/material/styles";
import Sidebar from "../../components/Sidebar/sideBarComponent";
import {
  Button as MUIButton,
  InputBase,
  Paper,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import {
  getUserFromLocalStorage,
  getUserById,
} from "../../../service/userService";
import {
  getAllBoards,
  createBoard,
  deleteBoard,
  getBoardById,
} from "../../../service/boardService";
import {
  deleteColumn,
  getAllColumnsByBoardId,
  getColumnById,
} from "../../../service/columnService";
import {
  deleteCard,
  getAllCardsByColumnId,
} from "../../../service/cardService";
import {
  Card as MantineCard,
  Text,
  Badge,
  Button,
  Group,
  useMantineTheme,
  Modal,
} from "@mantine/core";
import uuid from "react-uuid";

function Card(props) {
  const [opened, setOpened] = useState(false);
  const [card, setCard] = useState(props.card);

  return (
    <div>
      <Modal
        opened={opened}
        closeOnClickOutside={true}
        onClose={() => setOpened(false)}
        title="Task Overview"
      >
        <AddInputComponent
          open={opened}
          setOpened={setOpened}
          content={props.content}
          card={card}
        />
      </Modal>

      <Paper variant="card">
        <div onClick={() => setOpened(true)}>{props.content}</div>
      </Paper>
    </div>
  );
}

function AddInputComponent({ opened, setOpened, card }) {
  const theme = useMantineTheme();
  return (
    <div>
      <div>
        <Group
          position="apart"
          style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
        >
          <Badge color="pink" variant="filled">
            Task
          </Badge>
          <Badge color="red" variant="outline">
            {card.creationDate}
          </Badge>
          <Badge color={getUserById(card.ownerId).userColor} variant="light">
            {getUserById(card.ownerId).userName}
          </Badge>
          <Badge color="pink" variant="light">
            {getBoardById(getColumnById(card.columnId).boardId).boardName} ->{" "}
            {getColumnById(card.columnId).columnName}
          </Badge>
        </Group>
        <Paper>
          <Typography variant="h6">{card.cardName}</Typography>
          <br></br>
          <Typography>{card.description}</Typography>
        </Paper>
      </div>
      <br></br>
      <div>
        <MUIButton
          sx={{ margin: "5px" }}
          onClick={() => {
            setOpened(false);
          }}
        >
          Close
        </MUIButton>
        <MUIButton sx={{ margin: "5px" }}>Move</MUIButton>
        <MUIButton sx={{ margin: "5px" }}>Archive</MUIButton>
      </div>
    </div>
  );
}

function handleClick(e) {
  e.preventDefault();
  alert("You clicked me! TEST");
}

export default Card;
