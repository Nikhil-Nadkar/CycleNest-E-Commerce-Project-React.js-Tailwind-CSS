import React from 'react'
import navbarLogo from '../../src/assets/navbar-Logo-white.png'
import Facebook from '../../src/assets/Facebook.svg'
import Instagram from '../../src/assets/Instagram.svg'
import LinkedIn from '../../src/assets/LinkedIn.svg'
import YouTube from '../../src/assets/YouTube.svg'
import Twitter from '../../src/assets/Twitter.svg'

export default function 
() {
  return (
    <div className=' w-full bg-black bg-opacity-90'>
      <div className='flex flex-col items-center justify-center'>
      <div className='max-sm:flex-col max-sm:gap-12 inline-flex gap-56 w-full justify-center px-4 py-14'>
        <div className='flex flex-col items-start gap-5'>
          <img  src={navbarLogo}></img>

          <div className='inline-flex flex-wrap gap-3'>
              <img src={Facebook}></img>
              <img src={Instagram}></img>
              <img src={LinkedIn}></img>
              <img src={YouTube}></img>  
              <img src={Twitter}></img>  
          </div>
        </div>

        <div className='max-sm:flex-col max-sm:gap-12 flex gap-28 flex-wrap'>
          <div className='flex flex-col text-white gap-8 text-[16px]'>
            <h6 className='font-bold'>Our Range</h6>
            <ul className='flex flex-col font-regular text-white text-opacity-75 gap-4'>
              <li>All Bikes</li>
              <li>Mountain Bikes</li>
              <li>Normal Bikes</li>
              <li>Electric Bikes</li>
            </ul>
          </div>

          <div className='flex flex-col text-white gap-8 text-[16px]'>
            <h6 className='font-bold'>Support</h6>
            <ul className='flex flex-col font-regular text-white text-opacity-75 gap-4'>
              <li>Find a store</li>
              <li>Warranty</li>
              <li>Contact Us</li>
            </ul>
          </div>

          <div className='flex flex-col text-white gap-8 text-[16px]'>
            <h6 className='font-bold'>FAQs</h6>
            <ul className='flex flex-col font-regular text-white text-opacity-75 gap-4'>
              <li>Shipping & Return</li>
              <li>Bike Manual</li>
            </ul>
          </div>

          <div className='flex flex-col text-white gap-8 text-[16px]'>
            <h6 className='font-bold'>Other links</h6>
            <ul className='flex flex-col font-regular text-white text-opacity-75 gap-4'>
              <li>Home</li>
              <li>About us</li>
              <li>Gallery</li>
              <li>Profile</li>
            </ul>
          </div>
        
        </div>
  
      </div>
        <div className='w-full h-[1px] bg-white bg-opacity-30 '></div>
        <p className='text-white text-opacity-50 mx-auto px-10 py-9 '>Copyright © 2025 CYCLENEST <span className="mx-2">|</span> All Rights Reserved <span className="mx-2">|</span> <span className="underline text-accent text-opacity-70 ">Terms and Conditions</span> <span className="mx-2">|</span> <span className=" text-accent text-opacity-70 underline">Privacy Policy</span> </p>
      </div>
        
    </div>
  )
}
