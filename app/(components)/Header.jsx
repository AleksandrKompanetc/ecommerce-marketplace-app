import React from 'react'
import Link from "next/link";
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

const Header = () => {
  return (
    <header className='sticky top-0 z-50 bg-white shadow-md'>
      <div>
        {/* LOGO */}
        <Link href={'/'} className='text-xl font-bold text-gray-900'>
          <span className='relative top-2'>MegaShop</span>
          <span>Marketplace</span>
        </Link>

        <nav className='hidden md:flex md:gap-6'>
          <Link href={'/'} className='text-gray-900'>Home</Link>
        </nav>

        <div className='flex items-center gap-4'>
          <Button variant={'outline'} className='hidden md:inline-block'>Log In</Button>
          <Button variant={'outline'} className='hidden md:inline-block'>Sign Up</Button>
          <button className=''>
            <Menu className='w-6 h-6 text-gray-900'/>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header; 