import React, { useEffect } from 'react'
import Mainroutes from './Routing/Mainroutes'
import { asyncCurrentUser } from './store/actions/UserAction'
import { useDispatch } from 'react-redux'
import { asyncLoadProduct } from './store/actions/ProductAction'
import Nav from './Components/Nav'
import { FaArrowLeft } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'

const App = () => {
   const dispatch=useDispatch()
   const navigate=useNavigate()

  useEffect(()=>{
    dispatch(asyncCurrentUser())
    dispatch(asyncLoadProduct())
  },[])
  return (
    <div className='  w-full h-screen'>
     
      <Mainroutes/>
 
    </div>
  )
}

export default App