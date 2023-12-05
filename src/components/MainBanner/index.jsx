import React from 'react'
import Slider from 'react-slick';
import useMobile from '../../hooks/mobile'

import Banner  from '../../assets/Banner.png'
import BannerMobile from '../../assets/banner-mobile.png'

import './index.scss'
import '../../styles/styles.scss'

 const MainBanner = () => {
  const mobile = useMobile();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "linear",
    lazyLoad: "ondemand",
  };
 
  return (
    <div className="banner">
      <Slider {...settings}>  
          <div >
           <a href="#" className='banner__anchor'> <img className='banner' src={!mobile ? Banner : BannerMobile}  /></a>
          </div>
          <div >
          <a href="#" className='banner__anchor'><img className='banner' src={!mobile ? Banner : BannerMobile} /></a>
          </div>
          <div >
          <a href="#" className='banner__anchor'><img className='banner' src={!mobile ? Banner : BannerMobile} /></a>
          </div>
          <div >
          <a href="#" className='banner__anchor'><img className='banner' src={!mobile ? Banner : BannerMobile} /></a>
          </div>
      </Slider>
    </div>
  );

}

export default MainBanner