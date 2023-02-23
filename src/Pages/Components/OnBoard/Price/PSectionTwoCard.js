import React, { useState } from 'react'

const PSectionTwoCard = ({item}) => {
    const [clicked,setClicked]=useState(false)
  return (
    <div className='question' style={clicked?{backgroundColor:"#47beb9",padding:'24px'}:{}}>
                <div>
                    <p style={{color:clicked?"white":""}}>{item.name}</p>
                    <p style={clicked?{transform:'rotate(45deg)',color:'white'}:{}} onClick={()=>setClicked(p=>!p)}>+</p>
                </div>
                <p style={clicked?{display:'block',color:"white"}:{display:'none'}}>{item.tag}</p>
    </div>
  )
}

export default PSectionTwoCard