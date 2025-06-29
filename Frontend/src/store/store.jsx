import { configureStore } from '@reduxjs/toolkit'
import Userslice from "./reducers/Userslic"
import Productsslic from "./reducers/Produtsslic"
import CartsSlice from "./reducers/CartsSlice"
export const store = configureStore({
  reducer: {
    userReducer:Userslice,
    productsReducer:Productsslic,
    cartsReducer:CartsSlice,

  },
})