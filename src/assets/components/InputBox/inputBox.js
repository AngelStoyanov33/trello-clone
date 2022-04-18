import { Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import { Modal, Button, Group } from "@mantine/core";
import InputComponent from "./inputComponent";

function InputBox({ cards, setCards, columnId, type }) {
  const [opened, setOpened] = useState(false);
  return (
    <div>
      <Modal
        opened={opened}
        closeOnClickOutside={true}
        onClose={() => setOpened(false)}
        title="Enter the task title"
      >
        <InputComponent
          open={opened}
          setOpened={setOpened}
          cards={cards}
          setCards={setCards}
          columnId={columnId}
        />
      </Modal>
      <div onClick={() => setOpened(true)}>
        <Paper>
          <Typography>Add a new {type}</Typography>
        </Paper>
      </div>
    </div>
  );
}

export default InputBox;
