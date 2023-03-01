import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SignupImage from '../../../Assets/Images/SignupImage'
import  '../../Styles/Auth/SignIn.css'
import PredictCustomInput from '../Prediction/PredictCustomInput'
const Signin = () => {
    const [email,setEmail]=useState('')
    const [emailError,setEmailError]=useState('')
    const [password,setPassword]=useState('')
    const [passwordError,setPasswordError]=useState('')

    const navigate=useNavigate();

  return (
    <div className='predictionHome signin'>
        <div className='signLeft'>
            <SignupImage></SignupImage>
        </div>
        <div className='predictionHomeRight'>
            <h1>Sign In</h1>
            <div className='predictionHomeCustomInputs'>
            <PredictCustomInput label={'Email'} placeholder={"Enter your email"}  state={email} setState={setEmail} error={emailError} ></PredictCustomInput>
            <PredictCustomInput label={'Password'} placeholder={"Enter your password"}  state={password} setState={setPassword} error={passwordError} password={true}  ></PredictCustomInput>
            </div>
            <div className='predictButton' style={{backgroundColor:'#47BEB9'}}>
                <p>Sign In</p>
            </div>
            <p style={{marginTop:"12px"}}>Don't have account yet? <span className='siginSuggest' onClick={()=>navigate('/signup')}> Sign Up </span></p>

        </div>
    </div>
  )
}

export default Signin