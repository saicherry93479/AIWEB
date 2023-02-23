import React, { useState } from 'react'
import '../../../Styles/OnBoard/SectionTwoCard.css'
const SectionTwoCard = ({image,name,tag,para,paraSpecial,paraOne,index}) => {
    
    // const funcOne=()=>{
    //     return setTimeout(()=>'-350px',1000)
    // }
    
  return (
    <div className='sectionTwoCard' 
    // style={index===0 || index===1?{funcOne}:{}}
    >
        <div>
            <img src={image}></img>
            <div>
                <p className='sectionTwoParaOne'>{name}</p>
                <p className='sectionTwoParaTwo'>{tag}</p>
            </div>
        </div>
        <p>{para} <span>{paraSpecial}</span> {paraOne}</p>


    </div>
  )
}

export default SectionTwoCard