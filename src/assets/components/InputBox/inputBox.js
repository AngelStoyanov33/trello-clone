import { Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import { Modal, Button, Group } from "@mantine/core";
import InputComponent from "./inputComponent";

function InputBox(props) {
  const [opened, setOpened] = useState(false);
  return (
    <div>
      <Modal
        opened={opened}
        closeOnClickOutside={true}
        onClose={() => setOpened(false)}
        title="Enter the card title"
      >
        <InputComponent open={opened} setOpened={setOpened} />
      </Modal>
      <div onClick={() => setOpened(true)}>
        <Paper>
          <Typography>Add a new {props.type}</Typography>
        </Paper>
      </div>
    </div>
  );
}

export default InputBox;
