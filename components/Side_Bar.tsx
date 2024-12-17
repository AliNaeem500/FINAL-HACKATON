import Image from 'next/image';
import tick from '../assets/tick.png'
import empty_box from '../assets/Empty_box.png'
import PRICE_RANGE from '../assets/PRICE_RANGE.png'

export default function Side_Bar () {
    return (

   <div>

<h1 className='h-[20px] w-[140px]
font-jakarta font-semibold text-[12px] leading-[15.12px] tracking--2 ml-[40px]
  text-[#596780]'>T Y P E</h1>

<ul className='w-[200px]'>
<h1 className='h-[20px] w-[140px]
font-jakarta font-semibold leading-[30px] tracking--2 ml-[80px] mt-6
  text-[#596780]'>Sport</h1> <h1 className="ml-[128px] -mt-[17px] text-[#596780]">(10)</h1>
 <p className='ml-[50px] -mt-[24px]'><Image src={tick} alt="sorry"/></p>
  </ul>

  <ul className='w-[200px]'>
<h1 className='h-[20px] w-[140px]
font-jakarta font-semibold leading-[30px] tracking--2 ml-[80px] mt-6
  text-[#596780]'>SUV</h1> <h1 className="ml-[120px] -mt-[17px] text-[#596780]">(12)</h1>
 <p className='ml-[50px] -mt-[24px]'><Image src={tick} alt="sorry"/></p>
  </ul>

  <ul className='w-[200px]'>
<h1 className='h-[20px] w-[140px]
font-jakarta font-semibold leading-[30px] tracking--2 ml-[80px] mt-6
  text-[#596780]'>MPV</h1> <h1 className="ml-[120px] -mt-[17px] text-[#596780]">(16)</h1>
 <p className='ml-[50px] -mt-[24px]'><Image src={empty_box} alt="sorry"/></p>
  </ul>

  <ul className='w-[200px]'>
<h1 className='h-[20px] w-[140px]
font-jakarta font-semibold leading-[30px] tracking--2 ml-[80px] mt-6
  text-[#596780]'>Sedan</h1> <h1 className="ml-[134px] -mt-[17px] text-[#596780]">(20)</h1>
 <p className='ml-[50px] -mt-[24px]'><Image src={empty_box} alt="sorry"/></p>
  </ul>

  <ul className='w-[200px]'>
<h1 className='h-[20px] w-[140px]
font-jakarta font-semibold leading-[30px] tracking--2 ml-[80px] mt-6
  text-[#596780]'>Coupe</h1> <h1 className="ml-[134px] -mt-[17px] text-[#596780]">(14)</h1>
 <p className='ml-[50px] -mt-[24px]'><Image src={empty_box} alt="sorry"/></p>
  </ul>

  <ul className='w-[200px]'>
<h1 className='h-[20px] w-[160px] 
font-jakarta font-semibold leading-[30px] tracking--2 ml-[80px] mt-6
  text-[#596780]'>Hatchback</h1> <h1 className="ml-[166px] -mt-[17px] text-[#596780]">(14)</h1>
 <p className='ml-[50px] -mt-[24px]'><Image src={empty_box} alt="sorry"/></p>


 <h1 className='h-[20px] w-[140px] mt-[80px]
font-jakarta font-semibold leading-[15.12px] tracking--2 ml-[40px]
  text-[#596780]'>C A P A C I T Y</h1></ul> 

<ul className='w-[200px]'>
<h1 className='h-[20px] w-[140px]
font-jakarta font-semibold leading-[30px] tracking--2 ml-[80px] mt-6
  text-[#596780]'>2 Person</h1> <h1 className="ml-[155px] -mt-[17px] text-[#596780]">(10)</h1>
 <p className='ml-[50px] -mt-[24px]'><Image src={tick} alt="sorry"/></p>
  </ul>

  <ul className='w-[200px]'>
<h1 className='h-[20px] w-[140px]
font-jakarta font-semibold leading-[30px] tracking--2 ml-[80px] mt-6
  text-[#596780]'>4 Person</h1> <h1 className="ml-[155px] -mt-[17px] text-[#596780]">(14)</h1>
 <p className='ml-[50px] -mt-[24px]'><Image src={empty_box} alt="sorry"/></p>
  </ul>

  <ul className='w-[200px]'>
<h1 className='h-[20px] w-[140px]
font-jakarta font-semibold leading-[30px] tracking--2 ml-[80px] mt-6
  text-[#596780]'>6 Person</h1> <h1 className="ml-[155px] -mt-[17px] text-[#596780]">(12)</h1>
 <p className='ml-[50px] -mt-[24px]'><Image src={empty_box} alt="sorry"/></p>
  </ul>

  <ul className='w-[200px]'>
<h1 className='h-[20px] w-[140px]
font-jakarta font-semibold leading-[30px] tracking--2 ml-[80px] mt-6
  text-[#596780]'>8 or more</h1> <h1 className="ml-[160px] -mt-[17px] text-[#596780]">(16)</h1>
 <p className='ml-[50px] -mt-[24px]'><Image src={tick} alt="sorry"/></p>
  </ul>

<ul>
  <h1 className='h-[20px] w-[110px] mt-[80px]
font-jakarta font-semibold leading-[30px] tracking--2 text-[#596780]
ml-[40px]'>P R I C E</h1>
  <p className='ml-[40px] mt-[20px]'><Image src={PRICE_RANGE} alt="sorry"/></p>
  <h1 className='h-[24px] w-[296px]
font-jakarta font-semibold leading-[30px] tracking--2 ml-[40px] mt-4
  text-[#596780]'>Max. $100.00</h1>
  </ul>

</div>

)
}