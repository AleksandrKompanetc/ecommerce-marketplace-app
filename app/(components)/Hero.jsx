import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <section className='max-padd-container'>
      <div>
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
    </section>
  )
}

export default Hero