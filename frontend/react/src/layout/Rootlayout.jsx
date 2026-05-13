import React from 'react'
import Navi from '../Nav/Navi'
import { Outlet } from 'react-router-dom'
import Footer from "../footer/Footer"
import ScrollToTop from '../pages/Scroll'

const Rootlayout = () => {
  return (
    <>
      <ScrollToTop/>
       <Navi />
      <Outlet />
      <Footer/>
  </>
  )
}

export default Rootlayout
