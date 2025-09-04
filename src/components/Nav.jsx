import React, { useState } from 'react'
import { logo, hamburgerMenu } from '../assets/icons/index.js'

const Nav = () => {

  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'About', href: '#' },
    { name: 'Services', href: '#' },
    { name: 'Projects', href: '#' },
    { name: 'Contact', href: '#' },
  ]

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  const renderLinks = () => {
    return (
        links.map((link, index) => {
            const isLast = index === links.length - 1;
            return (
                <li 
                    key={link.name} 
                    className={`group ${
                        isLast ? 'last-button' : ''
                    }`}
                >
                    <a href={link.href} className={isLast ? 'text-gray-950 md:group-hover:text-white' : ''} aria-label={`Go to ${link.name}`}>
                        {link.name}
                    </a>
                </li>
            )
        }
    )
  )}

  return (
    <nav aria-label='Primary Navigation'>
        <a href="#" aria-label='Go to main page'>
            <img src={logo} alt="Sunnyside Logo" />
        </a>

        <button
            type="button"
            aria-label="Toggle navigation"
            onClick={toggleMenu}
            className="md:hidden"
        >
            <img src={hamburgerMenu} alt="Toggle Menu" aria-hidden='true' />
        </button>

        {/* Mobile */}
        {isOpen && (
            <div className='mobile-nav'>
                <div className="arrow-wrapper">
                    <div className='arrow' />
                </div>
                <ul aria-label="Mobile Navigation">
                    {renderLinks()}
                </ul>
            </div> 
        )}
        
        {/* Desktop */}
        <ul className='desktop-nav' aria-label="Desktop Navigation">
            {renderLinks()}
        </ul>
    </nav>
  )
}

export default Nav