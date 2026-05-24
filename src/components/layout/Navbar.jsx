import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Gamepad2 } from 'lucide-react';
import useScrollDirection from '../../hooks/useScrollDirection';
import Button from '../ui/Button';

const navLinks = [
  { label: 'Beranda', href: '#beranda' },
  { label: 'Kategori', href: '#kategori' },
  { label: 'Produk', href: '#produk' },
  { label: 'Bundle', href: '#bundle' },
  { label: 'Lisensi', href: '#lisensi' },
  { label: 'Testimoni', href: '#testimoni' },
  { label: 'FAQ', href: '#faq' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const { scrollDirection, scrollY } = useScrollDirection();

  const isScrolled = scrollY > 20;
  const isHidden = scrollDirection === 'down' && scrollY > 300 && !mobileOpen;

  // Simple scroll spy
  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.replace('#', ''));

    const handleScroll = () => {
      const scrollPos = window.scrollY + 120;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sectionIds[i]);
          return;
        }
      }
      setActiveSection(sectionIds[0]);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'glass-strong shadow-lg shadow-black/20' : 'bg-transparent'
        }`}
        initial={{ y: 0 }}
        animate={{ y: isHidden ? -100 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <nav className="section-container flex items-center justify-between h-16 lg:h-18" aria-label="Main navigation">
          {/* Logo */}
          <a href="#beranda" className="flex items-center gap-2 group" aria-label="SOLUSI GIM - Beranda">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center group-hover:shadow-glow-blue transition-shadow duration-300">
              <Gamepad2 className="w-5 h-5 text-white" />
            </div>
            <span className="font-heading font-bold text-xl text-white">
              SOLUSI <span className="gradient-text">GIM</span>
            </span>
          </a>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? 'text-cyan-400 bg-cyan-500/10'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Button variant="primary" size="sm" href="#produk">
              Lihat Katalog
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-slate-400 hover:text-white transition-colors cursor-pointer"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Tutup menu' : 'Buka menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/60 z-40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              className="fixed top-0 right-0 w-72 h-full glass-strong z-50 lg:hidden flex flex-col"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              <div className="flex items-center justify-between p-4 border-b border-slate-700/50">
                <span className="font-heading font-bold text-lg text-white">Menu</span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 text-slate-400 hover:text-white cursor-pointer"
                  aria-label="Tutup menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="flex flex-col p-4 gap-1 flex-1" aria-label="Mobile navigation">
                {navLinks.map((link) => {
                  const sectionId = link.href.replace('#', '');
                  const isActive = activeSection === sectionId;
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                        isActive
                          ? 'text-cyan-400 bg-cyan-500/10'
                          : 'text-slate-400 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {link.label}
                    </a>
                  );
                })}
              </nav>

              <div className="p-4 border-t border-slate-700/50">
                <Button variant="primary" href="#produk" className="w-full justify-center" onClick={() => setMobileOpen(false)}>
                  Lihat Katalog
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
