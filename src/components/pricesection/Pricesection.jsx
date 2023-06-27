import React, { useEffect } from 'react';
import { FaBrush, FaBraille, FaEuroSign } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";


const Pricesection = () => {

  useEffect(() => {
    Aos.init({duration: 1000});
   }, [])

  return (
    <div className='container mx-auto' >
        
    <h1 className="text-black pt-20 2xl:text-center pb-2 font-bold 2xl:text-5xl xl:text-5xl lg:text-3xl text-2xl text-center sm:text-justify">Unsere<span className='pl-3 multicolortext' >Features</span></h1>
    <p className='text-gray-500 text-[16.5px] pb-12 text-center' >Vergleiche unsere Pläne und entscheide, welcher am besten zu dir passt.</p>

<section data-aos = "fade-up" className='pb-28' >
    
    <main className='pb-6' >
     <div className='flex ml-[325px]'>
     <FaBrush className='mt-[6px] mr-1' />
     <h1 className='text-black font-bold text-xl' >Personalisierung</h1>
     </div>
     <div className='flex justify-center gap-[120px] mt-[-25px] mr-[-350px]' >
      <h1 className='text-black font-bold text-xl'>Free</h1>
      <h1 className='text-black font-bold text-xl'>Growth</h1>
      <h1 className='text-black font-bold text-xl'>Professional</h1>
     </div>
    </main>

    <hr className='pb-6 w-[970px] ml-[320px]' />

    <main>
    <p className='text-black text-base text-center ml-[-680px]'>Individuelle cliqe.bio-Domain</p> 
    <div className='flex justify-center gap-[150px] mt-[-25px] mb-5 mr-[-250px]' >
    <img className='w-7 ' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63cfb2148ead0d2cda582acb_Check%20Icon%20cliqe.svg" />
     <img className='w-7 ' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63cfb2148ead0d2cda582acb_Check%20Icon%20cliqe.svg" />
     <img className='w-7 ' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63cfb2148ead0d2cda582acb_Check%20Icon%20cliqe.svg" />
    </div>
    </main>

    <main >
    <p className='text-black text-base text-center ml-[-737px]'>Persönliches Design</p> 
    <div className='flex justify-center gap-[80px] mt-[-25px] mb-5 mr-[-300px]' >
    <p className='text-black text-base text-center'>Basic-Themes</p> 
    <p className='text-black text-base text-center'>Plus-Themes</p> 
    <p className='text-black text-base text-center'>Pro-Themes</p> 
    </div>
    </main>

    <main>
    <p className='text-black text-base text-center ml-[-674px]'>Link- & Profilbild-Animationen</p> 
    <div className='flex justify-center gap-[150px] mt-[-25px] mb-5 mr-[-250px]' >
    <img className='w-7 rotate-45' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/638a2cc14cd84403b4b3c0db_OK%20%26%20Plus%20(1).svg" />
     <img className='w-7 ' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63cfb2148ead0d2cda582acb_Check%20Icon%20cliqe.svg" />
     <img className='w-7 ' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63cfb2148ead0d2cda582acb_Check%20Icon%20cliqe.svg" />
    </div>
    </main>

    <main>
    <p className='text-black text-base text-center ml-[-723px]'>cliqe-Logo ausblenden</p> 
    <div className='flex justify-center gap-[150px] mt-[-25px] mb-5 mr-[-250px]' >
    <img className='w-7 rotate-45' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/638a2cc14cd84403b4b3c0db_OK%20%26%20Plus%20(1).svg" />
     <img className='w-7 rotate-45' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/638a2cc14cd84403b4b3c0db_OK%20%26%20Plus%20(1).svg" />
     <img className='w-7 ' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63cfb2148ead0d2cda582acb_Check%20Icon%20cliqe.svg" />
    </div>
    </main>
</section>

<section data-aos = "fade-up" className='pb-28' >
    <main className='pb-6' >
     <div className='flex ml-[325px]'>
     <FaBraille className='mt-[6px] mr-1' />
     <h1 className='text-black font-bold text-xl' >Content & Links</h1>
     </div>
     <div className='flex justify-center gap-[120px] mt-[-25px] mr-[-350px]' >
      <h1 className='text-black font-bold text-xl'>Free</h1>
      <h1 className='text-black font-bold text-xl'>Growth</h1>
      <h1 className='text-black font-bold text-xl'>Professional</h1>
     </div>
    </main>

    <hr className='pb-6 w-[970px] ml-[320px]' />

    <main>
    <p className='text-black text-base text-center ml-[-760px]'>Persönliche Links</p> 
    <div className='flex justify-center gap-[150px] mt-[-25px] mb-5 mr-[-250px]' >
    <img className='w-7 ' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63cfb2148ead0d2cda582acb_Check%20Icon%20cliqe.svg" />
     <img className='w-7 ' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63cfb2148ead0d2cda582acb_Check%20Icon%20cliqe.svg" />
     <img className='w-7 ' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63cfb2148ead0d2cda582acb_Check%20Icon%20cliqe.svg" />
    </div>
    </main>

    <main>
    <p className='text-black text-base text-center ml-[-755px]'>Social Media-Icons</p> 
    <div className='flex justify-center gap-[150px] mt-[-25px] mb-5 mr-[-250px]' >
    <img className='w-7 ' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63cfb2148ead0d2cda582acb_Check%20Icon%20cliqe.svg" />
     <img className='w-7 ' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63cfb2148ead0d2cda582acb_Check%20Icon%20cliqe.svg" />
     <img className='w-7 ' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63cfb2148ead0d2cda582acb_Check%20Icon%20cliqe.svg" />
    </div>
    </main>

    <main>
    <p className='text-black text-base text-center ml-[-585px]'>Embedded Content (YouTube, Spotify etc.)</p> 
    <div className='flex justify-center gap-[150px] mt-[-25px] mb-5 mr-[-250px]' >
    <img className='w-7 ' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63cfb2148ead0d2cda582acb_Check%20Icon%20cliqe.svg" />
     <img className='w-7 ' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63cfb2148ead0d2cda582acb_Check%20Icon%20cliqe.svg" />
     <img className='w-7 ' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63cfb2148ead0d2cda582acb_Check%20Icon%20cliqe.svg" />
    </div>
    </main>
</section>

<section data-aos = "fade-up" className='pb-28' >
    <main className='pb-6' >
     <div className='flex ml-[325px]'>
     <FaEuroSign className='mt-[6px] mr-1' />
     <h1 className='text-black font-bold text-xl' >Monetarisierung</h1>
     </div>
     <div className='flex justify-center gap-[120px] mt-[-25px] mr-[-350px]' >
      <h1 className='text-black font-bold text-xl'>Free</h1>
      <h1 className='text-black font-bold text-xl'>Growth</h1>
      <h1 className='text-black font-bold text-xl'>Professional</h1>
     </div>
    </main>

    <hr className='pb-6 w-[970px] ml-[320px]' />

    <main >
    <p className='text-black text-base text-center ml-[-655px]'>Zugang zu Partnerprogrammen</p> 
    <div className='flex justify-center gap-[80px] mt-[-25px] mb-5 mr-[-300px]' >
    <p className='text-black text-base text-center'>50+ Brands</p> 
    <p className='text-black text-base text-center'>150+ Brands</p> 
    <p className='text-black text-base text-center'>250+ Brands</p> 
    </div>
    </main>

    <main>
    <p className='text-black text-base text-center ml-[-685px]'>"Paypal Spenden"-Funktion</p> 
    <div className='flex justify-center gap-[150px] mt-[-25px] mb-5 mr-[-250px]' >
    <img className='w-7 ' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63cfb2148ead0d2cda582acb_Check%20Icon%20cliqe.svg" />
     <img className='w-7 ' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63cfb2148ead0d2cda582acb_Check%20Icon%20cliqe.svg" />
     <img className='w-7 ' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63cfb2148ead0d2cda582acb_Check%20Icon%20cliqe.svg" />
    </div>
    </main>

    <main>
    <p className='text-black text-base text-center ml-[-680px]'>"Buy Me a Coffee"-Funktion</p> 
    <div className='flex justify-center gap-[150px] mt-[-25px] mb-5 mr-[-250px]' >
    <img className='w-7 ' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63cfb2148ead0d2cda582acb_Check%20Icon%20cliqe.svg" />
     <img className='w-7 ' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63cfb2148ead0d2cda582acb_Check%20Icon%20cliqe.svg" />
     <img className='w-7 ' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63cfb2148ead0d2cda582acb_Check%20Icon%20cliqe.svg" />
    </div>
    </main>

    <main>
    <p className='text-black text-base text-center ml-[-700px]'>cliqe Referral Programm</p> 
    <div className='flex justify-center gap-[150px] mt-[-25px] mb-5 mr-[-250px]' >
    <img className='w-7 ' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63cfb2148ead0d2cda582acb_Check%20Icon%20cliqe.svg" />
     <img className='w-7 ' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63cfb2148ead0d2cda582acb_Check%20Icon%20cliqe.svg" />
     <img className='w-7 ' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63cfb2148ead0d2cda582acb_Check%20Icon%20cliqe.svg" />
    </div>
    </main>

    <main>
    <p className='text-black text-base text-center ml-[-655px]'>Partner-Short-Links für Stories</p> 
    <div className='flex justify-center gap-[150px] mt-[-25px] mb-5 mr-[-250px]' >
    <img className='w-7 rotate-45' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/638a2cc14cd84403b4b3c0db_OK%20%26%20Plus%20(1).svg" />
     <img className='w-7 ' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63cfb2148ead0d2cda582acb_Check%20Icon%20cliqe.svg" />
     <img className='w-7 ' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63cfb2148ead0d2cda582acb_Check%20Icon%20cliqe.svg" />
    </div>
    </main>
</section>

<section data-aos = "fade-up" className='pb-8' >
     <main className='pb-6' >
     <div className='flex ml-[325px]'>
     <FaBrush className='mt-[6px] mr-1' />
     <h1 className='text-black font-bold text-xl'>Analytics</h1>
     </div>
     <div className='flex justify-center gap-[120px] mt-[-25px] mr-[-350px]' >
      <h1 className='text-black font-bold text-xl'>Free</h1>
      <h1 className='text-black font-bold text-xl'>Growth</h1>
      <h1 className='text-black font-bold text-xl'>Professional</h1>
     </div>
    </main>

    <hr className='pb-6 w-[970px] ml-[320px]' />

    <main>
    <p className='text-black text-base text-center ml-[-755px]'>Bio-Seitenaufrufe</p> 
    <div className='flex justify-center gap-[150px] mt-[-25px] mb-5 mr-[-250px]' >
    <img className='w-7 ' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63cfb2148ead0d2cda582acb_Check%20Icon%20cliqe.svg" />
     <img className='w-7 ' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63cfb2148ead0d2cda582acb_Check%20Icon%20cliqe.svg" />
     <img className='w-7 ' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63cfb2148ead0d2cda582acb_Check%20Icon%20cliqe.svg" />
    </div>
    </main>

    <main>
    <p className='text-black text-base text-center ml-[-598px]'>Personal-, Social- & Partner-Link-Klicks</p> 
    <div className='flex justify-center gap-[150px] mt-[-25px] mb-5 mr-[-250px]' >
    <img className='w-7 ' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63cfb2148ead0d2cda582acb_Check%20Icon%20cliqe.svg" />
     <img className='w-7 ' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63cfb2148ead0d2cda582acb_Check%20Icon%20cliqe.svg" />
     <img className='w-7 ' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63cfb2148ead0d2cda582acb_Check%20Icon%20cliqe.svg" />
    </div>
    </main>

    <main >
    <p className='text-black text-base text-center ml-[-758px]'>Analytics-Historie</p> 
    <div className='flex justify-center gap-[80px] mt-[-25px] mb-5 mr-[-300px]' >
    <p className='text-black text-base text-center'>50+ Brands</p> 
    <p className='text-black text-base text-center'>150+ Brands</p> 
    <p className='text-black text-base text-center'>250+ Brands</p> 
    </div>
    </main>

    <main>
    <p className='text-black text-base text-center ml-[-531px]'>Link-spezifische Analytics (Klicks & Conversions)
</p> 
    <div className='flex justify-center gap-[150px] mt-[-25px] mb-5 mr-[-250px]' >
    <img className='w-7 rotate-45' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/638a2cc14cd84403b4b3c0db_OK%20%26%20Plus%20(1).svg" />
     <img className='w-7 ' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63cfb2148ead0d2cda582acb_Check%20Icon%20cliqe.svg" />
     <img className='w-7 ' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63cfb2148ead0d2cda582acb_Check%20Icon%20cliqe.svg" />
    </div>
    </main>

    <main>
    <p className='text-black text-base text-center ml-[-575px]'>Zielgruppen-Kanäle (Instagram, Tiktok etc.)</p> 
    <div className='flex justify-center gap-[150px] mt-[-25px] mb-5 mr-[-250px]' >
    <img className='w-7 rotate-45' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/638a2cc14cd84403b4b3c0db_OK%20%26%20Plus%20(1).svg" />
     <img className='w-7 ' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63cfb2148ead0d2cda582acb_Check%20Icon%20cliqe.svg" />
     <img className='w-7 ' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63cfb2148ead0d2cda582acb_Check%20Icon%20cliqe.svg" />
    </div>
    </main>

    <main>
    <p className='text-black text-base text-center ml-[-595px]'>Zielgruppen-Geographie (nach Ländern)</p> 
    <div className='flex justify-center gap-[150px] mt-[-25px] mb-5 mr-[-250px]' >
    <img className='w-7 rotate-45' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/638a2cc14cd84403b4b3c0db_OK%20%26%20Plus%20(1).svg" />
     <img className='w-7 ' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63cfb2148ead0d2cda582acb_Check%20Icon%20cliqe.svg" />
     <img className='w-7 ' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63cfb2148ead0d2cda582acb_Check%20Icon%20cliqe.svg" />
    </div>
    </main>

    <main>
    <p className='text-black text-base text-center ml-[-600px]'>Zielgruppen-Geographie (nach Städten)</p> 
    <div className='flex justify-center gap-[150px] mt-[-25px] mb-5 mr-[-250px]' >
    <img className='w-7 rotate-45' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/638a2cc14cd84403b4b3c0db_OK%20%26%20Plus%20(1).svg" />
     <img className='w-7 rotate-45' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/638a2cc14cd84403b4b3c0db_OK%20%26%20Plus%20(1).svg" />
     <img className='w-7 ' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63cfb2148ead0d2cda582acb_Check%20Icon%20cliqe.svg" />
    </div>
    </main>

    <main>
    <p className='text-black text-base text-center ml-[-585px]'>Zielgruppen-Endgeräte (iOS, Android etc.)</p> 
    <div className='flex justify-center gap-[150px] mt-[-25px] mb-5 mr-[-250px]' >
    <img className='w-7 rotate-45' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/638a2cc14cd84403b4b3c0db_OK%20%26%20Plus%20(1).svg" />
     <img className='w-7 rotate-45' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/638a2cc14cd84403b4b3c0db_OK%20%26%20Plus%20(1).svg" />
     <img className='w-7 ' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63cfb2148ead0d2cda582acb_Check%20Icon%20cliqe.svg" />
    </div>
    </main>
</section>

<hr className='w-[970px] ml-[320px] pb-28' />

<section data-aos = "fade-up" className='pb-20' >
<main className='pb-6' >
     <div className='flex ml-[325px]'>
     <FaBraille className='mt-[6px] mr-1' />
     <h1 className='text-black font-bold text-xl' >Rechtliches</h1>
     </div>
     <div className='flex justify-center gap-[120px] mt-[-25px] mr-[-350px]' >
      <h1 className='text-black font-bold text-xl'>Free</h1>
      <h1 className='text-black font-bold text-xl'>Growth</h1>
      <h1 className='text-black font-bold text-xl'>Professional</h1>
     </div>
    </main>

    <hr className='pb-6 w-[970px] ml-[320px]' />

    <main>
    <p className='text-black text-base text-center ml-[-655px]'>Datenschutzkonforme Bio-Seite</p> 
    <div className='flex justify-center gap-[150px] mt-[-25px] mb-5 mr-[-250px]' >
    <img className='w-7' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63cfb2148ead0d2cda582acb_Check%20Icon%20cliqe.svg" />
     <img className='w-7 ' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63cfb2148ead0d2cda582acb_Check%20Icon%20cliqe.svg" />
     <img className='w-7 ' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63cfb2148ead0d2cda582acb_Check%20Icon%20cliqe.svg" />
    </div>
    </main>

    <main>
    <p className='text-black text-base text-center ml-[-605px]'>Rechtskonforme Impressums-Funktion</p> 
    <div className='flex justify-center gap-[150px] mt-[-25px] mb-5 mr-[-250px]' >
    <img className='w-7' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63cfb2148ead0d2cda582acb_Check%20Icon%20cliqe.svg" />
     <img className='w-7 ' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63cfb2148ead0d2cda582acb_Check%20Icon%20cliqe.svg" />
     <img className='w-7 ' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63cfb2148ead0d2cda582acb_Check%20Icon%20cliqe.svg" />
    </div>
    </main>

    <main>
    <p className='text-black text-base text-center ml-[-705px]'>Impressum-as-a-Service</p> 
    <div className='flex justify-center gap-[150px] mt-[-25px] mb-5 mr-[-250px]' >
    <img className='w-7 rotate-45' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/638a2cc14cd84403b4b3c0db_OK%20%26%20Plus%20(1).svg" />
     <img className='w-7 rotate-45' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/638a2cc14cd84403b4b3c0db_OK%20%26%20Plus%20(1).svg" />
     <img className='w-7 ' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63cfb2148ead0d2cda582acb_Check%20Icon%20cliqe.svg" />
    </div>
    </main>

    <main>
    <p className='text-black text-base text-center ml-[-598px]'>Steuerlich-konforme Rechnungsstellung</p> 
    <div className='flex justify-center gap-[150px] mt-[-25px] mb-5 mr-[-250px]' >
    <img className='w-7 rotate-45' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/638a2cc14cd84403b4b3c0db_OK%20%26%20Plus%20(1).svg" />
     <img className='w-7 rotate-45' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/638a2cc14cd84403b4b3c0db_OK%20%26%20Plus%20(1).svg" />
     <img className='w-7 ' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63cfb2148ead0d2cda582acb_Check%20Icon%20cliqe.svg" />
    </div>
    </main>
</section>

<section className='flex justify-center gap-[27px] ml-[380px] pb-20' >
<button className="text-black hover:text-white border-1 border-black font-bold 2xl:px-7 lg:px-5 px-3 2xl:py-3 lg:py-2 bg-gray-200 hover:bg-[#1919BC] 2xl:text-base lg:text-base text-sm rounded-[12px] text-center 
           shadow-lg" type="button">Jetzt starten</button>
<button className="text-white font-bold 2xl:px-7 lg:px-5 px-3 2xl:py-3 lg:py-2 bg-[#1919BC] 2xl:text-base lg:text-base text-sm rounded-[12px] text-center 
          hover:opacity-80 shadow-lg duration-150" type="button">Jetzt starten</button>
<button className="text-black hover:text-white border-1 border-black font-bold 2xl:px-7 lg:px-5 px-3 2xl:py-3 lg:py-2 bg-gray-200 hover:bg-[#1919BC] 2xl:text-base lg:text-base text-sm rounded-[12px] text-center 
           shadow-lg " type="button">Jetzt starten</button>
</section>

    </div>
  )
}

export default Pricesection