import React from 'react';
import { Link } from 'react-router-dom';
import { Anchor } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-marine-900 border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <Link to="/" className="flex items-center justify-center md:justify-start space-x-2 mb-4">
              <Anchor className="w-5 h-5 text-marine-400" />
              <span className="font-serif font-bold text-slate-200 tracking-widest">MERIDIAN</span>
            </Link>
            <p className="text-marine-300 text-sm max-w-xs">
              Defining the standard in marine forensic investigation and expert witness services.
            </p>
          </div>

          <div className="flex space-x-8 text-sm tracking-widest text-marine-300">
             <Link to="/portfolio/sterling" className="hover:text-marine-400 transition-colors">STERLING</Link>
             <Link to="/portfolio/vance" className="hover:text-marine-400 transition-colors">VANCE</Link>
             <Link to="/contact" className="hover:text-marine-400 transition-colors">CONTACT</Link>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Meridian Forensics. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Built for precision.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
