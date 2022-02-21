import React from 'react';
import "../Css/CreateProduct.css"
import "../Css/CreateUser.css"
import {useDispatch, useSelector} from "react-redux";
import {ImageUploader} from "../../Redux/ApiCall"
import { useState } from 'react';
import {v4} from "uuid"
const CreateProduct = () => {
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

  return (
    <div className='CreateProduct'>
      <h1 className="newUserTitle">New Product</h1>

 <div className="newUserForm">
             <div className="newUserItem">
                 <label htmlFor="">Img</label>
                 <input type={"file"} accept="image/*"   onChange={(e)=>{
                     console.log(e.target.files);
                     setimg(e.target.files[0])}} placeholder="enter" className='newUserInput'  />

             </div>
             <div className="newUserItem">
                 <label htmlFor="">Product Name</label>
                 <input type={"text"} value={title} onChange={(e)=>{settitle(e.target.value)}} placeholder="enter name" className='newUserInput'  />
                 
             </div>
             <div className="newUserItem">
                 <label htmlFor="">Product Description</label>
                 <input type={"text"} value={desc} onChange={(e)=>{setdesc(e.target.value)}} placeholder="enter description" className='newUserInput'  />
                 
             </div>
             <div className="newUserItem">
                 <label htmlFor="">Product price</label>
                 <input type={"text"} value={price} onChange={(e)=>{setprice(e.target.value)}} placeholder="enter price" className='newUserInput'  />
                 
             </div>

            
             <div className="newUserItem">
                 <label htmlFor="">In Stock</label>
                 <select name="stock" value={instock} onChange={(e)=>{setstock(e.target.value==='true'?true:false)}} id="stock" className='newUserSelect'>
                     <option value={true}>yes</option>
                     <option value={false}>no</option>
                 </select>
             </div>

             <div className="newUserItem">
                 <label htmlFor="">Size</label>
                 <select name="size" value={size} onChange={(e)=>{setsize(e.target.value)}} onChange={(e)=>{setimg(e.target.value)}} id="size" className='newUserSelect'>
                    <option value="xl">xl</option>
                    <option value="l">l</option>
                    <option value="m">m</option>
                    <option value="sm">sm</option>
                    <option value="xs">xs</option>
xl
                 </select>
             </div>
             <div className="newUserItem">
                 <label htmlFor="">Categoriesr</label>
                 <select name="categories" value={categories} onChange={(e)=>{setcategories(e.target.value)}} id="categories" className='newUserSelect'>
                     <option value="men">men</option>
                     <option value="women">women</option>
                     <option value="trending">trending</option>
                     <option value="girls">girls</option>
                     <option value="super deals">super deals</option>
                     <option value="festival offer">festival offer</option>
                     <option value="pro discount">pro discount</option>
men
                 </select>
             </div>
             <div className="newUserItem">
                 <label htmlFor="">Color</label>
                 <select name="color" value={color} onChange={(e)=>{setcolor(e.target.value)}} id="color" className='newUserSelect'>
                     <option value="black">black</option>
                     <option value="red">red</option>
                     <option value="blue">blue</option>
                     <option value="yellow">yellow</option>
                     <option value="white">white</option>
                     <option value="green">green</option>
                     <option value="pink">pink</option>
                     <option value="grey">grey</option>
                     <option value="light blue">light blue</option>
                 </select>
             </div>
         </div>
         <button className="newUserButton" disabled={isFetching?true:false}  onClick={HanldeCreate}>Create</button>


    </div>
  )
}

export default CreateProduct