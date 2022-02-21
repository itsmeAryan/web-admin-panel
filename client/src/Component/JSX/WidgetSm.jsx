import React,{useEffect,useState} from 'react';
import User from "./i.jpg"
import {Visibility} from  "@material-ui/icons"
import "../Css/WidgetSm.css"
import {RequestWithToken} from "../Axios"
function WidgetSm() {
    const [UserData,setUserdat]=useState([]);
    useEffect(()=>{
        const fetch=async()=>{
            const {data}=await RequestWithToken.get(`/user/all/?new=${true}`);
            setUserdat(data);
        }
        fetch()
    },[])
  return <div className='widgteSm'>
      <span className="widgetSmTitle">New join members</span>
      <ul className="widgetSmList">
          {UserData.length>0?UserData.map(x=>(
              <li className="widgteSmListItm" key={x._id}>
              <img src={User} alt="" className="widgetSmImg" />
              <div className="widgetSmUSer">
                  <span className="widgetSmUSerNAme">
                      {x.user}
                  </span>
                  <span className="widgetSmUSerTitle">
                     {x.email}
                  </span>

              </div>
              <button className="widgetSmButton">
                  <Visibility className='widgetSmIcon'/>
                  display
              </button>
          </li>
          )):<h1>no data</h1>}
          {/* <li className="widgteSmListItm">
              <img src={User} alt="" className="widgetSmImg" />
              <div className="widgetSmUSer">
                  <span className="widgetSmUSerNAme">
                      devika
                  </span>
                  <span className="widgetSmUSerTitle">
                      Wevb Developer
                  </span>

              </div>
              <button className="widgetSmButton">
                  <Visibility className='widgetSmIcon'/>
                  display
              </button>
          </li> */}
       
      </ul>
  </div>;
}

export default WidgetSm;
