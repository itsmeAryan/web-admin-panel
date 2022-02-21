import React,{useState,useEffect} from 'react';
import "../Css/Update.css"
import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from "@material-ui/icons"
import User from "./i.jpg"
import {useSelector,useDispatch} from "react-redux"
import { Link ,useParams,useNavigate} from 'react-router-dom'
import {UpdateUser as UpdateProduct} from "../../Redux/ApiCall"
import {v4} from "uuid"
function Update() {
  const Nav=useNavigate();
  const {id}=useParams();
  const data=useSelector(state=>state.products.products.find(item=>item._id===id));
  const [file,setfile]=useState(data.img?data.img:'');
  const [user,setuser]=useState(data.user);
  const [email,setemail]=useState(data.email);
  const [password,setpassword]=useState(data.password);
  const [render,setrender]=useState(false);
  const Dis=useDispatch()
const UpdatePro=()=>{
 let obj={user,email};
 if(data.img!==file && file!==''){
   obj={...obj,img:file}
 }
 const uuid=v4();
 UpdateProduct(Dis,id,obj,uuid);
 setrender(!render)

}
  useEffect(()=>{
    if(data===undefined ){
      Nav("/dashboard/product")
    }
    console.log("helo ji")
  },[id,render]);
  return <div className='update'>
    <div className="userTitleContainer">
      <h1 className="userTitle">Edit User</h1>
      <Link to="/dashboard/users/create">
      <button className="addUserButton">Crete</button>

      </Link>
    </div>

    <div className="usercontainer">
      <div className="userShow">
        <div className="uperShowTops">
          <img src={data.img?data.img:User} alt="" className="usershwoimg" />
          <div className="usershowToptitle">
            <span className="usershowNamse">
              {data._id}
            </span>
            <span className="usershowTitles">
              {data.user}
            </span>
          </div>
        </div>
        <div className="uperShowBottoms">
          <span className="usershowinfoTitle">Account Details</span>
          <div className="usershowInfoContainer">
            <PermIdentity className='UserShowButtonIcon' />
            <span className="usershowinfoTitlssae">{data.user}</span>

          </div>
          <div className="usershowInfoContainer">
            <CalendarToday className='UserShowButtonIcon' />
            <span className="usershowinfoTitlssae">{data.createdAt}</span>

          </div>
          <span className="usershowinfoTitle">Contact Details</span>

          <div className="usershowInfoContainer">

            <PhoneAndroid className='UserShowButtonIcon' />
            <span className="usershowinfoTitlssae">91 7823782378</span>

          </div>

          <div className="usershowInfoContainer">
            <MailOutline className='UserShowButtonIcon' />
            <span className="usershowinfoTitlssae">{data.email}</span>

          </div>
          <div className="usershowInfoContainer">
            <LocationSearching className='UserShowButtonIcon' />
            <span className="usershowinfoTitlssae">fantasy club</span>

          </div>
        </div>
      </div>
      <div className="userUpdate">
        <span className="userUpdatetitle">Edit</span>
        <div className="userUpdateForm">
          <div className="userUpdateLeft">
            <div className="userUpdateItem">
              <label htmlFor="">Username</label>
              <input type="text" value={user} onChange={(e)=>{setuser(e.target.value)}} placeholder='enter ' className='userUpdateInput' />
            </div>
            <div className="userUpdateItem">
              <label htmlFor="">Email</label>
              <input type="text" value={email} onChange={(e)=>{setemail(e.target.value)}} placeholder='enter ' className='userUpdateInput' />
            </div>
            {/* <div className="userUpdateItem">
              <label htmlFor="">Password</label>
              <input type="text" value={password} onChange={(e)=>{setpassword(e.target.value)}} placeholder='enter ' className='userUpdateInput' />
            </div> */}
           
          </div>
          <div className="userUpdateRight">
            <div className="userUpdateUpload">
              <img src={data.img?data.img:User} className="UserUpdateImg" alt="" />
              <label htmlFor="file">
             <Publish className='userUpdateIconss'/> 
              </label>
              <input type="file" onChange={(e)=>{setfile(e.target.files[0]);
         }}   style={{display:"none"}} name='file' id='file' />
            </div>
            <button onClick={UpdatePro} className="userUpdateButton">Update</button>
          </div>

        </div>
      </div>
    </div>
  </div>;
}

export default Update;
