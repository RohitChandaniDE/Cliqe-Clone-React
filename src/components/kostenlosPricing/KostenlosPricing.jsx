import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const KostenlosPricing = () => {

 const [isToggled, setIsToggled] = useState(false);
 const [showMonthly, setShowMonthly] = useState(true);

 const handleToggle = () => {
    setIsToggled(!isToggled);
    setShowMonthly(!showMonthly);
  };

  return (
    <div className='container mx-auto h-[1150px] bg-[#CDF7FD]' >
   <img className='pl-[200px]' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/638a2cc14cd8445283b3c0d4_Disc%202.svg" />
   <img className='pl-[180px] pt-[50px]' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/638a2cc14cd84440d6b3c0d8_Disc%203.svg" />
   <img className='float-right pr-[150px] mt-[-250px]' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/638a2cc14cd84423c2b3c0ce_Disc%201.svg" />
   <h1 className="text-black mt-[-210px] 2xl:text-center pb-4 font-bold 2xl:text-5xl xl:text-5xl lg:text-3xl text-2xl text-center sm:text-justify">Kostenlos im Basismodell starten</h1>
    <p className='text-gray-500 text-[16.5px] text-center' >cliqe ist grundsätzlich kostenlos. Gegen eine geringe Gebühr kannst du zusätzlich <br />Premium-Funktionen und weiteren Monetatisierungsoptionen nutzen.</p>

<section className='h-[62px] bg-white w-[370px] pt-[20px] ml-[600px] mt-[40px] pl-[15px] rounded-[20px]' >
<label for="Toggle1" className="inline-flex items-center space-x-4 cursor-pointer text-gray-100">
	<span style={{ color: isToggled ? 'gray' : 'black' }} className='text-black font-bold'>Monatlich
</span>
	<span className="relative">
		<input onClick={handleToggle} id="Toggle1" type="checkbox" className="hidden peer" />
		<div className="w-12 h-6 rounded-[15px] shadow-inner bg-[#06D5F7] peer-checked:bg-[#06D5F7]"></div>
		<div className="absolute inset-y-0 left-0 mt-[3.5px] w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto bg-white"></div>
	</span>
	<span style={{ color: isToggled ? 'black' : 'gray' }} className='text-gray-500 font-bold'>Jährlich</span>
</label>
<div className='bg-[#E8E8F8] w-[108px] h-8 rounded-[100px] ml-[230px] mt-[-30px]' >
      <h6 className="text-[#06D5F7] 2xl:text-[15px] xl:text-5xl lg:text-3xl text-2xl pt-2 pl-4 text-center sm:text-justify cursor-pointer">Spare 25%</h6>
      </div>
</section>

<section className='flex justify-center mt-10' >

<div className='h-[700px] bg-white w-[400px] rounded-l-xl' >
  <img className='w-10 ml-[30px] pt-[40px] pb-5' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/638a2cc14cd844b4d1b3c0d1_Balloon.svg" />
  <h1 className='text-black font-bold text-2xl ml-[30px] pb-2' >Free</h1>
  <p className='ml-[30px] font-sans text-[16px] text-gray-500 leading-5 pb-6' >Individuelle Bio-Seite, um deinen Content <br />zu aggregieren.</p>
  <h1 className='text-black font-bold text-5xl ml-[30px]' >{showMonthly ? '0€' : '0€'}</h1>
  <div className='text-xl text-gray-400 pl-[115px] mt-[-40px] pb-4' >{showMonthly ? '/Monat' : '/Jahr'}</div>
  <h2 className='text-black text-[17px] ml-[30px]' >für limitierte Features & Brands</h2>
  <button className="text-black hover:text-white border-2 hover:border hover:border-gray-500 border-black font-bold 2xl:px-7 lg:px-5 px-3 2xl:py-3 lg:py-2 bg-gray-200 hover:bg-[#1919BC] 2xl:text-base lg:text-base text-sm rounded-[12px] text-center 
   mt-8 ml-8" type="button">Jetzt starten</button>

   <img className='w-7 mt-10 ml-[30px]' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63cfb2148ead0d2cda582acb_Check%20Icon%20cliqe.svg"/>
   <h2 className='text-black ml-[65px] mt-[-25px]' >Personalisierte Bio-Seite</h2>
   <img className='w-7 mt-4 ml-[30px]' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63cfb2148ead0d2cda582acb_Check%20Icon%20cliqe.svg"/>
   <h2 className='text-black ml-[65px] mt-[-25px]' >Zugang zu 50+ Brands</h2>
   <img className='w-7 mt-4 ml-[30px]' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63cfb2148ead0d2cda582acb_Check%20Icon%20cliqe.svg"/>
   <h2 className='text-black ml-[65px] mt-[-25px]' >Insights mit Basic-Analytics</h2>
   <img className='w-7 mt-4 ml-[30px] rotate-45' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/638a2cc14cd84426f8b3c166_OK%20%26%20Plus.svg"/>
   <h2 className='text-gray-400 ml-[65px] mt-[-25px]' >Partner-Short-Links für Stories</h2>
   <img className='w-7 mt-4 ml-[30px] rotate-45' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/638a2cc14cd84426f8b3c166_OK%20%26%20Plus.svg"/>
   <h2 className='text-gray-400 ml-[65px] mt-[-25px]' >Ausblendbares cliqe-Logo</h2>
   <img className='w-7 mt-4 ml-[30px] rotate-45' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/638a2cc14cd84426f8b3c166_OK%20%26%20Plus.svg"/>
   <h2 className='text-gray-400 ml-[65px] mt-[-25px]' >Impressum-as-a-Service</h2>
</div>

<div className='h-[700px] bg-white w-[400px] border-dashed border-x-2' >
  <img className='w-10 ml-[30px] pt-[40px] pb-5' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/638a2cc14cd84468f8b3c0d5_Diamond%20Icon.svg" />
  <h1 className='text-black font-bold text-2xl ml-[30px] pb-2' >Growth</h1>
  <p className='ml-[30px] font-sans text-[16px] text-gray-500 leading-5 pb-6' >Individuelle Bio-Seite, um deinen Content <br />zu monetarisieren.</p>
  <h1 className='text-black font-bold text-5xl ml-[30px]' >{showMonthly ? '9€' : '81€'}</h1>
  <div className='text-xl text-gray-400 pl-[115px] mt-[-40px] pb-4' >{showMonthly ? '/Monat' : '/Jahr'}</div>
  <h2 className='text-black text-[17px] ml-[30px]' >für eine Vielzahl an Features & Brands</h2>
  <button className="text-white font-bold 2xl:px-7 ml-[30px] lg:px-5 px-3 2xl:py-3 lg:py-2 bg-[#1919BC] 2xl:text-base lg:text-base text-sm rounded-[12px] text-center 
  hover:opacity-80 mt-8" type="button">Jetzt starten</button>

   <img className='w-7 mt-10 ml-[30px]' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63cfb2148ead0d2cda582acb_Check%20Icon%20cliqe.svg"/>
   <h2 className='text-black ml-[65px] mt-[-25px]' >Personalisierte Bio-Seite</h2>
   <img className='w-7 mt-4 ml-[30px]' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63cfb2148ead0d2cda582acb_Check%20Icon%20cliqe.svg"/>
   <h2 className='text-black ml-[65px] mt-[-25px]' >Zugang zu 50+ Brands</h2>
   <img className='w-7 mt-4 ml-[30px]' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63cfb2148ead0d2cda582acb_Check%20Icon%20cliqe.svg"/>
   <h2 className='text-black ml-[65px] mt-[-25px]' >Insights mit Basic-Analytics</h2>
   <img className='w-7 mt-4 ml-[30px]' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63cfb2148ead0d2cda582acb_Check%20Icon%20cliqe.svg"/>
   <h2 className='text-black ml-[65px] mt-[-25px]' >Partner-Short-Links für Stories</h2>
   <img className='w-7 mt-4 ml-[30px] rotate-45' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/638a2cc14cd84426f8b3c166_OK%20%26%20Plus.svg"/>
   <h2 className='text-gray-400 ml-[65px] mt-[-25px]' >Ausblendbares cliqe-Logo</h2>
   <img className='w-7 mt-4 ml-[30px] rotate-45' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/638a2cc14cd84426f8b3c166_OK%20%26%20Plus.svg"/>
   <h2 className='text-gray-400 ml-[65px] mt-[-25px]' >Impressum-as-a-Service</h2>

   <div className='bg-[#FFF500] h-[40px] w-[125px] ml-[274px] mt-[-580px] shadow-[0px_3px_lightgray] rounded-bl-xl' >
    <div className='ml-2 pt-3' ><FaStar/></div>
    <h1 className='font-bold pl-8 mt-[-18px]' >Empfohlen</h1>
   </div>
</div>

<div className='h-[700px] bg-white w-[400px] rounded-r-xl' >
  <img className='w-10 ml-[30px] pt-[40px] pb-5' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/638a2cc14cd844cb24b3c0d9_Briefcase%20Green.svg" />
  <h1 className='text-black font-bold text-2xl ml-[30px] pb-2' >Professional</h1>
  <p className='ml-[30px] font-sans text-[16px] text-gray-500 leading-5 pb-6' >Individuelle Bio-Seite, um deinen Content <br />zu aggregieren.</p>
  <h1 className='text-black font-bold text-5xl ml-[30px]' >{showMonthly ? '24€' : '216€'}</h1>
  <div className='text-xl text-gray-400 pl-[140px] mt-[-40px] pb-4' >{showMonthly ? '/Monat' : '/Jahr'}</div>
  <h2 className='text-black text-[17px] ml-[30px]' >für limitierte Features & Brands</h2>
  <button className="text-black hover:text-white border-2 hover:border hover:border-gray-500 border-black font-bold 2xl:px-7 lg:px-5 px-3 2xl:py-3 lg:py-2 bg-gray-200 hover:bg-[#1919BC] 2xl:text-base lg:text-base text-sm rounded-[12px] text-center 
   mt-8 ml-8" type="button">Jetzt starten</button>

   <img className='w-7 mt-10 ml-[30px]' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63cfb2148ead0d2cda582acb_Check%20Icon%20cliqe.svg"/>
   <h2 className='text-black ml-[65px] mt-[-25px]' >Personalisierte Bio-Seite</h2>
   <img className='w-7 mt-4 ml-[30px]' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63cfb2148ead0d2cda582acb_Check%20Icon%20cliqe.svg"/>
   <h2 className='text-black ml-[65px] mt-[-25px]' >Zugang zu 50+ Brands</h2>
   <img className='w-7 mt-4 ml-[30px]' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63cfb2148ead0d2cda582acb_Check%20Icon%20cliqe.svg"/>
   <h2 className='text-black ml-[65px] mt-[-25px]' >Insights mit Basic-Analytics</h2>
   <img className='w-7 mt-4 ml-[30px]' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63cfb2148ead0d2cda582acb_Check%20Icon%20cliqe.svg"/>
   <h2 className='text-black ml-[65px] mt-[-25px]' >Partner-Short-Links für Stories</h2>
   <img className='w-7 mt-4 ml-[30px]' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63cfb2148ead0d2cda582acb_Check%20Icon%20cliqe.svg"/>
   <h2 className='text-black ml-[65px] mt-[-25px]' >Ausblendbares cliqe-Logo</h2>
   <img className='w-7 mt-4 ml-[30px]' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63cfb2148ead0d2cda582acb_Check%20Icon%20cliqe.svg"/>
   <h2 className='text-black ml-[65px] mt-[-25px]' >Impressum-as-a-Service</h2>
</div>

</section>


    </div>
  )
}

export default KostenlosPricing



