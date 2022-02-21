import React,{useEffect} from 'react';
import Home from "./Component/JSX/Home"
import { Routes as Switcher, Route ,Navigate} from "react-router-dom"
import CreateProduct from "./Component/JSX/CreateProduct"
import SingleProduct from "./Component/JSX/singleProduct"
import "./App.css"
import UserList from './Component/JSX/UserList';
import Update from './Component/JSX/Update';
import CreateUser from './Component/JSX/CreateUser';
import PRoducts from './Component/JSX/PRoducts';
import AdminPanel from './Component/JSX/AdminPanel';
import {useCookies} from "react-cookie"
import Login from "./Component/Login"
import SignUp from "./Component/SignUp"
import Errorsa from "./Component/Error"
import {useSelector} from "react-redux"
function App() {
    const [cookie,setCookie]=useCookies();
    const admin=useSelector(state=>state.user.currntUser);
    useEffect(()=>{
        if(admin){
            if(!cookie.ui_token && admin.token){
                setCookie("ui_token",admin.token,{maxAge:1000*60*60*24,secure:true});
            }
        }
    },[cookie])
  
    return <>
        <Switcher>
            <Route path="/" element={admin!==null&& admin.isAdmin?<Navigate to="/dashboard"/>:<SignUp/>}/>
            <Route path="/login" element={admin!==null&& admin.isAdmin?<Navigate to="/dashboard"/>:<Login/>}/>
            {admin!==null&& admin.isAdmin&&
            <Route path="/dashboard" element={<AdminPanel />}>
            <Route index element={<Home />} />
            <Route path='users' element={<UserList />} />
            <Route path='users/edit/:id' element={<Update />} />
            <Route path='users/create' element={<CreateUser />} />
            <Route path='product' element={<PRoducts />} />
            <Route path='product/:id' element={<SingleProduct />} />
            <Route path='product/newproduct' element={<CreateProduct />} />
        </Route>}
            <Route path="*" element={<Errorsa/>}/>
        </Switcher>
    </>;
}
export default App;