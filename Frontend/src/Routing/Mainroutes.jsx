import axios from "../api/axiosconfig";
import { lazy, useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { Link,  Route, Routes, useNavigate } from "react-router-dom";

// Lazy imports
const Products = lazy(() => import("../pages/Products"));
const Nav = lazy(() => import("../Components/Nav"));
const Login = lazy(() => import("../pages/Login"));
const Register = lazy(() => import("../pages/Register"));
const Createproduct = lazy(() => import("../pages/admin/Createproduct"));
const Productdetail = lazy(() => import("../pages/admin/Productdetail"));
const Cart = lazy(() => import("../pages/Cart"));
const Pagenotfound = lazy(() => import("../pages/Pagenotfound"));
const Userprofile = lazy(() => import("../pages/Userprofile"));
const AuthWrraper = lazy(() => import("./AuthWrraper"));

const Mainroutes = () => {
  const user = useSelector((state) => state.userReducer.user);
  const [searchproduct, setSearchProduct] = useState("");
  const [product, setProduct] = useState([]);
const [showSuggestions, setShowSuggestions] = useState(false);
  const navigate = useNavigate();

  // Fetch all products once
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get("/products");
        setProduct(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, []);

  // Filtered products
  const filteredProducts = product.filter((item) =>
    item.title.toLowerCase().includes(searchproduct.toLowerCase())
  );

  return (
    <div className="px-[10%] overflow-hidden ">
     <div className="mt-5">
  <Nav />
  <div className="flex items-center justify-between gap-5 relative">
    <button
      onClick={() => navigate(-1)}
      className="ml-4 hover:scale-90 bg-gray-300 text-3xl px-4 py-2 rounded-md mb-5"
    >
      <FaArrowLeft />
    </button>
{user &&  <div className="relative w-full max-w-md">
  <input
    onFocus={() => setShowSuggestions(true)}
    onBlur={() => setTimeout(() => setShowSuggestions(false), 700)}
    onChange={(e) => setSearchProduct(e.target.value)}
    value={searchproduct}
    type="search"
    placeholder="Search for products..."
    className="w-full px-5 py-3 pl-12 text-gray-700 bg-white border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-500 transition-all duration-300 placeholder:text-gray-400"
  />
  <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg">
    🔍
  </div>
</div>}

  

  </div>

  {/* Suggestion Dropdown */}
  {searchproduct && showSuggestions && (
    <div className="absolute z-50 bg-white p-4 rounded-md shadow-md w-[80%] max-w-xl right-[10%] mt-2 grid grid-cols-1 gap-3">
      {filteredProducts.slice(0, 5).map((item) => (
        <div key={item.id} className="p-2 hover:bg-gray-100 rounded-md">
          <Link   to={`/product/${item.id}`} className="flex items-center gap-4">

            <img
              className="h-12 w-12 object-cover rounded-md"
              src={item.image}
              alt={item.title}
            />
            <h1 className="text-md font-medium">{item.title}</h1>
          </Link>
        </div>
      ))}
    </div>
  )}
</div>


      {/* Routes */}
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/admin/create-product"
          element={
            <AuthWrraper>
              <Createproduct />
            </AuthWrraper>
          }
        />
        <Route
          path="/admin/profile"
          element={
            <AuthWrraper>
              <Userprofile />
            </AuthWrraper>
          }
        />
        <Route
          path="/product/:id"
          element={
            <AuthWrraper>
              <Productdetail />
            </AuthWrraper>
          }
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Pagenotfound />} />
      </Routes>
    </div>
  );
};

export default Mainroutes;
