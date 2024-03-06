import React from 'react'

import { SiJirasoftware } from "react-icons/si";
import { FaMobile } from "react-icons/fa";
import { IoPersonRemove } from "react-icons/io5";
const Part3 = () => {
  return (
  <>
    <div className=' sm:flex flex-col'>
      
      <div className=" h-[270px] w-[350px] m-8 border-2 border-gray-300 ">
        <h1 className=' text-red-400 text-[170px] pl-[20%] '><SiJirasoftware/></h1>
        <h1 className='text-3xl font-bold overflow-hidden pl-1'>Software develpmebtn</h1>
        <p  className=' px-6'>Tell us what you like and we'll show your top job opportunities</p>
   
      </div>
      <div className=" h-[270px] w-[350px] m-8 border-2 border-gray-300 ">
        <h1 className=' text-green-400 text-[170px] pl-[20%]  pt-1'><FaMobile /></h1>

        <h1 className='text-3xl font-bold overflow-hidden pl-1'>Mobile Application
</h1>
        <p  className=' px-6'>Tell us what you like and we'll show your top job opportunities</p>
   
      </div>
      <div className=" h-[270px] w-[350px] m-8 border-2 border-gray-300 ">
        <h1 className=' text-blue-300 text-[170px] pl-[20%] '><IoPersonRemove /></h1> 

        <h1 className='text-3xl font-bold overflow-hidden pl-1'>Training developmebnt</h1>
        <p className=' px-6'> Tell us what you like and we'll show your top job opportunities</p>
   
      </div>
      </div>
  </>
  )
}

export default Part3


