import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";

const Cliqe = () => {

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, [])

  return (
    <div className='w-full bg-[#FAFAFA]'>
      <div className='max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12 py-16 lg:py-24'>

        <h1 data-aos="fade-up"
            className="text-black font-sans font-bold text-center leading-tight pb-4
                       text-2xl sm:text-3xl lg:text-4xl">
          Wieso du <span className='multicolortext'>cliqe</span> nutzen solltest
        </h1>
        <p data-aos="fade-up"
           className='text-center font-sans text-base lg:text-lg text-gray-700 pb-12 lg:pb-16'>
          Nicht nur Content Sammlung sondern auch Content Monetarisierung
        </p>

        {/* two feature cards */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto mb-8 lg:mb-12'>

          <section data-aos="zoom-in" className='bg-white rounded-[25px] p-6 sm:p-8'>
            <img className='w-12 mb-6'
                 src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63fa57ea303f2061b8291f87_Bubble%20Icon%20Tap.svg"
                 alt="" />
            <h2 className='font-bold text-black text-2xl sm:text-3xl pb-4'>Bequem &amp; Einfach</h2>
            <p className='text-gray-500 leading-relaxed text-base sm:text-lg xl:text-xl pb-8'>
              Mit cliqe erhältst du bequem &amp; zeitsparend deinen persönlichen,
              optisch ansprechenden Bio-Link
            </p>

            {/* relative panel + absolute image */}
            <div className='relative bg-[#FFF9FD] rounded-[15px] border border-pink-100
                            h-56 sm:h-72 lg:h-[300px] overflow-hidden'>
              <img className='absolute top-[18%] left-1/2 -translate-x-1/2 w-[80%] max-w-[340px]'
                   src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63fa70068bac0a82a04f1ff1_Home%20Graphic%20Convenient%20%26%20Simple.png"
                   alt="Bio-Link Editor" />
            </div>
          </section>

          <section data-aos="zoom-in" className='bg-white rounded-[25px] p-6 sm:p-8'>
            <img className='w-12 mb-6'
                 src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63f92a2fc0c30939c06b9311_Bubble%20Icon%20Safety%20blue.svg"
                 alt="" />
            <h2 className='font-bold text-black text-2xl sm:text-3xl pb-4'>Rechtskonform</h2>
            <p className='text-gray-500 leading-relaxed text-base sm:text-lg xl:text-xl pb-8'>
              Der Bio-Link von cliqe ist durch Features für ein Impressum
              rechts- und datenschutzkonform
            </p>
            <div className='relative bg-[#FFF8F6] rounded-[15px] border border-orange-100
                            h-56 sm:h-72 lg:h-[300px] overflow-hidden'>
              <img className='absolute top-[18%] left-1/2 -translate-x-1/2 w-[80%] max-w-[340px]'
                   src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/64066d4ff7ec2d63178700b9_Home%20Graphic%20Impressum%20%26%20Cookie%20Consent.png"
                   alt="Impressum und Cookie Consent" />
            </div>
          </section>

        </div>

        {/* wide card */}
        <section data-aos="zoom-in"
                 className='bg-white rounded-[25px] p-6 sm:p-8 lg:p-10 max-w-6xl mx-auto
                            grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center'>

          <div>
            <h2 className='font-bold text-black text-3xl sm:text-4xl pb-4'>
              Attraktive <span className='multicolortext'>Vergütungen</span>
            </h2>
            <p className='leading-relaxed text-base sm:text-lg xl:text-xl text-gray-500 pb-8'>
              Mit cliqe erhältst du Zugang zu attraktiven Provisionen,
              die bisher nur größeren Creatorn vorenthalten waren
            </p>
            <button className="btn font-bold text-white px-8 py-3 text-sm sm:text-base
                               rounded-[10px] shadow-lg hover:opacity-90 duration-150
                               focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1919BC]"
                    type="button">
              Jetzt starten
            </button>
          </div>

          <div className='relative bg-[#FEEEF5] rounded-[15px] border border-pink-200
                          h-56 sm:h-72 lg:h-[300px] overflow-hidden'>
            <img className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] max-w-[380px]'
                 src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63fa6e93b9bb10fad7f9bacd_Home%20Graphic%20Verticals%20%26%20Brands-p-800.png"
                 alt="Verticals und Brands" />
          </div>

        </section>

      </div>
    </div>
  )
}

export default Cliqe

