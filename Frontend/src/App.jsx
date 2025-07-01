import  { useEffect } from 'react'
import Mainroutes from './Routing/Mainroutes'
import { asyncCurrentUser } from './store/actions/UserAction'
import { useDispatch } from 'react-redux'
import { asyncLoadProduct } from './store/actions/ProductAction'

const App = () => {
   const dispatch=useDispatch()
  

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