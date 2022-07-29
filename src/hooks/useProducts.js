import { useEffect, useState } from 'react'
import productService from '../services/products'

export function useProduct () {
  const [products, setProduct] = useState([])

  useEffect(() => {
    productService.getAll()
      .then(initialProducts => {
        setProduct(initialProducts)
      })
  }, [])

  const regClick = (id) => {
    productService
      .registerClick(id)
      .then(returnedProduct => {
        setProduct(products.map(product => product.id === id ? returnedProduct : product))
      })
  }

  const setFavorite = (id) => {
    const product = products.find(p => p.id === id)
    const favProduct = { ...product, favCount: product.favCount + 1 }

    return (
      productService
        .setFavorite(id, favProduct)
        .then(returnedProduct => {
          setProduct(products.map(product => product.id === id ? returnedProduct : product))
        }))
  }

  const setUnfavorite = (id) => {
    const product = products.find(p => p.id === id)
    const unfavProduct = { ...product, favCount: product.favCount - 1 }

    return (
      productService
        .setUnfavorite(id, unfavProduct)
        .then(returnedProduct => {
          setProduct(products.map(product => product.id === id ? returnedProduct : product))
        }))
  }

  return {
    products,
    regClick,
    setFavorite,
    setUnfavorite
  }
}
