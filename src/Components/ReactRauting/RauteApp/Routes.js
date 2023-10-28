import React, { useState } from 'react'
import { BrowserRouter, Route,Routes  } from 'react-router-dom'

// pages
import Home from '../Home/Home'
import Contact from '../Conect/Contact'
import About from '../About/About'
import Error from '../Error/Error'
import Navber from '../NavBer/Navber'
import Blogs from '../Blog/Blogs'
import Blog from '../Blog/Blog'
import User from '../Users/User'
import ProtectRoute from './ProtectRoute'

function Routess() { 
  const [isLoggin,setIsLoggin] = useState(false);
  const hendleChing = () =>{
    setIsLoggin(!isLoggin)
  } 
  return (
    <BrowserRouter>
    <Navber />
    {isLoggin ?
      <button onClick={hendleChing}>Log out</button> :
      <button onClick={hendleChing}>Log in</button>
    }
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/home' element={<Home />} ></Route>
        <Route path="/blog" element={<Blogs />} ></Route>
        <Route path="/blog/:title" element={<Blog />} ></Route>
        <Route path='/about' element={<About />} ></Route>
        <Route path='/contact' element={
          <ProtectRoute isLoggin={isLoggin}> 
            <Contact />
          </ProtectRoute>
        } ></Route>
        <Route path='*' element={<Error />} ></Route>
        <Route path='/user' element={<User />}></Route>
      </Routes> 
    </BrowserRouter>
  )
}

export default Routess
