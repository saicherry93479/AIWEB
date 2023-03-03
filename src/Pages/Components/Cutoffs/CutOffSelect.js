import React from 'react'
import Select from 'react-select'

const CutOffSelect = ({options,values,setValues,placeholder}) => {
  return (
    <div className='cutOffSelect'>
        <Select  placeholder={placeholder} value={values} onChange={(selectedOptions)=>setValues(selectedOptions)} options={options} styles={{
                control:(baseStyles,state)=>({
                  ...baseStyles,
                 width:"200px"
                
              }),
              option:(styles,{data,isDisabled,isFocused,isSelected})=>{
                return {
                    ...styles,
                    cursor:'pointer',
                    backgroundColor:isSelected?'#47beb9':isFocused?'#caf7f4':'inherit',
                    // backgroundColor:isFocused?'lightgreen':'inherit',
                    fontSize:'14px',

                    // color:isFocused?'white':"#6e84a3",
    
                }
    
            },
              
        }} >

        </Select>
    </div>
  )
}

export default CutOffSelect