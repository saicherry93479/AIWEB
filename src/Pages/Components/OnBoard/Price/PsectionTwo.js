import React, { useState } from 'react'
import '../../../Styles/OnBoard/Price/PSectionTwo.css'
import PSectionTwoCard from './PSectionTwoCard'



const pSectionTwoData=[
    {
        name:'What can I create with Copy.ai?',
        tag:"We have copywriting tools for everything you need to start and run your business! You can write blog posts,product descriptions ,and even Instagram captions with Copy.ai We're always updating our tools,so let us know what elase you'd like to see"
    },
    {
        name:'What can I create with Copy.ai?',
        tag:"We have copywriting tools for everything you need to start and run your business! You can write blog posts,product descriptions ,and even Instagram captions with Copy.ai We're always updating our tools,so let us know what elase you'd like to see"
    },
    {
        name:'What can I create with Copy.ai?',
        tag:"We have copywriting tools for everything you need to start and run your business! You can write blog posts,product descriptions ,and even Instagram captions with Copy.ai We're always updating our tools,so let us know what elase you'd like to see"
    }

]
const PsectionTwo = () => {

 
    

  return (
    <div className='pSectionTwo'>
        <h1>Frequently Asked Questions</h1>
        {
            pSectionTwoData.map((item,index) =><PSectionTwoCard item={item}></PSectionTwoCard> )
        }
    </div>
  )
}

export default PsectionTwo