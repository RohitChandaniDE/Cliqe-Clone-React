import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const KostenlosPricing = () => {

  const [isToggled, setIsToggled] = useState(false);
  const [showMonthly, setShowMonthly] = useState(true);

  const handleToggle = () => {
    setIsToggled(!isToggled);
    setShowMonthly(!showMonthly);
  };

  const Feature = ({ children, on = true }) => (
    <div className='flex items-start gap-3 mt-4'>
      {on ? (
        <img className='w-7 flex-shrink-0'
             src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63cfb2148ead0d2cda582acb_Check%20Icon%20cliqe.svg"
             alt="" />
      ) : (
        <img className='w-7 flex-shrink-0 rotate-45'
             src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/638a2cc14cd84426f8b3c166_OK%20%26%20Plus.svg"
             alt="" />
      )}
      <h2 className={on ? 'text-black' : 'text-gray-400'}>{children}</h2>
    </div>
  );

  return (
    <div className='w-full bg-[#CDF7FD] relative overflow-hidden'>

      <div className='hidden lg:block pointer-events-none select-none' aria-hidden="true">
        <img className='absolute left-[12%]' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/638a2cc14cd8445283b3c0d4_Disc%202.svg" alt="" />
        <img className='absolute left-[10%] top-[14%]' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/638a2cc14cd84440d6b3c0d8_Disc%203.svg" alt="" />
        <img className='absolute right-[10%] top-[5%]' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/638a2cc14cd84423c2b3c0ce_Disc%201.svg" alt="" />
      </div>

      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24'>

        <h1 className="text-black text-center pb-4 font-bold
                       2xl:text-5xl xl:text-5xl lg:text-3xl text-2xl">
          Kostenlos im Basismodell starten
        </h1>
        <p className='text-gray-500 text-[16.5px] text-center'>
          cliqe ist grundsätzlich kostenlos. Gegen eine geringe Gebühr kannst du zusätzlich <br className='hidden lg:inline' />
          Premium-Funktionen und weiteren Monetatisierungsoptionen nutzen.
        </p>

        <section className='bg-white rounded-[20px] mt-10 mb-10 mx-auto w-fit max-w-full
                            px-4 py-4 flex flex-wrap items-center justify-center gap-4'>
          <label htmlFor="Toggle1" className="inline-flex items-center space-x-4 cursor-pointer">
            <span style={{ color: isToggled ? 'gray' : 'black' }} className='font-bold'>Monatlich</span>
            <span className="relative">
              <input onClick={handleToggle} id="Toggle1" type="checkbox" className="hidden peer" />
              <div className="w-12 h-6 rounded-[15px] shadow-inner bg-[#06D5F7] peer-checked:bg-[#06D5F7]"></div>
              <div className="absolute inset-y-0 left-0 mt-[3.5px] w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto bg-white"></div>
            </span>
            <span style={{ color: isToggled ? 'black' : 'gray' }} className='font-bold'>Jährlich</span>
          </label>

          <div className='bg-[#E8E8F8] rounded-[100px] px-4 py-1.5'>
            <h6 className="text-[#06D5F7] text-[15px] cursor-pointer">Spare 25%</h6>
          </div>
        </section>

        <section className='grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-0 max-w-5xl mx-auto'>

          <div className='bg-white rounded-xl lg:rounded-none lg:rounded-l-xl p-[30px] flex flex-col'>
            <img className='w-10 pb-5' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/638a2cc14cd844b4d1b3c0d1_Balloon.svg" alt="" />
            <h1 className='text-black font-bold text-2xl pb-2'>Free</h1>
            <p className='font-sans text-[16px] text-gray-500 leading-5 pb-6'>
              Individuelle Bio-Seite, um deinen Content zu aggregieren.
            </p>

            <div className='flex items-baseline gap-2 pb-4'>
              <h1 className='text-black font-bold text-5xl'>{showMonthly ? '0€' : '0€'}</h1>
              <span className='text-xl text-gray-400'>{showMonthly ? '/Monat' : '/Jahr'}</span>
            </div>

            <h2 className='text-black text-[17px]'>für limitierte Features &amp; Brands</h2>

            <button className="text-black hover:text-white border-2 hover:border hover:border-gray-500
                               border-black font-bold px-5 py-2.5 bg-gray-200 hover:bg-[#1919BC]
                               text-sm lg:text-base rounded-[12px] text-center mt-8 w-full" type="button">
              Jetzt starten
            </button>

            <div className='mt-6'>
              <Feature>Personalisierte Bio-Seite</Feature>
              <Feature>Zugang zu 50+ Brands</Feature>
              <Feature>Insights mit Basic-Analytics</Feature>
              <Feature on={false}>Partner-Short-Links für Stories</Feature>
              <Feature on={false}>Ausblendbares cliqe-Logo</Feature>
              <Feature on={false}>Impressum-as-a-Service</Feature>
            </div>
          </div>

          <div className='relative bg-white rounded-xl lg:rounded-none
                          border-dashed lg:border-x-2 p-[30px] flex flex-col overflow-hidden'>

            <div className='absolute top-0 right-0 bg-[#FFF500] h-[40px] w-[125px]
                            shadow-[0px_3px_lightgray] rounded-bl-xl
                            flex items-center justify-center gap-2'>
              <FaStar />
              <h1 className='font-bold'>Empfohlen</h1>
            </div>

            <img className='w-10 pb-5' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/638a2cc14cd84468f8b3c0d5_Diamond%20Icon.svg" alt="" />
            <h1 className='text-black font-bold text-2xl pb-2'>Growth</h1>
            <p className='font-sans text-[16px] text-gray-500 leading-5 pb-6'>
              Individuelle Bio-Seite, um deinen Content zu monetarisieren.
            </p>

            <div className='flex items-baseline gap-2 pb-4'>
              <h1 className='text-black font-bold text-5xl'>{showMonthly ? '9€' : '81€'}</h1>
              <span className='text-xl text-gray-400'>{showMonthly ? '/Monat' : '/Jahr'}</span>
            </div>

            <h2 className='text-black text-[17px]'>für eine Vielzahl an Features &amp; Brands</h2>

            <button className="text-white font-bold px-5 py-2.5 bg-[#1919BC]
                               text-sm lg:text-base rounded-[12px] text-center
                               hover:opacity-80 mt-8 lg:mt-2.5 w-full" type="button">
              Jetzt starten
            </button>

            <div className='mt-6'>
              <Feature>Personalisierte Bio-Seite</Feature>
              <Feature>Zugang zu 50+ Brands</Feature>
              <Feature>Insights mit Basic-Analytics</Feature>
              <Feature>Partner-Short-Links für Stories</Feature>
              <Feature on={false}>Ausblendbares cliqe-Logo</Feature>
              <Feature on={false}>Impressum-as-a-Service</Feature>
            </div>
          </div>

          <div className='bg-white rounded-xl lg:rounded-none lg:rounded-r-xl p-[30px] flex flex-col'>
            <img className='w-10 pb-5' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/638a2cc14cd844cb24b3c0d9_Briefcase%20Green.svg" alt="" />
            <h1 className='text-black font-bold text-2xl pb-2'>Professional</h1>
            <p className='font-sans text-[16px] text-gray-500 leading-5 pb-6'>
              Individuelle Bio-Seite, um deinen Content zu aggregieren.
            </p>

            <div className='flex items-baseline gap-2 pb-4'>
              <h1 className='text-black font-bold text-5xl'>{showMonthly ? '24€' : '216€'}</h1>
              <span className='text-xl text-gray-400'>{showMonthly ? '/Monat' : '/Jahr'}</span>
            </div>

            <h2 className='text-black text-[17px]'>für limitierte Features &amp; Brands</h2>

            <button className="text-black hover:text-white border-2 hover:border hover:border-gray-500
                               border-black font-bold px-5 py-2.5 bg-gray-200 hover:bg-[#1919BC]
                               text-sm lg:text-base rounded-[12px] text-center mt-8 w-full" type="button">
              Jetzt starten
            </button>

            <div className='mt-6'>
              <Feature>Personalisierte Bio-Seite</Feature>
              <Feature>Zugang zu 50+ Brands</Feature>
              <Feature>Insights mit Basic-Analytics</Feature>
              <Feature>Partner-Short-Links für Stories</Feature>
              <Feature>Ausblendbares cliqe-Logo</Feature>
              <Feature>Impressum-as-a-Service</Feature>
            </div>
          </div>

        </section>
      </div>
    </div>
  )
}

export default KostenlosPricing



