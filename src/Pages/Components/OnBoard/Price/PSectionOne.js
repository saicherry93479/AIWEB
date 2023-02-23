import React from 'react'
import PriceSectionOneCard from './PriceSectionOneCard'
import '../../../Styles/OnBoard/Price/PSectionOne.css'



const PSectionOne = () => {
  return (
    <div className='pSectionOne'>

        <div className='pSectionOneCards'>
            {
                pricingData.map((data,index)=>
                <PriceSectionOneCard  key={index} index={data.index}  planType={data.planType} price={data.price} tagOne={data.tagOne} tagTwo={data.tagTwo} buttonText={data.buttonText} data={data.data}>

                </PriceSectionOneCard>)
            }

        </div>

    </div>
  )
}

export default PSectionOne




const pricingData=[

    {
        index:0,
        planType:'Free',
        price:'0',
        tagOne:'2,000 words per month',
        tagTwo:'No Credit Card Required',
        buttonText:"Sign Up for Free",
        icon:'',
        data:[
            {
                bool:true,
                name:"Only 1 user seat"
            },
            {
                bool:true,
                name:"Only 1 user seat"
            },
            {
                bool:true,
                name:"Only 1 user seat"
            },
            {
                bool:true,
                name:"Only 1 user seat"
            },
            {
                bool:true,
                name:"Only 1 user seat"
            },
            {
                bool:true,
                name:"Only 1 user seat"
            }
        ]
    },
    {
        index:1,
        planType:'Free',
        price:'0',
        tagOne:'Billed $432/year',
        tagTwo:'Unlimited words',
        buttonText:"Sign Up for Free",
        icon:'',
        data:[
            {
                bool:true,
                name:"Only 1 user seat"
            },
            {
                bool:true,
                name:"Only 1 user seat"
            },
            {
                bool:true,
                name:"Only 1 user seat"
            },
            {
                bool:true,
                name:"Only 1 user seat"
            },
            {
                bool:true,
                name:"Only 1 user seat"
            },
            {
                bool:true,
                name:"Only 1 user seat"
            }
        ]
    },
    {   index:2,
        planType:'Enterprise',
        price:'Automate Any Workflow',
        tagOne:'  ',
        tagTwo:'  ',
        buttonText:"Sign Up for Free",
        icon:'',
        data:[
            {
                bool:true,
                name:"Only 1 user seat"
            },
            {
                bool:true,
                name:"Only 1 user seat"
            },
            {
                bool:true,
                name:"Only 1 user seat"
            },
            {
                bool:true,
                name:"Only 1 user seat"
            },
            {
                bool:true,
                name:"Only 1 user seat"
            },
            {
                bool:true,
                name:"Only 1 user seat"
            }
        ]
    }
]