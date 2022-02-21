import React, { useState,useEffect } from 'react';
import "../Css/FeaturedInfo.css"
import {ArrowDownward, ArrowUpward} from "@material-ui/icons"
import {RequestWithToken} from "../Axios"
function FeaturedInfo() {
    const [income,Setincome]=useState([]);
    const [perc,Setperc]=useState(0);

    useEffect(()=>{
        const fetch=async()=>{
try {
    const {data}=await RequestWithToken.get("/order/income");
   Setincome(data);
  Setperc( (data[1].total * 100) / data[0].total - 100);
  console.log(data);
} catch (error) {
    
}
        }
        fetch();
    },[]);
  return <div className='featured'>
      <div className="featuredItem">
          <span className="featuredTitle">Revanue</span>
          <div className="featuredMoneyContainer">
              <span className="featuredMoney">
                  ${income&&income.length>0?income[0].total:0}
              </span>
              <span className="featuredMoneyRate">
                 {Math.floor(perc)}%
                 {perc<0?<ArrowDownward className='featuredIcon negative'/>:<ArrowUpward className='featuredIcon'/>}
              </span>
          </div>
        <span className="featuredSub">Compare to last month</span>
      </div>
      <div className="featuredItem">
          <span className="featuredTitle">Sales</span>
          <div className="featuredMoneyContainer">
              <span className="featuredMoney">
                  $3,393
              </span>
              <span className="featuredMoneyRate">
                 -38
                 <ArrowUpward className='featuredIcon'/>
              </span>
          </div>
        <span className="featuredSub">Compare to last month</span>
      </div>
      <div className="featuredItem">
          <span className="featuredTitle">Cost</span>
          <div className="featuredMoneyContainer">
              <span className="featuredMoney">
                  $3,393
              </span>
              <span className="featuredMoneyRate">
                 -38
                 <ArrowDownward className='featuredIcon negative'/>
              </span>
          </div>
        <span className="featuredSub">Compare to last month</span>
      </div>
  </div>;
}

export default FeaturedInfo;
