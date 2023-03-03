import React, { useState } from 'react'
import '../../Styles/Cutoffs/Cutoffs.css'
import CutOffSelect from './CutOffSelect'
import CutOffsButton from './CutOffsButton'


const yearData=[
    {value:'2018',label:"2018"},
    {value:'2019',label:"2019"},
    {value:'2020',label:"2020"},
    {value:'2021',label:"2021"}
]
const degreeData=[
    {value:"Btech",label:"Btech"},
    {value:"Btech one",label:"Btech one"},
    {value:"Btech two",label:"Btech two"},
    {value:"Btech three",label:"Btech three"},

]
const poolData=[
    {value:"All",label:"All"},
    {value:"Gender-Neutral",label:"Gender-Neutral"},
    {value:"Female-Only",label:"Female-Only"}
]
const programData=[
    {value:"Programme",label:"Programme"},
    {value:"Programme one",label:"Programme one"},
    {value:"Programme two",label:"Programme two"},
    {value:"Programme three",label:"Programme three"},
    
]
const durationData=[
    {value:"All",label:"All"},
    {value:"4 Years",label:"4 Years"},
    {value:"5 Years",label:"5 Years"}
    

]

const categoryData=[
    {value:"cat",label:"cat"},
    {value:"cat one",label:"cat one"},
    {value:"cat two",label:"cat two"},
]
const instructionData=[
    'For all previous years, only the final round Opening/Closing ranks are shown here.',
    'For all previous years, only the final round Opening/Closing ranks are shown here.',
    'For all previous years, only the final round Opening/Closing ranks are shown here.',
    'For all previous years, only the final round Opening/Closing ranks are shown here.',
    'For all previous years, only the final round Opening/Closing ranks are shown here.'
]
const instituteData=[
    {value:'IIT Delhi',label:"IIT Delhi"},
    {value:'IIT Delhi One',label:"IIT Delhi One"},
    {value:'IIT Delhi Two',label:"IIT Delhi Two"},
    {value:'IIT Delhi Three',label:"IIT Delhi Three"}
]
const CutOffs = () => {
    const [year,setYear]=useState(yearData[0])
    const [institue,setInstiute]=useState(instituteData[0])
    const [degree,setDegree]=useState(degreeData[0])
    const [pool,setPool]=useState(poolData[0])
    const [programme,setProgramme]=useState(programData[0])
    const [duration,setDuration]=useState(durationData[0])
    const [category,setCategories]=useState(categoryData[0])
  return (
    <div className='cutOffs' >
        <div className='cutOffsDiv'>

            <div className='cutOffsFlex'>
                <CutOffsButton text={'Year'} onClick={()=>{}}></CutOffsButton>
                <CutOffSelect options={yearData} placeholder=''   values={year} setValues={setYear} ></CutOffSelect>
                        
            </div>
            <p className='pCustomCutOff'>To all the future JEE aspirants, Best of Luck! :)) </p>

        </div>
        <div className='cutOffsDiv'>
            
            <p className='cutOffsPara'>Instructions</p>
            <div className='cutOffsInstructions'>
                <ul>
                    {instructionData.map((data)=><li>{data}</li>)}
                </ul>

            </div>
            <div className='divide'>

            </div>
            <p className='cutOffsPara'>Primary Filters</p>

            <div className='cutOffFilters'>

                <div className='cutOffsFlex'>
                    <CutOffsButton text={'Institute'} onClick={()=>{}}></CutOffsButton>
                    <CutOffSelect options={instituteData} placeholder=''   values={institue} setValues={setInstiute} ></CutOffSelect>
                            
                </div>
                <div className='cutOffsFlex'>
                    <CutOffsButton text={'Degree'} onClick={()=>{}}></CutOffsButton>
                    <CutOffSelect options={degreeData} placeholder=''   values={degree} setValues={setDegree} ></CutOffSelect>
                            
                </div>
                <div className='cutOffsFlex'>
                    <CutOffsButton text={'Pool'} onClick={()=>{}}></CutOffsButton>
                    <CutOffSelect options={poolData} placeholder=''   values={pool} setValues={setPool} ></CutOffSelect>
                            
                </div>
                <div className='cutOffsFlex'>
                    <CutOffsButton text={'Programme'} onClick={()=>{}}></CutOffsButton>
                    <CutOffSelect options={programData} placeholder=''   values={programme} setValues={setProgramme} ></CutOffSelect>
                            
                </div>
                <div className='cutOffsFlex'>
                    <CutOffsButton text={'Duration'} onClick={()=>{}}></CutOffsButton>
                    <CutOffSelect options={durationData} placeholder=''   values={duration} setValues={setDuration} ></CutOffSelect>
                            
                </div>
                <div className='cutOffsFlex'>
                    <CutOffsButton text={'Category'} onClick={()=>{}}></CutOffsButton>
                    <CutOffSelect options={categoryData} placeholder=''   values={category} setValues={setCategories} ></CutOffSelect>
                            
                </div>
            </div>
            <div className='divide'></div>
            <div className='cutOffsFlex'>
            <CutOffsButton bColor='#05f2e6' text={'Adv Rank'} onClick={()=>{}}></CutOffsButton>
            <input  className='cutOffInput' placeholder='Enter Adv Rank' type='number'></input>

            </div>
            <div className='cutOffsFlex'>
            <CutOffsButton bColor='#05f2e6' text={'Delta'} onClick={()=>{}}></CutOffsButton>
            <input className='cutOffInput' placeholder='Enter preference' type='number'></input>
           
            
            </div>

      

        </div>
        <CutOffsButton bColor='crimson' text={'Reset Filters'} onClick={()=>{}}></CutOffsButton>
        


    </div>
  )
}

export default CutOffs