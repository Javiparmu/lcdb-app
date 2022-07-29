import React from 'react'
import '../App.css'
import RandomImage from './RandomImage'

const ProductCards = () => {
  return (
    <div className='product-cards'>
      <div className='product-card'>
        <RandomImage type='Collar' />
        <p className='img-title'>
          Collares
        </p>
      </div>
      <div className='product-card'>
        <RandomImage type='Caja' />
        <p className='img-title'>Cajas</p>
      </div>
      <div className='product-card'>
        <RandomImage type='Pendiente' />
        <p className='img-title'>Pendientes</p>
      </div>
    </div>
  )
}

export default ProductCards
