import React, { useEffect, useState } from 'react'
import DatePicker from "react-multi-date-picker"
import transition from "react-element-popper/animations/transition"
import opacity from "react-element-popper/animations/opacity"
import "react-multi-date-picker/styles/colors/green.css"
import '../../Styles/Prediction/CustomDatePicker.css'
import Icon from "react-multi-date-picker/components/icon"

const CustomDatePicker = ({width='100%',placeholder,value,setValue,label,error=''}) => {

  return (
//    <div className='customDatePickerWidth'>
    <div style={{width:width}}>
          <DatePicker 
        className='green'
        style={{width:"100%"}}
        
        
        value={value}
        onChange={setValue}
        render={<CustomInput placeholder={placeholder} text={label}  error={error}/>}
        portal
         
      animations={[
        opacity(),
        transition({
          from: 40,
          transition: "all 400ms cubic-bezier(0.335, 0.010, 0.030, 1.360)",
        }),
      ]} 
    />
     </div>
  )
}

export default CustomDatePicker


function CustomInput({placeholder, openCalendar, value, handleValueChange,text ,error}) {
    return (
     <div className='customDatePicker' >
        <p className='predictionCustomInputLabel'>{text}</p>

        <div>
            <input
            onFocus={openCalendar}
            value={value}
            placeholder={placeholder}
            onChange={handleValueChange}
        />
        <Icon onClick={openCalendar}></Icon>
        </div>
        <p  className='error' style={error.length>0?{marginTop:"8px",marginBottom:'16px'}:{}}>{error}</p>
     </div>
    )
  }