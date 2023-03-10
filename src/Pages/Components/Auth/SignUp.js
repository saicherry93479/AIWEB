import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SignupImage from '../../../Assets/Images/SignupImage'
import PredictCustomInput from '../Prediction/PredictCustomInput'

const SignUp = () => {
    const [email,setEmail]=useState('')
    const [emailError,setEmailError]=useState('')
    const [password,setPassword]=useState('')
    const [passwordError,setPasswordError]=useState('')
    const [name,setName]=useState('')
    const [nameError,setNameError]=useState('')

    const navigate=useNavigate();

  return (
    <div className='predictionHome signin'>
        <div className='signLeft'>
            <SignupImage></SignupImage>
        </div>
        <div className='predictionHomeRight'>
            <h1>Sign Up</h1>
            <div className='predictionHomeCustomInputs'>
            <PredictCustomInput label={'Name'} placeholder={"Enter your name"}  state={name} setState={setName} error={nameError} ></PredictCustomInput>
            <PredictCustomInput label={'Email'} placeholder={"Enter your email"}  state={email} setState={setEmail} error={emailError} ></PredictCustomInput>
            <PredictCustomInput label={'Password'} placeholder={"Enter your password"}  state={password} setState={setPassword} error={passwordError} password={true}  ></PredictCustomInput>
            </div>
            <div className='predictButton' style={{backgroundColor:'#47BEB9'}}>
                <p>Sign Up</p>
            </div>
            <p style={{marginTop:"12px"}}>Already have account yet? <span className='siginSuggest' onClick={()=>navigate('/signin')}> Sign In </span>
            </p>

        </div>
    </div>
  )
}

export default SignUp