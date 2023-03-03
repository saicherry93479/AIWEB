import React, { createContext, useState } from 'react'
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
import Loader from './Pages/Components/Utils/Loader'
import AnimationOne from './Pages/Components/Utils/AnimationOne'
import MathongaPrediction from './Pages/Components/Mathonga/MathongaPrediction'
import CutOffs from './Pages/Components/Cutoffs/CutOffs'

export const  AppContext = createContext()

const App = () => {

  const [modalOPen,setModalOpen]=useState(false)
  const values={
    modalOPen:modalOPen,
    setModalOpen:setModalOpen
  }
  return (
    <AppContext.Provider value={values}>
    <Router>
      <NavBar></NavBar>

      <Routes>
      

        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/prices' element={<Price></Price>}></Route>
        <Route path='/predict' element={<PredictionHome></PredictionHome>}></Route>
        <Route path='/signin' element={<Signin></Signin>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/mathongaPrediction' element={<MathongaPrediction></MathongaPrediction>}></Route>
        <Route path='/cutoffs' element={<CutOffs></CutOffs>}></Route>
      </Routes>
      <Footer></Footer>
    </Router>
    </AppContext.Provider>
  )
}

export default App