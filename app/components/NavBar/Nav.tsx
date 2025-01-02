"use client";
import { navLink } from '@/constant/constant'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { HiBars3BottomRight } from 'react-icons/hi2'

type Props = {
  openNav:()=>void
}
const Nav = ({openNav}:Props) => {

  const [navBg, setNavBg] = useState(false);
  useEffect(()=>{
    const handler =()=>{
      if(window.scrollY>=90) setNavBg(true);
        if(window.scrollY < 90) setNavBg(false);
    };
    window.addEventListener("scroll",handler);
    return ()=> window.removeEventListener("scroll",handler);
  },[]);

  return (
    <div className={` ${navBg?" bg-black bg-opacity-80  ":"fixed"} transition-all duration-200 h-[12vh] z-[1000] fixed w-full`}>
      <div className='font-Quicksand flex items-center h-full justify-between w-[90%] xl:w[60%] sm:w[75%] mx-auto'>
        {/*Logo */}
        <div className='flex items-center space-x-2'>
          <div className='w-520 h-10 flex items-center justify-center'>
            <p className="text-xl md:text-2xl text-white font-bold ">
                  Lila<span className="text-purple-600">Lodge</span>
            </p>
          </div>      
        </div>
        {/* NavLinks */}
        <div className="hidden md:flex items-center space-x-10">
          {navLink.map((link) => (
              <Link href={link.url} key={link.id}>
                <p className="relative text-white text-[20px] font-medium w-fit block after:block after:content-[''] 
                  after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0
                  hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-right">
                  {link.lable}
                </p>
              </Link>
            ))}
        </div>
        {/* button */}
        <div className="flex items-center space-x-4">
          <Link href='/Contact'>
            <button className='md:px-12 md:py-2.5 px-8 py-2 text-white text-[15px] font-bold border-solid border-2 border-white hover:bg-white hover:text-black transition-all duration-200 rounded-lg'>
              Contact
            </button>
          </Link>
          {/* Burger menu */}
          <HiBars3BottomRight onClick={openNav} className='w-8 h-8 cursor-pointer text-white md:hidden' />
        </div>
      </div>
    </div>
  )
}

export default Nav