import React from 'react'
import { GiCardJoker } from "react-icons/gi";
const SectionHeader = ({icon,title,className}) => {
  return (
<div className={`section__head ${className} `}>
    <span>{icon}</span>
    <h2 className='text-5xl text-center font-bold text-white'>
      <span>O</span>
      <span>u</span>
      <span>r</span>
      <span> </span>
      <span>P</span>
      <span>r</span>
      <span>o</span>
      <span>g</span>
      <span>r</span>
      <span>a</span>
      <span>m</span>
      <span>s</span>


      </h2>

</div>  )
}

export default SectionHeader