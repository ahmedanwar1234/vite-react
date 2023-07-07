import React, { useState } from 'react'
import './first.css'
export default function First() {
    const[print,setPrint]=useState(false)
    const[email,setEmail]=useState('')
const fucemail=()=>{
    {email&&`your email is ${email}`}
}
  return (
    <div>


<div className='app'><header class="header">
      <nav class="nav text-white">
        <a href="#" class="nav_logo">CodingLab</a>
        <ul class="nav_items">
          <li class="nav_item">
            <a href="#" class="nav_link">Home</a>
            <a href="#" class="nav_link">Product</a>
            <a href="#" class="nav_link">Services</a>
            <a href="#" class="nav_link">Contact</a>
          </li>
        </ul>
        <button class="button" id="form-open">Login</button>
      </nav>
    </header>
    
    
    
    <div className='form'>
<h1>Login</h1>
<form action="">
    <input onChange={(e)=>setEmail(e.target.value)} type="mail" placeholder='enter your email'/>
    <input type="passoard" placeholder='enter your passoward' />
    <div>
        <p>rememper me</p>
        <p>Forget passoword</p>
    </div>
    <button onClick={()=>{
        setPrint(!print)
        setEmail
        }}>Login now</button>
    <p>{print&&"the login is true"}</p>
    <p>{email&&`your email is ${email}`}</p>
    <p>not a memper <span>sign up now</span></p>
</form>
    </div>
    </div>



































    </div>
  )
}
