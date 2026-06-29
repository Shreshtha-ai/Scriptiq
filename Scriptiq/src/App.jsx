import { useEffect, useState } from 'react'
import './App.css'
import { useDispatch } from 'react-redux'
import { logout, login } from './store/authSlice'
import authService from './appwrite/auth'
import { Header, Footer } from './components'
import { Outlet } from 'react-router-dom'


function App() {
  const [loading, setLoading] =  useState(true)
  const dispatch = useDispatch()

  //load user data from database after login
// it shows 401 error if there are no users data, so that we put this 
  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if(userData){
        dispatch(login({userData}))
      }else{
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))                   
  })
  
  return !loading? ( 
    <div className='min-h-screen flex flex-wrap content-between bg-surface'>
      <div className='w-full block '>
        <Header />
        <main>
          <Outlet />
        </main>
       
        <Footer />
      </div>
    </div>
  ) : null;
}

export default App
