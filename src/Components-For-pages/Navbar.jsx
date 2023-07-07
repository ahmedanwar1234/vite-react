
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


  return (
    <div><nav>
<div className="container nav__container">
<Link onClick={()=>{setLink(true)}} className='logo' to="/"><img src={Logo} alt="Nav Logo" /></Link>
<ul className={`nav__links  transform duration-300 ${link&&"my_hidden"} z-10`} >
    {links.map(({name,path},index)=>{
       return <li key={index}>
            <NavLink onClick={()=>{setLink(!link)}} className={({isActive})=>isActive?"active-nav":''} to={path}>{name}</NavLink>
        </li>
    })}

</ul>
<button onClick={()=>setLink(!link)} className='nav__toggle'>
   
    {!link?<MdOutlineClose/>:<FiAlignRight/>}
</button>

</div>

        
        </nav></div>
  )
}
