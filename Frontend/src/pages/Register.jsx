import { nanoid } from '@reduxjs/toolkit';
import {useForm} from "react-hook-form";
import { NavLink, useNavigate } from 'react-router-dom';
import { asyncRegisterUser } from '../store/actions/UserAction';
import { useDispatch } from 'react-redux';
const Register = () => {

  const {register,handleSubmit,reset,formState:{errors}}  =  useForm()
const dispatch=useDispatch()
const navigate=useNavigate()



    const Loginuser=(user)=>{
        user.id=nanoid();
        user.isadmin=false 
        user.cart=[] 

        dispatch(asyncRegisterUser(user))
        navigate('/login')
        reset()
    }

  return (
    <div>

       <form
  onSubmit={handleSubmit(Loginuser)}
  className="flex flex-col w-full max-w-md mx-auto gap-2 mt-12 p-6 bg-white rounded-xl shadow-lg"
>
  {/* Username */}
  <input
    {...register("username",{required:"field not be empty.",
  minLength:{
    value:5,
    message:"minimum length is 5"
  }
})}
    type="text"
    placeholder="John-Downy"
    className="border border-gray-300 focus:ring-2 focus:ring-indigo-400 outline-none px-4 py-3 text-lg rounded-md transition-all duration-200"
  />
{errors.username && <p className='text-red-500'>{errors.username.message}</p>}

  {/* Email */}
  <input
    {...register("email",{required:"it is mendetory"})}
    type="email"
    placeholder="john@wik.com"
    className="border border-gray-300 focus:ring-2 focus:ring-indigo-400 outline-none px-4 py-3 text-lg rounded-md transition-all duration-200"
  />

{errors.email && <p className='text-red-500'>{errors.email.message}</p>}
  {/* Password */}
  <input
    {...register("password",{required:"password is required",
  minLength:{
    value:8,
    message:"minimum length is 8"
    
  }
})}
    type="password"
    placeholder="******"
    className="border border-gray-300 focus:ring-2 focus:ring-indigo-400 outline-none px-4 py-3 text-lg rounded-md transition-all duration-200"
  />
{errors.password && <p className='text-red-500'>{errors.password.message}</p>}

  {/* Submit Button */}
  <button
    type="submit"
    className="bg-sky-500 hover:bg-sky-600 text-white font-semibold text-lg px-6 py-2 rounded-lg transition-colors duration-200"
  >
    Register
  </button>

  {/* Link to Login */}
  <p className="text-sm text-gray-600">
    Already have an account?{" "}
    <NavLink
      to="/login"
      className="text-blue-500 hover:underline font-medium"
    >
      Login
    </NavLink>
  </p>
</form>

    </div>
  )
}

export default Register