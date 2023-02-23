import React from 'react'
import RighMarkIcon from '../../../../Assets/Images/RighMarkIcon'
import RightArrowIcon from '../../../../Assets/Images/RightArrowIcon'
import SectionFourImageOne from '../../../../Assets/Images/SectionFourImageOne'
import '../../../Styles/OnBoard/SectionFour.css'
import NavBarButton from '../NavBarButton'
import SectionFourCard from './SectionFourCard'

const sectionFourData=[
    {
        image:<SectionFourImageOne></SectionFourImageOne>,
        name:"Enter your copywriting project",
        tag:'Choose from emails, social posts, long-form blog posts, and more!'
    },
    {
        image:<SectionFourImageOne></SectionFourImageOne>,
        name:"Enter your copywriting project",
        tag:'Choose from emails, social posts, long-form blog posts, and more!'
    },
    {
        image:<SectionFourImageOne></SectionFourImageOne>,
        name:"Enter your copywriting project",
        tag:'Choose from emails, social posts, long-form blog posts, and more!'
    }
]
const SectionFour = () => {
  return (
    <div className='sectionFour'>
        <h1>How it Works</h1>
        {sectionFourData.map((data,index)=><SectionFourCard name={data.name} tag={data.tag} image={data.image} index={index}></SectionFourCard>)}
        
        
        <div className='sectionFourDiv'>
            <div>4</div>
            <p>Edit, polish, and publish</p>
        </div>
        <p className='sectionFourPara'>
        Use Copy.ai’s editor to rewrite paragraphs and polish up sentences. Then, just copy and paste the work into your CMS for publishing.
        </p>
        <div className='border' ></div>
        <div className='customMobilePaddingSectionFour'>
            <h1 style={{margin:'0px'}} className='readyH'>Ready to level-up?</h1>
            <p className='readyPara'>Write 10x faster, engage your audience, & never struggle with the blank page again.</p>
            <div style={{width:"fit-content",margin:'40px auto'}}>
            <NavBarButton  icon={<RightArrowIcon color='white'></RightArrowIcon>} reverse={true} text={'Sign up with email'} bColor={'#47BEB9'}></NavBarButton>
            </div>
            <div className='sectionFourLast'>
                {
                    ['No credit card required','7-day trial of Pro','90+ content types to explore'].map((data,index)=><div className='sectionFourCustom'>
                        <div className='sectionFourCustomCir'>
                            <RighMarkIcon></RighMarkIcon>
                        </div>
                        <p>{data}</p>
                    </div>)
                }
            </div>
        </div>
              
        
        
        
    </div>
  )
}

export default SectionFour