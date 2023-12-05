import React from 'react'
import MainBanner from '../../components/MainBanner'

import '../../styles/styles.scss'
import Offers from '../../components/Offers'
import Brands from '../../components/Brands'
import Shelf from '../../components/Shelf'
import Collection from '../../components/Collection'


const Home = () => {
  return (
    <>
    <MainBanner />
    <Offers />
    <Brands />
    <Shelf />
    <Collection />
    </>
  )
}

export default Home