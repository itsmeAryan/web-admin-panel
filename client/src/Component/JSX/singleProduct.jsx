import React,{useState,useEffect,useMemo} from 'react'
import { Link ,useParams,useNavigate} from 'react-router-dom'
import "../Css/singleProduct.css"
import LineChart from './LineChart';
import {Product} from "./add"
import {Publish} from "@material-ui/icons"
import {UpdateProduct} from "../../Redux/ApiCall"
// import {RequestWithToken} from "../Axios"
import {useDispatch, useSelector} from "react-redux"
import { v4 } from 'uuid';
const SingleProduct = () => {
  const Nav=useNavigate();
  const {id}=useParams();
  const data=useSelector(state=>state.products.products.find(item=>item._id===id));
  const [file,setfile]=useState(data.img);
  const [title,settitle]=useState(data.title);
  const [desc,setdesc]=useState(data.desc);
  const [price,setprice]=useState(data.price);
  const [Stock,setStock]=useState(data.instock);
  const [render,setrender]=useState(false);
  const Dis=useDispatch()
const UpdatePro=()=>{
  let obj;
  if(file!==data.img){
    obj={
      title,desc,price,instock:Stock,img:file
    }
  }else{
    obj={
      title,desc,price,instock:Stock
    }
  }

 
  const ui=v4()
  UpdateProduct(Dis,id,obj,ui)
  setrender(!render)

}
  useEffect(()=>{
    if(data===undefined ){
      Nav("/dashboard/product")
    }
  },[id,render]);
  return  <div className='singleProduct'>
    <div className="productTitlecontainer">
      <h1 className="productTitle">Product</h1>
      <Link to="/dashboard/product/newproduct">
      <button className="productBtn">Create</button>
      </Link>
      
    </div>
    <div className="productTop">
      <div className="producttopleft">
<LineChart title={"Products"} data={Product}  datakey={"stock"}/>

      </div>
      <div className="producttopright">
        <div className="productInfoTop">
          <img src={data.img} alt="" className="productinoimg" />
          <span className="productingoname">{data.title}</span>
        </div>
        <div className="productInfoBottom">
          <div className="productinfoitem">
            <span className="producinfokey">Id:</span>
            <span className="producinfovalue">{data._id} </span>

          </div>
         
          <div className="productinfoitem">
            <span className="producinfokey">Price:</span>
            <span className="producinfovalue">{data.price}</span>

          </div>
          <div className="productinfoitem">
            <span className="producinfokey">in stock:</span>
            <span className="producinfovalue">{data.instock?"yes":"no"}</span>

          </div>
        </div>
      </div>

    </div>
    <div className="productBottom">
      <div className="ProductForm">
        <div className="productForleft">
          <label htmlFor="">Product name</label>
          <input type="text" value={title} onChange={(e)=>{settitle(e.target.value)}} placeholder='enter product name' />
          <label htmlFor="">Product description</label>
          <input type="text" value={desc} onChange={(e)=>{setdesc(e.target.value)}} placeholder='enter product name' />
          <label htmlFor="">Product Pirce</label>
          <input type="text" value={price} onChange={(e)=>{setprice(e.target.value)}} placeholder='enter product name' />
          <label htmlFor="">in stock</label>
          <select name="stock"value={Stock} onChange={(e)=>{setStock(e.target.value==='true'?true:false)}} id="stock">
            <option value={true}>yes</option>
            <option value={false}>no</option>

          </select>
        </div>
        <div className="productForright">
          <div className="productupload">
            <img src={data.img} alt="" className="productimgUploader" />
            <label htmlFor="file">
            <Publish/>
          </label>
          <input type="file" name="file"onChange={(e)=>{setfile(e.target.files[0]);
         }} id="file" style={{display:"none"}} />
          </div>
       <button onClick={UpdatePro} className="productUploadbtn">Update</button>
        </div>
        
      </div>
    </div>
    </div>
  
}

export default SingleProduct