import React from 'react'
import Card from './UI/Card'
import { trainers } from './data'
export const Trainer = ({image,name,job,social}) => {
  return (
<Card className="trainer">
    <div className="trainer__img">
    <img src={image} alt="name" />
    </div>
    <h3>{name}</h3>
<p > {job}</p>
<div className="trainer__socials">
    {
        social.map(({icon,link},index)=>{
            return <a key={index} href={link} target="__blank" rel='noreffer noopener'>{icon}</a>
        })
    }
</div>
</Card>  )
}
