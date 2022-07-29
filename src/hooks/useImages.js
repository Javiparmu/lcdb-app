import imageService from '../services/images'
import { useState } from 'react'

export function useImages () {
  const [images, setImages] = useState([])

  const getImageByType = (type) => {
    imageService
      .getImageByType(type)
      .then(initialImage => {
        setImages(initialImage)
      })
  }

  return {
    images,
    getImageByType
  }
}
