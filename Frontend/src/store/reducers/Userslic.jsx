

import { createSlice } from '@reduxjs/toolkit'
import React from 'react'


const initialState={
    user:null
}


const UsersSlice = createSlice({


    name:"user",
    initialState,
    reducers:{
        Loaduser:(state,action)=>{
            state.user=action.payload

        },
        removeuser:(state,action)=>{
            state.user=null
        }
    }
})


export default UsersSlice.reducer
export const {Loaduser,removeuser,removecartFromuser}=UsersSlice.actions