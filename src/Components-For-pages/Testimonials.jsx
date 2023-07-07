import React, { useState } from 'react'
import Testimo from './sections/sectionTestmonials'
import {ImFlickr2}from 'react-icons/im'
import Card from './UI/Card'
import {IoIosArrowDroprightCircle,IoIosArrowDropleftCircle}from'react-icons/io'
import { testimonials } from './data'


const Testimonials = () => {
    const [index,setIndex]=useState(1)
    const {name,quote,job,avatar}=testimonials[index];
  return (
    <section className='testimonials'>

        <div className="container tistimonials__container">

<Testimo className="testimo" icon={<ImFlickr2  />}></Testimo>
<Card className="testimonials">
<div className="testimoneals__avatar">
<img src={avatar} alt="" />

</div>
<p p className='testimonials__quote'>
{`${quote}`}
</p>

<h5>{name}</h5>
<small className='testimoneals__title'>{job}</small>
</Card>
<div className='  flex justify-center gap-2 text-4xl mt-3 cursor-pointer '>
    <IoIosArrowDropleftCircle onClick={()=>{setIndex(index=>index+1)
    
    if(index>=testimonials.length-1){
    setIndex(0);
    }
    
    } } className='testimonials__btn'/>
    <IoIosArrowDroprightCircle onClick={()=>{setIndex(index=>index-1)
    
    if(index<=0){
        setIndex(testimonials.length-1)
    }
    } }className='testimonials__btn'/>
</div>

        </div>
    </section>
  )
}

export default Testimonials