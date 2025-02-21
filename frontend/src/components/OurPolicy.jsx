import React from 'react'
import { assets } from '../assets/frontend_assets/assets'
import { RiExchangeFundsFill } from "react-icons/ri";
import { FaCheckCircle } from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";

const OurPolicy = () => {
  return (
  
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center pb-0 py-20 text-xs sm:text-sm md:text-base text-gray-700'>
      <div>
        <RiExchangeFundsFill className='w-10 h-10 m-auto mb-5'/>
       
        <p className="font-semibold">Exchange Policy</p>
        <p className="text-gray-400">We offer free exchange policy</p>
      </div>
      <div>
        <FaCheckCircle className='w-10 h-10 m-auto mb-5'/>
       
        <p className="font-semibold">3 Days return Policy</p>
        <p className="text-gray-400">We provide 3 days return policy</p>
      </div>
      <div>
        <RiCustomerService2Fill className='w-10 h-10 m-auto mb-5'/>
       
        <p className="font-semibold">Best customer support</p>
        <p className="text-gray-400">We provide 24/7 customer support</p>
      </div>
    </div>
  )
}

export default OurPolicy
