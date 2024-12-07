import React from 'react'
import Navbar from '../../Components/Navbar'
import Herosection from './HeroSection/Herosection'
import ExploreCategory from './ExploreCategory/ExploreCategory'
import Bestseller from './Bestseller/Bestseller'
import Footer from '../../Components/Footer'



export default function Home() {
  return (
    <div className='bg-[#F6F6F6]' >
      <Navbar/>
      <Herosection/>
      <ExploreCategory/>
      <Bestseller/>
      <Footer/>
    </div>
  )
}