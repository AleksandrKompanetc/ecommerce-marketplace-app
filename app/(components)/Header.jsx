import React from 'react'
import Link from "next/link";
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

const Header = () => {
  return (
    <header className='flex justify-between items-center width-full max-padd-container px-10 py-4'>
      <div>
        {/* LOGO */}
        <Link href={'/'} className='flex flex-col justify-between gap-2'>
          <span className='relative top-2'>MegaShop</span>
          <span>Marketplace</span>
        </Link>

        <nav className='hidden md:flex rounded-full bg-white w-[444px] pl-6 gray'>
          <input type="text" placeholder='Type here...' className='bg-transparent w-full outline-none text-14px' />
          <Search className='cursor-pointer rounded-full h-10 w-11 p-2.5 m-1' />
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