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
import {
  getAllBoards,
  createBoard,
  deleteBoard,
  getBoardById,
} from "../../../service/boardService";
import {
  deleteColumn,
  getAllColumnsByBoardId,
} from "../../../service/columnService";
import {
  deleteCard,
  getAllCardsByColumnId,
} from "../../../service/cardService";
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
  const [editOpened, setEditOpened] = useState(false);

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
        <AddInputComponent
          open={opened}
          setOpened={setOpened}
          boardsList={boardsList}
          setBoardsList={setBoardsList}
        />
      </Modal>

      <Modal
        opened={opened}
        closeOnClickOutside={true}
        onClose={() => setOpened(false)}
        title="Edit the board title"
      >
        <AddInputComponent
          open={editOpened}
          setOpened={setEditOpened}
          boardsList={boardsList}
          setBoardsList={setBoardsList}
        />
      </Modal>
      <div className="boards">
        <h2>Welcome, {getUserFromLocalStorage().userName}</h2>
        <div className="bg1">
          {boardsList.map((board) => {
            return (
              <BoardsBoardCard
                boardName={board.boardName}
                authorName={getUserById(board.ownerId).userName}
                userColor={getUserById(board.ownerId).userColor}
                boardId={board.boardId}
                boardsList={boardsList}
                setBoardsList={setBoardsList}
                editOpened={editOpened}
                setEditOpened={setEditOpened}
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

function BoardsBoardCard({
  boardsList,
  setBoardsList,
  boardId,
  userColor,
  authorName,
  boardName,
  editOpened,
  setEditOpened,
}) {
  const theme = useMantineTheme();
  return (
    <Card shadow="sm" p="lg" style={{ margin: "5px", width: "350px" }}>
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
            fontSize: "0.9rem",
            textAlign: "center",
            overflowWrap: "break-word",
          }}
        >
          {boardName}
        </Text>

        <Badge
          color={userColor}
          variant="filled"
          style={{
            margin: "0 auto",
          }}
        >
          {authorName}
        </Badge>
      </Group>

      <Text size="sm" style={{ color: "red", lineHeight: 1.5 }}></Text>

      <Button
        variant="outline"
        color="green"
        fullWidth
        style={{ marginTop: 14 }}
      >
        <Link to={"/dashboard/" + boardId}>
          <span className="link">Open Board</span>
        </Link>
      </Button>
      <Button
        variant="outline"
        color="yellow"
        fullWidth
        style={{ marginTop: 7 }}
        onClick={() => {
          setEditOpened(true);
        }}
      >
        <span>Edit Board</span>
      </Button>
      <Button
        variant="outline"
        color="red"
        fullWidth
        style={{ marginTop: 7 }}
        onClick={() => {
          deleteAllBoardElements(boardId);
          setBoardsList(getAllBoards());
        }}
      >
        <span>Delete Board</span>
      </Button>
    </Card>
  );
}

function AddInputComponent({ opened, setOpened, boardsList, setBoardsList }) {
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
            setBoardsList(getAllBoards());
          }}
        >
          Add
        </MUIButton>
      </div>
    </div>
  );
}

function EditInputComponent({
  editOpened,
  setEditOpened,
  boardsList,
  setBoardsList,
}) {
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
            setEditOpened(false);
            editBoard(inputRef);
            setBoardsList(getAllBoards());
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
  }
}

function editBoard(inputRef, boardId) {
  if (inputRef.current.value !== "") {
    let newBoardTitle = inputRef.current.value;
    let currentBoard = getBoardById(boardId);
    currentBoard.boardName = newBoardTitle;
    createBoard(currentBoard);
  }
}

function deleteAllBoardElements(boardId) {
  let columns = getAllColumnsByBoardId(boardId);
  let cards = [];
  columns.forEach((column) => {
    cards = cards.concat(getAllCardsByColumnId(column.columnId));
  });
  cards.forEach((card) => {
    deleteCard(card.cardId);
  });
  columns.forEach((column) => {
    deleteColumn(column.columnId);
  });
  deleteBoard(boardId);
}

export default BoardsPage;
