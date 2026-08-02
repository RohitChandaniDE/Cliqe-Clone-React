import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";

const Bioseite = () => {

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, [])

  return (
    <div className='w-full overflow-hidden'>
      <div data-aos="fade-up"
           className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24
                      flex flex-col lg:flex-row items-center justify-center
                      gap-10 lg:gap-[100px]'>

        {/* Left side */}
        <section className='left w-full lg:w-1/2 min-w-0 max-w-xl text-center lg:text-left'>

          <div className='flex items-center gap-3 pb-5 justify-center lg:justify-start'>
            <img className='w-[100px] sm:w-[130px] flex-shrink-0'
                 src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/644683d6a6ee3548b289dde8_Peer%20Creators%20Graphic-p-500.png"
                 alt="Creators" />
            <h3 className='font-bold text-black text-sm sm:text-base'>Join over 100 Creators</h3>
          </div>

          <h1 className="text-black font-bold pb-6 leading-tight
                         text-3xl sm:text-4xl lg:text-3xl xl:text-5xl 2xl:text-[40px]">
            Die besten Features <br className='hidden lg:inline' />
            für deine <span className='multicolortext'>Bio-Seite</span>
          </h1>

          <p className='text-gray-600 text-[15px] pb-8'>
            Erstelle deine eigene Bio-Seite und erhalte Zugang zu einer Vielzahl <br className='hidden lg:inline' />
            an Monetarisierungsoptionen.
          </p>

          <button className="btn font-bold text-white px-8 py-3
                             xl:text-l sm:text-base lg:text-sm text-xs
                             rounded-[10px] hover:opacity-90 duration-150 text-center shadow-lg"
                  type="button">
            Jetzt starten
          </button>

        </section>

        {/* Right side*/}
        <section className='right w-full lg:w-1/2 min-w-0 flex justify-center'>
          <div className='relative w-[88%] max-w-[500px]'>

            <img className='w-full h-auto'
                 src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/638a2cc14cd8440c59b3c110_mix%20blur.png"
                 alt="" />

            <img className='absolute left-[6%] top-[10%] w-[46%]'
                 src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63fa50cd1098aada749447cc_Feature%20Graphic%20Bio-Site-p-500.png"
                 alt="Bio-Seite" />

            <img className='absolute left-[54%] top-[10%] w-[60%]'
                 src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63f924bfe520bf0ee781b805_Feature%20Graphic%20Analytics-p-500.png"
                 alt="Analytics" />

            <img className='absolute left-[54%] top-[35%] w-[60%]'
                 src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63fa50cdb898990549c0078e_Feature%20Graphic%20Design%20%2B%20Partner-p-500.png"
                 alt="Design und Partner" />

            <img className='absolute left-[31%] top-[47%] w-[40%] animate-bounce-slow'
                 src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/638a2cc14cd8443170b3c0bb_Single%2520User%2520Big%2520Image-p-500.png"
                 alt="" />

          </div>
        </section>

      </div>
    </div>
  )
}

export default Bioseite