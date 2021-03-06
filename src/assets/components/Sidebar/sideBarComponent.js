import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { ThemeProvider } from "@mui/material/styles";
import { sidebarData } from "./sideBarComponentData";
import { Link } from "react-router-dom";
import "./sideBarComponent.css";
import logo from "../../../logo.png";
import { animations } from "react-animation";
const drawerWidth = 240;

export const dashboardBoxStyle = {
  background: "linear-gradient(to right,red)",
  borderColor: "text.primary",
  m: 1,
  border: 0,
  width: "100wh",
  display: "flex",
  alignItems: "stretch",
  flexWrap: "wrap",
  justifyContent: "center",
  flexGrow: "1",
  flexBasis: "auto",
  minHeight: "auto",
};

function Sidebar(props) {
  return (
    <Box
      sx={{
        display: "flex",
        background: "linear-gradient(to left, #861657,#ffa69e)",
      }}
    >
      <CssBaseline />

      <AppBar
        position="fixed"
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,
        }}
      >
        <Toolbar></Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <img src={logo} alt="logo" style={{ animation: animations.pulse }} />
        <Divider />


        <List>
          {sidebarData.map((item, index) => {
            return (
              <ListItem button key={index} className={item.className}>
                <Link to={item.path}>
                  {item.icon}
                  <span className="nav-text">{item.title}</span>
                </Link>
              </ListItem>
            );
          })}
        </List>
        <Divider />
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
        }}
      >
        <Toolbar />
        <Box sx={{ ...dashboardBoxStyle, borderRadius: "16px" }}>
          {props.content}
        </Box>
      </Box>
    </Box>
  );
}
export default Sidebar;
