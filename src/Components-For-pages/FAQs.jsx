import React from 'react'
import SectionF from './sections/sectionHfaqs'
import { FaQuestion } from 'react-icons/fa'
import { faqs } from './data'
import FAQ from './FAQ'
export const FAQs = () => {
  return (
    <section className='faqs'>

        <div className="container faqs__container">
            <SectionF icon={<FaQuestion/>} ></SectionF>
            <div className="faqs__wrapper">
                {
                    faqs.map(({id,question,answer})=>{
                        return <FAQ key={id} question={question} answer={answer}/>
                    })
                }
            </div>
        </div>

    </section>
  )
}
