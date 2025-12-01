import React from 'react';

export default function Footer(){
  return (
    <footer className='border-t border-white/10 mt-12'>
      <div className='max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between text-sm text-neutral-400'>
        <div className='flex items-center gap-3'>
          <div className='w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br from-[#ff7a00] to-[#ff9a3a] text-black font-extrabold'>NP</div>
          <div>
            <div className='font-semibold'>NetworkPie</div>
            <div className='text-xs text-neutral-400'>AI · Cloud · Automation</div>
          </div>
        </div>
        <div className='mt-4 md:mt-0'>© {new Date().getFullYear()} NetworkPie</div>
      </div>
    </footer>
  );
}