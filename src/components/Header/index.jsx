import React, {useState} from 'react'
import LogoMaeztra from '../../assets/logo-maeztra.png'
import User from '../../assets/user.png'
import Wishlist from '../../assets/wishlist.png'
import Cart from '../../assets/cart.png'
import News from '../../assets/news.png'
import Search from '../../assets/icon-search.png'
import MiniCart from '../../assets/minicart.png'
import Burger from '../../assets/burger-menu.png'

import useMobile from '../../hooks/mobile'

import './index.scss'

const Header = () => {
  const mobile = useMobile();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }
  return (
    <header className='header'> 
      <div className="header__top">
        Acompanhe as melhores promoções disponíveis aqui na Maeztra.
      </div>
      {!mobile ? ( <>
      <div className="header__main">
        <div className="header__content">
        <div className="logo">
          <img src={LogoMaeztra} alt="logo Maeztra" />
        </div>
        <div className="search">
          <input className='search__input' type="text" placeholder='O que você busca ?' />
          <button className='search__button' type='button'>Buscar</button>
        </div>
        <nav className="links">
          <a className='links__options' href="#"><img src={User} /> <span>Minha Conta</span></a>
          <a className='links__options' href="#"><img src={Wishlist} /> <span>Favoritos</span></a>
          <a className='links__options cart' href="#"><img src={Cart} />  <span>Meu Carrinho</span></a>
        </nav>
        </div>
      </div>
      <div className="header__menu">
          <nav className="menus">
            <ul className='options'>
              <li className='options__item selected'><a href="#"><img src={News} /> <span>Novidades</span></a></li>
              <li className='options__item'><a href="#">Vestidos</a></li>
              <li className='options__item'><a href="#">Roupas</a></li>
              <li className='options__item'><a href="#">Sapatos</a></li>
              <li className='options__item'><a href="#">Lingerie</a></li>
              <li className='options__item'><a href="#">Acessórios</a></li>
              <li className='options__item'><a href="#">OUTLET</a></li>
            </ul>
          </nav>
      </div>
        </> ) : <>
      <div className='header__mobile'>
        <div className="header__contentMobile">
          <div className="menu-toggle" onClick={toggleMenu}>
            <div className="hamburger"><img src={Burger} /></div>
          </div>
          <div className="logo">
            <img src={LogoMaeztra} alt="logo Maeztra" />
          </div>
        </div>
        <div className="header__linksMobile">
          <img src={Search} alt="Busca" />
          <img src={MiniCart} alt="Minicart" />
        </div>
      </div>
        <nav className={`menus__mobile ${menuOpen ? 'active' : ''}`}>
          <ul className='options'>
            <li className='options__item selected'><a href="#"><img src={News} /> <span>Novidades</span></a></li>
            <li className='options__item'><a href="#">Vestidos</a></li>
            <li className='options__item'><a href="#">Roupas</a></li>
            <li className='options__item'><a href="#">Sapatos</a></li>
            <li className='options__item'><a href="#">Lingerie</a></li>
            <li className='options__item'><a href="#">Acessórios</a></li>
            <li className='options__item'><a href="#">OUTLET</a></li>
          </ul>
        </nav>
        </>}
      
    </header>
    
  )
}

export default Header;