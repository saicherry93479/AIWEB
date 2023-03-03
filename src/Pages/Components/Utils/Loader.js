import React, { useEffect } from 'react'
import './Loader.css'
const Loader = ({setCloseLoader}) => {

    useEffect(()=>{
        console.log('came ')
        setTimeout(()=>{
            setCloseLoader(false)
        },3000)
    },[])
  return (
    <div class="boxes">
    <div class="box">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
    <div class="box">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
    <div class="box">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
    <div class="box">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
</div>
  )
}

export default Loader