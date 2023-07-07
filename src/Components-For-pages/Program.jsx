import React from 'react'
import { FaCrown } from "react-icons/fa";
import SectionHeader from './SectionHeader';
import { programs } from './data';
import {AiFillCaretRight}from'react-icons/ai'
import Card from './UI/Card';
import { Link } from 'react-router-dom';

const Program = () => {
  return (
    <><section className="programs container  mx-auto">
 <div className=" container programs__container">
<SectionHeader icon={<FaCrown/>} title='Our programs'/>
        </div>
        <div className="programs__wrapper">
{
    programs.map(({id,icon,title,path,info})=>{
        return <Card className="prgrams__program text-white " key={id}>
<span>{icon}</span>
<h4>{title}</h4>
<small>{info}</small>
<Link to={path} className='btn sm  flex'>Learn More <AiFillCaretRight className=''/></Link>
        </Card>
    })
}
        </div>
        </section></>
  )
}

export default Program