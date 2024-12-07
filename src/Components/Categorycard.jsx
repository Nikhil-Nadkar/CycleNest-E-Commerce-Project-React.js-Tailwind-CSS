import React from 'react'


const Catecard=({imageURL,title})=>{
    return(
        <div className='relative max-sm:h-auto  w-[371px] h-[513px] rounded-3xl mt-4 mr-4 ml-4 mb-2 flex flex-col justify-end items-center shadow-lg overflow-hidden'>
            <img className=' hover:scale-[105%] hover:saturate-0 ease-in-out duration-500' src={imageURL}></img>
            <h2 className='absolute text-white pb-8'>{title}</h2>
        </div>
        
    )

}

export default Catecard;