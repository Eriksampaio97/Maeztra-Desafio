import React from 'react'

import Comma  from '../../assets/comma.png'
import Melissa from '../../assets/melissa.png'
import Forever from '../../assets/forever21.png'
import Zara from '../../assets/zara.png'
import AnnTaylor from '../../assets/anntaylor.png'

import './index.scss'
const Brands = () => {

  const brands = [
    {
      image: `${Comma}`,
      
    },
    {
      
      image: `${Melissa}`,
     
    },
    {
      image: `${Forever}`,
      
    },
    {
     
      image: `${Zara}`,
      
    },
    {
     
      image: `${AnnTaylor}`,
      
    }
    
  ]
  return (
    <section className='brands'> 
      <div className="brands__title">
        <h3>Marcas Parceiras</h3>
      </div>
      
      <div className="brands__cards">
        {brands.map((brand, index) => (
       
          <img className='brand__image' src={brand.image}  />
         
        
          ))}
      </div>
    </section>
  )
}

export default Brands