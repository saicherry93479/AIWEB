import React, { useEffect, useState } from 'react'
import '../../../Styles/OnBoard/SectionTwo.css'

import pic from '../../../../Assets/Images/Testimonal.jfif'
import SectionTwoCard from './SectionTwoCard'



const SectionTwo = () => {

  const [testionals,setTestionals]=useState(testional)
  // const [translateX,setTranslateX]=useState(0)
 
  // useEffect(()=>{
  //   setTimeout(()=>{
  //     setTestionals(p=>[...p.slice(1,p.length),p[0]])
  //   },5000)
  //   console.count('it is called ')
  // },[testionals])
  return (
    <div className='sectionTwo' >
       
          <h1>
            Experience the full power of an AI content generator that  <span>delivers premium results in seconds.</span>
          </h1>
          <p className='paraOne'>5,000,000+</p>
          <p className='paraTwo'>professionals & teams choose Copy.ai.</p>
          
       
       <div className='sectionTwoCards' >
        <div >
        {
          testionals.map((data,index)=><SectionTwoCard index={index} key={index} name={data.name} tag={data.tag} image={data.image} para={data.para} paraSpecial={data.paraSpecial} paraOne={data.paraOne}></SectionTwoCard>)
        }
       </div>
       </div>
        

    </div>
  )
}

export default SectionTwo




const testional=[
  {   image:pic,
      name:"Cindy",
      tag:"Author,Podcast Host",
      para:'I can’t imagine my life without Copy.ai. It has changed the game for me. I can put in a sentence or two of a generic idea and Copy.ai takes it in and in 30 seconds or less',
      paraSpecial:'generates more than I can ever imagine',
      paraOne:'—each and every time I hit enter.'},
      {   image:pic,
        name:"Cindy1",
        tag:"Author,Podcast Host",
        para:'I can’t imagine my life without Copy.ai. It has changed the game for me. I can put in a sentence or two of a generic idea and Copy.ai takes it in and in 30 seconds or less',
        paraSpecial:'generates more than I can ever imagine',
        paraOne:'—each and every time I hit enter.'},
        {   image:pic,
          name:"Cindy2",
          tag:"Author,Podcast Host",
          para:'I can’t imagine my life without Copy.ai. It has changed the game for me. I can put in a sentence or two of a generic idea and Copy.ai takes it in and in 30 seconds or less',
          paraSpecial:'generates more than I can ever imagine',
          paraOne:'—each and every time I hit enter.'},
          {   image:pic,
            name:"Cindy3",
            tag:"Author,Podcast Host",
            para:'I can’t imagine my life without Copy.ai. It has changed the game for me. I can put in a sentence or two of a generic idea and Copy.ai takes it in and in 30 seconds or less',
            paraSpecial:'generates more than I can ever imagine',
            paraOne:'—each and every time I hit enter.'},
            {   image:pic,
              name:"Cindy4",
              tag:"Author,Podcast Host",
              para:'I can’t imagine my life without Copy.ai. It has changed the game for me. I can put in a sentence or two of a generic idea and Copy.ai takes it in and in 30 seconds or less',
              paraSpecial:'generates more than I can ever imagine',
              paraOne:'—each and every time I hit enter.'},
              {   image:pic,
                name:"Cindy5",
                tag:"Author,Podcast Host",
                para:'I can’t imagine my life without Copy.ai. It has changed the game for me. I can put in a sentence or two of a generic idea and Copy.ai takes it in and in 30 seconds or less',
                paraSpecial:'generates more than I can ever imagine',
                paraOne:'—each and every time I hit enter.'}
]