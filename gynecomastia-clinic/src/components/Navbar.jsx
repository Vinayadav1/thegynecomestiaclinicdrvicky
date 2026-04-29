import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/treatments', label: 'Treatments' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [location])

  const isActive = (to) => location.pathname === to

  return (
    <nav className={`fixed top-0 w-full z-50 navbar-glass transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-teal-700 rounded-lg flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform">
              <span className="text-white font-serif font-bold text-xl">G</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-serif font-bold text-lg leading-tight">The Gynecomastia Clinic</span>
              <span className="text-teal-400 text-[10px] tracking-widest uppercase font-bold">Expert Surgical Care</span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`font-medium transition-colors ${isActive(to) ? 'text-teal-400' : 'text-white hover:text-teal-400'}`}
              >
                {label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2.5 rounded-full font-semibold transition-all shadow-lg hover:shadow-teal-500/20 active:scale-95"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            ) : (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M4 6h16M4 12h16m-7 6h7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-navy-light mt-4 rounded-2xl overflow-hidden" style={{ background: '#1a2942' }}>
            <div className="flex flex-col space-y-4 p-6">
              {navLinks.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className={`font-medium py-2 transition-colors ${isActive(to) ? 'text-teal-400' : 'text-white hover:text-teal-400'}`}
                >
                  {label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2.5 rounded-full font-semibold transition-all shadow-lg text-center"
              >
                Book Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
