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

  return (
    <>
      <Head>
        <title>Marketplace</title>
        <meta name='description' content='Simple Marketplace'/>
        <meta name='viewport' content='width=device-width, initial-scale=1'/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        Market
      </main>
    </>
  )
}