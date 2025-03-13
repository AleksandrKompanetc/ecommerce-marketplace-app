import React from 'react'
import Link from "next/link";
import { Search } from 'lucide-react';

const Header = () => {
  return (
    <div className='max-padd-container flexBetween py-2'>
      {/* LOGO */}
      <Link href={'/'} className='uppercase flex flex-col'>
        <span className='relative top-2'>MegaShop</span>
        <span>Marketplace</span>
      </Link>

      <div>
        <input type="text" placeholder='Type here...' />
        <Search />
      </div>

      <div>
        <button>Login</button>
        <button>Sign Up</button>
      </div>
    </div>
  );
};

export default Header; 