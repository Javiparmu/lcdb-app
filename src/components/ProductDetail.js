import React from 'react'
// import { useUser } from './hooks/useUser'
import '../App.css'
import { useParams } from 'react-router-dom'
import '../styles/productDetailStyles.css'
import LikeButton from './LikeButton'

const ProductDetail = ({ products }) => {
  const { id } = useParams()
  const product = products.find(product => product.id === id)
  console.log(product)

  return (
    <div>
      <h1>Detalles del producto</h1>
      {
      product
        ? <div><span><img className='detail-image' src={product.images} alt='product' /><h3>Descripción</h3><p className='description'>{product.description}</p><p className='price'>{product.price + ' €'}</p><LikeButton id={id} /></span></div>
        : ''

      }
    </div>
  )
}

export default ProductDetail
