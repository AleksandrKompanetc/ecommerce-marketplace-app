import React from 'react'
import Link from "next/link";
import { Search } from 'lucide-react';

const Header = () => {
  return (
    <div className='flex justify-between items-center width-full max-padd-container px-10 py-4'>
      {/* LOGO */}
      <Link href={'/'} className='flex flex-col justify-between gap-2'>
        <span className='relative top-2'>MegaShop</span>
        <span>Marketplace</span>
      </Link>

      <div className='hidden md:flex rounded-full bg-white w-[444px] pl-6 gray'>
        <input type="text" placeholder='Type here...' className='bg-transparent w-full outline-none text-14px' />
        <Search className='cursor-pointer rounded-full h-10 w-11 p-2.5 m-1' />
      </div>

      <div className='flex gap-15'>
        <button className='border-none transparent'>Login</button>
        <button className='shadow-none'>Sign Up</button>
      </div>
    </div>
  );
};

export default Header; 