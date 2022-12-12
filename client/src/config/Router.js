import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Login from "../Components/login/Login";
import Register from "../Components/register/Register";
import React, { useEffect, useState } from 'react'
import Home from "../Components/home/Home";
import Ads from "../Components/Createad/Ads";
import Details from "../Components/Details/Details";
import Landing from "../Components/Landing/Landing"
import { getAuth, onAuthStateChanged } from "firebase/auth";





function Routerr() {
  const [user, setUser] = useState()

  useEffect(() => {

    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
      } else {
        setUser(null)
      }
    });
  }, [])

  console.log(user)

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/landing' element={<Landing />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/ads' element={ ProtectedRoute(user, <Ads /> )} />
        <Route path='/details/:adId' element={ ProtectedRoute(user,<Details />) } />
      </Routes>
    </Router>
  )
}


function ProtectedRoute(user, component, naviagteTo ='/landing'){
  //if user is true 
  //send to compoenet
  // else redirect to
  return user ? component : <Navigate to={naviagteTo} />
}

export default Routerr
