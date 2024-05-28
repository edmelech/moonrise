'use client'

import { useState } from 'react'
import { NAV_LINKS } from '../constants'
import { AnimatePresence, delay, motion, stagger } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { transition } from '@chakra-ui/react'


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const menuVars = { // Initialize the menuVars variable
    initial: {
      opacity: 0,
      scaleY: 0,
    },
    animate: {
      opacity: 1,
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      opacity: 0,
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.12, 0, 0.39, 1],
      },
    },
  }
  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.9,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.9,
        staggerDirection: 1,
      },
    },
  }

    return (
      <>
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
              className="regular-16 text-lime-950 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
            >
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

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            key="menu"
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="initial"
            className="fixed left-0 top-0 w-full h-screen bg-green-900 origin-top text-white p-10 z-50"
          >
            <div className="flex h-full flex-col">
              <div className="flex justify-between">
                <h1 className="text-lg text-white">Moonrise</h1>
                <p className="cursor-pointer text-md text-black" onClick={toggleMenu}>Close</p>
              </div>
              <motion.div 
                variants={containerVars} 
                initial="initial"
                animate="open"
                exit="inital"
                className="flex flex-col h-full justify-center font-lora items-center gap-4"
              >
                {NAV_LINKS.map((link, index) => {
                  return (
                    <div className='overflow-hidden' key={index}>
                      <MobilesNavLink
                        title={link.label}
                        href={link.href}
                      />
                    </div>
                  )
                })}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
    )
  }


export default Navbar
const mobileLinkVars = {
  initial: {
    y: "30vh",
    transition: {
      duration: 0.5,
      ease: [0.37, 0, 0.63, 1],
    },
  }, open: {
    y: 0,
    transition: {
      ease: [0, 0.55, 0.45, 1],
      duration: 0.7
    },
  },
}

const MobilesNavLink = ({ title, href }) => {
  return (
    <motion.div 
      variants={mobileLinkVars} 
      className="text-4xl uppercase text-black">
      <Link href={href}>
        {title}
      </Link>
    </motion.div>
  )
}