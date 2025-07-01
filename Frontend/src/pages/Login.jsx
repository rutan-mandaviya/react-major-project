import { nanoid } from '@reduxjs/toolkit';
import {useForm} from "react-hook-form";
import { NavLink, useNavigate } from 'react-router-dom';
import { asyncLoginDetails } from '../store/actions/UserAction';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
const Login = () => {
    const [loginerror, setloginerror] = useState("");
  const {register,handleSubmit,reset,formState:{errors}}  =  useForm()
const dispatch=useDispatch()
const navigate=useNavigate()
    const Loginuser=(user)=>{
        user.id=nanoid();
       dispatch(asyncLoginDetails(user,navigate,setloginerror));
        setloginerror(" ");
    }

  return (
    <div className=''>

      <form
  onSubmit={handleSubmit(Loginuser)}
  className="flex flex-col w-full max-w-md mx-auto  gap-2  mt-12 p-6 bg-white rounded-xl shadow-lg"
>
  {/* Email */}
  <input
    {...register("email",{required:"email are reqired",

})}
    type="email"
    placeholder="john@wik.com"
    className="border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none px-4 py-3 text-lg rounded-md transition-all duration-200"
  />
    {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
  {/* Password */}
  <input
    {...register("password",{required:"paasword required!"
})}
    type="password"
    placeholder="******"
    className="border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none px-4 py-3 text-lg rounded-md transition-all duration-200"
  />

{errors.password && <p className='text-red-500'>{errors.password.message}</p>}
{loginerror && (
  <p className="text-red-600 font-semibold mt-2 animate-bounce">
    {loginerror}
  </p>
)}


  {/* Submit Button */}
  <button 
    type="submit"
    className="bg-sky-500 hover:bg-sky-600 text-white text-lg px-6 py-2 rounded-lg font-semibold transition-colors duration-200"
  >
    Login
  </button>

  {/* Link to Register */}
  <p className="text-sm text-gray-600">
    Don&apos;t have an account?{" "}
    <NavLink
      to="/register"
      className="text-blue-500 hover:underline font-medium"
    >
      Register
    </NavLink>
  </p>
</form>

    </div>
  )
}

export default Login