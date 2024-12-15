import React from 'react';
import {FaInstagram } from "react-icons/fa";
import {FaFacebook } from "react-icons/fa";
import {FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { GrLocation } from "react-icons/gr";
import { FiPhone } from "react-icons/fi";

function Footer() {
  return (
    <>
    <div className='bg-black opacity-90 h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-20 pb-7'>
        <div className='p-5'>
            <ul>
                <p className='text-white font-bold text-3xl pb-6'>
                    Lila<span className='text-purple-600'>Lodge</span>
                </p>
                <div className='flex gap-6 pb-5'>
                    {/*icons*/}
                    <FaInstagram className='text-2xl text-white cursor-pointer hover:text-purple-600'/>
                    <FaFacebook className='text-2xl text-white cursor-pointer hover:text-purple-600'/>
                    <FaWhatsapp className='text-2xl text-white cursor-pointer hover:text-purple-600'/>
                </div>
            </ul>

        </div>
        <div className='p-5'>
            <ul>
                <li className='text-white text-md pb-2 fint-bold hover:text-purple-600 cursor-pointer'>Home</li>
                <li className='text-white text-md pb-2 fint-bold hover:text-purple-600 cursor-pointer'>Accommodation</li>
                <li className='text-white text-md pb-2 fint-bold hover:text-purple-600 cursor-pointer'>Services</li>
                <li className='text-white text-md pb-2 fint-bold hover:text-purple-600 cursor-pointer'>Gallery</li>
                <li className='text-white text-md pb-2 fint-bold hover:text-purple-600 cursor-pointer'>Contacts</li>
            </ul>
        </div>

        <div className='p-5'>
            <ul>
                <li className='text-white text-md pb-2 fint-bold hover:text-purple-600 cursor-pointer flex md:flex-row'>
                    <GrLocation className='text-2xl cursor-pointer hover:text-purple-600'/>
                    <span className='pr-4'></span>Lila Lodge, Bentota
                </li>
                <li className='text-white text-md pb-2 fint-bold hover:text-purple-600 cursor-pointer flex md:flex-row pt-2'>
                    <FiPhone className='text-2xl cursor-pointer hover:text-purple-600'/>
                    <span className='pr-4'></span>+94 762222222
                </li>
                <li className='text-white text-md pb-2 fint-bold hover:text-purple-600 cursor-pointer flex md:flex-row pt-2'>
                    <MdOutlineEmail className='text-2xl cursor-pointer hover:text-purple-600'/>
                    <span className='pr-4'></span>email@gmail.com
                </li>
            </ul>
        </div>
    </div>
    <div className='flex flex-col rounded-b-2xl justify-center iteem-center text-center pb-5 bg-black opacity-90'>
        <hr className='pb-10 text-white'></hr>
        <div className='text-white h-1/2 w-full flex md:flex-row flex-col justify-around items-start pb-5'>
            <h1 className='font-semibold'> Copyright © 2024 - Lila Villa Bentota - All Rights Reserved. </h1>
         </div>
    </div>
    </>
  )
}

export default Footer