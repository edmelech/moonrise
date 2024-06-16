import React from 'react'
import RootLayout from '@/app/layout'
import ExpertiseContent from '@/components/ExpertiseContent'

const expertise: React.FC = () => {
  return (
      <div className='border-t border-gray-500 pb-2 min-h-screen flex flex-col'>
        <ExpertiseContent />
      </div>
  )
}

export default expertise