import React, { useState } from 'react'
import './Home.css'
import { FiAlignRight } from "react-icons/fi";

export default function Home() {
  const [icon,setIcon]=useState(false)

  return (
    <section>
<div className="h-container flex relative justify-between items-center text-white py-4 ">

    <img className='  w-24' src="https://real-estate-web.pages.dev/logo.png" alt="" />
    <FiAlignRight onClick={()=>setIcon(!icon)} className=' cursor-pointer visible md:invisible absolute right-3 text-2xl'/>

<div className={`divv md:flex rounded ${icon&&"hidden"} transform duration-300`}>
<ul className='a flex-col md:flex-row  flex mr-7  items-center cursor-pointer'>
        <li className='  ml-9  text-xl    text-gray-400'>Residencies</li>
        <li className='  ml-9  text-xl   text-gray-400'>Our Value</li>
        <li className='  ml-9  text-xl   text-gray-400'>Contact us</li>
        <li className='  ml-9  text-xl   text-gray-400'>Get Start</li>  

    </ul>
    <button className=' text-xl  px-5  py-1.5 bg-gradient-to-r  from-blue-500 to-blue-700  rounded transform duration-300 hover:p-6 '>Contact</button>
</div>
</div>

    </section>
  )
}
