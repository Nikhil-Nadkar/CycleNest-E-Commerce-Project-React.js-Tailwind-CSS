import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import smallStar from '../../src/assets/smallStar.svg'
import heart from '../../src/assets/heart.svg'


const SmallCategoryCard = ({imgURL,productName,brand,price,rating,id}) =>{



    return(
        <Link to ={`/Bikes/${id}`}>
        <div className='max-md:w-[182px] max-sm:w-[176px] hover:scale-105 ease-in-out duration-300 w-[225px] h-auto rounded-2xl bg-white shadow-prodCard overflow-hidden flex flex-col'>
            <div className='relative w-[225px] h-[225px] max-md:w-[182px] max-md:h-[182px] max-sm:w-[176px] max-sm:h-[176px] mb-2 max-md:mb-1' >
                <img className=' border-b-[1px] border-black border-opacity-20  ' src={imgURL} alt="product image"/>
                <div className='absolute bottom-0 flex justify-center items-center w-[72px] h-[28px] max-md:w-[54px] max-md:h-[19px] bg-[#44C509] gap-2'>
                    <img className = '' src={smallStar}></img>
                    <h1 className='text-[18px] max-md:text-[12px] font-medium text-white'>{rating}</h1>
                </div>
                <div className='absolute top-4 right-4 max-md:w-[32px] max-md:h-[32px] w-[42px] h-[42px]  flex items-center justify-center rounded-full bg-primaryNF'>
                <div >
                    <img className='relative max-md:size-[0.7]' src={heart}></img>
                </div>

                </div>  
            </div>
            <div className='px-4 text-black flex justify-between items-start mb-2 max-md:mb-1 '>
                <h1 className='text-[18px] max-md:text-[16px] truncate'>{brand}</h1>
                <h1 className='text-[20px] max-md:text-[18px]  truncate'>{price}</h1>
            </div>
            <p className='text-small02 max-md:text-[14px] text-black text-opacity-60 px-4 line-clamp-2  mb-4 '>{productName}</p>
           
        </div>
        </Link>
    )
}

export default SmallCategoryCard;