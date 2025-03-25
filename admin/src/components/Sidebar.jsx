import React from 'react'
import {NavLink} from 'react-router-dom'
import {assets} from '../assets/assets'
import { IoIosAddCircleOutline } from "react-icons/io";
import { CiCircleList } from "react-icons/ci";
import { FaBoxOpen } from "react-icons/fa";


const Sidebar = () => {
  return (
    <div className='w-[18%] min-h-screen border-r-2'>
      <div className='flex flex-col gap-4 pt-6 pl-[20%] text-[15px]'>

        <NavLink className="flex items-center gap-3 border border-slate-300 border-r-0 px-3 py-2 rounded-l" to='/add'>
        <IoIosAddCircleOutline className='w-6 h-6' />
        <p className='hidden md:block'>Add Products</p>
        </NavLink>

        <NavLink className="flex items-center gap-3 border border-slate-300 border-r-0 px-3 py-2 rounded-l" to='/list'>
        <CiCircleList className='w-6 h-6'  />
        <p className='hidden md:block'>List Products</p>
        </NavLink>

        <NavLink className="flex items-center gap-3 border border-slate-300 border-r-0 px-3 py-2 rounded-l" to='/orders'>
        <FaBoxOpen className='w-6 h-6' />
        <p className='hidden md:block'>Orders</p>
        </NavLink>

      </div>
    </div>
  )
}

export default Sidebar
