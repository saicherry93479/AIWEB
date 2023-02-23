import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import DropDownIcon from '../../../Assets/Images/DropDownIcon'
import MenuIcon from '../../../Assets/Images/MenuIcon'
import '../../Styles/OnBoard/NavBarMenuItem.css'

const NavBarmenuItem = ({text,subMenu,index,redirect}) => {

  const [showMenu,setShowMenu]=useState(false)
  const navigate=useNavigate();
  const menuRef=useRef(null)
  
  return (
    <div className='navBarMenuItem' 
  
     >
       <div className='topMenu'
       onClick={()=>navigate(redirect)}

    
       
       >
          {text}
            {subMenu.length>0?
            <DropDownIcon></DropDownIcon>
            :<></>}
       </div>
    {
      subMenu.length>0?<div className='subMenu' ref={menuRef} id={`subMenu${index+1}`} >
      {
        subMenu.map((data,index)=><div>
          <p>{data}</p>
        </div>)
      }

    </div>:<></>
    }
        

        
        
    </div>
  )
}

export default NavBarmenuItem


