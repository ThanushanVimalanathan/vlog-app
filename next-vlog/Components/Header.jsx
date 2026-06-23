import { assets } from '@/Assets/assets'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className = 'py-5 px-5 md:12 lg:px-28'>
       <div className='flex items-center justify-between bg-amber-100 w-full'>

         <Image src={assets.logo} width={180}  alt="Logo" className='border-1 border-black' />
         <button type='submit' className = 'flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_#000000] hover:bg-gray-200' >
           Get Started <Image src={assets.arrow} alt="Arrow" />
         </button>

       </div>
       <div className='text-center my-8'>
        <h1 className='text-3xl sm:text-5xl font-medium'>Who We Are</h1>
        <p className='mt-10 max-w-[740px] m-auto text-xs sm:text-base'>We provide reliable and professional home services including plumbing, electrical wiring, and water system maintenance. Our skilled team ensures safe, fast, and high-quality solutions for all household repair and installation needs.</p>
        
       </div>
    </div>
  )
}

export default Header
