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
      <div >
        <div>
          <h2>Elevate your wardrobe with trendy fashion from <span>Shop</span></h2>
          <div>
            <Link href='/products'>
            <span>Latest Product</span>
            <div></div>
            <div></div>
            </Link>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
              Tempore placeat ipsa veniam ullam quasi quo, recusandae iste 
              consequatur, aspernatur ipsum ad nemo.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home