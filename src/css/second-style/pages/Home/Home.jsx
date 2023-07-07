import React from 'react'
import './home.css'
import Header from '../../../../Components-For-pages/Header'
import Program from '../../../../Components-For-pages/Program'
import { Values } from '../../../../Components-For-pages/Values'
import { FAQs } from '../../../../Components-For-pages/FAQs'
import Testimonials from '../../../../Components-For-pages/Testimonials'
import { Footer } from '../../../../Components-For-pages/Footer'
export default function Home() {
  return (
    < ><Header/>
    
    <Program />
    <Values />
    <FAQs />
    <Testimonials />
    </>
  )
}
