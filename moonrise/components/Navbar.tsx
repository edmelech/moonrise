'use client'

import { useState } from 'react'
import { NAV_LINKS } from '../constants'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="bg-white flex justify-between py-5 px-10 relative z-30 ">
      <Link href="/">
        <Image src="/moonrise-logo.svg" alt="logo" width={200} height={100} />
      </Link>
      <ul className={`h-full gap-12 lg:flex ${isMenuOpen ? 'block' : 'hidden'}`}>
        {NAV_LINKS.map((link) => (
          <Link 
            href={link.href} 
            key={link.key} 
            className="regular-16 text-lime-950 
          flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
            {link.label}
          </Link>
        ))}
      </ul>

          <Image 
            src="/menu.svg"
            alt="menu"
            width={32}
            height={32}
            className='inline-block cursor-pointer lg:hidden'
            onClick={toggleMenu}
          />

    </nav>
  )
}

export default Navbar