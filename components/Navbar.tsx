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
        <Image 
          src="/moonrise-logo.svg" 
          alt="logo" 
          width="0"
          height={0 as number | `${number}`}
          className="w-52 h-auto"
        />
      </Link>
      <ul className={`lg:flex gap-12 ${isMenuOpen ? 'fixed top-0 left-0 w-full h-full bg-white flex flex-col justify-center items-center z-40' : 'hidden'}`}>
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
            style={{ width: "auto", height: "auto" }}
          />

    </nav>
  )
}

export default Navbar