import React from 'react'
import { BrowserRouter, Route, Routes  } from 'react-router-dom'
import Navbar from './components/Navbar'
import AllUsers from './components/AllUsers'
import AddUser from './components/AddUser'


const App = () => {
  return (
    <>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route index element={<AllUsers/>}/>    {/* Default route when ever the site is opened */}
            <Route path='/allusers' element={<AllUsers/>} />
            <Route path='/adduser' element={<AddUser/>} />
            <Route path='*' element={<AddUser/>}/>  {/* if any of the route doesnt match, this will render (works like default case in switch statement when no cases match) */}
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App