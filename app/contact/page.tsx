
import React from 'react'
import RootLayout from '@/app/layout'
import ContactForm from '@/components/ContactForm'

const contact: React.FC = () => {
  return (
      <div className='border-t border-gray-500 pb-2 min-h-screen flex flex-col'>
        <ContactForm />
      </div>
  )
}

export default contact