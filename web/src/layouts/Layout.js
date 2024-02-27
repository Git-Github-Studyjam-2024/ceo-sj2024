import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Route from '../routes/Route'
import "./style.css"
const Layout = () => {
  return (
    <div className='layout'>
        <Header/>
        <Route/>
        <Footer/>
    </div>
  )
}

export default Layout