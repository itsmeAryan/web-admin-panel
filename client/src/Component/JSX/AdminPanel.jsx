import React from 'react';
import SideBar from './SideBar';
import ToolBar from './ToolBar';
import {Outlet} from "react-router-dom"
import "../../App.css"
const AdminPanel = () => {
   return <>
  <ToolBar/>
 <div className="container">
 <SideBar/>
 <Outlet/>
    
 </div>

  </>;
}


export default AdminPanel