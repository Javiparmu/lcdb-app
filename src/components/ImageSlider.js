import React, { useState } from 'react'
import { SliderData } from './SliderData'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa'
import '../App.css'

const ImageSlider = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const length = slides.length

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null
  }

  const nextSlide = () => {
    setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1)
  }

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? length - 1 : currentSlide - 1)
  }

  return (
    <div>
      <section className='slider'>
        <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
        <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
        {SliderData.map((slide, index) => {
          return (
            <div className={index === currentSlide ? 'slide active' : 'slide'} key={index}>
              {index === currentSlide && <img src={slide.image} alt={slide.title} className='image' />}
            </div>
          )
        })}
      </section>
    </div>
  )
}

export default ImageSlider
