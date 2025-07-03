import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import {Routes, Route, Navigate} from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import SignUp from './pages/SignUp'
import SettingsPage from './pages/SettingsPage'
import ProfilePage from './pages/ProfilePage'
import { axiosInstance } from './lib/axios'
import {Loader} from "lucide-react" 
import {Toaster} from 'react-hot-toast'
import { useAuthStore } from './store/useAuthStore'

function App() {
  const {authUser, checkAuth, isCheckingAuth, onlineUsers} = useAuthStore();
console.log(onlineUsers);


  useEffect(() => {
    checkAuth()
  }, [checkAuth]);

  if(isCheckingAuth && !authUser) return (
    <div className='flex items-center justify-center h-screen bg-gray-900 text-white'>
      <Loader className='size-10 animate-spin'/>
    </div>
  )
    
    
    return (
    <>
    
      <div className='w-full h-screen text-white bg-gray-900'>
       <Navbar/>
       <Routes>
        <Route path="/" element={authUser ? <HomePage/> : <Navigate to="/login" />}/>
        <Route path="/login" element={!authUser ?  <LoginPage/> : <Navigate to="/" />} />
        <Route path="/signup" element={!authUser ?  <SignUp/> : <Navigate to="/" />}/>
        <Route path="/settings" element={ <SettingsPage/> } />
        <Route path="/profile" element={authUser ? <ProfilePage/> : <Navigate to="/login" />}/>
      
       </Routes>

       <Toaster/>
      </div>
    </>
  )
}

export default App
