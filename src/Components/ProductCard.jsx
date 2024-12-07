import React from 'react'

const ProductCard = ({imgURL,productName,brand,price,rating}) => {
  return (
    <div className=' hover:scale-105 ease-in-out duration-300 w-[371px] h-[620px] rounded-2xl bg-white shadow-prodCard overflow-hidden flex flex-col'>
        <div className='relative w-[371px] h-[371px] border-b-[1px] border-black border-opacity-20 mb-4 ' >
            <img src={imgURL} alt="product image"/>
            <div className='absolute bottom-0 flex justify-center items-center w-[72px] h-[32px] bg-[#44C509] gap-2'>
                <img src=".\src\assets\Star.svg"></img>
                <h1 className='text-[20px] font-medium text-white'>{rating}</h1>
            </div>
            <div className='absolute top-4 right-4 w-[42px] h-[42px] flex items-center justify-center rounded-full bg-primaryNF'>
              <div >
                <img src=".\src\assets\heart.svg"></img>
              </div>

            </div>
        </div>
        <div className='px-4 text-black flex justify-between items-start mb-4'>
            <h1 className='text-[32px]'>{brand}</h1>
            <h1 className='text-[28px]'>{price}</h1>
        </div>
        <p className='text-small02 text-black text-opacity-60 px-4 '>{productName}...</p>
        <div className="mt-auto">
          <button className='px-[108px] py-[19px] font-medium bg-[#D9D9D9] text-black uppercase block mb-6 mx-auto'>
            Add to Cart
          </button>
        </div>
    </div>
  )

}

export default ProductCard;

// export default function ProductCard() {
//   return (
//     <div className=' hover:scale-105 ease-in-out duration-300 w-[371px] h-[620px] rounded-2xl bg-white shadow-prodCard'>
//         <div className='relative w-[371px] h-[371px] overflow-clip mb-4 ' >
//             <img src=".\src\assets\cycle01.png" alt="product image"/>
//             <div className='absolute bottom-0 flex justify-center items-center w-[72px] h-[32px] bg-[#44C509] gap-2'>
//                 <img src=".\src\assets\Star.svg"></img>
//                 <h1 className='text-[20px] font-medium text-white'>4.5</h1>
//             </div>
//             <div className='absolute top-4 right-4 w-[42px] h-[42px] flex items-center justify-center rounded-full bg-primaryNF'>
//               <div >
//                 <img src=".\src\assets\heart.svg"></img>
//               </div>

//             </div>
//         </div>
//         <div className='px-4 text-black flex justify-between items-start mb-4'>
//             <h1 className='text-[32px]'>Cycle01</h1>
//             <h1 className='text-[28px]'>₹ 5,999/-</h1>
//         </div>
//         <p className='text-small02 text-black text-opacity-60 px-4 mb-9'>Lorem ipsum dolor sit amet conse bolli tetur adipiscing....</p>
//         <button className='px-[108px]  py-[19px] font-medium bg-[#D9D9D9] text-black uppercase block mx-auto'>Add to Cart</button>
//     </div>
//   )
// }
