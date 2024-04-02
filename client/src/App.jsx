// import React from 'react'
import {BrowserRoutes, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRoutes>
    <Routes>
      <Route path="/" elements={<Home />} />
    </Routes>
      
    </BrowserRoutes>
  )
}

export default App

