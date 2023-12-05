import React from 'react'

import Importados  from '../../assets/importados.png'
import Estoque from '../../assets/estoque.png'
import Trocas from '../../assets/trocas.png'
import Desconto from '../../assets/desconto.png'
import Frete from '../../assets/frete.png'

import './index.scss'

const Offers = () => {

  const cards = [
    {
      image: `${Importados}`,
      title: 'Produtos importados',
      subtitle: 'Produto de alta qualidade',
    },
    {
      
      image: `${Estoque}`,
      title: 'Estoque no Brasil',
      subtitle: 'Produtos mais perto de você! ',
    },
    {
     
      image: `${Trocas}`,
      title: 'Trocas garantidas',
      subtitle: 'Trocas em até 48 horas, veja as regras',
    },
    {
     
      image: `${Desconto}`,
      title: 'Ganhe 5% off',
      subtitle: 'Pagando á vista no Cartão',
    },
    {
     
      image: `${Frete}`,
      title: 'Frete Grátis',
      subtitle: 'Em compras acima de R$499,90', 
    }
    
  ]
 
  return (
    <section className='offers'> 
      <div className="offers__title">
        <h3>Por que comprar na Maeztra</h3>
      </div>
      
      <div className="offers__cards">
        {cards.map((offer, index) => (
        <div id={index} className="card">
          <img className='card__image' src={offer.image} alt={offer.title} />
          <div className="card__containerTitle">
            <h4 className="card__title">{offer.title}</h4>
            <p className='card__subtitle'>{offer.subtitle}</p>
          </div>
        </div>
          ))}
      </div>
    </section>
  )
}

export default Offers