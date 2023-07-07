import React from 'react'
import { BiSolidMap } from "react-icons/bi";
import './Landing.css'
export const Landing = () => {
  return (
    <div className='text-white h bg-gray-600 '>
<div className='flex h-full'>
    <div className='  flex flex-col justify-between items-center  '>
    <h1>Discover
Most Suitable
Property</h1>
<p>Find a variety of properties that suit you very easilty
Forget all difficulties in finding a residence for you</p>
<div className=' w-full justify-between flex  rounded-md px-7 py-3 border-2  border-gray-500  items-center bg-white'>
<BiSolidMap className=' text-xl text-blue-600'/>
<input type="text"  required/>
<button className='   bg-gradient-to-r from-blue-500 to-blue-700 px-6 py-1.5 rounded text-'>Search</button>

</div>
<div><ul className='flex'>
    <li>
        <h2>9,000</h2>
        <h2>+</h2>
        <p>premium product</p>
    </li>
    <li>
        <h2>9,000</h2>
        <h2>+</h2>
        <p>premium product</p>
    </li>
    <li>
        <h2>9,000</h2>
        <h2>+</h2>
        <p>premium product</p>
    </li>
    
    
    </ul></div>
</div>
<div className='img'>
    <img src="https://real-estate-web.pages.dev/hero-image.png" alt="" />
</div></div>



    </div>
  )
}
