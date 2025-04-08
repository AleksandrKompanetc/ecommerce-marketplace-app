import { useState } from 'react'
import Link from 'next/link'
import Header from './Header'
import ProductCard from './ProductCard'

const products = [
  { id: '1', name: 'IPhone 14', price: 999, image: '/iphone.jpg' },
  { id: '2', name: 'MacBook Pro', price: 1999, image: '/macbook.jpg' },
  { id: '3', name: 'AirPods Pro', price: 249, image: '/airpods.jpg' }
]

const Home = () => {
  const [search, setSearch] = useState("")
  const [categoryFilter, setCategoryFilter] = useState('all')

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase())
    const matchesCategory = categoryFilter === 'all' || product.category === categoryFilter
    return matchesSearch || matchesCategory
  })

  const uniqueCategories = ["all", ...new Set(products.map((p) => p.category))];

  return (
    <>
      <Head>
        <title>Marketplace</title>
        <meta name='description' content='Simple Marketplace' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='min-h-screen bg-gray-100'>
        <Header />
        <div className='max-w-7xl mx-auto px-4 py-8'>
          <div className='flex flex-col sm:flex-row justify-between gap-4 mb-6'>
            <input 
              type="text"
              placeholder='Search products' 
              value={search}
              onClick={(e) => setSearch(e.target.value)}
              className='w-full sm:w-1/2 p-2 border rounded'
            />
            <select 
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className='p-2 border rounded'
            >
              {uniqueCategories.map((cat) => (
                <option 
                  key={cat}
                  value={cat}
              >
                {cat.charAt(0).toUpperCase() = cat.slice(1)}
              </option>
              ))}
            </select>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
          </div>
        </div>
      </main>
    </>
  )
}

export default Home