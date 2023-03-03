import React, { useState } from 'react'
import '../../Styles/Prediction/predictionHome.css'
import AnimationOne from '../Utils/AnimationOne'
import PredictionHomeLeft from './PredictionHomeLeft'
import PredictionHomeRight from './PredictionHomeRight'

const PredictionHome = () => {
  const [modalOPen,setModalOpen]=useState(false)
  
  return (
    

    <div className='predictionHome'>
    {modalOPen && <AnimationOne setModalOpen={setModalOpen}></AnimationOne>}
      
       <PredictionHomeLeft></PredictionHomeLeft>
       <PredictionHomeRight setModalOpen={setModalOpen}></PredictionHomeRight>
    </div>
    
  )
}

export default PredictionHome