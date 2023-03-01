import React from 'react'

const PredictCustomInput = ({label,placeholder,setState,state,error}) => {
  return (
    <div className='predictCustomInput'>

        <p>{label}</p>
        <input style={error.length>0?{borderColor:"rgb(235,87,87)",marginBottom:'0px'}:{}} placeholder={placeholder} value={state} onChange={(e)=>setState(e.target.value)} ></input>
        <p className='error'>{error}</p>

    </div>
  )
}

export default PredictCustomInput