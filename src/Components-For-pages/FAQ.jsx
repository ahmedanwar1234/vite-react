import React, { useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { AiOutlineMinus } from 'react-icons/ai'

const FAQ = ({question,answer}) => {
    const [block,setBlock]=useState(false)
  return (
    <article className='faq'>
        <div><h4>{
            question
            
            
            }</h4>
            <button className="faq__icon" onClick={()=>setBlock(!block)}>
{!block?<AiOutlinePlus/>:<AiOutlineMinus/>}
            </button>
            
            
            </div>
          {block&&  <p >
                {answer}
            </p>}
    </article>
  )
}

export default FAQ