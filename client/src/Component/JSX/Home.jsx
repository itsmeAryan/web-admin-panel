import React,{useState,useEffect,useMemo} from 'react';
import "../Css/Home.css"
import FeaturedInfo from './FeaturedInfo';
import LineChart from './LineChart';
import WidgetLg from './WidgetLg';
import WidgetSm from './WidgetSm';
import {Linedata} from "./add"
import {RequestWithToken} from "../Axios"
function Home() {
  const [stats,setstats]=useState([]);
   const Months=useMemo(()=>["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","sep","Oct","Nov","Dec"],[])

  useEffect(()=>{
    const fetch=async()=>{
      try {
        const {data}=await RequestWithToken.get("/user/stats");
      data.map(x=>{
        setstats((prev)=>[
          ...prev,
          {name:Months[x._id-1],Active_Users:x.total}
        ])
      })
      } catch (error) {
      }
    };
    fetch();
  },[Months]);
  return <div className='home'>
<FeaturedInfo/>
<LineChart title={"User Analystics"} data={stats} grid={'name'} datakey={"Active_Users"}/>
<div className="homeWidget">
<WidgetSm/>

  <WidgetLg/>
</div>
  </div>;
}

export default Home;
