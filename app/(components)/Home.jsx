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
    </>
  )
}

export default Home