import React,{useState, useEffect} from 'react'
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'
import _52_CycleData from  '../../../_52_CycleData'
import CategoryFilter from './CategoryFilter'
import FloatingCategoryFilter from  './FloatingCategoryFilter'
import SmallCategoryCard from '../../Components/SmallProductCard'
import { filterData } from '../../StoreContext/Context'
import ScrollToTop from '../../Components/ScrolltoTop'
import { Link } from 'react-router-dom'
import Arrow from '../../../src/assets/Arrow.png'


var cycleData = _52_CycleData;



export default function Bikes() {
  const [filterValue, setfilterValue] = useState([]);
  const [handlefilter, sethandlefilter] = useState(false);
 

  const allBrand = ["BTWIN", "TRIBAN", "LIFELONG", "ROCKRIDER", "RIVERSIDE", "VAN RYSEL"];


  let filterValueTypes = filterValue.filter((types) => {
    return !allBrand.includes(types);

  })

  let  filterValueBrand = filterValue.filter(brands => allBrand.includes(brands));


  let result = cycleData.filter((items) =>{
    return filterValue.length === 0 ? items : (filterValueBrand.length === 0 || filterValueBrand.includes(items.Brand)) && (filterValueTypes.length === 0 || filterValueTypes.some(word => items.ProductName.toLowerCase().includes(word.toLowerCase())))
  })

  let handlefiltersiderbar =()=>{
    sethandlefilter(!handlefilter);
  }
  
  
  
  return (
    <>
    <filterData.Provider value = {{filterValue, setfilterValue}}>

    <div className='bg-[#F6F6F6]'>
      <ScrollToTop/>  
      <Navbar/>
      <div className='w-full flex justify-center py-6 px-10 m-auto'>
        <div className='flex w-[1200px] gap-4 font-medium'>
        <Link to={'/'}><h4 className='text-small02 text-[#A4A4A4]'>Home</h4></Link>
          <img src={Arrow}></img>
          <Link to={'/Bikes'}><h4 className='text-small02 text-primary'>Bikes</h4></Link>
        </div>

      </div>
      <div className=' max-lg:justify-center max-w-[1360px] h-auto flex justify-start items-start pb-10 m-auto gap-12 px-10'>
        <CategoryFilter />
        <div className='flex flex-col max-md:w-min'>
          <div className='max-lg:flex-row-reverse justify-between items-center flex px-2 mb-6 max-sm:mb-3'>
            <h4 className='text-small01 max-md:text-[16px] max-sm:text-[14px] font-medium text-[#6C6C6C]'>Selected Products: {result.length}</h4>
            <button className='lg:hidden max-md:text-[16px] max-sm:text-[14px]  font-medium py-1 px-6 rounded-md my-auto bg-opacity-0 text-primary border ' onClick={handlefiltersiderbar}>Filter</button>
          </div>
          <div className=' max-xl:w-[730px] max-md:w-[590px] max-sm:w-[380px] max-sm:justify-center w-[978px] h-auto flex flex-wrap justify-start gap-4 max-md:gap-2'>
            {

              
              result.map((cycdata,index) => (
                <SmallCategoryCard key={index}
                imgURL = {cycdata.image01URL}
                productName = {cycdata.ProductName}
                price={cycdata.Price}
                brand={cycdata.Brand}
                rating={cycdata.Rating}
                id ={cycdata.id}
                />

              )) 
            }
          </div>
        </div>  
      </div>

      <Footer/>
      
    </div>
    <div className={ handlefilter ? 'absolute lg:hidden top-[94px] left-0 h-fit w-[380px] bg-white p-10' : 'hidden'}>
        <img onClick={handlefiltersiderbar} className='relative top-0 left-[90%]' src='.\src\assets\closeicon.svg'></img>
        <FloatingCategoryFilter/>
        
    </div>
    </filterData.Provider>
    
    
    </>
  )
}
