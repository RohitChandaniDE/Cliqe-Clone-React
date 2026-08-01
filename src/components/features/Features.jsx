import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";

const Features = () => {

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, [])

  return (
    <div className='w-full bg-[#FAFAFA] overflow-hidden'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24'>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center'>

          <section data-aos="fade-up" className='relative z-10 bg-white rounded-[15px] p-7 lg:p-10'>
            <h1 className='font-bold text-black text-2xl sm:text-3xl lg:text-4xl pb-5'>
              All-in-one Lösung, um <br className='hidden lg:inline' />
              von deinem Content zu <br className='hidden lg:inline' />
              profitieren
            </h1>
            <p className='text-gray-500 leading-6 pb-[60px] text-base'>
              Mit cliqe erhältst du bequem &amp; zeitsparend deinen <br className='hidden lg:inline' />
              persönlichen, optisch ansprechenden Bio-Link
            </p>
            <button className="btn font-bold text-white px-8 py-3
                               xl:text-l sm:text-base lg:text-sm text-xs
                               rounded-[10px] text-center shadow-lg" type="button">
              Jetzt starten
            </button>
          </section>

          <div className='relative'>

            <img className='hidden xl:block absolute z-0 top-1/2 left-0
                            -translate-x-[45%] -translate-y-1/2 w-[130%] max-w-none
                            pointer-events-none'
                 src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/638a2cc14cd8449109b3c091_Arrow%20Big.svg"
                 alt="" aria-hidden="true" />

            <div className='relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-6 items-start'>

              <section data-aos="fade-up" className='bg-white rounded-[15px] p-7'>
                <img className='w-12 pb-6' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63f92ddf6822514aa7b22163_Rounded%20Icon%20Bio-Site.svg" alt="" />
                <h1 className='font-bold text-black text-2xl pb-4'>
                  Persönliche Bio- <br className='hidden lg:inline' />Seite
                </h1>
                <p className='text-gray-500 leading-6 text-base'>
                  Gestalte deine Bio-Seite nach <br className='hidden lg:inline' />deinem Geschmack
                </p>
              </section>

              <section data-aos="fade-up" className='bg-white rounded-[15px] p-7 xl:mt-8'>
                <img className='w-12 pb-6' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63f92ddf93c6e4ec5647dde8_Rounded%20Icon%20Links.svg" alt="" />
                <h1 className='font-bold text-black text-2xl pb-4'>
                  Aggregiere deinen <br className='hidden lg:inline' />Content
                </h1>
                <p className='text-gray-500 leading-6 text-base'>
                  Sammle deine Links, Socials, <br className='hidden lg:inline' />Musik, Videos uvm.
                </p>
              </section>

              <section data-aos="fade-up" className='bg-white rounded-[15px] p-7 xl:mt-10'>
                <img className='w-12 pb-6' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63f92ddf536875fc9824c90d_Rounded%20Icon%20Monetization.svg" alt="" />
                <h1 className='font-bold text-black text-2xl pb-4'>
                  Monetarisiere <br className='hidden lg:inline' />deinen Kanal
                </h1>
                <p className='text-gray-500 leading-6 text-base'>
                  Direkter Zugang zu deinen <br className='hidden lg:inline' />Lieblingsmarken
                </p>
              </section>

              <section data-aos="fade-up" className='bg-white rounded-[15px] p-7 xl:mt-2'>
                <img className='w-12 pb-6' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63f92ddf8d520a2f444d48aa_Rounded%20Icon%20Analytics.svg" alt="" />
                <h1 className='font-bold text-black text-2xl pb-4'>
                  Umfangreiche <br className='hidden lg:inline' />Analytics
                </h1>
                <p className='text-gray-500 leading-6 text-base'>
                  Erhalte hilfreiche Einblicke zum <br className='hidden lg:inline' />Erfolg deiner Bio-Seite
                </p>
              </section>

            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Features