import React from 'react'

const CutOffsButton = ({text,bColor='#47beb9',onClick}) => {
  return (
    <div className='cutOffsButton' onClick={onClick} style={{backgroundColor:bColor}}>
        <p>{text}</p>

    </div>
  )
}

export default CutOffsButton