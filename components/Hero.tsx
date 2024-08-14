import React from 'react'
import Carousel from './Carousel';
import MoonriseLogo from './MoonriseLogo';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row">

    {/* LEFT */}
    

    <div className="bg-custom-color text-white p-8 md:p-16 min-h-screen md:w-3/5 md:min-w-3/5 md:order-1  ">
      <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold pb-4 md:pb-8 lg:pb-12 xl:pb-16 mb-4 md:mb-0">The high-water mark in talent solutions</h1>
      <p className="text-sm md:text-base lg:text-lg xl:text-lg font-light">moonrise. is a specialist talent partner in global infrastructure. It is our sole mission to provide first class
service to our clients. We source ideal candidates from niche markets and create lasting business
relationships. Boasting a deep and expanding network of industry leaders and experts across Europe,
North America, South America, Asia, Africa, and Australia, we have the very best talent right at our
fingertips. With an emphasis on civil infrastructure, we are recruitment specialists in Engineering,
Renewable Energy, Architecture, Real Estate, Aviation, Aerospace, and Technology.</p> 
      <br />
      <p className="text-sm md:text-base lg:text-lg xl:text-lg font-light">We understand how important our clients&apos; work is in creating a sustainable and functioning environment that works for everybody. Our clients trust us because we believe in what they do. We spend all of our time developing our knowledge of the market in real time with genuine passion to ultimately deliver the very best talent solutions.</p>
      <br />
      <p className="text-sm md:text-base lg:text-lg xl:text-lg font-light text-center pb-4 md:pb-0">We are passionate. We are unique. We are experts. We are...</p>
      <div className="hero-logo flex items-center justify-center w-1/2 md:w-1/4 mx-auto p-4 pt-2">
        <MoonriseLogo className="w-full h-auto"/>
      </div>
      <div className="text-sm md:text-base lg:text-lg xl:text-lg font-light text-center ">The high-water mark in talent solutions.</div>
    </div>
    
    <div className="md:w-2/5 md:order-2 overflow-hidden">
      <div className="relative w-full h-full">
        <Image 
          src="/balloons.jpg" 
          alt="Hero Image" 
          width={1500}
          height={1500}
          className="w-full h-full object-cover object-center min-w-full min-h-full" 
          style={{ objectFit: 'cover' }}
        />
      </div>
     </div>

    {/* <div className="bg-green-800 text-white p-4 h-screen mx-auto border-2 border-red-500">
      <Carousel />
    </div> */}

    </section>
  )
}

export default Hero