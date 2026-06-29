import React from 'react'
import {useDispatch} from 'react-redux'
import {logout} from '../../store/authSlice'
import authservice from '../../appwrite/auth'

function LogoutBtn() {
    const dispatch = useDispatch()
    const logoutHandler = ()=>{
        authservice.logout().then(() => {
            dispatch(logout())     // it sends the new info to the store
        })
        
    }
    
  return (
    <button className='px-5 py-2 text-sm font-medium text-white bg-brand rounded-lg
        transition-all duration-200 hover:bg-brand-dark hover:shadow-md
        active:scale-95'
    onClick = {logoutHandler}
    >Logout</button>
  )
}

export default LogoutBtn