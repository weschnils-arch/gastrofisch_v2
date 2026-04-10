import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

interface NavigationProps {
  isScrolled: boolean;
}

const Navigation = ({ isScrolled }: NavigationProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/einzelhandel', label: 'Einzelhandel' },
    { path: '/grosshandel', label: 'Großhandel' },
    { path: '/ueber-uns', label: 'Über Uns' },
    { path: '/rezepte', label: 'Rezepte' },
    { path: '/kontakt', label: 'Kontakt' },
  ];

  const isActive = (path: string) => location.pathname === path;

  const leftLinks = navLinks.slice(0, 3);
  const rightLinks = navLinks.slice(3, 6);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isMobileMenuOpen ? 'bg-white shadow-lg py-4 sm:py-6' : (isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-4 sm:py-6' : 'bg-transparent py-6 sm:py-10')}`}>
      <div className="section-container">
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center justify-between w-full">
          <div className="flex-1 flex justify-end items-center gap-12 xl:gap-16">
            {leftLinks.map((link) => (
              <Link key={link.path} to={link.path}
                className={`relative font-lato text-[11px] xl:text-xs font-semibold tracking-[0.2em] whitespace-nowrap transition-all duration-300 ${isScrolled ? (isActive(link.path) ? 'text-adria' : 'text-graphite hover:text-adria') : (isActive(link.path) ? 'text-white' : 'text-white/80 hover:text-white')
                  }`}>
                {link.label}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-current transition-all duration-500 ${isActive(link.path) ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </Link>
            ))}
          </div>

          <div className="flex-shrink-0 px-16 xl:px-24">
            <Link to="/" className="relative z-10 block">
              <img
                src={isScrolled ? "/images/logo_grau.svg" : "/images/logo_weiss.svg"}
                alt="Gastro Fisch Brač"
                className="h-9 md:h-11 w-auto transition-all duration-500"
              />
            </Link>
          </div>

          <div className="flex-1 flex justify-start items-center gap-12 xl:gap-16">
            {rightLinks.map((link) => (
              <Link key={link.path} to={link.path}
                className={`relative font-lato text-[11px] xl:text-xs font-semibold tracking-[0.2em] whitespace-nowrap transition-all duration-300 ${isScrolled ? (isActive(link.path) ? 'text-adria' : 'text-graphite hover:text-adria') : (isActive(link.path) ? 'text-white' : 'text-white/80 hover:text-white')
                  }`}>
                {link.label}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-current transition-all duration-500 ${isActive(link.path) ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Navigation Bar */}
        <div className="lg:hidden flex items-center justify-between">
          <Link to="/" className="relative z-[60]">
            <img
              src={isMobileMenuOpen || isScrolled ? "/images/logo_grau.svg" : "/images/logo_weiss.svg"}
              alt="Gastro Fisch Brač"
              className="h-7 sm:h-8 w-auto transition-all duration-500"
            />
          </Link>

          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`relative z-[60] flex flex-col items-center justify-center w-10 h-10 rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'text-adria bg-adria/10' : (isScrolled ? 'text-graphite bg-black/5' : 'text-white bg-white/10')} ${isMobileMenuOpen ? 'burger-active' : ''}`}
            aria-label="Toggle menu">
            <span className="burger-line" />
            <span className="burger-line" />
            <span className="burger-line" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden fixed inset-0 bg-white z-[55] transform transition-transform duration-500 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full px-6 sm:px-10 pt-28 sm:pt-32 pb-8 overflow-y-auto">
          <img src="/images/logo_grau.svg" alt="Logo" className="h-12 sm:h-14 w-auto mx-auto mb-8 sm:mb-10" />
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path} onClick={() => setIsMobileMenuOpen(false)}
                className={`font-lato text-xl sm:text-2xl font-light tracking-wide py-4 border-b border-gray-100 flex justify-between items-center ${isActive(link.path) ? 'text-adria font-medium' : 'text-graphite'}`}>
                {link.label}
                <span className="text-adria/30 text-lg">→</span>
              </Link>
            ))}
          </nav>
          <a href="https://bookings.zenchef.com/results?rid=381707&pid=1001" target="_blank" rel="noopener noreferrer"
            className="btn-primary mt-auto text-base sm:text-lg py-4 sm:py-5 w-full text-center">
            Bistro Reservierung
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
