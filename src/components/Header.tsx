'use client'

import { useState } from 'react'
import Link from 'next/link'

const TELEGRAM_URL = 'https://t.me/ndemidov_portfolio'
const INSTAGRAM_URL = 'https://www.instagram.com/dem_prof'

const NAV_LINKS = [
  { label: 'Услуги', href: '#services' },
  { label: 'Работы', href: '#portfolio' },
  { label: 'Цены', href: '#pricing' },
  { label: 'Отзывы', href: '#reviews' },
  { label: 'FAQ', href: '#faq' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="#" className="text-2xl font-extrabold text-dark">
              DemProf
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-bold text-dark hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark hover:text-primary"
              title="Instagram"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.057-1.645.069-4.849.069-3.204 0-3.584-.012-4.849-.069-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163C8.756 0 8.331.012 7.052.07 2.696.278.278 2.579.07 7.052.012 8.331 0 8.756 0 12c0 3.244.012 3.669.07 4.948.208 4.474 2.679 6.974 7.152 7.182 1.279.058 1.704.07 4.948.07 3.244 0 3.669-.012 4.948-.07 4.47-.208 6.956-2.678 7.158-7.152.058-1.279.07-1.704.07-4.948 0-3.244-.012-3.669-.07-4.948-.209-4.474-2.679-6.974-7.152-7.182C15.669.012 15.244 0 12 0Z" />
              </svg>
            </a>
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-primary text-white font-bold rounded-md hover:opacity-90 transition-opacity"
            >
              Написать в Telegram
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden flex items-center gap-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-bold text-dark hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-primary text-white font-bold rounded-md text-center"
            >
              Написать в Telegram
            </a>
          </nav>
        )}
      </div>
    </header>
  )
}
