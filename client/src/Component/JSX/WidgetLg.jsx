import React,{useEffect,useState} from 'react';
import "../Css/WidgetLg.css"
import {RequestWithToken} from "../Axios"
import {format} from "timeago.js"

import User from "./i.jpg"
function WidgetLg() {
  const [UserData,setUserdat]=useState([]);
  useEffect(()=>{
      const fetch=async()=>{
          const {data}=await RequestWithToken.get(`/order/all`);
          setUserdat(data);
         
      }
      fetch()
  },[])
  const Button=({type})=>{
return <button className={'widgetLgButton '+ type}>{type}</button>
  }
  return <div className='widgteLg'>
    <h3 className="widgetLgTitle">
      LAstest Transections
    </h3>
    <table className="widgetLgTable">
      <tr className="widgetLgTr">
        <th className="widgetLgTh">customer</th>
        <th className="widgetLgTh">Date</th>
        <th className="widgetLgTh">amount</th>
        <th className="widgetLgTh">status</th>

      </tr>
      {UserData.length>0?UserData.map(x=>(
  <tr className="widgetLgTr" key={x._id}>
  <td className="widgetLgUser">
<span className="widgetLgName">{x._id}</span>
</td>
<td className="widgetLgDate">{format(x.createdAt)}</td>
<td className="widgetLgAmt">$ {x.amount}</td>
<td className="widgetLgDate"><Button type={x.Status} /></td>


</tr> 
      )):<h1>no data found yet</h1>}
    
      
     
      {/* <tr className="widgetLgTr">
        <td className="widgetLgUser">
        <img src={User} alt="" style={{ width: "40px", height: "40px", borderRadius: "50%" }} className="widgetLgImg" />
      <span className="widgetLgName">devinoma</span>
      </td>
      <td className="widgetLgDate">12 jun 2021</td>
      <td className="widgetLgAmt">$ 200</td>
      <td className="widgetLgDate"><Button type={"Pending"} /></td>


      </tr> */}
    </table>

  </div>;
}

export default WidgetLg;
