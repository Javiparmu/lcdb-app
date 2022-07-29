import { useState } from 'react'

const useMouseEntersCheck = () => {
  const [mouseEnter, setMouseEnter] = useState(false)

  function handleMouseEnter () {
    console.log('mouse enter')
    setMouseEnter(true)
  }

  function handleMouseLeave () {
    console.log('handleMouseLeave')
    setMouseEnter(false)
  }
  return (
    mouseEnter,
    handleMouseEnter,
    handleMouseLeave
  )
}

export default useMouseEntersCheck
