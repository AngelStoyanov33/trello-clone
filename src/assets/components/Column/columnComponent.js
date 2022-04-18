import React, { useState } from "react";
import { Paper, Typography } from "@mui/material";
import Card from "../Card/card.js";
import "./columnComponent.css";
import InputBox from "../InputBox/inputBox.js";
import { getAllCardsByColumnId } from "../../../service/cardService";

function ColumnTitle(props) {
  return (
    <div>
      <Typography> {props.title} </Typography>
    </div>
  );
}

function Column(props) {
  const [boardId, setBoardId] = useState(props.boardId);
  const [columnId, setColumnId] = useState(props.columnId);
  const [cards, setCards] = useState(getAllCardsByColumnId(columnId));

  //let cards = getAllCardsByColumnId(columnId);

  return (
    <div>
      <Paper variant="main">
        <ColumnTitle title={props.title} />
        {cards.map((card) => {
          return (
            <Card
              content={card.cardName}
              columnId={columnId}
              boardId={boardId}
              card={card}
            />
          );
        })}

        <InputBox
          type="task"
          columnId={columnId}
          cards={cards}
          setCards={setCards}
        />
      </Paper>
    </div>
  );
}

export default Column;
