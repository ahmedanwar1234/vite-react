import React from 'react'

export const Header2 = ({titel,image,childern}) => {
  return (
    <header className='header'>
    <div className="header__container ">
    <div className="header__container-bg">
            <img src={image} alt="" />
            </div>
         <div className="header_content">
            <h2>{titel}</h2>
            <p>{childern}</p></div>   
            
    </div>
        
        </header>
  )
}
