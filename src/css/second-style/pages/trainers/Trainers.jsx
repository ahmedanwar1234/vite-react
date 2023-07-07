import React from 'react'
import './trainers.css'
import { Header2 } from '../../../../Components-For-pages/Header2'
import HeaderImage from '../../../../images/header_bg_5.jpg'
import { trainers } from '../../../../Components-For-pages/data'
import {BsInstagram}from 'react-icons/bs'
import {AiOutlineTwitter}from 'react-icons/ai'
import {FaFacebookF}from 'react-icons/fa'
import {FaLinkedinIn}from 'react-icons/fa'
import { Trainer } from '../../../../Components-For-pages/Trainer'

export default function Trainers() {
  return (

    <>
    <Header2 titel="Our Trainers" image={HeaderImage} childern="facillis, iusto mumquam unde laboriosam expedita qui exercitationem? Dicta vero accusantium est aut molestiae fugit doloremque suscipoit qudo"> </Header2>
    
  <section className="trainers">
    <div className="container trainers__container">
      {
        trainers.map(({id,image,name,job,socials})=>{
      return    <Trainer key={id} image={image} name={name} job={job} social={
        [
          {icon:<BsInstagram/>,link:socials[0]} ,
                   {icon:<AiOutlineTwitter/>,link:socials[1]}
                 ,  {icon:<FaFacebookF/>,link:socials[2]}
                  , {icon:<FaLinkedinIn/>,link:socials[3]}


        ]
      }></Trainer>
        })
      }
    </div>
  </section>
    
    
    </>
  )
}
