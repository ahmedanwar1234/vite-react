import React from 'react'
import { GiCardJoker } from "react-icons/gi";
const SectionValues = ({icon,title,className}) => {
  return (
<div className={`section__head ${className} `}>
    <span>{icon}</span>
    <h2 className='text-5xl text-center font-bold text-white'>
      <span>V</span>
      <span>a</span>
      <span>l</span>
      <span>u</span>
      <span>e</span>
      <span>s</span>



      </h2>

</div>  )
}

export default SectionValues