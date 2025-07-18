

import { createSlice } from '@reduxjs/toolkit'


const initialState={
    carts:[]
}


const CartsSlice = createSlice({

    name:"cart",
    initialState,
    reducer:{
        Loadcart:(state,action)=>{
            state.carts=action.payload

        }
    }
})


export default CartsSlice.reducer
export const {Loadcart} = CartsSlice.actions