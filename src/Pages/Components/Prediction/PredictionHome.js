import React from 'react'
import '../../Styles/Prediction/predictionHome.css'
import PredictionHomeLeft from './PredictionHomeLeft'
import PredictionHomeRight from './PredictionHomeRight'

const PredictionHome = () => {
  return (
    <div className='predictionHome'>
       <PredictionHomeLeft></PredictionHomeLeft>
       <PredictionHomeRight></PredictionHomeRight>
    </div>
  )
}

export default PredictionHome