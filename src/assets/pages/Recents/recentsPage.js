import "./recentsPage.css";
import { appTheme } from "../../themes/appThemes.js";
import { ThemeProvider } from "@mui/material/styles";
import Sidebar from "../../components/Sidebar/sideBarComponent";
import React from "react";
import { Card, Image, Text, Badge, Button, Group, useMantineTheme } from '@mantine/core';

import {sortCardsByTimestamp} from '../../../service/cardService';
import {getUserById} from '../../../service/userService';
import {getBoardById} from '../../../service/boardService';
import {getColumnById} from '../../../service/columnService';

function RecentsPage(props) {

  let cards = sortCardsByTimestamp();

  const content = (
    <React.Fragment>
      <div className="boards">
        <h2>Recently added tasks - showing 10</h2>
        <div className="bg1">
          {cards.map((card) => {
            return (
              <RecentsCard
                title={card.cardName}
                ownerName={getUserById(card.ownerId).userName}
                ownerColor={getUserById(card.ownerId).userColor}
                columnName={getColumnById(card.columnId).columnName}
                boardName={getBoardById(getColumnById(card.columnId).boardId).boardName}
                createdDate={card.creationDate}
              />
            );
          })}
        {/* <RecentsCard title="test" text="tesdtt"/>
        <RecentsCard title="test" text="tesdtt"/>
        <RecentsCard title="test" text="tesdtt"/>
        <RecentsCard title="test" text="tesdtt"/> */}
        
        </div></div>
    </React.Fragment>
  );
  return (
    <ThemeProvider theme={appTheme}>
      <Sidebar content={content} />
    </ThemeProvider>
  );
}

function RecentsCard(props) {
  const theme = useMantineTheme();

  return (
    <div style={{ width: 340, margin: '5px' }}>
      <Card shadow="sm" p="lg">

          <Text weight={500}>{props.title}</Text>
          <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
          <Badge color="pink" variant="filled">
            Task
          </Badge>
          <Badge color="red" variant="outline">
            {props.createdDate}
          </Badge>
          <Badge color={props.ownerColor} variant="light">
          {props.ownerName}
          </Badge>
          <Badge color="pink" variant="light">
            {props.boardName} -> {props.columnName}
          </Badge>
          </Group>
      </Card>
    </div>
  );
}

export default RecentsPage;