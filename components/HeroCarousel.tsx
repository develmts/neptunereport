import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { CAROUSEL_ITEMS } from '../constants';

const HeroCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % CAROUSEL_ITEMS.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + CAROUSEL_ITEMS.length) % CAROUSEL_ITEMS.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-marine-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/id/452/1920/1080" 
          alt="Ocean background" 
          className="w-full h-full object-cover opacity-40 grayscale contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-marine-900/80 via-marine-900/40 to-marine-900" />
        {/* Grid Overlay for Tech feel */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
      </div>

      {/* Carousel Content */}
      <div className="absolute inset-0 z-10 flex items-center justify-center px-4">
        <div className="w-full max-w-5xl mx-auto flex justify-between items-center">
          
          <button onClick={prevSlide} className="hidden md:flex p-4 rounded-full border border-white/10 text-white/50 hover:text-marine-400 hover:border-marine-400 transition-all duration-300 group">
            <ChevronLeft className="w-8 h-8 group-hover:-translate-x-1 transition-transform" />
          </button>

          <div className="w-full md:w-2/3 text-center relative h-64 flex items-center justify-center">
            <AnimatePresence mode='wait'>
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center"
              >
                <h1 className="text-4xl md:text-7xl font-serif font-bold text-slate-100 tracking-tighter mb-6">
                  {CAROUSEL_ITEMS[currentIndex].title}
                </h1>
                <div className="w-24 h-1 bg-marine-400 mb-6" />
                <p className="text-lg md:text-xl text-marine-300 max-w-2xl font-light leading-relaxed">
                  {CAROUSEL_ITEMS[currentIndex].subtitle}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <button onClick={nextSlide} className="hidden md:flex p-4 rounded-full border border-white/10 text-white/50 hover:text-marine-400 hover:border-marine-400 transition-all duration-300 group">
            <ChevronRight className="w-8 h-8 group-hover:translate-x-1 transition-transform" />
          </button>

        </div>
      </div>

      {/* Progress Indicators */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {CAROUSEL_ITEMS.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-1 transition-all duration-500 ${
              idx === currentIndex ? 'w-12 bg-marine-400' : 'w-4 bg-white/20 hover:bg-white/40'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
