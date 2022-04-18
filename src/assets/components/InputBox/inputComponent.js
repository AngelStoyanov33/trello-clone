import { Button, InputBase, Paper } from "@mui/material";
import React, { useRef } from "react";
import {
  createCard,
  getAllCardsByColumnId,
} from "../../../service/cardService";
import { getUserFromLocalStorage } from "../../../service/userService";
import moment from "moment";

function InputComponent({ opened, setOpened, cards, setCards, columnId }) {
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
            addCard(inputRef, columnId);
            setCards(getAllCardsByColumnId(columnId));
          }}
        >
          Add
        </Button>
      </div>
    </div>
  );
}

function addCard(inputRef, columnId) {
  if (inputRef.current.value !== "") {
    let cardTitle = inputRef.current.value;
    let user = getUserFromLocalStorage();
    let card = {
      cardName: cardTitle,
      columnId: columnId,
      ownerId: user.userId,
      creationDate: moment().format("DD-MM-YYYY hh:mm:ss"),
    };
    createCard(card);
  }
  console.log("Add a new task");
}
export default InputComponent;
