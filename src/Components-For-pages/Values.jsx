import React from 'react'
import Image from '../images/values.jpg'
import SectionHeader from './SectionHeader'
import {GiCutDiamond} from 'react-icons/gi'
import { values } from './data'
import Card from './UI/Card'
import SectionValues from './sections/SectionValus'
export const Values = () => {
  return (
    <section className='values'>
<div className="container values__container">
    <div className="values__left">

        <div className="values__image">
            <img src={Image} alt="" />
        </div>
    </div>


    <div className="values__right">
        <SectionValues icon={<GiCutDiamond/>} ></SectionValues>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, molestias? Corporis quia fuga, praesentium repudiandae debitis voluptatem optio, magni incidunt dolores quisquam minima odit cumque! Natus, earum. Omnis, quisquam dolorum.
        </p>
        <div className="values__wrapper">
            {
                values.map(({id,icon,title,desc})=>{
                    return <Card key={id} className="values__value">
<span>{icon}</span>
<h4>{title}</h4>
<small>{desc}</small>
                    </Card>
                })
            }
        </div>
    </div>
</div>
    </section>
  )
}
