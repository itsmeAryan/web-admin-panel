import {createSlice} from "@reduxjs/toolkit";

const ProductSlicer=createSlice({
    name:"product",
    initialState:{
        products:[],
        isFetching:false,
        err:false
    },
    reducers:{
        GetproductStart:(state)=>{state.isFetching=true},
        GetproductSuccess:(state,action)=>{
            state.isFetching=false;
            state.products=action.payload;
            state.err=''
        },
        Getproducterr:(state)=>{
            state.isFetching=false;
            state.err=true;
            state.products=[];
        },
        // delete
        DeleteproductStart:(state)=>{state.isFetching=true},
        DeleteproductSuccess:(state,action)=>{
            state.isFetching=false;
            state.products.splice(state.products.findIndex(item=>item._id===action.payload._id),1);
            state.err=''
        },
        Deleteproducterr:(state)=>{
            state.isFetching=false;
            state.err=true;
            state.products=[];
        },
        // create products
        CreateproductStart:(state)=>{state.isFetching=true},
        CreateproductSuccess:(state,action)=>{
            state.isFetching=false;
            state.products.push(action.payload);
            state.err=''
        },
        Createproducterr:(state)=>{
            state.isFetching=false;
            state.err=true;
            state.products=[];
        },
        // update
        UpdateproductStart:(state)=>{state.isFetching=true},
        UpdateproductSuccess:(state,action)=>{
            state.isFetching=false;
            state.products[state.products.findIndex(x=>x._id===action.payload._id)]=action.payload;
            state.err=''
        },
        Updateproducterr:(state)=>{
            state.isFetching=false;
            state.err=true;
            state.products=[];
        },

    }
});
export const {UpdateproductStart,UpdateproductSuccess,Updateproducterr,CreateproductStart,CreateproductSuccess,Createproducterr,GetproductStart,GetproductSuccess,Getproducterr,DeleteproductStart,DeleteproductSuccess,Deleteproducterr}=ProductSlicer.actions;
export default ProductSlicer.reducer