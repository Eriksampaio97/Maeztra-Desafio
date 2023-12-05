import React from 'react'

import CollectionDesktop from '../../assets/collection.png'
import CollectionMobile from '../../assets/collectionMobile.png'

import useMobile from '../../hooks/mobile'

import './index.scss'
const Collection = () => {
  const mobile = useMobile();
  return (
    <section className="collection">
        <div className="collection__text">
          <h2 className='collection__title'>Lorem ipsum</h2>
          <p className='collection__subtitle'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum
            mauris posuere fusce proin mattis. Hendrerit cras ut nunc enim
            dictum. Mattis proin ut quis donec sed eget nulla. Vel mi ut mauris
            integer. Nibh sagittis in lobortis sed cursus condimentum velit
            pharetra. Amet luctus ut vulputate scelerisque placerat consequat.
            Neque arcu mi iaculis id. Vel vitae, pharetra, a nec tristique.
            Feugiat id tortor eu mauris pulvinar velit massa. Ut ornare augue
            eget convallis volutpat aliquet. Sed sed pellentesque porttitor
            phasellus donec condimentum sit sapien.
          </p>
        </div>

        <div className="collection__image">
          <img
            className="collection__banner"
            src={!mobile ? CollectionDesktop : CollectionMobile}
            alt="new colection"
          />
          
        </div>
      </section>
  )
}

export default Collection