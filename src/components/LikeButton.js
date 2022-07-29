import React, { useEffect, useState } from 'react'
import { useProduct } from '../hooks/useProducts'
import { useUser } from '../hooks/useUser'
import '../styles/likeButtonStyle.scss'

const LikeButton = ({ id }) => {
  const [active, setActive] = useState(false)
  const [liked, setLiked] = useState(false)
  const [loading, setLoading] = useState(true)
  const { user } = useUser()
  const { setFavorite, setUnfavorite } = useProduct()

  useEffect(() => {
    handleFavorite(liked)
  }, [liked])

  const handleFavorite = (liked) => {
    loading
      ? console.log('loading')
      : liked
        ? setFavorite(id)
        : setUnfavorite(id)
    setLoading(false)
  }

  const handleLikeClick = () => {
    if (user !== null) {
      setLiked(prevLiked => !prevLiked)
    } else alert('Please login to like this product')
  }

  return (
    <div className='like' onClick={handleLikeClick}>
      <div className={active ? 'heart is-active' : 'heart'} onClick={() => { user ? setActive(!active) : setActive(false) }} />
    </div>
  )
}

export default LikeButton
