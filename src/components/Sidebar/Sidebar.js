import React from "react";
import "./sidebar.css";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import TimelineIcon from "@mui/icons-material/Timeline";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import Diversity1Icon from "@mui/icons-material/Diversity1";
import SummarizeIcon from "@mui/icons-material/Summarize";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import ChatIcon from "@mui/icons-material/Chat";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className="sidebarListItem active">
                <HomeIcon className="sidebarIcon" />
                Home
              </li>
            </Link>
            <li className="sidebarListItem">
              <AutoGraphIcon className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <TimelineIcon className="sidebarIcon" />
              Gigs Revenue
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <PersonIcon className="sidebarIcon" />
                Users
              </li>
            </Link>
            <Link to="/gigs" className="link">
              <li className="sidebarListItem">
                <Diversity1Icon className="sidebarIcon" />
                Gigs
              </li>
            </Link>
            <li className="sidebarListItem">
              <AttachMoneyIcon className="sidebarIcon" />
              Transactions
            </li>
            <li className="sidebarListItem">
              <SummarizeIcon className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <MailOutlineIcon className="sidebarIcon" />
              Mail
            </li>
            <li className="sidebarListItem">
              <ChatIcon className="sidebarIcon" />
              Messages
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
