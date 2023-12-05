import React from 'react'
import useMobile from '../../hooks/mobile'

import Produto1 from '../../assets/produto1.png'
import Produto2 from '../../assets/produto2.png'

import './index.scss'

import Slider from 'react-slick'

const Shelf = () => {

  const products = [
    {
      id: "1",
      image: `${Produto1}`,
      variations: {
        colors: ["#DEAC71", "#D37164", "#6497D3", "#3C3B79"],
      },
      price: 500,
      name: "Faux Suede Mini Skirt",
      description:
        "A faux suede mini skirt featuring exposed button-front closures and panel seam construction.",
      productLink: "/",
     
    },
    {
      id: "2",
      image: `${`${Produto2}`}`,
      variations: {
        colors: ["#1C1A19", "#D84E4B", "#CFC9B0", "#EAE9E5"],
      },
      price: 320,
      name: "Ruched Rose Print Mini Skirt",
      description:
        "A satin mini skirt featuring an allover floral print, ruched side with self-tie closure, concealed back zipper, and a flounce hem.",
      productLink: "/"
    },
    {
      id: "3",
      image: `${Produto1}`,
      variations: {
        colors: ["#DEAC71", "#D37164", "#6497D3", "#3C3B79"],
      },
      price: 500,
      name: "Faux Suede Mini Skirt",
      description:
        "A faux suede mini skirt featuring exposed button-front closures and panel seam construction.",
      productLink: "/",
    },
    {
      id: "4",
      image: `${Produto2}`,
      variations: {
        colors: ["#1C1A19", "#D84E4B", "#CFC9B0", "#EAE9E5"],
      },
      price: 320,
      name: "Ruched Rose Print Mini Skirt",
      description:
        "A satin mini skirt featuring an allover floral print, ruched side with self-tie closure, concealed back zipper, and a flounce hem.",
      productLink: "/",
     
    },
    {
      id: "5",
      image: `${Produto1}`,
      variations: {
        colors: ["#DEAC71", "#D37164", "#6497D3", "#3C3B79"],
      },
      price: 500,
      name: "Faux Suede Mini Skirt",
      description:
        "A faux suede mini skirt featuring exposed button-front closures and panel seam construction.",
      productLink: "/",
    },
    {
      id: "6",
      image: `${Produto2}`,
      variations: {
        colors: ["#1C1A19", "#D84E4B", "#CFC9B0", "#EAE9E5"],
      },
      price: 320,
      name: "Ruched Rose Print Mini Skirt",
      description:
        "A satin mini skirt featuring an allover floral print, ruched side with self-tie closure, concealed back zipper, and a flounce hem.",
      productLink: "/",
      
    },
    {
      id: "7",
      image: `${Produto1}`,
      variations: {
        colors: ["#DEAC71", "#D37164", "#6497D3", "#3C3B79"],
      },
      price: 500,
      name: "Faux Suede Mini Skirt",
      description:
        "A faux suede mini skirt featuring exposed button-front closures and panel seam construction.",
      productLink: "/",
      
    },
    {
      id: "8",
      image: `${`${Produto2}`}`,
      variations: {
        colors: ["#1C1A19", "#D84E4B", "#CFC9B0", "#EAE9E5"],
      },
      price: 320,
      name: "Ruched Rose Print Mini Skirt",
      description:
        "A satin mini skirt featuring an allover floral print, ruched side with self-tie closure, concealed back zipper, and a flounce hem.",
      productLink: "/",
     
    },
  ]

  const addToCart = (productId) => {
    
    console.log(`Produto ${productId} adicionado ao carrinho.`);
  };
  const mobile = useMobile();
  
  const settings = {
    slidesToShow: !mobile ? 5 : 1,
    slidesToScroll: !mobile ? 1 : 1,
    vertical: false,
    lazyLoad: "ondemand",
    arrows: !mobile,
    dots: false,
  };
  return (
    <div className='shelf'>
      <h3 className='shelf__title'>As mais pedidas</h3>
     <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id} className='product'>
            <img src={product.image} alt={product.name} className='product__image'/>
            <div className='variations'>
              {product.variations.colors.map((color, index) => (
                <span className={`variations__color ${index === 0 ? "active" : ''}`} key={index} style={{ backgroundColor: color, marginRight: '5px' }}></span>
              ))}
            </div>
            <p className='product__price'>R${product.price}</p>
            <h3 className='product__name'>{product.name}</h3>
            <p className='product__description'>{product.description}</p>
            <button className='product__button' onClick={() => addToCart(product.id)}>Adicionar ao carrinho</button>
          </div>
        ))}
      </Slider>
    </div>
  );
  
}

export default Shelf