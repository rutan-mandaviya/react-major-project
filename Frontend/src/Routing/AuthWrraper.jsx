import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const AuthWrraper = (props) => {

    // console.log(props.children);
    

  const user = useSelector((state) => state.userReducer.user);

console.log(user);

  return ((user || user==null) ?props.children:<Navigate to="/login"></Navigate>
  )
}

export default AuthWrraper