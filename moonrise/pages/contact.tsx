import React from 'react'
import RootLayout from '@/app/layout'
import ContactForm from '@/components/ContactForm'

const contact: React.FC = () => {
  return (
    <RootLayout>
      <div>
        <h1>Contact Page</h1>
        <ContactForm />
      </div>
    </RootLayout>

  )
}

export default contact