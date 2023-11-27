import React from 'react'
import Image from 'next/image'
import img1 from '../public/img1.jpg'
import img2 from '../public/img2.jpg'
import google from '../public/google.png'
import uber from '../public/uber.jpg'
import inter from '../public/inter.png'
// import img2 from '../public/img2.jpg'

const Hero = () => {
  return (
    <div className='grid bg-[#17203F] h-screen'>
        <div className='grid grid-cols-4 m-auto mt-40 gap-6'>
            <div className='bg-[#0F152B] shadow-md rounded-md overflow-hidden' >
                <div className='w-full h-36 relative'>
                   <Image src={img1} alt='img1' fill className='object-cover'/>    
                </div>
                <div className='p-3'>
                    <h1 className='text-white text-sm font-semibold'>Bill Alvarado</h1>
                    <div className='text-gray-400 text-xs'>Digital product designer</div>
                    <div className='text-gray-400 text-[10px] leading-8'>Previously</div>
                    <Image src={google} alt='google' width={50} height={200}/>
                </div>
            </div>
            <div className='bg-[#0F152B] shadow-md rounded-md overflow-hidden' >
                <div className='w-full h-36 relative'>
                <Image src={img1} alt='img1' fill className='object-cover'/>
                </div>
                <div className='p-3'>
                    <h1 className='text-white text-sm font-semibold'>Jon Copeland</h1>
                    <h2 className='text-gray-400 text-xs'>Software architect</h2>
                    <h2 className='text-gray-400 text-[10px] leading-8'>Previously</h2>
                    <Image src={uber} alt='uber' width={50} height={50}/>
                </div>
            </div>
            <div className='bg-[#0F152B] shadow-md rounded-md overflow-hidden'>
                <div className='w-full h-36 relative'>
                  <Image src={img2} alt='img2' fill className='object-cover'/>
                </div>
                <div className='p-3'>
                    <h1 className='text-white text-sm font-semibold'>Leo Harvey</h1>
                    <h2 className='text-gray-400 text-xs'>Product assistant</h2>
                    <h2 className='text-gray-400 text-[10px] leading-8'>Previously</h2>
                    <Image src={inter} alt='intercom' width={50} height={50}/>
                </div>
            </div>
            <div className='border-2 border-[#121B38] rounded-md text-slate-300 flex justify-center items-center'>
                <div className='flex flex-col space-y-3 items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24"
                 fill="currentColor" className="w-8 h-8">
                <path fillRule="evenodd" d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z" clipRule="evenodd" />
              </svg>

                <p className='text-xs'>Add more</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero