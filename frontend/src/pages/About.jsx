import React from 'react'
import Title from '../components/Title'
import {assets} from '../assets/frontend_assets/assets' 

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={'About'} text2={'Us'}></Title>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
        <p>At CustomSphere, we’re all about bringing your creativity to life through custom-designed t-shirts. Whether you want to showcase your style, make a statement, or create something truly personal, we provide the perfect canvas for your imagination. Our mission is to offer high-quality, comfortable, and stylish apparel that reflects individuality and uniqueness.</p>
        <p>With a focus on premium materials, vibrant prints, and endless customization options, we ensure every piece is crafted to perfection. Whether you’re looking for trendy designs or a one-of-a-kind creation, we’re here to make your vision a reality. Join us in redefining fashion, one custom tee at a time!</p>
        </div>
      </div>

      <div className="text-xl py-4">
        <Title text1={'Why'} text2={'Choose Us'}/>
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>✦ Premium Quality </b>
          <p>- We use high-quality fabrics and long-lasting prints to ensure your t-shirts are stylish, comfortable, and durable.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>✦ Affordable Pricing</b>
          <p>- Get the best value for your money with our competitively priced custom t-shirts without compromising on quality.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>✦ Fast & Reliable Delivery</b>
          <p>- Get your custom t-shirts delivered quickly with our efficient production and shipping process.</p>
        </div>
      </div>
    </div>
  )
}

export default About
