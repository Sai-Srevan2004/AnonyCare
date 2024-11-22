import React from 'react'
import './AppLayout.css'
import {Outlet} from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const AppLayout = () => {
  return (
   <>
    <div className='main'>
    <Navbar></Navbar>
      <Outlet/>
      <Footer></Footer>
    </div>
   </>
  )
}

export default AppLayout
