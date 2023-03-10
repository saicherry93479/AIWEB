import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import LogoIcon from '../../../Assets/Images/LogoIcon'
import MenuIcon from '../../../Assets/Images/MenuIcon'
import '../../Styles/OnBoard/NavBar.css'
import NavBarButton from './NavBarButton'
import NavBarmenuItem from './NavBarmenuItem'

const menuItems=[
    {text:"Predict",subMenu:[],redirect:'/predict'},
    {text:'Cut Off',subMenu:[],redirect:'/cutoffs'},
    {text:"Predict M",subMenu:[],redirect:'/mathongaPrediction'},
    {text:"Use Cases",subMenu:['For Social media','For Blog']},
    {text:"Resources",subMenu:['For Social media','For Blog','For Social media','For Blog']},
    {text:"Pricing",subMenu:[],redirect:'/prices'},
    {text:'Login',subMenu:[],redirect:'/signin'},
    
]
const NavBar = () => {
  const [showMenu,setShowmenu]=useState(false)
  const [count,setCount]=useState(1)
  const location=useLocation()

  useEffect(()=>{
    console.log('location is ',location.pathname)
    // if(showMenu===true){
      // setReverseAnimation(true)
      setShowmenu(false)
      
      
    // }else{
    //   setReverseAnimation(false)
    // }

   
  },[location])

  const navigate=useNavigate();
  return (
    <div className='navBar'>
 
        <div onClick={()=>navigate('/')} style={{cursor:"pointer"}}>
        <LogoIcon></LogoIcon>
        </div>
       <div className='navMenu' style={showMenu===true ?{display:"block",animationName:'mobileMenu'}:count>1 ?{animationName:"mobileMenuClose"}:{}}>
        <div className='menu'>
            {menuItems.map((data,index)=><NavBarmenuItem redirect={data.redirect} key={index} index={index} text={data.text} subMenu={data.subMenu}></NavBarmenuItem>)}
          </div>
          <div className='navSignupDesktopButton'>
          <NavBarButton text={"Get Started -- It's Free"} redirect={'/signup'} bColor={"#47BEB9"}  ></NavBarButton>
          </div>
          <div className='navSignupMobileButton' onClick={()=>navigate('/signup')}>
            <p>Sign Up</p>

          </div>

       </div>
       <div className='menuIcon' style={showMenu?{backgroundColor:"#47beb9",padding:"15px"}:{padding:"15px"}}  onClick={()=>{setShowmenu(p=>!p);setCount(p=>p+1)}}>
          <MenuIcon color={showMenu?'white':'black'}></MenuIcon>
       </div>
    </div>
  )
}

export default NavBar