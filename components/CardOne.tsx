import Image from 'next/image'
import imageOne from '../assets/imageOne.png'

export default function CardOne () {
    return (
        <main className='  sm:w-[557px] md:w-[px] lg:w-[px] xl:w-[px] 2xl:w-[640px]
  sm:h-[532px] md:h-[px] lg:h-[px] xl:h-[px] 2xl:h-[360px]
  sm:mt-[100px] md:mt-[px] lg:mt-[px] xl:mt-[px] 2xl:mt-[32px]
  sm:ml-[30px] md:ml-[px] lg:ml-[px] xl:ml-[px] 2xl:ml-[64px]
border-[1px] rounded-[10px] bg-blue-300'>

<h1 className='sm:w-[240px] md:w-[px] lg:w-[px] xl:w-[px] 2xl:w-[290px]
  sm:h-[20px] md:h-[px] lg:h-[px] xl:h-[px] 2xl:h-[48px]
  sm:mt-[0px]
font-jakarta font-semibold text-[32px] leading-[48px] tracking--3 ml-[70px] p-2 text-white'>
  The Best Platform <br />
  for Car Rental</h1>

  <h2 className='sm:w-[px] md:w-[px] lg:w-[px] xl:w-[px] 2xl:w-[290px]
  sm:h-[px] md:h-[px] lg:h-[px] xl:h-[px] 2xl:h-[48px]

font-jakarta font-medium text-[16px] leading-[24px] tracking--2
  sm:ml-[75px] md:ml-[px] lg:ml-[px] xl:ml-[px] 2xl:ml-[75px]
  sm:mt-[200px] md:mt-[px] lg:mt-[px] xl:mt-[px] 2xl:mt-[80px]
  text-white'>
  Ease of doing a car rental safely and <br />
  reliably. Of course at a low price.</h2>

  <button className='sm:w-[px] md:w-[px] lg:w-[px] xl:w-[px] 2xl:w-[120px]
  sm:h-[px] md:h-[px] lg:h-[px] xl:h-[px] 2xl:h-[44px] 
  rounded-[4px] gap-[8px] bg-blue-600 font-jakarta font-semibold text-[16px] leading-[24px] tracking--2 justify-center item-center flex 
   sm:ml-[70px] md:ml-[px] lg:ml-[px] xl:ml-[px] 2xl:ml-[75px]
   sm:mt-[50px] md:mt-[px] lg:mt-[px] xl:mt-[px] 2xl:mt-[40px]
   p-2 text-white'>
    Rental Car
  </button>
  

  <ul className='  sm:-mt-[px] md:-mt-[px] lg:-mt-[px] xl:-mt-[px] 2xl:-mt-[25px]
  sm:ml-[px] md:ml-[px] lg:ml-[px] xl:ml-[px] 2xl:ml-[200px]
  sm:mt-8'>
    <Image src={imageOne} alt="sorry"/></ul>
</main>
    );
};