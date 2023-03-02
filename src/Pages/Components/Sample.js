import React, { useEffect, useState } from 'react'
import DatePicker from "react-multi-date-picker"
import transition from "react-element-popper/animations/transition"
import opacity from "react-element-popper/animations/opacity"
import "react-multi-date-picker/styles/colors/green.css"
import './Sample.css'
const Sample = () => {
    const [value, setValue] = useState()
    useEffect(()=>{
        if(value){
            // console.log(value.day)
            console.log(value?.toDate?.().toString())
                  console.log('value is ',value.day,'-',value.month.number,'-',value.year)
        }
  

    },[value])
  return (
    <div style={{}}>
         
    </div>
  )
}



export default Sample