import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const AuthWrraper = (props) => {
  
  // const user = useSelector((state) => state.userReducer.user);
  // const user=localStorage.getItem("users")
  // console.log(user);
   const user = JSON.parse(localStorage.getItem("users"));
   console.log(user.isadmin);
   
  return (user  ?props.children:<Navigate to="/login"></Navigate>
  )
}

export default AuthWrraper