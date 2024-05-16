
import React from 'react'
import RootLayout from '@/app/layout'
import ContactForm from '@/components/ContactForm'

const contact: React.FC = () => {
  return (
    // <RootLayout>
      <div className='border-t border-gray-500'>
        <ContactForm />
      </div>
    /* </RootLayout> */

  )
}

export default contact