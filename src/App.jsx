import React from 'react'
import Header from './components/Header'
import "./styles/styles.scss"
import Home from './pages/Home'
import Footer from './components/Footer'
import Modal from './components/Modal'


const  App = () =>{
  return (
    <>
      <Modal />
      <Header />
      <Home />
      <Footer />
    </>
  )
}

export default App
