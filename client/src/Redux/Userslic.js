import {createSlice} from "@reduxjs/toolkit";

const USerSlice=createSlice({
    name:"user",
    initialState:{
        currntUser:null,
        isFetching:false,
        err:false
    },
    reducers:{
        loginstart:(state)=>{state.isFetching=true},
        loginSuccessful:(state,action)=>{
            state.isFetching=false;
            state.currntUser=action.payload;
            state.err=''
        },
        loginFailure:(state)=>{
            state.isFetching=false;
            state.err=true;
            state.currntUser=null;
        }

    }
});
export const {loginstart,loginSuccessful,loginFailure}=USerSlice.actions;
export default USerSlice.reducer