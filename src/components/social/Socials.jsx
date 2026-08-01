import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";

const Socials = () => {

  useEffect(() => { Aos.init({ duration: 1000 }); }, [])

  return (
    <div className='w-full bg-[#FAF8FF]'>
      <div className='max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12 py-16 lg:py-24'>

        <div className='max-w-6xl mx-auto flex flex-col lg:flex-row items-center
                        justify-center gap-10 lg:gap-16 xl:gap-24'>

          <div data-aos="zoom-in" className='w-full lg:w-1/2 flex justify-center'>
            <img className='w-full max-w-[500px] h-auto'
                 src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63fcea8dee467c9dd2268f8e_Home%20Graohic%20Social%20Media-p-500.png"
                 alt="Social-Media-Kanäle in der cliqe Bio-Seite" />
          </div>

          <div data-aos="fade-up" className='w-full lg:w-1/2 max-w-xl text-center lg:text-left'>

            <div className='inline-flex items-center bg-[#F1ECFE] rounded-full px-4 py-1.5 mb-6'>
              <span className="text-[#6163B1] text-base">Socials</span>
            </div>

            <h2 className='font-bold text-black text-2xl sm:text-3xl lg:text-4xl leading-tight pb-4'>
              Bündle und teile deine Inhalte auf deinen Sozialen Netzwerken
            </h2>
            <p className='text-gray-500 leading-relaxed text-base lg:text-lg pb-10'>
              Mit cliqe kannst du deine Inhalte und Partnerschaften bequem bündeln
              und mit einem Link auf deinen Social Media-Kanälen teilen.
            </p>

            <button className="btn font-bold text-white px-8 py-3 text-sm sm:text-base
                               rounded-[10px] shadow-lg hover:opacity-90 duration-150
                               focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1919BC]"
                    type="button">
              Jetzt starten
            </button>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Socials