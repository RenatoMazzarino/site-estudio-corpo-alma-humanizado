import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { label: 'Início', href: '/' },
    { label: 'O Estúdio', href: '/o-estudio' },
    { label: 'Jana', href: '/jana' },
    { label: 'Serviços', href: '/servicos' },
    { label: 'Plano Personalizado', href: '/plano-personalizado' },
    { label: 'Depoimentos', href: '/depoimentos' },
    { label: 'Parceiros', href: '/parceiros' },
    { label: 'Contato', href: '/contato' },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-surface shadow-sm' : 'bg-transparent'
        }`}
      >
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 lg:w-14 lg:h-14 flex-shrink-0">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <g className="transition-all duration-300 group-hover:opacity-80">
                    {/* Lotus petals in primary color */}
                    <path
                      d="M50 20 C45 25, 40 30, 35 40 L50 45 Z"
                      fill="none"
                      stroke="#C1A0AF"
                      strokeWidth="2"
                    />
                    <path
                      d="M50 20 C55 25, 60 30, 65 40 L50 45 Z"
                      fill="none"
                      stroke="#C1A0AF"
                      strokeWidth="2"
                    />
                    <path
                      d="M35 40 C30 45, 25 50, 25 60 L50 55 Z"
                      fill="none"
                      stroke="#C1A0AF"
                      strokeWidth="2"
                    />
                    <path
                      d="M65 40 C70 45, 75 50, 75 60 L50 55 Z"
                      fill="none"
                      stroke="#C1A0AF"
                      strokeWidth="2"
                    />
                    <circle cx="50" cy="55" r="8" fill="none" stroke="#C1A0AF" strokeWidth="2" />
                    {/* Supporting hands in secondary color */}
                    <path
                      d="M30 70 Q35 65, 40 62"
                      fill="none"
                      stroke="#5B6D54"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M70 70 Q65 65, 60 62"
                      fill="none"
                      stroke="#5B6D54"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </g>
                </svg>
              </div>
              <div className="hidden lg:block">
                <div className="font-heading text-lg font-semibold text-foreground leading-tight">
                  Estúdio Corpo & Alma
                </div>
                <div className="font-paragraph text-xs text-text-secondary italic">
                  Humanizado
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`font-paragraph text-sm font-medium transition-colors duration-200 ${
                    location.pathname === link.href
                      ? 'text-primary'
                      : 'text-foreground hover:text-primary'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="flex items-center gap-4">
              <Link to="/agendar" className="hidden sm:block">
                <Button className="bg-primary text-primary-foreground hover:bg-primary-dark rounded-[14px] px-6 h-11 font-paragraph font-medium">
                  Agendar
                </Button>
              </Link>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="xl:hidden p-2 text-foreground hover:text-primary transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 xl:hidden bg-surface pt-24"
          >
            <nav className="flex flex-col px-6 py-8 gap-6 max-h-screen overflow-y-auto">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`font-paragraph text-lg font-medium transition-colors duration-200 py-2 ${
                    location.pathname === link.href
                      ? 'text-primary'
                      : 'text-foreground hover:text-primary'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link to="/agendar" className="mt-4">
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary-dark rounded-[14px] h-12 font-paragraph font-medium">
                  Agendar
                </Button>
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Fixed CTA */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 p-4 bg-surface border-t border-primary-light">
        <Link to="/agendar" className="block">
          <Button className="w-full bg-primary text-primary-foreground hover:bg-primary-dark rounded-[14px] h-12 font-paragraph font-medium">
            Agendar agora
          </Button>
        </Link>
      </div>
    </>
  );
}
