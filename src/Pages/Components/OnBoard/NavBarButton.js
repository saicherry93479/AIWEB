import React from 'react'
import '../../Styles/OnBoard/NavBarButton.css'
const NavBarButton = ({text,icon,reverse,bColor,hColor}) => {
  return (
    <div  className='navBarButton' style={{backgroundColor:bColor}}>
        {reverse===true?<></>:<div>{icon}</div>}
        <p>{text}</p>
        {reverse===true?<div>{icon}</div>:<></>}
    </div>
  )
}

export default NavBarButton