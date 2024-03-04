import React from 'react'
import MoonriseLogo from './MoonriseLogo'

const ContactForm: React.FC = () => {
  return (
    <div>
      <div className='py-8'>
        <p>contact</p>
        <p>Thank you for your interest in moonrise. To speak with a representative, please complete the form below. One of our experts will follow up with you shortly.</p>
      </div>
      <form>
        <div className='flex'>
          <div>
            <p>First name</p>
            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
          </div>
          <div>
            <p>Last name</p>
            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
          </div>
         
        </div>
      </form>
    </div>
  )
}

export default ContactForm