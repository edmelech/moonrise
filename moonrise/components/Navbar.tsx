import { NAV_LINKS } from '../constants'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav className="bg-white flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/moonrise-logo.svg" alt="logo" width={200} height={100} />

        <ul className='hidden h-full gap-12 lg:flex text-red-500'>
          {NAV_LINKS.map((link) => (
            <Link href={link.href} key={link.key}>
              {link.label}
            </Link>
          ))}
        </ul>
      </Link>
    </nav>
  )
}

export default Navbar