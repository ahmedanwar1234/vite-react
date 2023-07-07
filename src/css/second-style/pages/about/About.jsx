import React from 'react'
import './about.css'
import image from '../../../../images/header_bg_1.jpg'
import { Header2 } from '../../../../Components-For-pages/Header2'
import storyImage from'../../../../images/about1.jpg'
import vision from'../../../../images/about2.jpg'
import mission from'../../../../images/about3.jpg'


export default function About() {
  return (
    <>
    <Header2 titel="About Us" image={image} childern="  iusto recusandae eos repellendus tempora illum at voluptatum, architecto ullam aperiam, ex perferendis minus? Libero incidunt doloribus dolorum dignissimos mollitia." ></Header2>
   
   <section className='about__story'>
<div className="container about__story-container">
<div className="about__section-image">
  <img src={storyImage} alt="story Image" />
</div>
<div className="about__section-content">
  <h1>Our Story</h1>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus cumque sed, alias vero voluptas non? Molestiae fugiat eos quidem voluptates eius quo reiciendis quis velit necessitatibus, minima laudantium sunt nesciunt?</p>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem consequuntur nulla eveniet sunt, quibusdam nihil cumque itaque corporis doloremque, error, velit et soluta blanditiis est fugit non! Saepe, dicta necessitatibus.</p></div>
</div>
   </section>







   <section className='about__vision'>
<div className="container about__vision-container">

<div className="vision__section-content">
  <h1>Our Vision</h1>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus cumque sed, alias vero voluptas non? Molestiae fugiat eos quidem voluptates eius quo reiciendis quis velit necessitatibus, minima laudantium sunt nesciunt?</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas nesciunt numquam quia asperiores aperiam quidem ipsam?</p>
</div>
<div className="about__section-image">
  <img src={vision} alt="story Image" />
</div>

</div>
   </section>




   {/*  */}
   <section className='about__mission'>
<div className="container mission__story-container">
<div className="about__section-image">
  <img src={mission} alt="story Image" />
</div>
<div className="about__section-content ">
  <h1>Our Mission</h1>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus cumque sed, alias vero voluptas non? Molestiae fugiat eos quidem voluptates eius quo reiciendis quis velit necessitatibus, minima laudantium sunt nesciunt?</p>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem consequuntur nulla eveniet sunt, quibusdam nihil cumque itaque corporis doloremque, error, velit et soluta blanditiis est fugit non! Saepe, dicta necessitatibus.</p></div>
</div>
   </section>


   
    </>
  )
}
