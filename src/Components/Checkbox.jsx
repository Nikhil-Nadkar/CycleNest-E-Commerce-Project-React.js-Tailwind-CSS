import { useContext } from "react";
import React from 'react'
import { filterData } from "../StoreContext/Context";



const CheckBox = ({ brandName}) => {

  let Fvalue = useContext(filterData);
  

  const passValue = ((e)=>{ 
    let  value = e.target.value;
    let check = e.target.checked;
    if(check){
      let a = [...Fvalue.filterValue, value];
      Fvalue.setfilterValue(a);

    } if(check == false) {       
     let b = Fvalue.filterValue.filter((val)=>(val !== value));
     Fvalue.setfilterValue(b);
     
    }
    // console.log(filterBrandData);
    // console.log(Fvalue);
  })


    return (
        <div className='flex items-center text-[15px] font-medium' >
            <input className=' w-4 h-4'  
             type='checkbox'  id={brandName} name={brandName} value={brandName.toUpperCase()} onChange={passValue}/>
            
            <label className='ml-2' htmlFor={brandName}>{brandName}</label>
        </div>
    )

}

export default CheckBox;