import React, { useState } from 'react'
import CustomDatePicker from './CustomDatePicker'

import PredictCustomInput from './PredictCustomInput'


const PredictionHomeRight = () => {
    const [percentile,setpercentile]=useState('')
    const [applicationNumber,setApplicationNumber]=useState('')
    const [dob,setDob]=useState('')
    const [doe,setDoe]=useState('')
  return (
    <div className='predictionHomeRight'>
        <h1>Enter your exam <br className='br'/> details</h1>
        <div className='predictionHomeCustomInputs'>
        <PredictCustomInput label={'Score in percentile'} placeholder='Enter your percentile' error={''} state={percentile} setState={setpercentile} ></PredictCustomInput>
        <PredictCustomInput label={'Appication number'} placeholder='Enter your Application number' error={''} state={applicationNumber} setState={setApplicationNumber} ></PredictCustomInput>
        <CustomDatePicker error='' value={dob} label='Date of Birth' setValue={setDob}></CustomDatePicker>
        <CustomDatePicker error='' value={doe} label='Date of Birth' setValue={setDoe}></CustomDatePicker>
        </div>
  
        <p>By continuing, you agree to our Terms & Conditions</p>
        <div className='predictButton'>
            <p>Predict my rank</p>
        </div>
    </div>
  )
}

export default PredictionHomeRight