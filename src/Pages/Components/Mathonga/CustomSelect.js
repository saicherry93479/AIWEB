import { color } from 'framer-motion'
import React from 'react'
import Select from 'react-select'
const CustomSelect = ({text,options,values,setValues,multi=true}) => {
  return (
    <div className='mathongaCustomInput' >
    <p>{text}</p>
    <Select placeholder='' isMulti={multi}   closeMenuOnSelect={multi===true?false:true} styles={{
        
        option:(styles,{data,isDisabled,isFocused,isSelected})=>{
            return {
                ...styles,
                cursor:'pointer',
                backgroundColor:'var(--mathonga-select-color)',
                fontSize:'14px',
                color:isFocused?'white':"#6e84a3",

            }

        },
        multiValue:styles=>{
            return {...styles,
                 backgroundColor:'var(--mathonga-primary-color)',
                 color:'white'
                    }
        },
        control:(baseStyles,state)=>({
            ...baseStyles,
            borderRadius:"0.375rem",
           
            paddingRight:'0px',
            backgroundColor:"var(--mathonga-secondary-color)",
            // outline:state.isFocused?'none':'',

            border:"none"
          
        }),
        input:(styles)=>({...styles,color:'#6e84a3'}),
        singleValue:(styles) => ({
            ...styles,
            // height:'100%',
            color:'white',
            paddingTop:'3px',
          }),

        
    }} value={values} onChange={(selectedOptions)=>setValues(selectedOptions)}  options={options} />
</div>
  )
}

export default CustomSelect