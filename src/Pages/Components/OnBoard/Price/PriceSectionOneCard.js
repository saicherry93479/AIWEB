import React from 'react'
import RighMarkIcon from '../../../../Assets/Images/RighMarkIcon'
const PriceSectionOneCard = ({index,planType,price,tagOne,tagTwo,buttonText,icon=<></>,data}) => {
  return (
    <div className='pSectionOneCard'>
       <div className='pSectionOneCardTop'>
            <h2>{planType}</h2>
            {
              index===2?<h1 className='customThree'>{price}</h1>:<h1><span className='spanOne'>$</span> {price}</h1>
            }
            <p className='tagOne'>{tagOne}</p>
            <p className='tagTwo'>{tagTwo}</p>
            <div className='normalButton'>
                <p>{buttonText}</p>
                {icon}
            </div>
       </div>
       <div className='pSectionOneCardBottom'>
            {
                data.map((dat,index)=><div>
                   {dat.bool===true?<div className='cir'>
                    <RighMarkIcon></RighMarkIcon>
                    
                   </div>:<div className='cir'></div>}
                    <p>{dat.name}</p>
                </div>)
            }
       </div>

    </div>
  )
}

export default PriceSectionOneCard