import React from 'react'
import './AppLayout.css'
import {Outlet} from 'react-router-dom'
import Navbar from '../Components/Navbar'

const AppLayout = () => {
  return (
   <>
    <div className='main'>
    <Navbar></Navbar>
      <Outlet/>
      
    </div>
   </>
  )
}

export default AppLayout
