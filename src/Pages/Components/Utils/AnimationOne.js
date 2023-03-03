import React, { useState } from 'react'
import { motion } from "framer-motion"
import './AnimationOne.css'
import Sample from '../Sample'
import Loader from './Loader'
const AnimationOne = ({setModalOpen}) => {
  

  const [closeLoader,setCloseLoader]=useState(true)
  
  const dropIn={
    hidden:{
      y:'-100vh',
      opacity:0

    },
    visible:{
      y:0,
      opacity:1,
      transition:{
        duration:0.1,
        type:'spring',
        damping:25,
        stiffness:500
      }

    },
    exit:{
      y:'100vh',
      opacity:0


    }
  }
  return (
    // <div style={{width:"100%",height:"100vh",background:"yellow"}}>
      <motion.div className='animationDiv' initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
        <motion.div onClick={(e)=>e.stopPropagation()}
        variants={dropIn}
        initial='hidden'
        animate='visible'
        exit='exit'
        >

        </motion.div>
        {/* <h1>hii</h1> */}
        { closeLoader===true && <Loader setCloseLoader={setCloseLoader}></Loader>}
        {
          closeLoader===false && <div style={{width:"100%",height:"400px",background:"yellow"}}>

          </div>
        }
        {/* {
          setTimeout(()=>{

          },5000)
        } */}



        {/* <button onClick={()=>setModalOpen(false)}>
          CLOSE
        </button> */}


      </motion.div>

    // </div>
  )
}

export default AnimationOne