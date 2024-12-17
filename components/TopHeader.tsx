import command from '../assets/command.png'
import Image from 'next/image';

export default function TopHeader () {
    return (
<main className="sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1280px] 2xl:w-[1500px]
sm:h-[px] md:h-[px] lg:h-[px] xl:h-[px] 2xl:h-[141px] 
mt-[50px]
justify-between p-[32px] bg-white">
<h1 className='sm:w-[590px] md:w-[px] lg:w-[px] xl:w-[px] 2xl:w-[590px]
sm:h-[px] md:h-[px] lg:h-[px] xl:h-[px] 2xl:h-[40px] 
font-sf font-bold text-[32px] leading-[40px] 
sm:ml-[30px] md:ml-[px] lg:ml-[px] xl:ml-[px] 2xl:ml-[70px]'>
  High Fidelity Dashboard - Home Rent </h1>
  <ul className='sm:ml-[0px]
  -mt-[38px]'><Image src={command} alt="sorry"/></ul>
<h2 className='h-[25px] font-sf font-normal text-[20px] leading-[25px] 
  sm:ml-[0px] md:ml-[px] lg:ml-[680px] xl:ml-[950px] 2xl:ml-[1150px]
  md:mt-[20px]
  sm:-mt[27px] md:-mt-[px] lg:-mt-[27px] xl:-mt-[27px] 2xl:-mt-[27px]'>
  Last Updated:</h2>
<h3 className='h-[25px] font-sf font-bold sm:text-normal text-[20px] leading-[25px]  sm:ml-[140px] md:ml-[px] lg:ml-[840px] xl:ml-[1100px] 2xl:ml-[1300px]
-mt-[25px]'>
  8 Aug 2022
</h3>
</main>
    );
};