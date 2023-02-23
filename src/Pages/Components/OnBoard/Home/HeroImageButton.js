import React from 'react'
import RightArrowIcon from '../../../../Assets/Images/RightArrowIcon'
import '../../../Styles/OnBoard/HeroImageButton.css'

const HeroImageButton = ({Icon,text,tag}) => {
  return (
    <div className='heroImageButton'>
        <div className='iconHero'>
            {Icon}
            
        </div>
        <div>
            <p>{text}</p>
            <p>{tag}</p>
        </div>
        <div className='heroImageButtonArrow'>
        <RightArrowIcon></RightArrowIcon>
        </div>


    </div>
  )
}

export default HeroImageButton