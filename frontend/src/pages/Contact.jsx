import React from 'react'
import Title from '../components/Title'
import {assets} from '../assets/frontend_assets/assets' 

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={'Contact'} text2={'Us'}/>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[480px]' src={assets.contact_us}/>
        <div className="flex flex-col justify-center items-start gap-6">
          <p className='font-semibold text-xl text-slate-600'>Our Store</p>
          <p className='text-slate-500'>Ahmedabad</p>
          <p className='text-slate-500'>Email: admin@gmail.com</p>
          <p className='text-slate-500'>Contact: 98398283928</p>
        </div>
      </div>
    </div>
  )
}

export default Contact
