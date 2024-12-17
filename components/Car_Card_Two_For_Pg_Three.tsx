import Image from 'next/image'
import imageTwo from '../assets/imageTwo.png'

export default function Car_Card_Two_For_Pg_Three () {
    return (
        <main className='  sm:w-[327px] md:w-[327px] lg:w-[px] xl:w-[px] 2xl:w-[500px]
        sm:h-[232px] md:h-[232px] lg:h-[px] xl:h-[px] 2xl:h-[340px]
        sm:-mt-[0px] md:-mt-[0px] lg:-mt-[px] xl:-mt-[px] 2xl:-mt-[356px]
        sm:ml-[0px] md:ml-[0px] lg:ml-[px] xl:ml-[px] 2xl:ml-[800px]
        block sm:hidden block md:hidden block lg:hidden xl:block 2xl:block
      border-[1px] rounded-[10px] bg-blue-600'>
      
      <h1 className='sm:w-[240px] md:w-[240px] lg:w-[px] xl:w-[px] 2xl:w-[400px]
        sm:h-[40px] md:h-[40px] lg:h-[px] xl:h-[px] 2xl:h-[48px]
        block sm:hidden block md:hidden block lg:hidden xl:block 2xl:block
      font-jakarta font-medium text-[32px] leading-[48px] tracking--3 ml-[30px] p-2 text-white'>
        Sports car with the best <br />
        design and acceleration</h1>
      
        <h2 className='sm:w-[216px] md:w-[216px] lg:w-[px] xl:w-[px] 2xl:w-[290px]
        sm:h-[30px] md:h-[30px] lg:h-[px] xl:h-[px] 2xl:h-[48px]
        block sm:hidden block md:hidden block lg:hidden xl:block 2xl:block
      
      font-jakarta font-medium text-[16px] leading-[24px] tracking--2
        sm:ml-[0px] md:ml-[0px] lg:ml-[px] xl:ml-[px] 2xl:ml-[30px]
        sm:mt-[0px] md:mt-[0px] lg:mt-[px] xl:mt-[px] 2xl:mt-[80px]
        text-white'>
       Safety and comfort while driving a <br />
       futuristic and elegant sports car</h2>
      
        {/* <button className='sm:w-[px] md:w-[px] lg:w-[px] xl:w-[px] 2xl:w-[120px]
        sm:h-[px] md:h-[px] lg:h-[px] xl:h-[px] 2xl:h-[44px] 
        block sm:hidden block md:hidden block lg:hidden xl:block 2xl:block
        rounded-[4px] gap-[8px] bg-blue-300 font-jakarta font-semibold text-[16px] leading-[24px] tracking--2 justify-center item-center flex 
         sm:ml-[px] md:ml-[px] lg:ml-[px] xl:ml-[px] 2xl:ml-[75px]
         sm:mt-[px] md:mt-[px] lg:mt-[px] xl:mt-[px] 2xl:mt-[40px]
         p-2 text-white'>
          Rental Car
        </button> */}
      
        <ul className='  sm:-mt-[0px] md:-mt-[0px] lg:-mt-[px] xl:-mt-[px] 2xl:mt-[40px]
        sm:ml-[0px] md:ml-[0px] lg:ml-[px] xl:ml-[px] 2xl:ml-[60px]
        block sm:hidden block md:hidden block lg:hidden xl:block 2xl:block'>
          <Image src={imageTwo} alt="sorry"/></ul>
      </main>
    );
};