import React from 'react'
import Catecard from '../../../Components/Categorycard'
import MountainBike from '../../../../src/assets/MountainBike.png'
import RoadBikes from '../../../../src/assets/RoadBikes.png'
import ElectricBikes from '../../../../src/assets/ElectricBikes.png'

// import image01 from '../assets/MountainBike.png'


export default function ExploreCategory() {
  return (
    <div className='w-full  bg-accent mt-16'>
        <h1 className='leading-[58px] text-center py-12'>Explore   <span className='text-primary'>Categories</span></h1>
        <div className='flex justify-center items-center  flex-wrap'>
            <Catecard
                imageURL={MountainBike}
                title="Mountain Bikes"
            />

            <Catecard
                imageURL={RoadBikes}
                title="Road Bikes"
            />
            <Catecard
                imageURL={ElectricBikes}
                title="Electric Bikes"
            />
        </div>

        <div className='w-full h-16'>

        </div>
    </div>
  )
}
