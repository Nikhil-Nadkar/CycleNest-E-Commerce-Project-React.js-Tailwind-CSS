import React from 'react'
import { Link } from 'react-router-dom'
import HerosectionFullimg from '../../../../src/assets/HerosectionFullimg.jpg'
import rarrow from '../../../../src/assets/r-arrow.svg'




export default function Herosection() {
  return (
    <div  className="flex flex-col justify-center items-center pt-12 w-full gap-4">
        <h1 className='leading-[58px] text-center '>Ride Into <span className='text-primary'>Adventure</span></h1>
        <h3 className='font-regular px-16 text-center' >Discover the perfect cycle for your next journey</h3>
        <div className='pt-6'>
          <Link to={'/Bikes'}>
          <button>
            <div className='flex items-center justify-center gap-2'>
                 Explore Bikes <img src={rarrow}></img>
            </div>
          </button>
          </Link>
        </div>
        <div className='max-lg:w-full max-lg:h-[550px]  group overflow-hidden  rounded-3xl max-lg:rounded-none mx-6 mt-6 '>
            <img className='rounded-3xl shadow-fshadow01 group-hover:scale-[105%] max-lg:rounded-none max-lg:h-[550px] max-lg:w-full object-cover object-center ease-in-out duration-500' src={HerosectionFullimg}></img>
        </div>
        
    </div>
  )
}
