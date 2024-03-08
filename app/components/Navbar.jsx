"use client"

import { useState } from "react"
import Link from "next/link"
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

export default function Navbar() 
{

  const [menuIcon, setIcon] = useState( false );

  const handleSmallerScreensNavigation = () =>
  {
    setIcon( !menuIcon );
  }

  return (
    <header className="bg-slate-400 text-[#CEFF00] w-full ease-in duration-300 fixed top-0 left-0 z-10">
      <nav className="max-w-[1366px] mx-auto h-[100px] flex justify-between items-center p-4">
        <div>
          <Link href='/'>
            <span className="font-extrabold text-3xl md:text-2xl xl:text-3xl uppercase">javascript</span>
          </Link>
        </div>

        {/* larger screens navigation */}
        <ul className="hidden md:flex uppercase font-semibold text-1xl lg:text-[20px] text-slate-800">
          
          <li className="mr-4 lg:mr-8 hover:text-[#CEFF00]">
            <Link href="/">home</Link>
          </li>

          <li className="mr-4 lg:mr-8 hover:text-[#CEFF00]">
            <Link href="/about">about</Link>
          </li>

          <li className="hover:text-[#CEFF00]">
            <Link href="/contact">contact</Link>
          </li>

        </ul>

        <div className="hidden md:flex">
            <div className="flex">
              
              <Link href="/login">
                <button className="mr-5 bg-[#CEFF00] text-slate-800 hover:bg-slate-800 hover:text-[#CEFF00] rounded-full uppercase font-bold px-8 py-2">login</button>
              </Link>

              <Link href="/signup">
                <button className="border-2 border-[#CEFF00] text-white rounded-full uppercase font-bold px-8 py-2">sign up</button>
              </Link>

            </div>
        </div>

        {/* smaller screens - navigation icons */}
        {/* onClick change the icon */}
        <div onClick={handleSmallerScreensNavigation} className='flex md:hidden'>
          {menuIcon ? 
            ( <AiOutlineClose size={25} className='text-[#CEFF00]' />)
            :
            ( <AiOutlineMenu size={25} className='text-[#CEFF00]' /> )
          }
        </div>

        {/* Smaller screens - Navbar */}
        <div className={menuIcon ? 
            'md:hidden absolute top-[100px] right-0 bottom-0 left-0 flex justify-center items-center w-full h-screen bg-slate-800 text-white ease-in duration-300' 
            : 
            'md:hidden absolute top-[100px] right-0 left-[-100%] flex justify-center items-center w-full h-screen bg-slate-800 text-white text-center ease-in duration-300'
        }>
          

          {/* Smaller screens - Navbar links */}
          <div className="w-full">
            
            <ul className='uppercase font-bold text-2xl'>

              <li onClick={handleSmallerScreensNavigation} className='py-5 hover:text-[#CEFF00] cursor-pointer'>
                <Link href="/">home</Link>
              </li>

              <li onClick={handleSmallerScreensNavigation} className='py-5 hover:text-[#CEFF00] cursor-pointer'>
                <Link href="/about">about</Link>
              </li>

              <li onClick={handleSmallerScreensNavigation} className='py-5 hover:text-[#CEFF00] cursor-pointer'>
                <Link href="/contact">contact</Link>
              </li>

            </ul>


          </div>

        </div>


      </nav>  
    </header>
  )
}