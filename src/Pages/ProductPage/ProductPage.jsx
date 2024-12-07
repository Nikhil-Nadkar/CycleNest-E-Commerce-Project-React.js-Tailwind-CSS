import React from 'react'
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'
import _52_CycleData from  '../../../_52_CycleData'
import SmallCategoryCard from '../../Components/SmallProductCard';
import { Link, useParams }  from 'react-router-dom';
import ScrollToTop from '../../Components/ScrolltoTop';
import Arrow from '../../../src/assets/Arrow.png'
import start_yellow from '../../../src/assets/start_yellow.svg' 
import normal_star from '../../../src/assets/normal_star.svg'
import features from '../../../src/assets/features.svg'




var cycleData = _52_CycleData;

export default function () {    
   const {BikeID} = useParams()
   const CurProduct = cycleData.find((item) => Number(item.id) === Number(BikeID));
   
  
  return (
    
    <div className='bg-[#F6F6F6]'>
        <ScrollToTop/>
        <Navbar/>
        <div className='max-w-[1260px] flex justify-center py-10 max-lg:py-7 max-sm:py-5  m-auto'>
            <div className='flex w-screen gap-4 px-6 font-medium'>
            <Link to={'/'}><h4 className='text-small02 text-[#A4A4A4]'>Home</h4></Link>
            <img src={Arrow}></img>
            <Link to={'/Bikes'}><h4 className='text-small02 text-[#A4A4A4]'>Bikes</h4></Link>
            <img src={Arrow}></img>
            <h4 className='w-80 max-sm:w-20 text-small02 text-primary truncate'>{CurProduct.ProductName} Name</h4>
            </div>

        </div>

        <div className=' max-lg:w-max w-max max-md:w-max h-auto flex max-md:flex-col items-center justify-start m-auto mb-20 max-xl:mb-16 gap-7'>

            <div className=' flex flex-col  max-md:flex-row gap-2'>
                <img className = 'max-xl:w-[510px] max-xl:h-[510px] max-lg:w-[420px] max-lg:h-[420px] max-sm:w-[300px] max-sm:h-[300px]  w-[610px] h-[610px] bg-black bg-opacity-5' src={CurProduct.image01URL}></img>
                <div>
                    <div className='flex  max-md:flex-col gap-3'>
                        <img className = 'max-sm:w-[50px] max-sm:h-[50px] max-lg:w-[75px] max-lg:h-[75px] w-[100px] h-[100px] bg-black bg-opacity-5 bg-blend-screen' src={CurProduct.image02URL}></img>
                        <img className = 'max-sm:w-[50px] max-sm:h-[50px] max-lg:w-[75px] max-lg:h-[75px] w-[100px] h-[100px] bg-black bg-opacity-5' src={CurProduct.image03URL}></img>
                        <img className = 'max-sm:w-[50px] max-sm:h-[50px] max-lg:w-[75px] max-lg:h-[75px] w-[100px] h-[100px] bg-black bg-opacity-5' src={CurProduct.image04URL}></img>
                        <img className = 'max-sm:w-[50px] max-sm:h-[50px] max-lg:w-[75px] max-lg:h-[75px] w-[100px] h-[100px] bg-black bg-opacity-5' src={CurProduct.image05URL}></img>
                    </div>
                </div>
            </div>

            <div className='flex flex-col w-[545px] max-xl:w-[500px] max-lg:w-[400px] max-md:w-[495px] max-sm:w-[358px] '>
                <h6 className='max-xl:text-[18px] text-[20px] mb-5'>{CurProduct.Brand}</h6>
                <h3 className='max-lg:text-[20px] max-xl:text-[26px] text-[28px] mb-2'>{CurProduct.ProductName}</h3>

                <div  className='flex gap-4'>
                    <div className='flex gap-[2px] my-auto'>
                        <img src= {start_yellow}></img>
                        <img src= {start_yellow}></img>
                        <img src= {start_yellow}></img>
                        <img src= {start_yellow}></img>
                        <img src = {normal_star}></img>
                    </div>
                    <p className='text-small03'>{CurProduct.ReviewCount} Reviews</p>  
                </div>

                <div className='flex gap-6 items-center my-7 max-xl:my-5'>
                    <p className='max-lg:text-[24px] text-[28px] font-bold'>{CurProduct.Price}</p>
                    <p className='max-lg:text-[16px] text-[18px] font-regular text-[747474]'>MRP: <span className='line-through'>{CurProduct.withoutdiscount}</span></p>
                </div>

                <div  className='flex flex-col gap-4 mb-14 max-xl:mb-12'>

                    <div>
                        Select Size:
                    </div>  
                    <div className='flex gap-4 max-sm:gap-2'> 
                       <div className={CurProduct.S_size ? 'h-[48px] max-lg:h-[42px] w-auto max-lg:text-[13px] text-small03  border border-black border-opacity-50 rounded-[2px] flex justify-center items-center max-lg:px-4 max-sm:px-3 px-[19px]' : 'hidden'}>{CurProduct.S_size}</div>

                       <div className={CurProduct.M_size ? 'h-[48px] max-lg:h-[42px] w-auto max-lg:text-[13px] text-small03  border border-black border-opacity-50 rounded-[2px] flex justify-center items-center px-[19px] max-lg:px-4 max-sm:px-3' : 'hidden'}>{CurProduct.M_size}</div>
                       <div className={CurProduct.L_size ? 'h-[48px] max-lg:h-[42px] w-auto max-lg:text-[13px] text-small03  border border-black border-opacity-50 rounded-[2px] flex justify-center items-center px-[19px] max-lg:px-4 max-sm:px-3' : 'hidden'}>{CurProduct.L_size}</div>
                       <div className={CurProduct.XL_size ? 'h-[48px] max-lg:h-[42px] w-auto max-lg:text-[13px] max-sm:text-[12px] text-small03  border border-black border-opacity-50 rounded-[2px] flex justify-center items-center px-[19px] max-lg:px-4 max-sm:px-3' : 'hidden'}>{CurProduct.XL_size}</div>
                       <div className={CurProduct.S_size || CurProduct.M_size || CurProduct.L_size  || CurProduct.XL_size  ? 'hidden' : 'h-[48px] max-lg:h-[42px] w-auto max-lg:text-[13px] max-sm:text-[12px] text-small03  border border-black border-opacity-50 rounded-[2px] flex justify-center items-center px-[19px] max-lg:px-4 max-sm:px-3'}>No other sizes are available</div>
                    </div>
                </div>

                <div className='flex gap-4'>
                    <button className='text-small02 font-regular max-sm:px-12 max-lg:px-14 px-20  max-lg:py-2 py-3 rounded-md bg-opacity-0 border-2 border-primary text-primary'>Buy Now</button>
                    <button className='text-small02 font-regular max-sm:px-12 max-lg:px-14 px-20  max-lg:py-2 py-3 rounded-md '>Add to cart</button>
                </div>

                 <div className='max-xl:mt-10 mt-12'>
                    <img src={features}></img>
                </div>
            </div>
        </div>

        {/* <div className='flex justify-between w-[1184px] max-xl:w-[1084px] h-auto m-auto'>
            <h3 className='text-[28px] font-medium'>You might also like</h3>
            <h6 className='text-small02'>More bikes</h6>   
        </div>

        <div className='flex gap-4 w-[1184px] max-xl:w-[1084px] mx-auto my-14'>
            {
                cycleData.slice(0,5).map((items,Index) => (
                    <SmallCategoryCard key={Index}
                        imgURL = {items.image01URL}
                        productName = {items.ProductName}
                        price={items.Price}
                        brand={items.Brand}
                        rating={items.Rating}
                        id = {items.id}
                    
                    />
            
                ))
            }
        </div> */}



        <Footer/>
    </div>
  )
}
