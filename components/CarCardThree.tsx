import Image from 'next/image';
import React from 'react';
import heart from '../assets/heart.png'
import Spesification from '../assets/Spesification.png'
import carthree from '../assets/carthree.png'

export default function CarCardThree () {
    return (
<main className='sm:w-[px] md:w-[px] lg:w-[px] xl:w-[px] 2xl:w-[304px]
  sm:h-[px] md:h-[px] lg:h-[px] xl:h-[px] 2xl:h-[388px]
  sm:-mt-[px] md:-mt-[px] lg:-mt-[px] xl:-mt-[px] 2xl:-mt-[385px]
  sm:mt-[20px]
   sm:ml-[px] md:ml-[px] lg:ml-[px] xl:ml-[px] 2xl:ml-[780px]
  bg-white'>

<h1 className='sm:w-[px] md:w-[px] lg:w-[px] xl:w-[px] 2xl:w-[128px]
  sm:h-[px] md:h-[px] lg:h-[px] xl:h-[px] 2xl:h-[24px]

font-jakarta font-bold text-[20px] leading-[30px] tracking--3
 sm:ml-[px] md:ml-[px] lg:ml-[px] xl:ml-[px] 2xl:ml-[px]
 sm:mt-[px] md:mt-[px] lg:mt-[px] xl:mt-[px] 2xl:mt-[px]
 text-black'>Rolls - Royce</h1>

<h1 className='sm:w-[px] md:w-[px] lg:w-[px] xl:w-[px] 2xl:w-[128px]
  sm:h-[px] md:h-[px] lg:h-[px] xl:h-[px] 2xl:h-[20px]

font-jakarta font-medium text-[14px] leading-[21.6px] 
  sm:ml-[px] md:ml-[px] lg:ml-[px] xl:ml-[px] 2xl:ml-[px]
  sm:mt-[px] md:mt-[px] lg:mt-[px] xl:mt-[px] 2xl:mt-[px]
  text-black'>Sedan</h1>

<ul className='  sm:-mt-[px] md:-mt-[px] lg:-mt-[px] xl:-mt-[px] 2xl:-mt-[40px]
  sm:ml-[px] md:ml-[px] lg:ml-[px] xl:ml-[px] 2xl:ml-[250px]'>
    <Image src={heart} alt="sorry"/></ul>

    <ul className='  sm:mt-[px] md:mt-[px] lg:mt-[px] xl:mt-[px] 2xl:mt-[80px]
  sm:ml-[px] md:ml-[px] lg:ml-[px] xl:ml-[px] 2xl:ml-[26px]'>
    <Image src={carthree} alt="sorry"/></ul>

    <ul className='  sm:mt-[px] md:mt-[px] lg:mt-[px] xl:mt-[px] 2xl:mt-[70px]
  sm:ml-[px] md:ml-[px] lg:ml-[px] xl:ml-[px] 2xl:ml-[16px]'>
    <Image src={Spesification} alt="sorry"/></ul>

    <h1 className='sm:w-[px] md:w-[px] lg:w-[px] xl:w-[px] 2xl:w-[116px]
  sm:h-[px] md:h-[px] lg:h-[px] xl:h-[px] 2xl:h-[44px]

font-jakarta font-bold text-[20px] leading-[25.2px] 
  sm:ml-[px] md:ml-[px] lg:ml-[px] xl:ml-[px] 2xl:ml-[20px]
  sm:mt-[px] md:mt-[px] lg:mt-[px] xl:mt-[px] 2xl:mt-[60px]
  text-black'> $96.00/ day</h1>

    <button className='sm:w-[px] md:w-[px] lg:w-[px] xl:w-[px] 2xl:w-[120px]
  sm:h-[px] md:h-[px] lg:h-[px] xl:h-[px] 2xl:h-[44px] 
  rounded-[4px] gap-[8px] bg-blue-600 font-jakarta font-semibold text-[16px] leading-[24px] tracking--2 justify-center item-center flex 
   sm:ml-[px] md:ml-[px] lg:ml-[px] xl:ml-[px] 2xl:ml-[160px]
   sm:-mt-[px] md:-mt-[px] lg:-mt-[px] xl:-mt-[px] 2xl:-mt-[50px]
   p-2 text-white'>
    Rent Now
  </button>

  </main>
    );
};