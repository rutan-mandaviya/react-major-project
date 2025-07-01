import React from 'react'
import {Navigate} from "react-router-dom"

const AuthadminWrraper = (props) => {

     const user = JSON.parse(localStorage.getItem("users"));
   console.log(user);
   
  return ((user || user?.isadmin)  ?props.children:<Navigate to={"/"}/>
  
  )
}

export default AuthadminWrraper