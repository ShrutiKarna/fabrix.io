import React from 'react'
import Image from 'next/image'
import cart from "../../../public/assets/images/cartIcon.svg"
import Link from 'next/link'


const Cart = () => {
  return (
    <div>
      <Link href='/cart'>
        <Image
          src={cart}
          alt="Cart"
          loading="eager"
          
        />
      </Link>
    </div>
  )
}

export default Cart