import Image from 'next/image';
import tick from '../../assets/tick.png'
import empty_box from '../../assets/Empty_box.png'
import PRICE_RANGE from '../../assets/PRICE_RANGE.png'
import TopHeader from "../TopHeader";
import Header from '../Header';
import Side_Bar from '../Side_Bar';
import MiddleContent from '../MiddleContent';
import mark from '../../assets/mark.png'
import arrowDown from '../../assets/arrowDown.png'
import Switch from '../../assets/Switch.png'
import Middle_Content_For_Pg_Two from '../Middle_Content_For_Pg_Two';
import CarCardOne from '../CarCardOne';
import CarCardTwo from '../CarCardTwo';
import CarCardThree from '../CarCardThree';
import CarCardFive from '../CarCardFive';
import CarCardSix from '../CarCardSix';
import CarCardSeven from '../CarCardSeven';
import CarCardNine from '../CarCardNine';
import CarCardTen from '../CarCardTen';
import CarCardEight from '../CarCardEight';
import CarCardEleven from '../CarCardEleven';
import menu from '../../assets/menu.png'
import Show_more_car from '../Show_more_car';
import Footer from '../Footer';
import Header_For_Pg_Two from '../Header_For_Pg_Two';


export default function Two () {
    return (
        <div>

        <ul className="mt-60"><TopHeader /></ul>

        <ul className="mt-59"><Header_For_Pg_Two /></ul>

    <div className="grid grid-cols-4 gap-x-3">

    

<div className="bg-white rounded-lg shadow-xl h-[900px] mt-10 row-span-3 
block sm:hidden 
block md:hidden
lg:block 
xl:block 
2xl:block">
 <ul className=''> <Side_Bar /> </ul>
</div>
<div className="bg- rounded-lg shadow-xl  mt-10 col-span-3 h-24 
max-sm:w-[630px] max-sm:mt-[170px]">
  <Middle_Content_For_Pg_Two />
</div>

<div className="
block sm:hidden 
block md:hidden
lg:block 
xl:block 
2xl:block">
<div className='-ml-5'> <CarCardOne /> </div>
</div>

<div className="
block sm:hidden 
block md:hidden
lg:block 
xl:block 
2xl:block">
<div className='-ml-[360px] mt-[440px] ' > <CarCardTwo /> </div>
</div>

<div className="mt-[450px] -ml-[750px]
block sm:hidden 
block md:hidden
lg:block 
xl:block 
2xl:block">
<div className='-ml-[0px] mt-[00px] '> <CarCardThree /> </div>
</div>

<div className="">
<div className='max-md:mt-[600px] max-md:-ml-[480px]'> <CarCardFive /> </div>
</div>

<div className="-ml-[360px] mt-[440px]">
<div className='max-md:mt-[px] max-md:-ml-[0px]'> <CarCardSix /> </div>
</div>

<div className="bg-transparent">
<div className='-ml-[740px] mt-[440px]'> <CarCardSeven /> </div>
</div>

<div className="
block sm:hidden 
block md:hidden
lg:block 
xl:block 
2xl:block">
<div className='ml-[370px]'> <CarCardNine /> </div>
</div>

<div className=" 
block sm:hidden 
block md:hidden
lg:block 
xl:block 
2xl:block">
<div className='ml-[10px] mt-[440px]'> <CarCardTen /> </div>
</div>

<div className="
block sm:hidden 
block md:hidden
lg:block 
xl:block 
2xl:block">
<div className='-ml-[360px] mt-[440px]'> <CarCardEleven /> </div>
</div>

    </div>

    <ul className='ml-[160px] mt-[400px] 
block sm:hidden 
block md:hidden
lg:block 
xl:block 
2xl:block'><Show_more_car/></ul>

    <ul className='mt-70 
block sm:hidden 
block md:hidden
lg:block 
xl:block 
2xl:block'><Footer /></ul>
        </div>
    );
};



























