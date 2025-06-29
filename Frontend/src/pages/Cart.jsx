import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { asyncupdateuser } from '../store/actions/UserAction';
import DataNotFound from './DataNotFound';

const Cart = () => {
  const dispatch=useDispatch()
  const Product = useSelector((state) => state.productsReducer.Product);
const user = useSelector((state) => state.userReducer.user);


const IncreaseQuantity=(item,index)=>{
  const copyuser={...user,cart:[...user.cart]};
  copyuser.cart[index]={...copyuser.cart[index],Quntity:copyuser.cart[index].Quntity + 1}
  console.log(copyuser);
  
  dispatch(asyncupdateuser(copyuser.id,copyuser)) 
}

const  DecreaseQuantity=(item,index)=>{
  const copyuser={...user,cart:[...user.cart]};
  
  if(user.cart[index].Quntity>1){
    copyuser.cart[index]={...copyuser.cart[index],Quntity:copyuser.cart[index].Quntity - 1}
  }
  else{
    copyuser.cart.splice(index,1)
  }
  console.log(copyuser);
  
  dispatch(asyncupdateuser(copyuser.id,copyuser)) 
}


const cartItems=user?.cart.map((c,index)=>
  {  
    return (
   
<ul key={c.item.id}>
  <li
    key={c?.item?.id}
    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 items-center gap-4 mb-6 p-4 rounded-lg shadow-md shadow-emerald-300"
  >
    {/* 🖼 Product Image */}
    <img
      className="w-24 h-24 rounded-md object-cover mx-auto md:mx-0"
      src={c?.item?.image}
      alt=""
    />

    {/* 📝 Product Title */}
    <h1 className="text-lg md:text-xl font-semibold text-center md:text-left">
      {c?.item?.title}
    </h1>

    {/* 💸 Product Price */}
    <h2 className="text-lg md:text-xl font-bold text-green-500 text-center md:text-left">
      Rs. {c?.item?.price}
    </h2>

    {/* 🛒 Quantity Controls */}
    <div className="flex justify-center md:justify-start gap-3 items-center">
      <button
        onClick={() => DecreaseQuantity(c, index)}
        className="text-2xl bg-gray-300 px-3 py-1 rounded-md"
      >
        −
      </button>

      <span className="text-lg font-bold bg-gray-100 px-3 py-1 rounded-md">
        {c.Quntity}
      </span>

      <button
        onClick={() => IncreaseQuantity(c, index)}
        className="text-2xl bg-gray-300 px-3 py-1 rounded-md"
      >
        +
      </button>
    </div>
  </li>
</ul>

)


}


)
return cartItems?.length > 0 ? (
 <ul className="flex flex-col ">{cartItems}</ul>
) : (
 <div className="text-center text-lg text-red-500">{<DataNotFound/>}</div>
);


}

export default Cart