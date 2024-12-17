import Image from 'next/image';
import React from 'react';
import search from '../assets/search.png'
import filter from '../assets/filter.png'
import Profile from '../assets/Profil.png'
import Settings from '../assets/Settings.png'
import menu from '../assets/menu.png'
import Notification from '../assets/Notification.png'
import Like from '../assets/Like.png'


export default function Header () {
    return (
        <main className='bg-white h-124px border-[1px] border-borderCustom'>
<h1 className='  sm:w-[34px] md:w-[68px] lg:w-[102px] xl:w-[136px] 2xl:w-[170px]
  sm:h-[16px] md:h-[32px] lg:h-[48px] xl:h-[64px] 2xl:h-[80px]

font-jakarta font-bold text-[32px] leading-[48px] tracking--3 text-blue-700 
sm:ml-[0px] md:ml-[px] lg:ml-[px] xl:ml-[px] 2xl:ml-[70px]
p-4 '>
  MORENT</h1>
  <div className='  sm:w-[98.4px] md:w-[196.8px] lg:w-[295.2px] xl:w-[393.6px] 2xl:w-[492px]
   sm:h-[8.8px] md:h-[17.6px] lg:h-[26.4px] xl:h-[35.2px] 2xl:h-[44px]
  rounded-[70px] border-[1px] border-blue-200/40 
    sm:ml-[77px] md:ml-[154px] lg:ml-[231px] xl:ml-[308px] 2xl:ml-[385px]
    sm:-mt-[12px] md:-mt-[24px] lg:-mt-[36px] xl:-mt-[48px] 2xl:-mt-[60px]
  '>
<ul className='  sm:mt-[60px] md:mt-[20px] lg:mt-[10px] xl:mt-[4.8px] 2xl:mt-[6px]
 sm:ml-[px] md:ml-[80px] lg:-ml-[10px] xl:ml-[px] 2xl:ml-[px]
'><Image src={search} alt="sorry"/></ul>
<h1 className='sm:h-[5px] md:h-[10px] lg:h-[15px] xl:h-[20px] 2xl:h-[25px]
sm:w-[150px]
  sm:ml-[40px] md:ml-[120px] lg:ml-[90px] xl:ml-[120px] 2xl:ml-[150px]
  sm:mt-[0px] md:mt-[px] lg:mt-[px] xl:mt-[px] 2xl:mt-[px]
 sm:-mt-[22px] md:-mt-[22px] lg:-mt-[22px] xl:-mt-[px] 2xl:-mt-[20px]
 font-jakarta font-medium text-[14px] leading-[21px] tracking--2 justify-cenetr item-center flex'>Search something here</h1>
<ul className='  sm:-mt-[px] md:-mt-[px] lg:-mt-[px] xl:-mt-[px] 2xl:-mt-[27px]
  sm:ml-[200px] md:ml-[px] lg:ml-[300px] xl:ml-[px] 2xl:ml-[450px]
  
'><Image src={filter} alt="sorry"/></ul>
</div>
<ul className='  sm:-mt-[px] md:-mt-[px] lg:-mt-[px] xl:-mt-[px] 2xl:-mt-[45px]
  sm:ml-[570px] md:ml-[700px] lg:ml-[950px] xl:ml-[px] 2xl:ml-[1450px]
  sm:-mt-[10px]'>
    <Image src={Profile} alt="sorry"/></ul>
<ul className='   sm:-mt-[px] md:-mt-[px] lg:-mt-[px] xl:-mt-[px] 2xl:-mt-[45px] 
  sm:ml-[0px] md:ml-[px] lg:ml-[px] xl:ml-[px] 2xl:ml-[1400px] 
  block sm:hidden block md:hidden block lg:hidden xl:block 2xl:block'>
    <Image src={Settings} alt="sorry"/></ul>
<ul className='  sm:-mt-[px] md:-mt-[px] lg:-mt-[px] xl:-mt-[px] 2xl:-mt-[45px]
 sm:ml-[px] md:ml-[px] lg:ml-[px] xl:ml-[px] 2xl:ml-[1350px]
 block sm:hidden block md:hidden block lg:hidden xl:block 2xl:block'>
  <Image src={Notification} alt="sorry"/></ul>
<ul className='  sm:-mt-[px] md:-mt-[px] lg:-mt-[px] xl:-mt-[px] 2xl:-mt-[45px]
  sm:ml-[px] md:ml-[px] lg:ml-[px] xl:ml-[px] 2xl:ml-[1300px]
  block sm:hidden block md:hidden block lg:hidden xl:block 2xl:block'>
    <Image src={Like} alt="sorry"/></ul>


</main>
    );
};