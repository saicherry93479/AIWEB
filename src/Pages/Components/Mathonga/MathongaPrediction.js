import React, { useEffect, useState } from 'react'
import '../../Styles/Mathonga/MathongaPrediction.css'

import CustomSelect from './CustomSelect'


const branchOptions = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]
const stateOptions=[
    { value: 'Andhra Pradhesh', label: 'Andhra Pradhesh' },
    { value: 'Andhra Pradhesh one', label: 'Andhra Pradhesh one' },
    { value: 'Andhra Pradhesh two', label: 'Andhra Pradhesh two' },
]
const collegeOptions=[
    {value:"National Instiute of Technology",label:"National Instiute of Technology"},
    {value:"Indian Instiute of Information Technology",label:"Indian Instiute of Information Technology"},
    {value:"Government Funded Instiutions",label:'Government Funded Instiutions'}
]

const categoryOptions=[
    {value:'category one',label:'catgory one'},
    {value:'category one1',label:'catgory one1'},
    {value:'category one2',label:'catgory one2'}
]

const collegesData=[
    {college:'National Institute of Technology, Tiruchirappalli',
    branch:"Computer Science and Engineering (4 Years, Bachelor of Technology)",
    opening:'1',
    closing:'714',
    quota:'OS',
    category:"OPEN",
    type:'National Institute of Technology',
    seat:'Gender-Neutral'  
    },
    {college:'National Institute of Technology, Tiruchirappalli',
    branch:"Computer Science and Engineering (4 Years, Bachelor of Technology)",
    opening:'1',
    closing:'714',
    quota:'OS',
    category:"OPEN",
    type:'National Institute of Technology',
    seat:'Gender-Neutral'  
    }
]
const data=['css','css one','css two','css three']
const MathongaPrediction = () => {
    const [values,setValues]=useState([])
    const [branches,setBranches]=useState([])
    const [colleges,setColleges]=useState([])
    const [category,setCategories]=useState('')
    const [state,setState]=useState('')

    useEffect(()=>{
        console.log('branches ',branches)
    },[branches])
  return (
    <div className='mathongaPrediction'>
        <div className='mathongaPredictionNav'>
            <div className='mathongaPredictionNavLeft'>
                <img src='https://www.mathongo.com/jee-main-crash-course/assets/img/logo-light.svg' height={'40px'} style={{marginBottom:"12px"}}></img>
                <h1>JEE Main 2022 College Predictor</h1>
                <p>Data Source: JoSAA (2021) till Round 6</p>
            </div>
            <div className='mathongaPredictionNavRight'>
                <img src={'https://www.mathongo.com/dw/jee-main-chapter-wise-questions/anup_sir.png'} height='100px'></img>
            </div>
        </div>
 

        
       <div className='mathongaPredictionInputs'>
            <div className='mathongaCustomInput' >
                <p>Your Rank</p>
                <input type={'number'} className='mathongaCustomInputDiv'>
                

                </input>

            </div>
            <CustomSelect text={'Your Category'}  options={categoryOptions} values={category} setValues={setCategories} multi={false}></CustomSelect>
            <CustomSelect text={'Search/Select Branches'}  options={branchOptions} values={branches} setValues={setBranches}></CustomSelect>
    
  
            <CustomSelect text={'Seacrh/Select Home State(Domicile)'}  options={stateOptions} values={state} setValues={setState} multi={false}></CustomSelect>
            <CustomSelect text={'Type of College'}  options={collegeOptions} values={colleges} setValues={setColleges}></CustomSelect>
            <div className='mathongaCustomInput' >
                <p>Select Gender</p>
                <div className='mathongaCustomInputRadio'>
                    <div>
                        <input type="radio" id="html" name="fav_language" value="Gender-Netutal"/>
                        <label for="html">Gender-Netutal</label><br/>
                    </div>
                   <div>
                        <input type="radio" id="css" name="fav_language" value="Female-only(including Supernumerary)"/>
                        <label for="css">Female-only(including Supernumerary)</label><br/>
                   </div>
                    
                </div>

            </div>   
       </div>

       <div className='mathongaPredictionButton'>
            <p>Predict My Colleges</p>
       </div>

       <div className='mathongaPredictionTableDiv'>
            <table className='mathongaPredictionTable'>
                <thead>
                    <tr>
                        <th>College</th>
                        <th>Branch Name</th>
                        <th>OPening Rank</th>
                        <th>Closing Rank</th>
                        <th>Quota</th>
                        <th>Category</th>
                        <th>Type</th>
                        <th>Seat</th>
                    </tr>
                </thead>
                <tbody>
                    {collegesData.map((data)=>
                    <tr>
                        <td>{data.college}</td>
                        <td>{data.branch}</td>
                        <td>{data.opening}</td>
                        <td>{data.closing}</td>
                        <td>{data.quota}</td>
                        <td>{data.category}</td>
                        <td>{data.type}</td>
                        <td>{data.seat}</td>
                    </tr>)}
                </tbody>

                
            </table> 

       </div>
        

    </div>
  )
}

export default MathongaPrediction