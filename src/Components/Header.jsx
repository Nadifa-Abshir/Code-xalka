import React from 'react'
// import { CiMenuBurger } from "react-icons/ci";

// import { useState } from 'react';

// const [isOpen,setIsOpen]=useState(false)
//function Handle open action
let HandleOpen =() =>{
    setIsOpen(true)

    
}
const HandleClose =()=>{

  setIsOpen(false)
}

export default function Header() {
  return (
    <div>
        <div className='bg-yellow-400 w-[100%] h-[100px]  Sm:flex justify-between py-5 sm:px-20'>
         <div className=" flex justify-between px-4">
         <h1 className='text-4xl font-bold '>Code Xalka</h1>
         {/* <h1 style={{display:isOpen ==true? "none" :" "}} onClick={HandleOpen} class="text-4xl "><CiMenuBurger /></h1>
         <h1 onClick={HandleClose} style={{display: isOpen==true? "block" : "none"}} class=""><CiMenuBurger /></h1> */}
           {/* <h1 className='sm:hidden text-4xl'><HiMenu /></h1> */}
         </div>
            <div>
                <ul className='hidden sm:flex gap-20 text-3xl'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                </ul>
            </div>
            {/* <ul style={{display: isOpen == true? "flex" : ""}}  className="hidden bg-orange-500 text-white flex-col space-y-5 p-2 text-2xl">
            <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
</ul>  */}
        </div>
    </div>
  )
}



