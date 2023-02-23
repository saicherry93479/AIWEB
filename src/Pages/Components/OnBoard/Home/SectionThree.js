import React, { useEffect, useState } from 'react'
import '../../../Styles/OnBoard/SectionThree.css'
import SamplIcon from '../../../../Assets/Images/SamplIcon'
import SectionThreeCard from './SectionThreeCard'

const sectioThreeCardsData=[
    {
        icon:<SamplIcon></SamplIcon>,
        name:"Blog Content",
        tag:'Write optimized posts in a fraction of the time',
        buttonText:'Try Blog Content'
    },
    {
        icon:<SamplIcon></SamplIcon>,
        name:"Blog Content",
        tag:'Write optimized posts in a fraction of the time',
        buttonText:'Try Blog Content'
    },
    {
        icon:<SamplIcon></SamplIcon>,
        name:"Blog Content",
        tag:'Write optimized posts in a fraction of the time',
        buttonText:'Try Blog Content'
    },
    {
        icon:<SamplIcon></SamplIcon>,
        name:"Blog Content",
        tag:'Write optimized posts in a fraction of the time',
        buttonText:'Try Blog Content'
    },
    {
        icon:<SamplIcon></SamplIcon>,
        name:"Blog Content",
        tag:'Write optimized posts in a fraction of the time',
        buttonText:'Try Blog Content'
    },
    {
        icon:<SamplIcon></SamplIcon>,
        name:"Blog Content",
        tag:'Write optimized posts in a fraction of the time',
        buttonText:'Try Blog Content'
    }
]

const sectionThreeDataTwo=[
    {
        name:"Write better content faster",
        tag:"Leverage AI to write your content and copy in minutes."
    },
    {
        name:"Write better content faster",
        tag:"Leverage AI to write your content and copy in minutes."
    },
    {
        name:"Write better content faster",
        tag:"Leverage AI to write your content and copy in minutes."
    }
]
const animatedTetx=[
    'business owners',
    'social media managers',
    'maketing agencies',
    'startup teams'
]


const SectionThree = () => {
    const [text,setText]=useState(0)


  return (
    <div className='sectionThree'>
        <p>
        Copy.ai helps
        {/* TODO : SPAN ANIMATION FORTH AND backgroundImage */}
        <p className='sectionThreeCustomText'> startup teams</p>

        
        

        </p>
        {/* <p className='customParaThree'> */}
        
        {/* </p> */}
        
        <p>Get better results in a fraction of the time.
        <br className='breaker'/>
            Finally,
          
             a writing tool you’ll actually use.</p>
        <div className='sectionThreeCards'>
            {sectioThreeCardsData.map((data,index)=><SectionThreeCard Icon={data.icon} name={data.name} tag={data.tag} buttonText={data.buttonText}></SectionThreeCard>)}
        </div>
        <div className='border' style={{width:"100%",margin:"20px 0px"}}></div>
        <div className='sectionThreeItems'>
            {sectionThreeDataTwo.map((dat,index)=><div className='sectionThreeItem'>
                <p>{dat.name}</p>
                <p>{dat.tag}</p>
            </div>)}
        </div>

    </div>
  )
}

export default SectionThree