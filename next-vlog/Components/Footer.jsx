import Image from 'next/image'
import React from 'react'
import { assets } from '@/Assets/assets'

const Footer = () => {
  return (
    <div className='flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row bg-black py-5 items-center'>
        <Image src={assets.logo} width={120} alt="Logo_Footer" />
        <p className='text-sm text-white'> All right reserved. Copyright @QuickFix</p>
    </div>
  )
}

export default Footer
