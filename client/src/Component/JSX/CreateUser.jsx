import React from 'react';
import "../Css/CreateUser.css"
import {useDispatch, useSelector} from "react-redux";
import {UserImageUploader as ImageUploader} from "../../Redux/ApiCall"
import { useState } from 'react';
import {v4} from "uuid"
function CreateUser() {
    const Dis=useDispatch();
    const [title,settitle]=useState('');
    const [desc,setdesc]=useState('');
    const [img,setimg]=useState();
    const [price,setprice]=useState('0');
    const [instock,setstock]=useState(true);
    const [size,setsize]=useState('xl');
    const [categories,setcategories]=useState('men');
    const [color,setcolor]=useState('black');
const {isFetching}=useSelector(state=>state.products);
    const HanldeCreate=()=>{
        const obj={
            title,desc,price,instock:instock==='true'?true:false,size,categories,color
        }
        const uid=v4();
     ImageUploader(Dis,obj,uid,img);
    }
  return <div className='newUser'>
      <h1 className="newUserTitle">New USer</h1>
         <div className="newUserForm">
             <div className="newUserItem">
                 <label htmlFor="">Username</label>
                 <input type={"text"} placeholder="enter" className='newUserInput'  />

             </div>
             <div className="newUserItem">
                 <label htmlFor="">Email</label>
                 <input type={"email"} placeholder="enter" className='newUserInput'  />
                 
             </div>
             <div className="newUserItem">
                 <label htmlFor="">Password</label>
                 <input type={"text"} placeholder="enter" className='newUserInput'  />
                 
             </div>
             <div className="newUserItem">
                 <label htmlFor="">Phone</label>
                 <input type={"text"} placeholder="enter" className='newUserInput'  />
                 
             </div>
             <div className="newUserItem">
                 <label htmlFor="">Address</label>
                 <input type={"text"} placeholder="enter" className='newUserInput'  />
                 
             </div>
             <div className="newUserItem">
                 <label htmlFor="">
                     Gender
                 </label>
               <div className="newUserGender">
               <input type={"radio"} name="gender" id='male' value={"male"} className='newUserInput'  />
                 <label htmlFor="male">Male</label>
                 <input type={"radio"} name="gender" id='female' value={"female"} className='newUserInput'  />
                 <label htmlFor="female">female</label>
                 <input type={"radio"} name="gender" id='other' value={"other"} className='newUserInput'  />
                 <label htmlFor="other">other</label>
               </div>
             </div>
         </div>
         <button className="newUserButton">Create</button>

  </div>;
}

export default CreateUser;
