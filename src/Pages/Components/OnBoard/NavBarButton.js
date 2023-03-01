import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../../Styles/OnBoard/NavBarButton.css'
const NavBarButton = ({text,icon,reverse,bColor,hColor,redirect=''}) => {
  const navigate=useNavigate();
  return (
    <div  className='navBarButton' style={{backgroundColor:bColor}} onClick={redirect.length>0?()=>navigate(redirect):()=>{}}>
        {reverse===true?<></>:<div>{icon}</div>}
        <p>{text}</p>
        {reverse===true?<div>{icon}</div>:<></>}
    </div>
  )
}

export default NavBarButton