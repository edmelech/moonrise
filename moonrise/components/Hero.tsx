import React from 'react'
import Carousel from './Carousel';
import MoonriseLogo from './MoonriseLogo';

const Hero = () => {
  return (
    <section className='flex'>

    {/* LEFT */}

    <div className="bg-custom-color text-white p-16 h-screen w-3/5 min-w-3/5 ">
      <h1 className="text-7xl font-bold pb-12 w-4/5">The high-water mark in civil engineering recruitment</h1>
      <p className="text-lg font-weight: 100">moonrise. is a specialist talent partner in the US civil engineering industry. It is our sole mission to provide first class service to our clients, 
      sourcing ideal candidates from niche markets, creating lasting business relationships. With a vast and expanding network of industry leaders and experts, we have the very best of US engineering talent right at our fingertips. With an emphasis on civil infrastructure, we are recruitment specialists in: Water/Wastewater, Water Treatment, Transportation, Water Resources, and Land Development engineering.</p> 
      <br />
      <p className="text-lg font-weight: 100"> We understand how important our clients' work is in creating a sustainable and functioning environment that works for everybody. Our clients trust us because we believe in what they do, whilst we spend all of our time developing our knowledge of the market in real time with genuine passion, to ultimately deliver the very best engineering talent.</p>
      <div className='hero-logo flex items-center justify-center w-1/4 mx-auto p-4 pt-16'>
        <MoonriseLogo className="w-full h-auto"/>
      </div>
    </div>
    
    <div className="h-full w-2/5 border overflow-hidden">
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