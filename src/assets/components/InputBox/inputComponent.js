import { Button, InputBase, Paper } from "@mui/material";
import React, { useRef } from "react";

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
        <Button
          onClick={() => {
            setOpened(false);
            addCard(inputRef);
          }}
        >
          Add
        </Button>
      </div>
    </div>
  );
}

function addCard(inputRef) {
  if (inputRef.current.value !== "") {
    console.log(inputRef.current.value);
  }
  console.log("Add a new card");
}
export default InputComponent;
