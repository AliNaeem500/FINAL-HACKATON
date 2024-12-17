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
import Small_card_1 from '../../assets/Small_card_1.png';
import Small_card_2 from '../../assets/Small_card_2.png';
import Small_card_3 from '../../assets/Small_card_3.png';
import heart from '../../assets/heart.png'
import Review_Star from '../../assets/Review_Star.png'
import Profil from '../../assets/Profil.png'
import Profill from '../../assets/Profill.png'
import Footer from '../Footer';
import Header_For_Pg_Two from '../Header_For_Pg_Two';
import Car_Card_Two_For_Pg_Three from '../Car_Card_Two_For_Pg_Three';
import View_All from '../View_All';


export default function Three () {
    return (
        <div className='sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1280px] 2xl:w-[1500px]'>

        <ul className="mt-0 sm:mt-60 "><TopHeader /></ul>

        <ul className="max-sm:mt-0 mt-59"><Header_For_Pg_Two /></ul>

        <div className="grid grid-cols-4 gap-x-3">

        <div className="bg-white rounded-lg shadow-xl h-[900px] mt-10 row-span-3 
        ">


         <ul className='block sm:hidden 
        block md:hidden
        lg:block 
        xl:block 
        2xl:block'> <Side_Bar /> </ul>

          <ul className='min-sm:-ml-0 min-sm:-mt-0
           -ml-[440px]  -mt-[820px]
           '>
            <Car_Card_Two_For_Pg_Three />
         </ul>        
        
         </div>


        </div>

        

        <ul className='max-sm:ml-0 ml-[360px] max-sm:-mt-0 -mt-[540px]
        block sm:hidden 
        block md:hidden
        lg:block 
        xl:block 
        2xl:block'><Image src={Small_card_1} alt="sorry"/></ul>

        <ul className='ml-[530px] max-sm:mt-0 -mt-[120px] max-sm:-mt-0
         block sm:hidden 
        block md:hidden
        lg:block 
        xl:block 
        2xl:block'><Image src={Small_card_2} alt="sorry"/></ul>

        <ul className='max-sm:ml-0 ml-[710px] -mt-[124px] max-sm:-mt-0'><Image src={Small_card_3} alt="sorry"/></ul>

        <h1 className='sm:w-[px] md:w-[px] lg:w-[px] xl:w-[px] 2xl:w-[228px]
  sm:h-[px] md:h-[px] lg:h-[px] xl:h-[px] 2xl:h-[40px]
 block sm:hidden 
        block md:hidden
        lg:block 
        xl:block 
        2xl:block
font-jakarta font-bold text-[32px] leading-[48px] tracking--3
 sm:mt-[220px] md:ml-[px] lg:ml-[px] xl:ml-[px] 2xl:ml-[900px]
 sm:-mt-[0px] md:mt-[px] lg:mt-[px] xl:mt-[px] 2xl:-mt-[460px]
 text-black'>Nissan GT - R</h1>

<ul className='  max-sm:-mt-[0px] md:-mt-[px] lg:-mt-[px] xl:-mt-[px] 2xl:-mt-[30px]
  max-sm:ml-[0px] md:ml-[px] lg:ml-[px] xl:ml-[px] 2xl:ml-[1450px]
  block sm:hidden block md:hidden block lg:hidden xl:block 2xl:block
   block sm:hidden 
        block md:hidden
        lg:block 
        xl:block 
        2xl:block'>
    <Image src={heart} alt="sorry"/></ul>

    <ul className='  max-sm:mt-[0px] md:-mt-[px] lg:-mt-[px] xl:-mt-[px] 2xl:mt-[20px]
  max-sm:ml-[0px] md:ml-[px] lg:ml-[px] xl:ml-[px] 2xl:ml-[900px]
  block sm:hidden block md:hidden block lg:hidden xl:block 2xl:block'>
    <Image src={Review_Star} alt="sorry"/></ul>

    <h1 className='sm:w-[px] md:w-[px] lg:w-[px] xl:w-[px] 2xl:w-[104px]
  sm:h-[px] md:h-[px] lg:h-[px] xl:h-[px] 2xl:h-[20px]
font-jakarta font-medium text-[14px] leading-[17.62px] tracking--2
 max-sm:ml-[0px] md:ml-[px] lg:ml-[px] xl:ml-[px] 2xl:ml-[1030px]
  max-sm:-mt-[0px] md:mt-[px] lg:mt-[px] xl:mt-[px] 2xl:-mt-[15px]
   block sm:hidden 
        block md:hidden
        lg:block 
        xl:block 
        2xl:block'>
  440+ Reviewer</h1>

  <h1 className='sm:w-[px] md:w-[px] lg:w-[px] xl:w-[px] 2xl:w-[444px]
  sm:h-[px] md:h-[px] lg:h-[px] xl:h-[px] 2xl:h-[120px]
font-jakarta font-normal text-[18px] leading-[40px] tracking--2 text-[#596780]
  max-sm:ml-[0px] md:ml-[px] lg:ml-[px] xl:ml-[px] 2xl:ml-[900px]
  max-sm:-mt-[0px] md:mt-[px] lg:mt-[px] xl:mt-[px] 2xl:-mt-[px]
   block sm:hidden 
        block md:hidden
        lg:block 
        xl:block 
        2xl:block'>
  NISMO has become the embodiment of Nissan's <br />
  outstanding performance, inspired by the most <br />
  unforgiving proving ground, the "race track".</h1>

  <h1 className='sm:w-[px] md:w-[px] lg:w-[px] xl:w-[px] 2xl:w-[92px]
  sm:h-[px] md:h-[px] lg:h-[px] xl:h-[px] 2xl:h-[28px]
font-jakarta font-normal text-[18px] leading-[30px] tracking--2 text-[#596780]
  max-sm:ml-[0px] md:ml-[px] lg:ml-[px] xl:ml-[px] 2xl:ml-[900px]
  max-sm:mt-[0px] md:mt-[px] lg:mt-[px] xl:mt-[px] 2xl:mt-[30px]
   block sm:hidden 
        block md:hidden
        lg:block 
        xl:block 
        2xl:block'>Type Car</h1>

<h1 className='sm:w-[px] md:w-[px] lg:w-[px] xl:w-[px] 2xl:w-[92px]
  sm:h-[px] md:h-[px] lg:h-[px] xl:h-[px] 2xl:h-[28px]
font-jakarta font-normal text-[18px] leading-[30px] tracking--2 text-[#596780]
  max-sm:ml-[0px] md:ml-[px] lg:ml-[px] xl:ml-[px] 2xl:ml-[900px]
  max-sm:mt-[px] md:mt-[px] lg:mt-[px] xl:mt-[px] 2xl:mt-[20px]
   block sm:hidden 
        block md:hidden
        lg:block 
        xl:block 
        2xl:block'>Steering </h1>

<h1 className='sm:w-[px] md:w-[px] lg:w-[px] xl:w-[px] 2xl:w-[92px]
  sm:h-[px] md:h-[px] lg:h-[px] xl:h-[px] 2xl:h-[28px]
font-jakarta font-semibold text-[18px] leading-[30px] tracking--2 text-[#596780]
max-sm:ml-[0px] md:ml-[px] lg:ml-[px] xl:ml-[px] 2xl:ml-[1030px]
max-sm:-mt-[0px] md:mt-[px] lg:mt-[px] xl:mt-[px] 2xl:-mt-[73px]
 block sm:hidden 
        block md:hidden
        lg:block 
        xl:block 
        2xl:block'>Sport </h1>

<h1 className='sm:w-[px] md:w-[px] lg:w-[px] xl:w-[px] 2xl:w-[92px]
  sm:h-[px] md:h-[px] lg:h-[px] xl:h-[px] 2xl:h-[28px]
font-jakarta font-semibold text-[18px] leading-[30px] tracking--2 text-[#596780]
  sm:ml-[px] md:ml-[px] lg:ml-[px] xl:ml-[px] 2xl:ml-[1030px]
  sm:mt-[px] md:mt-[px] lg:mt-[px] xl:mt-[px] 2xl:mt-[20px]
   block sm:hidden 
        block md:hidden
        lg:block 
        xl:block 
        2xl:block'>Manual</h1>

<h1 className='sm:w-[px] md:w-[px] lg:w-[px] xl:w-[px] 2xl:w-[92px]
  sm:h-[px] md:h-[px] lg:h-[px] xl:h-[px] 2xl:h-[28px]
font-jakarta font-normal text-[18px] leading-[30px] tracking--2 text-[#596780]
  sm:ml-[px] md:ml-[px] lg:ml-[px] xl:ml-[px] 2xl:ml-[1140px]
  sm:mt-[px] md:mt-[px] lg:mt-[px] xl:mt-[px] 2xl:-mt-[76px]
   block sm:hidden 
        block md:hidden
        lg:block 
        xl:block 
        2xl:block'>Capacity</h1>

<h1 className='sm:w-[px] md:w-[px] lg:w-[px] xl:w-[px] 2xl:w-[92px]
  sm:h-[px] md:h-[px] lg:h-[px] xl:h-[px] 2xl:h-[28px]
font-jakarta font-normal text-[18px] leading-[30px] tracking--2 text-[#596780]
  sm:ml-[px] md:ml-[px] lg:ml-[px] xl:ml-[px] 2xl:ml-[1140px]
  sm:mt-[px] md:mt-[px] lg:mt-[px] xl:mt-[px] 2xl:mt-[20px]
   block sm:hidden 
        block md:hidden
        lg:block 
        xl:block 
        2xl:block'>Gasoline </h1>

<h1 className='sm:w-[px] md:w-[px] lg:w-[px] xl:w-[px] 2xl:w-[92px]
  sm:h-[px] md:h-[px] lg:h-[px] xl:h-[px] 2xl:h-[28px]
font-jakarta font-semibold text-[18px] leading-[30px] tracking--2 text-[#596780]
  sm:ml-[px] md:ml-[px] lg:ml-[px] xl:ml-[px] 2xl:ml-[1250px]
  sm:mt-[px] md:mt-[px] lg:mt-[px] xl:mt-[px] 2xl:-mt-[73px]
   block sm:hidden 
        block md:hidden
        lg:block 
        xl:block 
        2xl:block'>2 Person </h1>

<h1 className='sm:w-[px] md:w-[px] lg:w-[px] xl:w-[px] 2xl:w-[92px]
  sm:h-[px] md:h-[px] lg:h-[px] xl:h-[px] 2xl:h-[28px]
font-jakarta font-semibold text-[18px] leading-[30px] tracking--2 text-[#596780]
  sm:ml-[px] md:ml-[px] lg:ml-[px] xl:ml-[px] 2xl:ml-[1280px]
  sm:mt-[px] md:mt-[px] lg:mt-[px] xl:mt-[px] 2xl:mt-[20px]
   block sm:hidden 
        block md:hidden
        lg:block 
        xl:block 
        2xl:block'>70L</h1>

<h1 className='sm:w-[px] md:w-[px] lg:w-[px] xl:w-[px] 2xl:w-[160px]
  sm:h-[px] md:h-[px] lg:h-[px] xl:h-[px] 2xl:h-[44px]

font-jakarta font-bold text-[28px] leading-[36px] 
  sm:ml-[px] md:ml-[px] lg:ml-[px] xl:ml-[px] 2xl:ml-[900px]
  sm:mt-[px] md:mt-[px] lg:mt-[px] xl:mt-[px] 2xl:mt-[60px]
  text-black
   block sm:hidden 
        block md:hidden
        lg:block 
        xl:block 
        2xl:block'> $80.00/ day</h1>

<h1 className='sm:w-[px] md:w-[px] lg:w-[px] xl:w-[px] 2xl:w-[92px]
  sm:h-[px] md:h-[px] lg:h-[px] xl:h-[px] 2xl:h-[28px]
font-jakarta font-normal text-[18px] leading-[30px] tracking--2 text-[#596780]
  sm:ml-[px] md:ml-[px] lg:ml-[px] xl:ml-[px] 2xl:ml-[900px]
  sm:mt-[px] md:mt-[px] lg:mt-[px] xl:mt-[px] 2xl:mt-[px]
   block sm:hidden 
        block md:hidden
        lg:block 
        xl:block 
        2xl:block'>$100.00</h1>

<button className='sm:w-[px] md:w-[px] lg:w-[px] xl:w-[px] 2xl:w-[120px]
  sm:h-[px] md:h-[px] lg:h-[px] xl:h-[px] 2xl:h-[44px] 
  rounded-[4px] gap-[8px] bg-blue-600 font-jakarta font-bold text-[16px] leading-[24px] tracking--2 justify-center item-center flex 
   sm:ml-[px] md:ml-[px] lg:ml-[px] xl:ml-[px] 2xl:ml-[1300px]
   sm:-mt-[px] md:-mt-[px] lg:-mt-[px] xl:-mt-[px] 2xl:-mt-[60px]
   p-2 text-white
    block sm:hidden 
        block md:hidden
        lg:block 
        xl:block 
        2xl:block'>
    Rent Now
  </button>

  <h1 className='sm:w-[px] md:w-[px] lg:w-[px] xl:w-[px] 2xl:w-[80px]
  sm:h-[px] md:h-[px] lg:h-[px] xl:h-[px] 2xl:h-[24px]

font-jakarta font-semibold text-[20px] leading-[25px] tracking--2
 sm:ml-[px] md:ml-[px] lg:ml-[px] xl:ml-[px] 2xl:ml-[370px]
 sm:mt-[px] md:mt-[px] lg:mt-[px] xl:mt-[px] 2xl:mt-[80px]
 text-black
  block sm:hidden 
        block md:hidden
        lg:block 
        xl:block 
        2xl:block'>Reviews</h1>

<button className='sm:w-[px] md:w-[px] lg:w-[px] xl:w-[px] 2xl:w-[50px]
  sm:h-[px] md:h-[px] lg:h-[px] xl:h-[px] 2xl:h-[28px] 
  rounded-[4px] gap-[8px] bg-blue-600 font-jakarta font-bold text-[14px] leading-[17px] tracking--2 justify-center item-center flex 
   sm:ml-[px] md:ml-[px] lg:ml-[px] xl:ml-[px] 2xl:ml-[470px]
   sm:-mt-[px] md:-mt-[px] lg:-mt-[px] xl:-mt-[px] 2xl:-mt-[26px]
   p-2 text-white
    block sm:hidden 
        block md:hidden
        lg:block 
        xl:block 
        2xl:block'>
    13
  </button>

  <ul className='  sm:-mt-[px] md:-mt-[px] lg:-mt-[px] xl:-mt-[px] 2xl:mt-[30px]
  sm:ml-[px] md:ml-[px] lg:ml-[px] xl:ml-[px] 2xl:ml-[370px]
  block sm:hidden block md:hidden block lg:hidden xl:block 2xl:block'>
    <Image src={Profil} alt="sorry"/></ul>

    <h1 className='sm:w-[px] md:w-[px] lg:w-[px] xl:w-[px] 2xl:w-[130px]
  sm:h-[px] md:h-[px] lg:h-[px] xl:h-[px] 2xl:h-[28px]

font-jakarta font-bold text-[20px] leading-[30px] tracking--3
 sm:ml-[px] md:ml-[px] lg:ml-[px] xl:ml-[px] 2xl:ml-[430px]
 sm:mt-[px] md:mt-[px] lg:mt-[px] xl:mt-[px] 2xl:-mt-[36px]
 text-black
  block sm:hidden 
        block md:hidden
        lg:block 
        xl:block 
        2xl:block'>Alex Stanton</h1>

<h1 className='sm:w-[px] md:w-[px] lg:w-[px] xl:w-[px] 2xl:w-[128px]
  sm:h-[px] md:h-[px] lg:h-[px] xl:h-[px] 2xl:h-[20px]
font-jakarta font-medium text-[14px] leading-[21px] tracking--2 text-[#90A3BF]
  sm:ml-[px] md:ml-[px] lg:ml-[px] xl:ml-[px] 2xl:ml-[430px]
  sm:mt-[px] md:mt-[px] lg:mt-[px] xl:mt-[px] 2xl:mt-[10px]
   block sm:hidden 
        block md:hidden
        lg:block 
        xl:block 
        2xl:block'>CEO at Bukalapak</h1>


<h1 className='sm:w-[px] md:w-[px] lg:w-[px] xl:w-[px] 2xl:w-[900px]
  sm:h-[px] md:h-[px] lg:h-[px] xl:h-[px] 2xl:h-[56px]
font-jakarta font-normal text-[14px] leading-[28px] tracking--2 text-[#596780]
  sm:ml-[px] md:ml-[px] lg:ml-[px] xl:ml-[px] 2xl:ml-[430px]
  sm:mt-[px] md:mt-[px] lg:mt-[px] xl:mt-[px] 2xl:mt-[20px]
   block sm:hidden 
        block md:hidden
        lg:block 
        xl:block 
        2xl:block'>
    We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable <br />
     facilities. In addition, the service provided by the officers is also very friendly and very polite.     
  </h1>

  <h1 className='sm:w-[px] md:w-[px] lg:w-[px] xl:w-[px] 2xl:w-[128px]
  sm:h-[px] md:h-[px] lg:h-[px] xl:h-[px] 2xl:h-[20px]
font-jakarta font-medium text-[14px] leading-[21px] tracking--2 text-[#90A3BF]
  sm:ml-[px] md:ml-[px] lg:ml-[px] xl:ml-[px] 2xl:ml-[1260px]
  sm:mt-[px] md:mt-[px] lg:mt-[px] xl:mt-[px] 2xl:-mt-[105px]
   block sm:hidden 
        block md:hidden
        lg:block 
        xl:block 
        2xl:block'>21 July 2022</h1>

<ul className='  sm:-mt-[px] md:-mt-[px] lg:-mt-[px] xl:-mt-[px] 2xl:mt-[5px]
  sm:ml-[px] md:ml-[px] lg:ml-[px] xl:ml-[px] 2xl:ml-[1235px]
  block sm:hidden block md:hidden block lg:hidden xl:block 2xl:block'>
    <Image src={Review_Star} alt="sorry"/></ul>

<div className='mt-[80px]'>
<ul className='  sm:-mt-[px] md:-mt-[px] lg:-mt-[px] xl:-mt-[px] 2xl:mt-[30px]
  sm:ml-[px] md:ml-[px] lg:ml-[px] xl:ml-[px] 2xl:ml-[370px]
  block sm:hidden block md:hidden block lg:hidden xl:block 2xl:block'>
    <Image src={Profill} alt="sorry"/></ul>

    <h1 className='sm:w-[px] md:w-[px] lg:w-[px] xl:w-[px] 2xl:w-[130px]
  sm:h-[px] md:h-[px] lg:h-[px] xl:h-[px] 2xl:h-[28px]

font-jakarta font-bold text-[20px] leading-[30px] tracking--3
 sm:ml-[px] md:ml-[px] lg:ml-[px] xl:ml-[px] 2xl:ml-[430px]
 sm:mt-[px] md:mt-[px] lg:mt-[px] xl:mt-[px] 2xl:-mt-[36px]
 text-black
  block sm:hidden 
        block md:hidden
        lg:block 
        xl:block 
        2xl:block'>Skylar Dias</h1>

<h1 className='sm:w-[px] md:w-[px] lg:w-[px] xl:w-[px] 2xl:w-[128px]
  sm:h-[px] md:h-[px] lg:h-[px] xl:h-[px] 2xl:h-[20px]
font-jakarta font-medium text-[14px] leading-[21px] tracking--2 text-[#90A3BF]
  sm:ml-[px] md:ml-[px] lg:ml-[px] xl:ml-[px] 2xl:ml-[430px]
  sm:mt-[px] md:mt-[px] lg:mt-[px] xl:mt-[px] 2xl:mt-[10px]
   block sm:hidden 
        block md:hidden
        lg:block 
        xl:block 
        2xl:block'>CEO at Amazon</h1>


<h1 className='sm:w-[px] md:w-[px] lg:w-[px] xl:w-[px] 2xl:w-[900px]
  sm:h-[px] md:h-[px] lg:h-[px] xl:h-[px] 2xl:h-[56px]
font-jakarta font-normal text-[14px] leading-[28px] tracking--2 text-[#596780]
  sm:ml-[px] md:ml-[px] lg:ml-[px] xl:ml-[px] 2xl:ml-[430px]
  sm:mt-[px] md:mt-[px] lg:mt-[px] xl:mt-[px] 2xl:mt-[20px]
   block sm:hidden 
        block md:hidden
        lg:block 
        xl:block 
        2xl:block'>
   We are greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars with good and <br />
   comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.    
  </h1>

  <h1 className='sm:w-[px] md:w-[px] lg:w-[px] xl:w-[px] 2xl:w-[128px]
  sm:h-[px] md:h-[px] lg:h-[px] xl:h-[px] 2xl:h-[20px]
font-jakarta font-medium text-[14px] leading-[21px] tracking--2 text-[#90A3BF]
  sm:ml-[px] md:ml-[px] lg:ml-[px] xl:ml-[px] 2xl:ml-[1260px]
  sm:mt-[px] md:mt-[px] lg:mt-[px] xl:mt-[px] 2xl:-mt-[105px]
   block sm:hidden 
        block md:hidden
        lg:block 
        xl:block 
        2xl:block'>21 July 2022</h1>

<ul className='  sm:-mt-[px] md:-mt-[px] lg:-mt-[px] xl:-mt-[px] 2xl:mt-[5px]
  sm:ml-[px] md:ml-[px] lg:ml-[px] xl:ml-[px] 2xl:ml-[1235px]
  block sm:hidden block md:hidden block lg:hidden xl:block 2xl:block'>
    <Image src={Review_Star} alt="sorry"/></ul>
</div>


<button className='sm:w-[px] md:w-[px] lg:w-[px] xl:w-[px] 2xl:w-[162px]
  sm:h-[px] md:h-[px] lg:h-[px] xl:h-[px] 2xl:h-[44px] 
  rounded-[4px] gap-[8px] border-[2px]
  
   sm:ml-[px] md:ml-[px] lg:ml-[px] xl:ml-[px] 2xl:ml-[760px]
   sm:-mt-[px] md:-mt-[px] lg:-mt-[px] xl:-mt-[px] 2xl:-mt-[100px]
   p-2 text-[#90A3BF] 
    block sm:hidden 
        block md:hidden
        lg:block 
        xl:block 
        2xl:block'>
   <h1 className='sm:w-[px] md:w-[px] lg:w-[px] xl:w-[px] 2xl:w-[80px]
  sm:h-[px] md:h-[px] lg:h-[px] xl:h-[px] 2xl:h-[24px]
   sm:ml-[px] md:ml-[px] lg:ml-[px] xl:ml-[px] 2xl:ml-[20px]
   sm:-mt-[px] md:-mt-[px] lg:-mt-[px] xl:-mt-[px] 2xl:-mt-[0px]
   font-jakarta font-bold text-[16px] leading-[24px] tracking--2 justify-center item-center flex '> Show All </h1>

    <ul className='  sm:-mt-[px] md:-mt-[px] lg:-mt-[px] xl:-mt-[px] 2xl:-mt-[15px]
  sm:ml-[px] md:ml-[px] lg:ml-[px] xl:ml-[px] 2xl:ml-[120px]
  block sm:hidden block md:hidden block lg:hidden xl:block 2xl:block'>
    <Image src={arrowDown} alt="sorry"/></ul>
  </button>

  <button>
<h1 className='sm:w-[px] md:w-[px] lg:w-[px] xl:w-[px] 2xl:w-[110px]
  sm:h-[px] md:h-[px] lg:h-[px] xl:h-[px] 2xl:h-[24px]

font-jakarta font-semibold text-[16px] leading-[24px] 
  sm:ml-[px] md:ml-[px] lg:ml-[px] xl:ml-[px] 2xl:-ml-[560px]
  sm:mt-[px] md:mt-[px] lg:mt-[px] xl:mt-[px] 2xl:mt-[300px]
  text-[#90A3BF]
   block sm:hidden 
        block md:hidden
        lg:block 
        xl:block 
        2xl:block'>Recent Car</h1>
</button>

<ul className=' sm:ml-[px] md:ml-[px] lg:ml-[px] xl:ml-[px] 2xl:ml-[260px]
  sm:mt-[px] md:mt-[px] lg:mt-[px] xl:mt-[px] 2xl:-mt-[30px]
   block sm:hidden 
        block md:hidden
        lg:block 
        xl:block 
        2xl:block'>
     <View_All /> </ul>

  <div className="
  block sm:hidden 
  block md:hidden
  lg:block 
  xl:block 
  2xl:block">
  <div className='ml-[300px]'> <CarCardOne /> </div>
  </div>

  <div className="
  block sm:hidden 
  block md:hidden
  lg:block 
  xl:block 
  2xl:block">
  <div className='ml-[370px]'> <CarCardTwo /> </div>
  </div>

  <div className="mt-[450px] -ml-[750px]
  block sm:hidden 
  block md:hidden
  lg:block 
  xl:block 
  2xl:block">
  <div className='-mt-[840px] ml-[1150px]'> <CarCardThree /> </div>
  </div>

<div className='mt-[100px]'>
  <div className="
  block sm:hidden 
  block md:hidden
  lg:block 
  xl:block 
  2xl:block">
  <div className='ml-[300px]'> <CarCardFive /> </div>
  </div>

  <div className="
  block sm:hidden 
  block md:hidden
  lg:block 
  xl:block 
  2xl:block">
  <div className='ml-[370px]'> <CarCardSix /> </div>
  </div>

  <div className="mt-[450px] -ml-[750px]
  block sm:hidden 
  block md:hidden
  lg:block 
  xl:block 
  2xl:block">
  <div className='-mt-[840px] ml-[1150px]'> <CarCardSeven /> </div>
  </div>
  </div>
 
  <ul className='  block sm:hidden 
  block md:hidden
  lg:block 
  xl:block 
  2xl:block'>
    <Footer /> </ul>
        </div>

    );
};