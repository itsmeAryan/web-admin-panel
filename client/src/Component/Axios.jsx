import axios from "axios";
const Base_Url="http://localhost:3001/api/";


const getcookie=()=>{
    if(JSON.parse(localStorage.getItem("persist:root"))){
        if(JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)){
            return (JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currntUser)==null?"no token":JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currntUser.token;
        }
    }
}

const Token=getcookie();

export const PublicRequest=axios.create({
    baseURL:Base_Url
});
export const RequestWithToken=axios.create({
    baseURL:Base_Url,
    headers:{
        "Content-Type":"application/json",
        token:`Bearer ${Token}`
    }
});