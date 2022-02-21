import React from 'react';
import "../Css/TopBar.css"
import {NotificationsNone,Settings,Language} from "@material-ui/icons"
import User from "./user.png"
function ToolBar() {
  return <div className='topbar'>
<div className="topbarWrapper">
    <div className="topleft">
        <span className="logo">Admin Panel</span>
    </div>
    <div className="topright">
        <div className="topbarIcons-container">
            <NotificationsNone/><span className="topiconBadge">
                2
            </span>
        </div>
      
        <div className="topbarIcons-container">
            <Language/><span className="topiconBadge">
            3
            </span>
        </div>
        <div className="topbarIcons-container">
            <Settings/>
        </div>
        <img src={User}alt="" className="topAvatar" />
    </div>
</div>
  </div>;
}

export default ToolBar;
