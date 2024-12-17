import Image from 'next/image';
import React from 'react';
import TopHeader from '@/components/TopHeader';
import Header from '@/components/Header';
import CardOne from '@/components/CardOne';
import CardTwo from '@/components/CardTwo';
import MiddleContent from '@/components/MiddleContent';
import CarCardOne from '@/components/CarCardOne';
import CarCardTwo from '@/components/CarCardTwo';
import CarCardThree from '@/components/CarCardThree';
import CarCardFour from '@/components/CarCardFour';
import CarCardFive from '@/components/CarCardFive';
import CarCardSix from '@/components/CarCardSix';
import CarCardSeven from '@/components/CarCardSeven';
import CarCardEight from '@/components/CarCardEight';
import CarCardNine from '@/components/CarCardNine';
import CarCardTen from '@/components/CarCardTen';
import CarCardEleven from '@/components/CarCardEleven';
import CarCardTwelve from '@/components/CarCardTwelve';
import PopularCar from '@/components/PopularCar';
import View_All from '@/components/View_All';
import Show_more_car from '@/components/Show_more_car';
import Footer from '@/components/Footer';
import Two from '@/components/2nd_Page/Two';
import Three from '@/components/3rd_page/Three';
import Four from '@/components/4rd_Page/Four';


export default function Home() {
  return (  


<div className="sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1280px] 2xl:w-[1500px] 
sm:h-[px] md:h-[px] lg:h-[px] xl:h-[px] 2xl:h-[12000px]
 bg-gray-200">


<TopHeader/>

<Header />
  
<CardOne />

<CardTwo />

<MiddleContent />

<PopularCar />

<View_All />




<CarCardOne /> 

<CarCardTwo />

<CarCardThree />

<CarCardFour />

<CarCardFive />

<CarCardSix />

<CarCardSeven />

<CarCardEight />

<CarCardNine />

<CarCardTen />

<CarCardEleven />

<CarCardTwelve/>

<Show_more_car />

<Footer />




<main className='PAGE NO 2' />
<Two />

<main className='PAGE NO 3'/>
<Three />

<main className='PAGE NO 4' />
<Four />


 </div>
  );
};

