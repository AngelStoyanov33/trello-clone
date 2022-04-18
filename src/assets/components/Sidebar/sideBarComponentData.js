import React from "react";
import * as FaMaterialIcons from "react-icons/fa";
import MonitorIcon from "@mui/icons-material/Monitor";
import LogoutIcon from '@mui/icons-material/Logout';
import WatchLaterIcon from '@mui/icons-material/WatchLater';

export const sidebarData = [
  {
    title: "Home",
    path: "/dashboard/",
    icon: <FaMaterialIcons.FaHome />,
    className: "nav-text",
  },
  {
    title: "Recents",
    path: "/dashboard/",
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
