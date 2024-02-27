import React from 'react'
import {Routes, Route as R} from "react-router-dom"
import {Home, About, Contact, NoPage } from "../pages/master"
const Route = () => {
  return (
    <div className='route'>
      <Routes>
        <R index          element=<Home/>   />
        <R path='home'    element=<Home/>   />
        <R path='about'   element=<About/>  />
        <R path='contact' element=<Contact/>/>
        <R path='*'       element=<NoPage/> />
      </Routes>
    </div>
  )
}

export default Route