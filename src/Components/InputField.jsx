import React from 'react'

export default function InputField({Name, Placeholder, Type}) {

  return (
    <div className='flex flex-col gap-3 h-fit w-[215px] max-sm:w-full '>
        <label className='font-semi-bold text-small03 text-[#6D758F]'>{Name}</label>
        <input className='px-4 py-4 max-sm:py-3 shadow-inputfild rounded-md text-small03 border border-[#F1F3F7]' type={Type} name={Name} id={Name}  placeholder={Placeholder}/>
     </div>
  )
}
