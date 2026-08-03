import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import "./Creatornbrands.css"

const logos = [
  { src: 'https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63d9020425323b9cb979a027_HelloFresh%203D%20Icon.png', alt: 'HelloFresh' },
  { src: 'https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63d901b2f34469be428df173_Lufthansa%203D%20Icon.png', alt: 'Lufthansa' },
  { src: 'https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63d901b2290dd401113f012b_foodspring%203D%20Icon.png', alt: 'foodspring' },
  { src: 'https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63d901b2d7ee859419ce6cd2_OTTO%203D%20Icon.png', alt: 'OTTO' },
  { src: 'https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63d901b249fdb378f6b016e5_Flaconi%203D%20Icon.png', alt: 'Flaconi' },
  { src: 'https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63d901b28e897e21d0077f41_ESN%203D%20Icon.png', alt: 'ESN' },
  { src: 'https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63d901b2aa3cce77b909f164_Consorsbank%203D%20Icon.png', alt: 'Consorsbank' },
  { src: 'https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63d901b2ef913286827fb2f9_Thalia%203D%20Icon.png', alt: 'Thalia' },
];

const stagger = ['lg:mt-[150px]', 'lg:mt-[100px]', 'lg:mt-[50px]', 'lg:mt-0'];

const Creatornbrands = () => {

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, [])

  return (
    <div className='w-full bgcbrands overflow-hidden'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24
                      flex flex-col lg:flex-row items-center gap-12 lg:gap-16'>

        <main data-aos="fade-up" className='w-full lg:w-1/2 min-w-0 text-center lg:text-left'>
          <div className='mb-4 bg-[#E8E8F8] w-[122px] h-7 rounded-[100px] mx-auto lg:mx-0
                          flex items-center justify-center'>
            <h6 className="text-[#8181FA] text-[12px] font-bold cursor-pointer">cliqe für Brands</h6>
          </div>
          <h1 className="text-white font-bold pb-5 leading-tight
                         2xl:text-5xl xl:text-5xl lg:text-3xl text-3xl">
            Zugang zu <br className='hidden lg:inline' />
            authentischen <br className='hidden lg:inline' />
            <span className='multicolortextbrands'>Creatorn</span>
          </h1>
          <h3 className='text-gray-100 text-base leading-5 font-bold pb-4'>
            cliqe verbindet Marken mit authentischen Werbegesichtern <br className='hidden lg:inline' />
            und schafft somit für beide Seiten einen Mehrwert.
          </h3>
          <button className="text-[#1919BC] font-bold mt-[10px] px-5 lg:px-7 py-2.5 bg-white
                             text-sm lg:text-base rounded-[12px] text-center
                             hover:opacity-90 duration-150" type="button">
            Kontaktiere uns
          </button>
        </main>

        <main data-aos="fade-up" className='w-full lg:w-1/2 min-w-0'>
          <div className='grid grid-cols-2 sm:grid-cols-4 gap-4 lg:gap-2 items-start'>
            {logos.map((l, i) => (
              <img key={l.alt}
                   className={`w-full max-w-[140px] mx-auto ${stagger[i % 4]}`}
                   src={l.src}
                   alt={l.alt} />
            ))}
          </div>
        </main>

      </div>
    </div>
  )
}

export default Creatornbrands