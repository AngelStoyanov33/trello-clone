import React, { useState, useRef } from "react";
import "./dashboardPage.css";
import { appTheme } from "../../themes/appThemes.js";
import { ThemeProvider } from "@mui/material/styles";
import { Button } from "@mui/material";
import { logoutCurrentUser } from "../../../service/userService.js";
import Column from "../../components/Column/columnComponent";
import Sidebar from "../../components/Sidebar/sideBarComponent";
import { Paper, InputBase } from "@mui/material";
import uuid from "react-uuid";
import moment from "moment";

import {
  Card,
  Text,
  Badge,
  Button as MantineButton,
  Group,
  useMantineTheme,
  Modal,
} from "@mantine/core";
import { getBoardById } from "../../../service/boardService";
import { getUserFromLocalStorage } from "../../../service/userService";
import {
  createColumn,
  getAllColumnsByBoardId,
} from "../../../service/columnService";

function DashboardPage(props) {
  const [boardId, setBoardId] = useState(props.match.params.id);
  const [opened, setOpened] = useState(false);

  let board = getBoardById(boardId);
  let columns = getAllColumnsByBoardId(boardId);
  const content = (
    <React.Fragment>
      <div className="boards">
        <h2>{board.boardName}</h2>

        <Modal
          opened={opened}
          closeOnClickOutside={true}
          onClose={() => setOpened(false)}
          title="Enter the column title"
        >
          <InputComponent
            open={opened}
            setOpened={setOpened}
            boardId={boardId}
          />
        </Modal>

        <div className="bg">
          {columns.map((column) => {
            console.log(column);
            return (
              <Column
                title={column.columnName}
                columnId={column.columnId}
                boardId={boardId}
              />
            );
          })}
        </div>
        <MantineButton
          variant="light"
          color="red"
          fullWidth
          style={{ marginTop: 14 }}
          onClick={() => setOpened(true)}
        >
          Add new column
        </MantineButton>
      </div>
    </React.Fragment>
  );
  return (
    <ThemeProvider theme={appTheme}>
      <Sidebar content={content} />
    </ThemeProvider>
  );
}

function InputComponent({ opened, setOpened, boardId }) {
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
        <Button
          onClick={() => {
            setOpened(false);
            addNewColumn(inputRef, boardId);
          }}
        >
          Add
        </Button>
      </div>
    </div>
  );
}

function addNewColumn(inputRef, boardId) {
  if (inputRef.current.value !== "") {
    let columnTitle = inputRef.current.value;
    let user = getUserFromLocalStorage();
    let column = {
      columnName: columnTitle,
      boardId: boardId,
      ownerId: user.userId,
      columnId: uuid(),
      creationDate: moment().format("DD-MM-YYYY hh:mm:ss"),
    };
    createColumn(column);
    //setBoardsList(getAllBoards());
  }
}

export default DashboardPage;
