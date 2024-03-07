"use client"

import { useState } from "react"
import Link from "next/link"
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

export default function Navbar() 
{

  const [menuIcon, setIcon] = useState(false);

  const handleSmallerScreensNavigation = () =>
  {
    setIcon( !menuIcon );
  }

  return(
    <header className="bg-slate-400 text-[#CEFF00] w-full ease-in duration-300 fixed top-0 left-0 z-10">
      <nav className="max-w-[1366px] mx-auto h-[100px] flex justify-between items-center p-4">
        <div>
          <Link href='/'>
            <span className="font-extrabold text-3xl md:text-2xl xl:text-3xl uppercase">javascript</span>
          </Link>
        </div>

        {/* larger screens navigation */}
        <ul className="hidden md:flex uppercase font-semibold text-1xl lg:text-[20px] text-slate-800">
          
          <li className="">
            <Link href="/home">home</Link>
          </li>

        </ul>
      </nav>  
    </header>
  )
}