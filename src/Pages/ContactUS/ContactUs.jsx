import React from 'react'
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'
import InputField from '../../Components/InputField'
import Facebook from '../../../src/assets/Facebook.svg'
import Instagram from '../../../src/assets/Instagram.svg'
import LinkedIn from '../../../src/assets/LinkedIn.svg'
import YouTube from '../../../src/assets/YouTube.svg'
import Twitter from '../../../src/assets/Twitter.svg'

export default function ContactUs() {
  return (
    <>
    <div className='bg-[#F6F6F6]'>
        <Navbar/>
        <div className='max-w-[1260px] max-lg:flex-col flex justify-center items-center m-auto gap-20 max-sm:gap-10 py-16 max-sm:py-10 px-10 '>
            <div className='flex max-lg:justify-center max-lg:items-center flex-col w-[520px] max-md:w-[450px] max-sm:w-[340px]'>
                <h1 className='text-[56px] font-[800] max-md:text-[48px] max-sm:text-[36px] '>Get in Touch with <span className='text-primary'>Us</span></h1>
                <h6 className='text-small02 max-sm:text-small03 max-lg:text-center '>We’re here to help! Reach out to us with any questions or feedback, and we’ll get back to you as soon as possible.</h6>

                <div className='inline-flex flex-wrap gap-3 mt-6 '>
                    <img src={Facebook}></img>
                    <img src={Instagram}></img>
                    <img src={LinkedIn}></img>
                    <img src={YouTube}></img>  
                    <img src={Twitter}></img>  
                </div>

            </div>
            <div className='w-[510px] max-lg:w-[745px] max-md:w-[510px] max-sm:w-[360px] h-auto bg-white rounded-lg shadow-inputfild p-8 flex flex-row justify-start flex-wrap gap-4'>
                <InputField
                Name = {'Name'}
                Type = {'text'}
                Placeholder = {'Enter your name'}/>

                <InputField
                Name = {'Email'}
                Type = {'email'}
                Placeholder = {'you@example.com'}/>

                <InputField
                Name = {'Phone'}
                Type = {'tel'}
                Placeholder = {'Enter your phone number'}/>

                <InputField
                Name = {'Subject'}
                Type = {'text'} 
                Placeholder = {'What is your inquiry about?'}/>

                <div className='flex flex-col shadow-inputfild gap-3 w-[446px] max-sm:w-full h-auto '>
                    <label className='font-semi-bold text-small03 text-[#6D758F]'>Message</label>
                    <textarea className='px-4 py-4  max-h-16 selection:shadow-inputfild rounded-md text-small03 border border-[#F1F3F7]'   name='Message' placeholder='Type your message here...' cols="60" rows="60"/>
                </div>

                <button className='mt-8  px-10 rounded-lg'>Send Message</button>
            </div>

        </div>
        <Footer/>
    </div>
    </>
  )
}
