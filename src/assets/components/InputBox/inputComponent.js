import { Button, InputBase, Paper } from "@mui/material";
import React, { useRef } from "react";
import {
  createCard,
  getAllCardsByColumnId,
} from "../../../service/cardService";
import { getUserFromLocalStorage } from "../../../service/userService";
import moment from "moment";

function InputComponent({ opened, setOpened, cards, setCards, columnId }) {
  const titleInputRef = useRef(null);
  const descriptionInputRef = useRef(null);
  return (
    <div>
      <div>
        <Paper>
          <h3>Enter task title</h3>
          <InputBase fullWidth multiline inputRef={titleInputRef} />
          <br />
          <h3>Enter task descripion</h3>
          <InputBase fullWidth multiline inputRef={descriptionInputRef} />
        </Paper>
      </div>
      <br></br>
      <div>
        <Button
          onClick={() => {
            setOpened(false);
            addCard(titleInputRef, descriptionInputRef, columnId);
            setCards(getAllCardsByColumnId(columnId));
          }}
        >
          Add
        </Button>
      </div>
    </div>
  );
}

function addCard(titleInputRef, descriptionInputRef, columnId) {
  if (
    titleInputRef.current.value !== "" &&
    descriptionInputRef.current.value !== ""
  ) {
    let cardTitle = titleInputRef.current.value;
    let cardDescription = descriptionInputRef.current.value;
    let user = getUserFromLocalStorage();
    let card = {
      cardName: cardTitle,
      columnId: columnId,
      ownerId: user.userId,
      description: cardDescription,
      creationDate: moment().format("DD-MM-YYYY hh:mm:ss"),
    };
    createCard(card);
  }
  console.log("Add a new task");
}
export default InputComponent;
