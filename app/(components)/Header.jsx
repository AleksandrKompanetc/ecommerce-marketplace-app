import React from 'react'
import Link from "next/link";
import { Search } from 'lucide-react';

const Header = () => {
  return (
    <div>
      {/* LOGO */}
      <Link href={'/'}>
        <span>MegaShop</span>
        <span>Marketplace</span>
      </Link>

      <div>
        <input type="text" placeholder='Type here...' />
        <Search />
      </div>

      <div>
        <button>Login</button>
      </div>
    </div>
  );
};

export default Header; 