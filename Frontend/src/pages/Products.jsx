import  { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import { asyncupdateuser } from '../store/actions/UserAction';
import { toast } from 'react-toastify';
import DataNotFound from './DataNotFound';
import axios from '../api/axiosconfig';
import InfiniteScroll from "react-infinite-scroll-component";



const Products = () => {

  const dispatch=useDispatch()
  const navigate=useNavigate()
  const user = useSelector((state) => state.userReducer.user);
  const [Product, setProduct] = useState([])
  const [hasmore, sethasmore] = useState(true)

  const fetchdata=async()=>{
    try {
      const {data}=await axios.get(`/products?_limit=8&_start=${Product.length}`)
      if(data.length==0){
        sethasmore(false)
      }
      else{
        sethasmore(true)
      }
      setProduct([...Product,...data])
      
    } catch (error) {
      toast.error("Invalid move");
      
    }
  }
  useEffect(()=>{
    fetchdata()
  },[])

const Addcarthandler=(item)=>{
  
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
 
  
  dispatch(asyncupdateuser(copyuser.id,copyuser)) 
 navigate("/cart") 
 toast.success("Product Added Cart !");

}


 const renderproducts = Product.map((item) => {
return (
<div key={item.id} className=" shadow-md hover:shadow-2xl transition-shadow duration-300 rounded-2xl overflow-hidden p-5 relative border border-gray-100"
>
  <Link to={`/product/${item.id}`}>
    <img
      src={item.image}
      alt={item.title}
      className="w-full h-48 object-cover rounded-xl mb-4 hover:scale-[1.02] transition-transform duration-300"
    />
  </Link>


  <h1 className="font-semibold text-xl text-gray-800 truncate">{item.title}</h1>

  <p className="text-gray-500 text-sm mt-2 line-clamp-2">{item.description}</p>

  <div className="flex justify-between items-center mt-5">
    <p className="text-green-600 font-bold text-lg">₹{item.price}</p>

    <button
      onClick={() => {user ? Addcarthandler(item) :navigate("/login")}}
      className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm px-4 py-2 rounded-lg shadow-sm transition-all duration-200"
    >
      Add to Cart
    </button>
  </div>

  <Link
    to={`/product/${item.id}`}
    className="block mt-3 text-indigo-500 hover:text-indigo-700 hover:underline text-sm font-medium"
  >
    More Info...
  </Link>
</div>


) });

 return (
  Product.length > 0 ? 
    <InfiniteScroll  dataLength={Product.length} next={fetchdata} hasMore={hasmore} loader={<h4>Loading</h4>} endMessage={<p className='text-center'>
      Yah ! completed
      </p>}>
      
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 '>
  {renderproducts }
  </div>
  </InfiniteScroll>
  
  : <DataNotFound />

 );
};

export default Products;
