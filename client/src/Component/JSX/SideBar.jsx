import React from 'react';
import "../Css/SideBar.css"
import { Link,useNavigate } from 'react-router-dom';
import {useCookies} from "react-cookie"
import { LineStyle, Timeline, Report ,TrendingUp,PersonOutline,ShopOutlined, AttachMoney, BarChart, Mail, Feedback, Message, WorkOutline } from "@material-ui/icons"
function SideBar() {
  const Navi=useNavigate()
  const [cookie,setcookie]=useCookies()
  const H=()=>{
    localStorage.clear();
    Navi("/")
    setcookie("ui_token",'',{maxAge:10});
  }
  return <div className='sidebar'>
    <div className="sidebarWrapper">
      <div className="sidebarMenu">
        <h3 className="sidebarTitle">
          dashboard
        </h3>
        <ul className="sidebarList">
          <Link to="/dashboard">
          <li className="sidebarListItem active">
            <LineStyle className='sidebarIcons' />
            Home
          </li>
          </Link>
         <Link to="/dashboard/analysis">
         <li className="sidebarListItem">
            <Timeline className='sidebarIcons'/>
            Anaylitics
          </li></Link>
         <Link to="/dashboard/sale">
         <li className="sidebarListItem">
            <TrendingUp className='sidebarIcons'/>
            Sales
          </li>
         </Link>

        </ul>
      </div>
      <div className="sidebarMenu">
        <h3 className="sidebarTitle">
          Quick Menu
        </h3>
        <ul className="sidebarList">
          <Link to="/dashboard/users">
          <li className="sidebarListItem ">
            <PersonOutline className='sidebarIcons' />
            User
          </li>
          </Link>
          <Link to="/dashboard/product">
          <li className="sidebarListItem">
            < ShopOutlined className='sidebarIcons' />
           Product
          </li>
          </Link>
         <li className="sidebarListItem" onClick={H}>
            <AttachMoney className='sidebarIcons'/>
            Logout
          </li>
          <Link to="/dashboard/report">
          <li className="sidebarListItem">
           < BarChart className='sidebarIcons'/>
Report
          </li>
          </Link>
        </ul>
      </div>
      <div className="sidebarMenu">
        <h3 className="sidebarTitle">
          Notifications
        </h3>
        <ul className="sidebarList">
         <Link to="/dashboard">
         <li className="sidebarListItem ">
            <Mail className='sidebarIcons' />
            Mail
          </li></Link>
          <Link to="/dashboard">
          <li className="sidebarListItem">
            <Feedback className='sidebarIcons'/>
            Feedback
          </li></Link>
          <Link to="/dashboard">
          <li className="sidebarListItem">
            <Message className='sidebarIcons'/>
            Sales
          </li></Link>

        </ul>
      </div><div className="sidebarMenu">
        <h3 className="sidebarTitle">
          Staff
        </h3>
        <ul className="sidebarList">
          <li className="sidebarListItem ">
            <WorkOutline className='sidebarIcons' />
            Home
          </li>
          <li className="sidebarListItem">
            <Timeline className='sidebarIcons'/>
            Anaylitics
          </li>
          <li className="sidebarListItem">
           < Report className='sidebarIcons'/>
Report
          </li>

        </ul>
      </div>
    </div>
  </div>;
}

export default SideBar;
