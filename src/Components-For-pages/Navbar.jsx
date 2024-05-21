
import React, { useEffect, useState } from 'react'
import {Link,NavLink} from 'react-router-dom'
import Logo from '../images/logo.png'
import './Navbar.css'
import axios from 'axios'
import { links } from './data'
import { FiAlignRight } from "react-icons/fi";
import{MdOutlineClose}from'react-icons/md'
export default function Navbar() {
    const [link,setLink]=useState(false)
console.log(link);
  return (
    <div className='z-50  '><nav>
     
<div className="container nav__container">
<Link onClick={()=>{setLink(true)}} className='logo' to="/"><img src={Logo} alt="Nav Logo" /></Link>
<ul className={`nav__links xl:flex  transform duration-300  ${link&&"hidden"} z-50`} >
    {links.map(({name,path},index)=>{
       return <li key={index}>
            <NavLink onClick={()=>{setLink(!link)}} className={({isActive})=>isActive?"active-nav":''} to={path}>{name}</NavLink>
        </li>
    })}

</ul>
<button onClick={()=>setLink(!link)} className='nav__toggle z-50'>
   
    {!link?<MdOutlineClose/>:<FiAlignRight/>}
</button>

</div>

        
        </nav></div>
  )
}
