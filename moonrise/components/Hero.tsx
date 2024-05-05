import React from 'react'
import Carousel from './Carousel';
import MoonriseLogo from './MoonriseLogo';

const Hero = () => {
  return (
    <section className='flex flex-col-reverse md:flex-row'>

    {/* LEFT */}

    <div className="bg-custom-color text-white p-8 md:p-16 min-h-screen md:w-3/5 md:min-w-3/5 ">
      <h1 className="text-4xl md:text-7xl font-bold pb-4 md:pb-12">The high-water mark in civil engineering recruitment</h1>
      <p className="text-base md:text-lg font-light">moonrise. is a specialist talent partner in the North American infrastructure industry. It is our sole mission to provide first class service to our clients, sourcing ideal candidates from niche markets and creating lasting business relationships. Boasting a deep and expanding network of industry leaders and experts across the US and Canada, we have the very best talent right at our fingertips. With an emphasis on civil infrastructure, we are recruitment specialists in: Engineering, Architecture, Real Estate, Construction, Automation & Controls, and Renewable Energy.</p> 
      <br />
      <p className="text-base md:text-lg font-light">We understand how important our clients' work is in creating a sustainable and functioning environment that works for everybody. Our clients trust us because we believe in what they do, whilst we spend all of our time developing our knowledge of the market in real time with genuine passion to ultimately deliver the very best talent solutions.</p>
      <br />
      <p className='text-base md:text-lg font-light text-center pb-4 md:pb-0'>We are passionate. We are unique. We are experts. We are...</p>
      <div className='hero-logo flex items-center justify-center w-1/2 md:w-1/4 mx-auto p-4 pt-2'>
        <MoonriseLogo className="w-full h-auto"/>
      </div>
      <div className='text-base md:text-lg font-light text-center'>The high-water mark in recruitment.</div>
    </div>
    
    <div className="md:h-screen md:w-2/5 overflow-hidden">
      <img 
        src="resize-location-mid.webp" 
        alt="Hero Image" 
        className="w-full h-full object-cover object-center" 
        style={{ objectFit: 'cover' }}
      />
     </div>

    {/* <div className="bg-green-800 text-white p-4 h-screen mx-auto border-2 border-red-500">
      <Carousel />
    </div> */}

    </section>
  )
}

export default Hero