import React from 'react'
import Image from 'next/image'
import love from '../public/love.svg'
import man from '../public/man1.jpg'

const GridImage = () => {
  return (
    <div>
          <div className='ml-12 mt-4'>
                <h2 className='text-xl font-bold'>Pictures</h2>
            </div>
            <div className='gap-4 grid-cols-1 grid md:grid-cols-7 bg-white md:grid-rows-4 grid-flow-row-dense px-12 py-2 '>
                <div className='relative col-span-2 row-span-2 '>
                <Image src='https://images.unsplash.com/photo-1657694421550-4884e32662a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx2aXN1YWwtc2VhcmNofDEwNHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60'
                 fill alt='bike' className='object-cover'/>
                <div className='bg-black absolute left-0 bottom-0 flex justify-center items-center gap-1 p-3'>
                <Image src={love} alt='love' className=' w-4 h-4 '/>
                <span className=' text-white text-xs'>12 Likes</span>
                </div>
                </div>

                <div className='relative col-span-3 row-span-1'>
                <Image src='https://images.unsplash.com/photo-1581229694739-6ab0d4608254?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80'
                fill alt='langosta' className='object-cover'/>
                <div className='bg-black absolute left-0 bottom-0 flex justify-center items-center gap-1 p-3'>
                <Image src={love} alt='love' className=' w-4 h-4 '/>
                <span className=' text-white text-xs'>9 Likes</span>
                </div>
                </div>

                <div className='relative col-span-2 row-span-2'>
                <Image src='https://images.unsplash.com/photo-1621525278689-4779d647a9f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx2aXN1YWwtc2VhcmNofDY4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60'
        
                fill alt='female' className='object-cover'/>
                <div className='bg-black absolute left-0 bottom-0 flex justify-center items-center gap-1 p-3'>
                <Image src={love} alt='love' className=' w-4 h-4 '/>
                <span className=' text-white text-xs'>43 Likes</span>
                </div>
                </div>

                <div className='relative col-span-2 row-span-2'>
                <Image src='https://images.unsplash.com/photo-1649188864561-97bae45969da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx2aXN1YWwtc2VhcmNofDIzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60'
                fill alt='flower' className='object-cover'/>
                <div className='bg-black absolute left-0 bottom-0 flex justify-center items-center gap-1 p-3'>
                <Image src={love} alt='love' className=' w-4 h-4 '/>
                <span className=' text-white text-xs'>24 Likes</span>
                </div>
                </div>

                <div className='relative col-span-1 row-span-2'>
                <Image src='https://images.unsplash.com/photo-1627894566221-92392971a334?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx2aXN1YWwtc2VhcmNofDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60'
                 fill alt='girl' className='object-cover'/>
                <div className='bg-black absolute left-0 bottom-0 flex justify-center items-center gap-1 p-3'>
                <Image src={love} alt='love' className=' w-4 h-4 '/>
                <span className=' text-white text-xs'>62 Likes</span>
                </div>
                </div>

                <div className='relative col-span-2 row-span-2'>
                <Image src='https://images.unsplash.com/photo-1599862256852-8e4b9541ed7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx2aXN1YWwtc2VhcmNofDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60' 
                fill alt='kid' className='object-cover'/>
                <div className='bg-black absolute left-0 bottom-0 flex justify-center items-center gap-1 p-3'>
                <Image src={love} alt='love' className=' w-4 h-4 '/>
                <span className=' text-white text-xs'>78 Likes</span>
                </div>
                </div>
               
                <div className='relative col-span-2 row-span-2'>
                <Image src='https://images.unsplash.com/photo-1630040995437-80b01c5dd52d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGNvZmZlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60'
                 fill  alt='coffe' className='object-cover'/>
                <div className='bg-black absolute left-0 bottom-0 flex justify-center items-center gap-1 p-3'>
                <Image src={love} alt='love' className=' w-4 h-4 '/>
                <span className=' text-white text-xs'>36 Likes</span>
                </div>
                </div>

                <div className='relative col-span-3 row-span-1'>
                <Image src={man} alt='man' className='object-cover'/>
                <div className='bg-black absolute left-0 bottom-0 flex justify-center items-center gap-1 p-3'>
                <Image src={love} alt='love' className=' w-4 h-4 '/>
                <span className=' text-white text-xs'>98 Likes</span>
                </div>
                </div>
                </div>

                <div className='flex justify-end px-12 pb-4'>
                <button className='px-4 py-2 bg-gray-200 text-sm'>Load more</button>
            </div> 
    </div>
  )
}

export default GridImage