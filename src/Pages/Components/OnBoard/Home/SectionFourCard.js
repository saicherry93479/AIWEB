import React from 'react'
import '../../../Styles/OnBoard/SectionFourCard.css'

const SectionFourCard = ({image,name,tag,index}) => {
  return (
    <div className={`sectionFourCard sectionFourCard${index}`} >
        <div className='sectionFourCardLeft'>
            <div>{image}</div>
            {/* <div className='absoulte'></div> */}
        </div>
        <div className='sectionFourCardRight'>
            <div className='sectionFourCardRightIndex'>
                
                <p>{index+1}</p></div>
            <div className='sectionFourCardRightDetails'>
                <p>{name}</p>
                <p>{tag}</p>
            </div>

        </div>
    </div>
  )
}

export default SectionFourCard