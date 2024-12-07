import React,{useState} from 'react'
import Bikes from '../Pages/Bikes/Bikes'
import { Link, NavLink } from 'react-router-dom';
import navbarLogo from '../../src/assets/navbar-Logo.svg'
import Search from '../../src/assets/Search.svg'
import Searchsmall from '../../src/assets/Search-small.svg'
import ShoppingCart from '../../src/assets/ShoppingCart.svg'
import Usericon from '../../src/assets/Usericon.svg'
import menuicon from '../../src/assets/menuicon.svg'
import closeicon from '../../src/assets/closeicon.svg'

const Navbar = () => {
  const [nav,setnav] =  useState(false);

  const handlenav = () =>{
    setnav(!nav);
  }


  return(
      <div>
        <div className='w-auto border-b-2 border-primary'>
        <div className='flex items-center justify-between max-w-[1260px] h-[92px] m-auto px-4'>
        <NavLink to={'/'}><img className='max-sm:size-28' src={navbarLogo} ></img></NavLink>
        
        <div className='flex items-center gap-11'>
          <ul className ='hidden lg:flex'>
            <NavLink to ="/" className={({ isActive }) => isActive? "text-primary font-semi-bold" : "text-black"}><li className='p-4 list-none  '>Home</li></NavLink> 
            <NavLink to ="/Bikes" className={({ isActive }) => isActive? "text-primary font-semi-bold" : "text-black"}><li className='p-4 list-none'>Bikes</li></NavLink>    
            <NavLink to =""><li className='p-4 list-none'>About Us</li></NavLink>
            <NavLink to ="/Contactus" className={({ isActive }) => isActive? "text-primary font-semi-bold" : "text-black"} ><li className='p-4 list-none'>Contact</li></NavLink>
          </ul>

          <div className='flex items-center gap-3 '>
            <div className='hidden md:flex  w-[286px] h-[44px] p-4 shadow-nvshad rounded-[4px] bg-white focus:outline-none focus:ring-2 focus:ring-blue-500'>
                <div className='flex'>
                <img src={Search}></img>
                <input
                type='text'
                placeholder='Search for...'
                className='font-regular pl-2 text-[13px] focus:outline-none' />
                </div>
            </div>

            <div className='md:hidden flex w-[44px] h-[44px] justify-center items-center rounded-full'>
              <img src={Searchsmall} ></img>
            </div>

            <div className='max-sm:hidden flex w-[44px] h-[44px] justify-center items-center rounded'>
              <img src={ShoppingCart} ></img>
            </div>

            <div className='max-sm:hidden flex w-[44px] h-[44px] justify-center items-center rounded'>
              <img src={Usericon} ></img>
            </div>

            <div onClick={handlenav} className='lg:hidden flex w-[44px] h-[44px] justify-center items-center rounded bg-accent'>
              {!nav ? <img src={menuicon} ></img> : <img src={closeicon} ></img>}
            </div>


            </div>
        </div>
        </div>

      </div>

      <div className ={ nav ? 'fixed top-0 left-0 h-full w-[60%] z-[999] bg-primaryNF bg-opacity-85 backdrop-blur-lg ease-in-out duration-500' : 'fixed left-[-100%] '} >

      <img className='px-4 py-[30px]' src='../src/assets/navbar-Logo.svg' ></img>
        <ul>
          <NavLink to={'/'} className={({ isActive }) => isActive? "text-primary font-semi-bold" : "text-black"}><li className='px-8 py-5 text-small01 border-b-[1px] border-b-primary list-none'>Home</li></NavLink>
          <NavLink to={'/Bikes'} className={({ isActive }) => isActive? "text-primary font-semi-bold" : "text-black"}><li className='px-8 py-5 text-small01 border-b-[1px] border-b-primary list-none'>Bikes</li></NavLink>
          <li className='sm:hidden px-8 py-5 text-small01 border-b-[1px] border-b-primary list-none'>Cart</li>  
          <li className='sm:hidden px-8 py-5 text-small01 border-b-[1px] border-b-primary list-none'>Profile</li>      
          <li className='px-8 py-5 text-small01 border-b-[1px] border-b-primary list-none'>About Us</li>
          <NavLink to={'/Contactus'} className={({ isActive }) => isActive? "text-primary font-semi-bold" : "text-black"}><li className='px-8 py-5 text-small01 border-b-[1px] border-b-primary list-none'>Contact</li></NavLink>
        </ul> 
      </div>
      
      
      </div>

      


    )
}

export default Navbar