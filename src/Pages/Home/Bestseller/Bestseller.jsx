import React from 'react'
import ProductCard from '../../../Components/ProductCard'
import _52_CycleData from  '../../../../_52_CycleData'
import SmallCategoryCard from '../../../Components/SmallProductCard';
import { Link } from 'react-router-dom';


var cycleData = _52_CycleData;

export default function () {
  return (
    <div >
        <h1 className='text-center py-8'>Best Sellers</h1>
        <Link to={'/Bikes'}><button className='block mx-auto'>Sell all Deals</button></Link>
        <div className='flex gap-4 justify-center items-center my-12 flex-wrap max-w-[1100px] max-md:w-[600px] max-sm:w-[380px] m-auto'>
            {
              cycleData.slice(20,28).map((item,index) => (
                <SmallCategoryCard key={index}
                imgURL = {item.image01URL}
                productName = {item.ProductName}
                price={item.Price}
                brand={item.Brand}
                rating={item.Rating}
                id ={item.id} 
                />

              ))
            }
            
        </div>
    </div>
  )
}
