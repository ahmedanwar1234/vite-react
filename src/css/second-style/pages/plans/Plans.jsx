import React from 'react'
import './Plans.css'
import { plans } from '../../../../Components-For-pages/data'
 import HeaderImage from '../../../../images/header_bg_4.jpg'
 import Card from '../../../../Components-For-pages/UI/Card'
 import { Header2 } from '../../../../Components-For-pages/Header2'
export default function Plans() {
  return (
    <> 
<Header2 titel="Membership Plans" image={HeaderImage} childern="Assumenda perspiciatis asperiores deserunt quisquam , sit iusto consectetur  vero similique aliquam" ></Header2>
<section className="plans">
  <div className="container plans__container">
    {
      plans.map(({id,name,desc,price,features})=>{
        return <Card key={id} className='plan'>
          <h3>{name}</h3>
<small>{desc}</small>
<h1>{`$${price}`}</h1>
<h4>features</h4>
{
  features.map(({feature,available},index)=>{
    return <p key={index} className={!available?'disable':' '}>{feature} </p>
  })
}


<button className='btn lg mt-10'>Choose your plan</button>
           </Card>
      })
    }
  </div>
</section>
    </>
  )
}
