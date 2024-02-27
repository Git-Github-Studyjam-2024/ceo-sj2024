import {BrowserRouter} from "react-router-dom"
import React from 'react'

import Layout from './layouts/Layout'
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css"
const App = () => {
  return (
      <BrowserRouter>
        <Layout/>
      </BrowserRouter>
  )
}

export default App
