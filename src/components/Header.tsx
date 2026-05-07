'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold" style={{color: '#13294B'}}>
          UIF
        </Link>
        
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <div className={`${isOpen ? 'block' : 'hidden'} md:flex gap-8 absolute md:static top-full left-0 right-0 md:top-auto flex-col md:flex-row bg-white md:bg-transparent p-4 md:p-0`}>
          <Link href="#features" className="font-medium transition" style={{color: '#13294B'}}>Features</Link>
          <Link href="#contact" className="font-medium transition" style={{color: '#13294B'}}>Contact</Link>
          <button className="text-white px-6 py-2 rounded-lg transition font-semibold" style={{backgroundColor: '#E84A27'}}>Get Started</button>
        </div>
      </nav>
    </header>
  );
}
