import { navLink } from '@/constant/constant'
import Link from 'next/link'
import React from 'react'
import { CgClose } from 'react-icons/cg'
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'

type Props = {
  showNav:boolean;
  closeNav:()=>void;
}

const MobileNav = ({closeNav, showNav}:Props) => {

const navOpen = showNav?"translate-x-0" : "translate-x-[100%]";

  return (
    <div>
      {/*Overlay*/}
      {/* <div className={`fixed ${navOpen} inset-0 transform transition-all duration-500 z-[1002] bg-black opacity-70 w-full
      h-screen`}></div> */}
      
      {/*NavLink */}
      <div className={`text-white fixed ${navOpen} items-center justify-start flex flex-col h-full transform transition-all duration-500
      delay-300 w-[100%]  bg-black bg-opacity-95 space-y-6 z-[1050] pt-48`}>
        
        {navLink.map((link)=>{
          return <Link key={link.id} href={link.url}>
            <p
            onClick={closeNav} 
            className='text-white w-fit text-[20px] ml-0 border-b-[1.5px] border-white sm:text-[30px] '>
              {link.lable}
            </p>
          </Link>
        })}
              <div className='absolute top-[2rem] flex items-center space-x-2'>
                <div className='w-520 h-10 flex items-center justify-center'>
                  <p className="text-3xl md:text-3xl text-white font-bold ">
                        Lila<span className="text-purple-600">Lodge</span>
                  </p>
                </div>      
              </div>
          
              <div className='absolute bottom-80 gap-6 flex'>
                  {/*icons*/}
                  <FaInstagram className='text-3xl md:text-3xl text-white '/>
                  <FaFacebook className='text-3xl md:text-3xl text-white '/>
                  <FaWhatsapp className='text-3xl md:text-3xl text-white '/>
              </div>
              
        {/*Close Nav */}
      <CgClose onClick={closeNav} className='absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6 '/>
      </div>
      
    </div>
  )
}

export default MobileNav