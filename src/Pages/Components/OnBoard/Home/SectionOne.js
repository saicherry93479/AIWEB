import React from 'react'
import GoogleIcon from '../../../../Assets/Images/GoogleIcon'
import RightArrowIcon from '../../../../Assets/Images/RightArrowIcon'

import SamplIcon from '../../../../Assets/Images/SamplIcon'
import '../../../Styles/OnBoard/SectionOne.css'
import HeroImageButton from './HeroImageButton'
import NavBarButton from '../NavBarButton'
const SectionOne = () => {
  return (
    <div className='sectionOne'>
        <div>
            <h1>Say ‘goodbye’ to the blank page <span className='customText'>for good</span></h1>
            <div className='sectionOneButtons'>
                <p>Get your <span className='customTextOne'>free account today</span></p>
                <div>
                    <NavBarButton icon={<GoogleIcon></GoogleIcon>} text={'Sign up with Google'} bColor={'#160647'}></NavBarButton>
                    <p>or</p>
                    <NavBarButton icon={<RightArrowIcon color='white'></RightArrowIcon>} reverse={true} text={'Sign up with email'} bColor={'#47BEB9'}></NavBarButton>
                </div>
                <p className='heroPara'>No credit card required</p>
            </div>
            <div className='border'></div>

            <HeroImageButton Icon={<SamplIcon></SamplIcon>} text={'FOR BLOG WRITERS'} tag={'Write blogs 10x faster'} ></HeroImageButton>
            <HeroImageButton Icon={<SamplIcon></SamplIcon>} text={'FOR BLOG WRITERS'} tag={'Write blogs 10x faster'} ></HeroImageButton>
            <HeroImageButton Icon={<SamplIcon></SamplIcon>} text={'FOR BLOG WRITERS'} tag={'Write blogs 10x faster'} ></HeroImageButton>
           
        </div>

    </div>
  )
}

export default SectionOne