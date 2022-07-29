import React, { useEffect } from 'react'
import { useImages } from '../hooks/useImages'

const RandomImage = ({ type }) => {
  const { images, getImageByType } = useImages()

  useEffect(() => {
    getImageByType(type)
  }, [])

  return (
    <div>
      <a href={`/products/${images[1]}`}><img src={images[0]} className='product-card-img' /></a>
    </div>
  )
}
export default RandomImage
