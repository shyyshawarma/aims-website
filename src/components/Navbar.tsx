import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className = '' }) => {
  return (
                           <div className={`fixed top-8 left-1/2 transform -translate-x-1/2 w-fit px-12 py-4 border-2 border-blue-500/30 bg-white/5 rounded-2xl backdrop-blur-md flex items-center justify-center gap-10 md:gap-16 z-50 shadow-lg shadow-blue-500/10 ${className}`}>
          <Link href="/" className='text-base font-medium hover:tracking-widest duration-200 text-white hover:text-blue-300 transition-all'>
              Home
          </Link>
          <Link href="/about" className='text-base font-medium hover:tracking-widest duration-200 text-white hover:text-blue-300 transition-all'>
              About
          </Link>
          <Link href="/team" className='text-base font-medium hover:tracking-widest duration-200 text-white hover:text-blue-300 transition-all'>
              Team
          </Link>
          <Link href="/projects" className='text-base font-medium hover:tracking-widest duration-200 text-white hover:text-blue-300 transition-all'>
              Projects
          </Link>
          <Link href="/achievements" className='text-base font-medium hover:tracking-widest duration-200 text-white hover:text-blue-300 transition-all'>
              Achievements
          </Link>
    </div>
  );
};

export default Navbar; 