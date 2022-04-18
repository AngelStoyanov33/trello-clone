import React from "react";
import * as FaMaterialIcons from "react-icons/fa";
import MonitorIcon from "@mui/icons-material/Monitor";
import MapIcon from "@mui/icons-material/Map";

export const sidebarData = [
  {
    title: "Home",
    path: "/dashboard/",
    icon: <FaMaterialIcons.FaHome />,
    className: "nav-text",
  },
  {
    title: "Recents",
    path: "/dashboard/grafana",
    icon: <MonitorIcon />,
    className: "nav-text",
  },
  {
    title: "Logout",
    path: "/dashboard/map",
    icon: <MapIcon />,
    className: "nav-text",
  },
];
