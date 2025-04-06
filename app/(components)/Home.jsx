import { useState } from 'react'
import Link from 'next/link'
import Header from './Header'

const products = [
  { id: '1', name: 'IPhone 14', price: 999, image: '/iphone.jpg' },
  { id: '2', name: 'MacBook Pro', price: 1999, image: '/macbook.jpg' },
  { id: '3', name: 'AirPods Pro', price: 249, image: '/airpods.jpg' }
]

const Home = () => {
  const [search, setSearch] = useState("")
  return (
    <>
      <Head>
        <title>Marketplace</title>
        <meta name='description' content='Simple Marketplace' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='min-h-screen bg-gray-100'>
        <div className='max-w-7xl mx-auto px-4 py-8'>
          <div className='flex flex-col sm:flex-row justify-between gap-4 mb-6'>
            <input 
              type="text"
              placeholder='Search products' 
              value={search}
              onClick={(e) => setSearch(e.target.value)}
              className='w-full sm:w-1/2 p-2 border rounded'
            />
            <select name="" id=""></select>
          </div>
        </div>
      </main>
    </>
  )
}

export default Home