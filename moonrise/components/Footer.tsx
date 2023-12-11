import { FOOTER_LINKS, SOCIALS } from '@/constants'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="flexCenter mb-2 bg-gray-100 py-16">
      <div className='padding-container max-container flex w-full flex-col gap-14 '>
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
          <div className='max-w-md'>
            <Link href='/' className='mb-10'>
              <Image src="moonrise-logo.svg" alt="logo" width={200} height={29} />
            </Link>
            <div className="flex flex-col gap-5 text-lime-950 py-8">
              <p>Join our newsletter to stay up to date with industry related articles, features, and announcements.</p>
            </div>
            <div className='flex space-x-4'>
              <input type="text" placeholder="Enter your email" className="input bg-gray-100 input-bordered rounded-md w-full max-w-xs border-lime-950" />
              <button className="btn btn-outline dark:border-lime-950 text-lime-950">Subscribe</button>
            </div>
            <div className="flex flex-col gap-5 text-lime-950 py-2 text-xs pt-6">
              <p>By subscribing you agree to with our <span className='underline'>Privacy Policy</span> and provide consent to receive updates from our company.</p>
            </div>
            
          </div>
       
          <div className='flex flex-wrap gap-10 justify-end md:flex-1 text-lime-950'>
            {FOOTER_LINKS.map((columns) => (
                <FooterColumn title={columns.title}>
                  <ul className='regular-14 flex flex-col gap-4 text-lime-950'>
                    {columns.links.map((link) => (
                      <Link href='/' key={link}>
                        {link}
                      </Link>
                    ))}
                   </ul> 
                </FooterColumn>
              ))}
          
          </div>
          <div className="flex flex-col gap-5 text-lime-950">
            <FooterColumn title={SOCIALS.title}>
              <ul className='regular-14 flex flex-col gap-4 text-lime-950'>
                {SOCIALS.links.map((link) => (
                  <li key={link.name} className='flex items-center'>
                    <Link href='/'>
                      <Image src={link.icon} alt={link.name} width={24} height={24} />
                    </Link>
                    <span className='ml-2'>{link.name}</span>
                  </li>
                ))}
              </ul>
            </FooterColumn>
          </div>
        </div>
        <div className="flex flex-col w-full">
          <div className="border-t-2 border-lime-950 border-opacity-50"></div> 
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