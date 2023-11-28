import { NAV_LINKS } from '../constants'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav className="bg-white flex justify-between max-container padding-container relative z-30 p-5">
      <Link href="/">
        <Image src="/moonrise-logo.svg" alt="logo" width={200} height={100} />
      </Link>
      <ul className='hidden h-full gap-12 lg:flex'>
        {NAV_LINKS.map((link) => (
          <Link href={link.href} key={link.key} className="regular-16 text-lime-950 
          flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar