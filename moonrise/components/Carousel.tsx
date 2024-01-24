'use client'
import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const images = [
  '/Resize-Location.webp',
  '/Water-Engineer-Clipboard.jpg',
]

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autuplaySpeed: 2000,
  };

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`Carousel Image ${index + 1}`} />
        </div>
      ))}
    </Slider>
  )
}

export default Carousel