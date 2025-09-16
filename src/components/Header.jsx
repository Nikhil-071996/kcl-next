'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import '@/assets/styles/header.css'

export default function Header() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  // Close menu on route change
  useEffect(() => {
    closeMenu()
  }, [pathname])

  return (
    <header>
      <section className="marquee-wrapper">
        <marquee>
          🏆 Kabaddi Champions League Haryana - Pre-Launch Event on 18th August 2025
          &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp; 📰 Press Conference at Ramada, Sonipat (18th August 2025)
          &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp; 📢 Registration for KCL Haryana Trials is Now Open!
        </marquee>
      </section>

      <div className="container">
        <Link href="/" className="logo">
          <div className="logo-wrapper">
            <img src='/images/footer/main_logo.png' alt="KCL"  />
          </div>
        </Link>

        <button
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={isMenuOpen ? 'active' : ''}>
          <Link href="/" className={pathname === '/' ? 'active' : ''} onClick={closeMenu}>
            Home
          </Link>
          <Link href="/team" className={pathname === '/team' ? 'active' : ''} onClick={closeMenu}>
            Teams
          </Link>
          <Link href="/fixtures" className={pathname === '/fixtures' ? 'active' : ''} onClick={closeMenu}>
            Matches
          </Link>
          <Link href="/standings" className={pathname === '/standings' ? 'active' : ''} onClick={closeMenu}>
            Standing
          </Link>
          <Link href="/about-us" className={pathname === '/about-us' ? 'active' : ''} onClick={closeMenu}>
            About Us
          </Link>

          <div className="dropdown">
            <Link href="#" className={pathname.startsWith('/media') ? 'active' : ''}>
              Media
            </Link>
            <div className="dropdown-content">
              <Link href="/media/photos" onClick={closeMenu}>Photos</Link>
              <Link href="/media/videos" onClick={closeMenu}>Videos</Link>
            </div>
          </div>

          <Link href="/contact-us" className={pathname === '/contact-us' ? 'active' : ''} onClick={closeMenu}>
            Contact Us
          </Link>
          <Link href="/register" className={`contact-us ${pathname === '/register' ? 'active' : ''}`} onClick={closeMenu}>
            Register
          </Link>
        </nav>
      </div>
    </header>
  )
}
