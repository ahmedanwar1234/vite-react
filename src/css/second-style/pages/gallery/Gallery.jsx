import React,{} from 'react'
import { Header2 } from '../../../../Components-For-pages/Header2'
import './gallery.css'
import HeaderImage from '../../../../images/header_bg_3.jpg'
import  g1 from '../../../../images/gallery1.jpg'
import  g2 from '../../../../images/gallery2.jpg'
import  g3 from '../../../../images/gallery3.jpg'
import  g4 from '../../../../images/gallery4.jpg'
import  g5 from '../../../../images/gallery5.jpg'
import  g6 from '../../../../images/gallery6.jpg'
import  g7 from '../../../../images/gallery7.jpg'
import  g8 from '../../../../images/gallery8.jpg'
import  g9 from '../../../../images/gallery9.jpg'
import  g10 from '../../../../images/gallery10.jpg'
import  g11 from '../../../../images/gallery11.jpg'
import  g12 from '../../../../images/gallery12.jpg'
import  g13 from '../../../../images/gallery13.jpg'
import  g14 from '../../../../images/gallery14.jpg'
import  g15 from '../../../../images/gallery15.jpg'

export default function Gallery() {


  return (
    <>
    <Header2 titel="Our Gallery"  image={HeaderImage} childern=" qyisquam id tenetur adipisci nesciunt ipsum amet in quibusdam,architecto nostrum nobis, set, deserunt odio possimus inventore eveniet illum perspiciatis"></Header2>
    
<section className="gallery">
  <div className="container gallery__container">
    <img src={g1} alt="" />
    <img src={g2} alt="" />
    <img src={g3} alt="" />
    <img src={g4} alt="" />
    <img src={g5} alt="" />
    <img src={g6} alt="" />
    <img src={g7} alt="" />
    <img src={g8} alt="" />
    <img src={g9} alt="" />
    <img src={g10} alt="" />
    <img src={g11} alt="" />
    <img src={g12} alt="" />
    <img src={g13} alt="" />
    <img src={g14} alt="" />
    <img src={g15} alt="" />



  </div>
</section>
    
    </>
  )
}
