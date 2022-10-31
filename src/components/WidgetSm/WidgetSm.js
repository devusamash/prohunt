import React from "react";
import "./widgetsm.css";
import dummyavatar from "../../assets/images/dummyavatar.png";
import VisibilityIcon from "@mui/icons-material/Visibility";

const WidgetSm = () => {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Memebers</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img src={dummyavatar} className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUserName">Usama Bhatti</span>
            <span className="widgetSmUserTitle">Web Developer</span>
          </div>
          <button className="widgetSmButton">
            <VisibilityIcon className="widgetSmButtonIcon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
};

export default WidgetSm;
