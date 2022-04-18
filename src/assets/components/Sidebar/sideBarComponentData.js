import React from "react";
import * as FaMaterialIcons from "react-icons/fa";
import LogoutIcon from "@mui/icons-material/Logout";
import WatchLaterIcon from "@mui/icons-material/WatchLater";

export const sidebarData = [
  {
    title: "Home",
    path: "/boards/",
    icon: <FaMaterialIcons.FaHome />,
    className: "nav-text",
  },
  {
    title: "Recents",
    path: "/recents/",
    icon: <WatchLaterIcon />,
    className: "nav-text",
  },
  {
    title: "Logout",
    path: "/logout/",
    icon: <LogoutIcon />,
    className: "nav-text",
  },
];
