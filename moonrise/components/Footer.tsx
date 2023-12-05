import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from '@/constants'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="flexCenter mb-24">
      <div className='padding-container max-container flex w-full flex-col gap-14'>
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
          <Link href='/' className='mb-10'>
            <Image src="moonrise-logo.svg" alt="logo" width={74} height={29} />
          </Link>

          <div className='flex flex-wrap gap-10 sm:justify-between md:flex-1'>
            {FOOTER_LINKS.map((columns) => (
                <FooterColumn title={columns.title}>
                  <ul className='regular-14 flex flex-col gap-4 text-gray-300'>
                    {columns.links.map((link) => (
                      <Link href='/' key={link}>
                        {link}
                      </Link>
                    ))}
                   </ul> 
                </FooterColumn>
              ))}
          
          </div>
          <div className="flex flex-col gap-5">
            <FooterColumn title={SOCIALS.title}
              <ul className='regular-14 flex gap-4 text-gray-30'>
              
              </ul>
            </FooterColumn>
          </div>
        </div>
      </div>
    </footer>
  )
}

type FooterColumnProps = {
  title: string
  children: React.ReactNode
}

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className='flex flex-col gap-5'>
      <h4 className='Bold-18 whitespace-nowrap'>{title}</h4>
      {children}
    </div>
  )
}

export default Footer