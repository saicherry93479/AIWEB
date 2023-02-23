import React from 'react'
import RightArrowIcon from '../../../../Assets/Images/RightArrowIcon'
import '../../../Styles/OnBoard/SectionThreeCard.css'
const SectionThreeCard = ({Icon,name,tag,buttonText}) => {
  return (
    <div className='sectionThreeCard'>
        <div className='iconHero'>
            {Icon}
            
        </div>
        <div>
            <p>{name}</p>
            <p>{tag}</p>
            <div>
                <p>{buttonText}</p>
                <RightArrowIcon></RightArrowIcon>


            </div>
        </div>
    </div>
  )
}

export default SectionThreeCard