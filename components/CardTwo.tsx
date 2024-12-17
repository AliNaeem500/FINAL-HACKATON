import Image from 'next/image'
import imageTwo from '../assets/imageTwo.png'

export default function CardTwo () {
    return (
        <main className='  sm:w-[px] md:w-[px] lg:w-[px] xl:w-[px] 2xl:w-[640px]
        sm:h-[px] md:h-[px] lg:h-[px] xl:h-[px] 2xl:h-[360px]
        sm:-mt-[px] md:-mt-[px] lg:-mt-[px] xl:-mt-[px] 2xl:-mt-[356px]
        sm:ml-[px] md:ml-[px] lg:ml-[px] xl:ml-[px] 2xl:ml-[800px]
        block sm:hidden block md:hidden block lg:hidden xl:block 2xl:block
      border-[1px] rounded-[10px] bg-blue-600'>
      
      <h1 className='sm:w-[px] md:w-[px] lg:w-[px] xl:w-[px] 2xl:w-[330px]
        sm:h-[px] md:h-[px] lg:h-[px] xl:h-[px] 2xl:h-[48px]
        block sm:hidden block md:hidden block lg:hidden xl:block 2xl:block
      font-jakarta font-semibold text-[32px] leading-[48px] tracking--3 ml-[70px] p-2 text-white'>
        Easy way to rent a <br />
        car at a low price</h1>
      
        <h2 className='sm:w-[px] md:w-[px] lg:w-[px] xl:w-[px] 2xl:w-[290px]
        sm:h-[px] md:h-[px] lg:h-[px] xl:h-[px] 2xl:h-[48px]
        block sm:hidden block md:hidden block lg:hidden xl:block 2xl:block
      
      font-jakarta font-medium text-[16px] leading-[24px] tracking--2
        sm:ml-[px] md:ml-[px] lg:ml-[px] xl:ml-[px] 2xl:ml-[75px]
        sm:mt-[px] md:mt-[px] lg:mt-[px] xl:mt-[px] 2xl:mt-[80px]
        text-white'>
        Providing cheap car rental services <br />
        and safe and comfortable facilities.</h2>
      
        <button className='sm:w-[px] md:w-[px] lg:w-[px] xl:w-[px] 2xl:w-[120px]
        sm:h-[px] md:h-[px] lg:h-[px] xl:h-[px] 2xl:h-[44px] 
        block sm:hidden block md:hidden block lg:hidden xl:block 2xl:block
        rounded-[4px] gap-[8px] bg-blue-300 font-jakarta font-semibold text-[16px] leading-[24px] tracking--2 justify-center item-center flex 
         sm:ml-[px] md:ml-[px] lg:ml-[px] xl:ml-[px] 2xl:ml-[75px]
         sm:mt-[px] md:mt-[px] lg:mt-[px] xl:mt-[px] 2xl:mt-[40px]
         p-2 text-white'>
          Rental Car
        </button>
      
        <ul className='  sm:-mt-[px] md:-mt-[px] lg:-mt-[px] xl:-mt-[px] 2xl:-mt-[25px]
        sm:ml-[px] md:ml-[px] lg:ml-[px] xl:ml-[px] 2xl:ml-[240px]
        block sm:hidden block md:hidden block lg:hidden xl:block 2xl:block'>
          <Image src={imageTwo} alt="sorry"/></ul>
      </main>
    );
};