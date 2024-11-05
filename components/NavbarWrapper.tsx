'use client'

import dynamic from 'next/dynamic'

// Dynamically import Navbar with ssr: false
const DynamicNavbar = dynamic(() => import('@/components/Navbar'), { ssr: false });

export default function NavbarWrapper() {
  return <DynamicNavbar />;
}