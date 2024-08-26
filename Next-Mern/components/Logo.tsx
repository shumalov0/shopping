
import Link from 'next/link';
import React from 'react'
import { Pacifico } from 'next/font/google';


const pasfico = Pacifico({
    weight:'400',
    preload:false

})

const Logo = () => {
  return (
    <Link href={'/'} className={`${pasfico.className} text-2xl`}>
        Shopping
    </Link>
  )
}

export default Logo