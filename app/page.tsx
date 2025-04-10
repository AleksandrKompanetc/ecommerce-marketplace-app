"use client"

import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const products = [
  {
    id: 1,
    name: 'Wireless Headphones',
    category: 'Electronics',
    price: 59.99,
    image: '/products/headphones.jpg',
  },
  {
    id: 1,
    name: 'Wireless Headphones',
    category: 'electronics',
    price: 59.99,
    image: '/products/headphones.jpg',
  },
  {
    id: 2,
    name: 'Mountain Bike',
    category: 'sports',
    price: 499.99,
    image: '/products/bike.jpg',
  },
  {
    id: 3,
    name: 'Coffee Maker',
    category: 'home',
    price: 79.99,
    image: '/products/coffeemacker.jpg',
  },
]

export default function Home() {
  const [search, setSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || product.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const uniqueCategories = ['all', ...new Set(products.map((p) => p.category))]

  return (
    <>
      <Head>
        <title>Marketplace</title>
        <meta name='description' content='Simple Marketplace'/>
        <meta name='viewport' content='width=device-width, initial-scale=1'/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='min-h-screen bg-gray-100'>
        <header className='bg-white shadow p-4'>
          <h1 className='text-2xl font-bold'>Next JS. Marketplace</h1>
        </header>
        <div className='max-w-7xl mx-auto px-4 py-8'>
          <div className='flex flex-col sm:flex-row justify-between gap-4 mb-6'>
            <input 
              type="text" 
              placeholder='Search products'
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className='w-full sm:w-1/2 lg:w-1/3 p-2 border border-gray-300 rounded'
            />
            <select 
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className='p-2 border rounded'
            >
              {uniqueCategories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </option>
              ))}
            </select>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
            {filteredProducts.map((product) => (
              <div key={product.id} className='bg-white rounded shadow p-4 hover:shadow-md transition'>
                <Image 
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={200}
                  className='rounded'
                />
                <h2 className='text-lg font-semibold mt-2'>{product.name}</h2>
                <p className='text-sm text-gray-600'>{product.category}</p>
                <p className='font-bold mt-1'>${product.price}</p>
                <Link href={`/products/${product.id}`} className='text-blue-500 mt-2 inline-block'>
                  View Details
                </Link>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  )
}