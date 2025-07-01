import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const AuthWrraper = (props) => {

  const user = useSelector((state) => state.userReducer.user);

  return ((user || user==null) ?props.children:<Navigate to="/login"></Navigate>
  )
}

export default AuthWrraper