import { useState } from 'react'
import Link from 'next/link'

const products = [
  { id: '1', name: 'IPhone 14', price: 999, image: '/iphone.jpg' },
  { id: '2', name: 'MacBook Pro', price: 1999, image: '/macbook.jpg' },
  { id: '3', name: 'AirPods Pro', price: 249, image: '/airpods.jpg' }
]

const Home = () => {
  const [cart, setCart] = useState({})

  const addToCart = (product) => {
    setCart([...cart, product])
  }

  return (
    <>
      <Head>
        <title>Marketplace</title>
        <meta name="description" content="Simple Marketplace" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen bg-gray-100">
        <div className='container mx-auto p-6'>
          <h1 className='text-2xl font-bold mb-4'>MarketPlace</h1>
          <div className='grid grid-cols-3 gap-4'>
            {products.map((product) => (
              <div key={product.id} className='border p-4 rounded-lg shadow'>
                <img src={product.image} alt={product.name} className='w-full h-40 object-cover' />
                <h2 className='text-lg font-semibold mt-2'>{product.name}</h2>
                <p className='text-gray-600'>${product.price}</p>
                <button
                  onClick={() => addToCart(product)}
                  className='mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'>
                  Add to basket
                </button>
              </div>
            ))}
          </div>
          <div className='mt-6 p-4 border-t'>
            <h2 className='text-xl font-bold'>Basket</h2>
            {cart.length === 0 ? (
              <p className='text-gray-500'>Cart is empty</p>
            ) : (
              <ul>
                {cart.map((item, index) => (
                  <li key={index} className='border-b py-2'>{item.name} - ${item.price}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </main>
    </>
  )
}

export default Home