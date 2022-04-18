import React, { useState, useRef } from "react";
import "./boardsPage.css";
import { appTheme } from "../../themes/appThemes.js";
import { ThemeProvider } from "@mui/material/styles";
import Sidebar from "../../components/Sidebar/sideBarComponent";
import { Button as MUIButton, InputBase, Paper } from "@mui/material";
import { Link } from "react-router-dom";
import {
  getUserFromLocalStorage,
  getUserById,
} from "../../../service/userService";
import { getAllBoards, createBoard } from "../../../service/boardService";
import {
  Card,
  Text,
  Badge,
  Button,
  Group,
  useMantineTheme,
  Modal,
} from "@mantine/core";
import uuid from "react-uuid";

function BoardsPage() {
  const [opened, setOpened] = useState(false);

  let boards = getAllBoards();
  const [boardsList, setBoardsList] = useState(boards);

  const content = (
    <React.Fragment>
      <Modal
        opened={opened}
        closeOnClickOutside={true}
        onClose={() => setOpened(false)}
        title="Enter the board title"
      >
        <InputComponent open={opened} setOpened={setOpened} />
      </Modal>
      <div className="boards">
        <h2>Welcome {getUserFromLocalStorage().userName}</h2>
        <div className="bg1">
          {boardsList.map((board) => {
            return (
              <BoardsBoardCard
                boardName={board.boardName}
                authorName={getUserById(board.ownerId).userName}
                userColor={getUserById(board.ownerId).userColor}
                boardId={board.boardId}
              />
            );
          })}
        </div>
        <Button
          variant="light"
          color="red"
          fullWidth
          style={{ marginTop: 14 }}
          onClick={() => setOpened(true)}
        >
          Add new board
        </Button>
      </div>
    </React.Fragment>
  );
  return (
    <ThemeProvider theme={appTheme}>
      <Sidebar content={content} />
    </ThemeProvider>
  );
}

function BoardsBoardCard(props) {
  const theme = useMantineTheme();
  return (
    <Card shadow="sm" p="lg" style={{ margin: "5px" }}>
      <Group
        position="apart"
        style={{
          marginBottom: 5,
          marginTop: theme.spacing.sm,
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Text
          weight={500}
          style={{
            margin: "0 auto",
          }}
        >
          {props.boardName}
        </Text>
        <br></br>
        <Badge
          color={props.userColor}
          variant="filled"
          style={{ margin: "0 auto" }}
        >
          {props.authorName}
        </Badge>
      </Group>

      <Text size="sm" style={{ color: "red", lineHeight: 1.5 }}></Text>

      <Button variant="light" color="red" fullWidth style={{ marginTop: 14 }}>
        <Link to={"/dashboard/" + props.boardId}>
          <span>Open Board</span>
        </Link>
      </Button>
    </Card>
  );
}

function InputComponent({ opened, setOpened }, props) {
  const inputRef = useRef(null);
  return (
    <div>
      <div>
        <Paper>
          <InputBase fullWidth multiline inputRef={inputRef} />
        </Paper>
      </div>
      <br></br>
      <div>
        <MUIButton
          onClick={() => {
            setOpened(false);
            addNewBoard(inputRef);
          }}
        >
          Add
        </MUIButton>
      </div>
    </div>
  );
}

function addNewBoard(inputRef) {
  if (inputRef.current.value !== "") {
    let boardTitle = inputRef.current.value;
    let user = getUserFromLocalStorage();
    let board = {
      boardName: boardTitle,
      ownerId: user.userId,
      boardId: uuid(),
    };
    createBoard(board);
    //setBoardsList(getAllBoards());
  }
  console.log("Add a new board");
}

export default BoardsPage;
