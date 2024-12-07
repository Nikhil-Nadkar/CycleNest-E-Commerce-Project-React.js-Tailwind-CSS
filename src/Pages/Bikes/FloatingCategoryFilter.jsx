import React, {useContext} from 'react'
import CheckBox  from '../../Components/Checkbox'
import { filterData } from '../../StoreContext/Context';



export default function CategoryFilter() {
  // let SGvalue = useContext(filterData);

  // let handleGenderCategory = ((event) => {
  //    let a = event.target.value;
  //    SGvalue.setSelectedGender(a);
    
  // })
  // console.log(SGvalue.SelectedGender); 

  return (
    <div className='flex flex-wrap w-[256px] h-auto justify-end items-center mx-4 gap-8'>
        <fieldset>
          <legend  className='w-[256px] border-b-[1px] border-b-black border-opacity-20 p-3 pl-0 font-medium text-medium'>Brand</legend>
          <div className='flex flex-col justify-items-center my-6 gap-2'>
            <CheckBox
             brandName= "Btwin"
            />

            <CheckBox
             brandName= "Triban"
            />

            <CheckBox
             brandName= "Lifelong"
            />

            <CheckBox
             brandName= "Rockrider"
            />

            <CheckBox
             brandName= "Riverside"
            />

            <CheckBox
             brandName= "Van rysel"
            />
           
          </div>

          <legend  className='w-[256px] border-b-[1px] border-b-black border-opacity-20 p-3 pl-0 font-medium text-medium'>Types</legend>
          <div className='flex flex-col justify-items-center my-6 gap-2'>
            <CheckBox
             brandName= "Mountain bike"
            />

            <CheckBox
             brandName= "Road bike"
            />

            <CheckBox
             brandName= "Hybrid bike"
            />

            <CheckBox
             brandName= "Folding bike"
            />

            <CheckBox
             brandName= "Tricycles"
            />

            <CheckBox
             brandName= "Kids cycle"
            />
           
          </div>

          <legend  className='w-[256px] border-b-[1px] border-b-black border-opacity-20 p-3 pl-0 font-medium text-medium'>Gender</legend>
          <div className='flex flex-col justify-items-center my-6 gap-2' >
            <div className='flex items-center text-[15px] font-medium' >
              <input className=' w-4 h-4' type='radio'  id= 'Male' name="Gender" value="Male" />
              <label className='ml-2' htmlFor=  "Male">Male</label>
            </div>

            <div className='flex items-center text-[15px] font-medium' >
              <input className=' w-4 h-4' type='radio'  id= 'Female' name="Gender" value="Female" />
              <label className='ml-2' htmlFor=  "Female">Female</label>
            </div>

            <div className='flex items-center text-[15px] font-medium' >
              <input className=' w-4 h-4' type='radio'  id= 'Unisex' name="Gender" value="Unisex" />
              <label className='ml-2' htmlFor=  "Unisex">Unisex</label>
            </div>

            <div className='flex items-center text-[15px] font-medium' >
              <input className=' w-4 h-4' type='radio'  id= 'All' name="Gender" value="All" />
              <label className='ml-2' htmlFor=  "All">All</label>
            </div>
           
          </div>

          <legend  className='w-[256px] border-b-[1px] border-b-black border-opacity-20 p-3 pl-0 font-medium text-medium'>Price</legend>
          <div className='flex justify-between'>
            <div className='flex flex-col justify-items-center my-6 gap-2 text-black text-opacity-50'>
              <label className='mb-2' htmlFor= "lowValue">From</label>
              <input className='w-[107px] h-10 rounded px-4' type='text' id='lowValue' name='lowValue'/>
            </div>
            <div className='flex flex-col  items-end my-6 gap-2 text-black text-opacity-50'>
              <label className='mb-2' htmlFor= "highValue">To</label>
              <input className='w-[107px] h-10 rounded px-4' type='number' id='highValue' name='highValue'/>
            </div>
          </div>

          <div>
            <input className='w-full' type='range' id = 'pricerange' name='pricerange'/>
          </div>

          
  

        </fieldset>

        
      </div> 
  )
}
