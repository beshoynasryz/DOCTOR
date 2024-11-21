import React from 'react'
import { doctors } from '../assets/assets'

const TopDoctors = () => {
  return (
    <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'>
      <h1 className='text-3xl  text-gray-600 font-medium'>Top Doctors to Book</h1>
      <p className='w-1/3 text-center font-semibold text-sm'>Simply browse through our extensive list of trusted doctors.</p>
      {
        doctors.slice(0,10).map((doctors, index) =>(
            <div>
                <img src={doctors.image} alt="" />
                <div>
                    <div>
                        <p></p><p>Available</p>
                    </div>
                    <p>{doctors.name}</p>
                    <p>{doctors.speciality}</p>
                </div>
            </div>
        ))
      }
      <button>More</button>
    </div>
  )
}

export default TopDoctors
