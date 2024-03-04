import React from 'react'
import MoonriseLogo from './MoonriseLogo'

const ContactForm: React.FC = () => {
  return (
    <div className='flex flex-center items-center w-full min-h-screen px-5 py-5 bg-white'>
      <div className='py-8'>
        <p className='text-[#003030]'>contact</p>
        <p className='text-[#003030]'>Thank you for your interest in moonrise. To speak with a representative, please complete the form below. One of our experts will follow up with you shortly.</p>
      </div>

      <div> 
        <form className='flex'>
          <div className='flex'>
            <div>
              <p className='text-[#003030]'>First name</p>
              <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            </div>
            <div>
              <p className='text-[#003030]'>Last name</p>
              <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ContactForm