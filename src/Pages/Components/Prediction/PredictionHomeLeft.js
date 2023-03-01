import React from 'react'
import LogoIcon from '../../../Assets/Images/LogoIcon'
import PredictLogo from '../../../Assets/Images/PredictLogo'
import RighMarkIcon from '../../../Assets/Images/RighMarkIcon'


const predictData=['Get estimated rank based on your expected percentile',
            'Follow simplw steps and get your rank',
            'Completely free']

const PredictionHomeLeft = () => {
  return (
    <div className='predictionHomeLeft'>
        {/* <LogoIcon></LogoIcon> */}
        <div className='predictionHomeLeftTop' >
            <PredictLogo></PredictLogo>
            <h1  >IIT JEE Rank Predictor 2023</h1>
        </div>
        {
            predictData.map((data,index)=><div className='predictionHomeLeftTag'>
                <div>
                    <RighMarkIcon color='#3c4852'></RighMarkIcon>
                </div>
                <p >{data}</p>
            </div>)
        }

        
    </div>
  )
}

export default PredictionHomeLeft