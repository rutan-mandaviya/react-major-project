import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { asyncLogoutuser } from '../store/actions/UserAction';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const Nav = () => {
const dispatch=useDispatch()
const navigate=useNavigate()
   const user= useSelector((state)=>state.userReducer.user);
   const Logouthandle=()=>{
       dispatch(asyncLogoutuser())
       navigate("/login")
      }
    

      const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-[#f0f0f0] text-black font-medium shadow-sm px-6 py-4 rounded-full mb-6">
      <div className="flex justify-between items-center flex-wrap">
        {/* Logo */}
        <div className="text-2xl font-extrabold ml-2">
          <NavLink to="/" className="hover:text-indigo-900 transition-colors">
            ⭕ One Center
          </NavLink>
        </div>

        {/* Toggle Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-3xl">
            {isOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>

        {/* Links */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } w-full md:w-auto md:flex items-center gap-4 md:gap-6 mt-4 md:mt-0`}
        >
          <NavLink
            to="/"
            className={({ isActive }) =>
              `block px-4 py-2 rounded-full transition-all duration-200 ${
                isActive ? "bg-white shadow text-black" : "hover:bg-gray-200"
              }`
            }
          >
            Home
          </NavLink>

          {user ? (
            <>
              <NavLink
                to="/cart"
                className={({ isActive }) =>
                  `block px-4 py-2 rounded-full transition-all duration-200 ${
                    isActive
                      ? "bg-white shadow text-black"
                      : "hover:bg-gray-200"
                  }`
                }
              >
                Cart
              </NavLink>

              {user.isadmin && (
                <NavLink
                  to="/admin/create-product"
                  className={({ isActive }) =>
                    `block px-4 py-2 rounded-full transition-all duration-200 ${
                      isActive
                        ? "bg-white shadow text-black"
                        : "hover:bg-gray-200"
                    }`
                  }
                >
                  Create Products
                </NavLink>
              )}

              <NavLink
                to="/admin/profile"
                className={({ isActive }) =>
                  `block px-4 py-2 rounded-full transition-all duration-200 ${
                    isActive
                      ? "bg-white shadow text-black"
                      : "hover:bg-gray-200"
                  }`
                }
              >
                Profile
              </NavLink>
            </>
          ) : (
            <NavLink
              to="/login"
              className={({ isActive }) =>
                `block px-4 py-2 rounded-md font-semibold transition-all duration-200 ${
                  isActive
                    ? "bg-sky-500 text-white"
                    : "bg-black text-white hover:bg-gray-800"
                }`
              }
            >
              Login
            </NavLink>
          )}
          
          {user && (
            <button
              onClick={Logouthandle}
              className="block w-full md:w-auto bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-xl text-lg font-semibold mt-2 md:mt-0 transition duration-200"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};


export default Nav