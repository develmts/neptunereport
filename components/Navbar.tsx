import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Anchor, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinkClass = (path: string) => `
    relative px-2 py-1 text-sm uppercase tracking-widest transition-colors duration-300
    ${location.pathname === path ? 'text-marine-400' : 'text-slate-400 hover:text-marine-400'}
    before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-marine-400 before:transition-all before:duration-300
    hover:before:w-full
  `;

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-marine-900/90 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3 group">
          <div className="p-2 border border-marine-400 rounded-none transform group-hover:rotate-45 transition-transform duration-500">
            <Anchor className="w-6 h-6 text-marine-400 transform group-hover:-rotate-45 transition-transform duration-500" />
          </div>
          <span className="font-serif text-xl font-bold tracking-widest text-slate-100">
            MERIDIAN
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          <Link to="/" className={navLinkClass('/')}>Home</Link>
          <Link to="/portfolio/sterling" className={navLinkClass('/portfolio/sterling')}>Sterling</Link>
          <Link to="/portfolio/vance" className={navLinkClass('/portfolio/vance')}>Vance</Link>
          <Link to="/contact" className={navLinkClass('/contact')}>Contact</Link>
          <Link to="/contact" className="ml-4 px-5 py-2 border border-marine-400 text-marine-400 text-xs tracking-widest uppercase hover:bg-marine-400 hover:text-marine-900 transition-all duration-300">
            Hire Us
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-slate-200" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-marine-900 border-t border-marine-800 flex flex-col items-center py-8 space-y-6 shadow-2xl">
          <Link to="/" onClick={() => setIsOpen(false)} className="text-slate-200 hover:text-marine-400 uppercase tracking-widest">Home</Link>
          <Link to="/portfolio/sterling" onClick={() => setIsOpen(false)} className="text-slate-200 hover:text-marine-400 uppercase tracking-widest">Capt. Sterling</Link>
          <Link to="/portfolio/vance" onClick={() => setIsOpen(false)} className="text-slate-200 hover:text-marine-400 uppercase tracking-widest">Dr. Vance</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="text-slate-200 hover:text-marine-400 uppercase tracking-widest">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
