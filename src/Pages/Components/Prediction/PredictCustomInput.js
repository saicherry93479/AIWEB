import React from 'react'

const PredictCustomInput = ({label,placeholder,setState,state,error,password=false}) => {
  return (
    <div className='predictCustomInput'>

        <p>{label}</p>
        <input type={password===true?'password':"text"}  style={error.length>0?{borderColor:"rgb(235,87,87)",marginBottom:'0px'}:{}} placeholder={placeholder} value={state} onChange={(e)=>setState(e.target.value)} ></input>
        <p  className='error' style={error.length>0?{marginTop:"8px",marginBottom:'16px'}:{}}>{error}</p>

    </div>
  )
}

export default PredictCustomInput