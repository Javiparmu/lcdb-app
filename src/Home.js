import React from 'react'
import ImageSlider from './components/ImageSlider'
import ProductCards from './components/ProductCards'
import { SliderData } from './components/SliderData'
import './App.css'
import ContactMeForm from './components/ContactMeForm'
import chessTools from 'chess-tools'

const Home = () => {
  chessTools.init()
  return (
    <div>
      <h1>Las cajitas de Belén</h1>
      <ImageSlider slides={SliderData} />
      <a id='productos' />
      <h2>Productos</h2>
      <ProductCards />
      <a id='contacto' />
      <h2>Contacto</h2>
      <ContactMeForm />
    </div>
  )
}

export default Home
