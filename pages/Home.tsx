import React from 'react';
import HeroCarousel from '../components/HeroCarousel';
import { PARTNERS } from '../constants';
import { Link } from 'react-router-dom';
import { ArrowRight, Compass, Anchor } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-marine-900">
      <HeroCarousel />
      
      {/* Mission Statement */}
      <section className="py-24 relative">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-marine-400 tracking-[0.3em] text-sm uppercase font-bold mb-4 block">The Collective</span>
          <h2 className="text-3xl md:text-5xl font-serif text-slate-10