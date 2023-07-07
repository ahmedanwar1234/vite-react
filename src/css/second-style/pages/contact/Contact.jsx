import React from 'react'
import { Header2 } from '../../../../Components-For-pages/Header2'
import {MdEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io'
import HeaderImage from'../../../../images/header_bg_2.jpg'
import './contact.css'
export default function Contact() {
  return (
    <>
<Header2 titel="Get In Touch" childern="furga itaque ducimus , ad amet praesentium suscpot sit , assumenda nhil officia totam , animi culpa nobis nemo natus doloremque" image={HeaderImage} />
<section className="contact">
  <div className="container contact__container">
<div className="contact_wrapper">
  <a href="" ><MdEmail/></a>
  <a href="" ><BsMessenger/></a>
  <a href="" ><IoLogoWhatsapp/></a>

</div>



  </div>
</section>


    </>
  )
}
