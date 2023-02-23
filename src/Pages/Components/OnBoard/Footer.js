import React from 'react'
import '../../Styles/OnBoard/Footer.css'




const Footer = () => {
  return (
    <div className='footer'>
   
      <div className='footerFlex'>
        {
          footrData.map((data,index)=><div key={index} className='footerItem'>
            <h1>{data.header}</h1>
            {data.tags.map((dat,index)=><p key={index}>{dat}</p>)}

          </div>)
        }
      </div>

    </div>
  )
}

export default Footer




const footrData=[
  {
    header:'Product',
    tags:['Pricing','Copy.ai Reviews','Copy.ai vs Jasper.ai','Copy.ai API','Alternatives','Write in 25+ Languages','Use Free AI Tools']
  },
  {
    header:'Product',
    tags:['Pricing','Copy.ai Reviews','Copy.ai vs Jasper.ai','Copy.ai API','Alternatives','Write in 25+ Languages','Use Free AI Tools']
  },
  {
    header:'Product',
    tags:['Pricing','Copy.ai Reviews','Copy.ai vs Jasper.ai','Copy.ai API','Alternatives','Write in 25+ Languages','Use Free AI Tools']
  },
  {
    header:'Product',
    tags:['Pricing','Copy.ai Reviews','Copy.ai vs Jasper.ai','Copy.ai API','Alternatives','Write in 25+ Languages','Use Free AI Tools']
  }
]