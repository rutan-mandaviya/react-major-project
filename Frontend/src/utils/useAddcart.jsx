import React from 'react'
import { asyncupdateuser } from '../store/actions/UserAction';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const useAddcart = () => {
const dispatch=useDispatch()
  const navigate=useNavigate()
    
const user = useSelector((state) => state.userReducer.user);

    const Addcarthandler=(item)=>{
  console.log(item);
  
  const copyuser={...user,cart:[...user.cart]};

  const x=copyuser.cart.findIndex((c)=>c?.item?.id==item.id)
  
  if(x==-1){
     copyuser.cart.push({item,Quntity:1})

  }
  else{
   copyuser.cart[x]={
    item:item,
    Quntity:copyuser.cart[x].Quntity + 1

   }
  }  
  dispatch(asyncupdateuser (copyuser.id,copyuser)) 
 navigate("/cart") 
 toast.success("Product Added Cart !");

}
  return {Addcarthandler}
}

export default useAddcart