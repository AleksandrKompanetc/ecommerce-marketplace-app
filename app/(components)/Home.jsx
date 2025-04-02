import { useState } from 'react'
import Link from 'next/link'

const products = [
  {id: '1', name: 'IPhone 14', price: 999, image: '/iphone.jpg'},
  {id: '2', name: 'MacBook Pro', price: 1999, image: '/macbook.jpg'},
  {id: '3', name: 'AirPods Pro', price: 249, image: '/airpods.jpg'}
]

const Home = () => {
  const [cart, setCart] = useState({})

  const addToCart = (product) => {
    setCart([...cart, product])
  }

  return (
    <div className='container mx-auto p-6'>
      <h1 className='text-2xl font-bold mb-4'>MarketPlace</h1>
      <div className='grid grid-cols-3 gap-4'>
        {products.map((product) => (
          <div key={product.id}>
            <img src={product.image} alt={product.name} className='border p-4 rounded-lg shadow' />
            <h2></h2>
            <p></p>
            <button></button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home