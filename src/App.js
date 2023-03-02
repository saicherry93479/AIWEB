import React from 'react'
import { Route,HashRouter as Router, Routes } from 'react-router-dom'

import './App.css'
import NavBar from './Pages/Components/OnBoard/NavBar'
import Footer from './Pages/Components/OnBoard/Footer'
import Home from './Pages/Components/OnBoard/Home/Home.js'
import Price from './Pages/Components/OnBoard/Price/Price'
import PredictionHome from './Pages/Components/Prediction/PredictionHome'
import Signin from './Pages/Components/Auth/Signin'
import SignUp from './Pages/Components/Auth/SignUp'
import Sample from './Pages/Components/Sample'


const App = () => {
  return (
    <Router>
      <NavBar></NavBar>

      <Routes>
      

        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/prices' element={<Price></Price>}></Route>
        <Route path='/predict' element={<PredictionHome></PredictionHome>}></Route>
        <Route path='/signin' element={<Signin></Signin>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/sample' element={<Sample></Sample>}></Route>
      </Routes>
      <Footer></Footer>
    </Router>
  )
}

export default App