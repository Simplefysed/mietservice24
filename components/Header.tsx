'use client'

import { useState } from 'react'
import { Menu, X, Phone, Mail } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const navigation = [
    { name: 'Start', href: '/' },
    { name: 'Services', href: '/#services' },
    { name: 'Über uns', href: '/#about' },
    { name: 'Kontakt', href: '/#contact' },
  ]

  return (
    <header className="bg-white shadow-lg fixed w-full z-50">
      {/* Top Bar */}
      <div className="bg-primary-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-2 text-sm">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Phone className="h-4 w-4" />
                <span>+49 (0) 33206 21 935</span>
              </div>
              <div className="flex items-center space-x-1">
                <Mail className="h-4 w-4" />
                <span>info@lueckmietservice24.de</span>
              </div>
            </div>
            <div className="hidden sm:block">
              <span>Mo-Fr: 07:00-18:00 | Sa: 08:00-16:00</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-primary-700 hover:text-primary-600 transition-colors">
              Lück Mietservice<span className="text-primary-500">24</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href))
                      ? 'text-primary-600'
                      : 'text-secondary-700 hover:text-primary-600'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/#contact"
                className="btn-primary"
              >
                Jetzt anfragen
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-secondary-700 hover:text-primary-600"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-secondary-50 rounded-lg mb-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 text-base font-medium ${
                    pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href))
                      ? 'text-primary-600'
                      : 'text-secondary-700 hover:text-primary-600'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/#contact"
                className="btn-primary block text-center mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Jetzt anfragen
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
