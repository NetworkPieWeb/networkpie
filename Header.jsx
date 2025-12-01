import React from 'react';
import {Link,NavLink} from 'react-router-dom';

export default function Header(){
  return (
    <header className='sticky top-0 z-50 bg-black/30 backdrop-blur border-b border-white/5'>
      <div className='max-w-6xl mx-auto px-6 py-4 flex items-center justify-between'>
        <Link to='/' className='flex items-center gap-3'>
          <div className='w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br from-[#ff7a00] to-[#ff9a3a] text-black font-extrabold shadow-lg'>NP</div>
          <div>
            <div className='text-xs text-neutral-400'>Digital Systems & AI</div>
            <div className='text-lg font-bold'>NetworkPie</div>
          </div>
        </Link>

        <nav className='hidden md:flex items-center gap-6 text-sm text-neutral-300'>
          <NavLink to='/services' className='hover:text-white'>Services</NavLink>
          <NavLink to='/portfolio' className='hover:text-white'>Portfolio</NavLink>
          <NavLink to='/about' className='hover:text-white'>About</NavLink>
          <NavLink to='/contact' className='hover:text-white'>Contact</NavLink>
          <Link to='/contact' className='ml-2 px-4 py-2 rounded-lg bg-gradient-to-br from-[#ff7a00] to-[#ff9a3a] text-black font-semibold'>Get a Quote</Link>
        </nav>
      </div>
    </header>
  );
}