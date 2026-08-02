import React, { useState, useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";

const panels = [
  {
    icon: 'https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63f8fb3835d184be3a3d6c55_Bubble%20Icon%20Design.svg',
    title: 'Vielfältige Gestaltungsmöglichkeiten',
    body: 'Mit cliqe erhältst du eine Vielzahl von Design-Möglichkeiten von verschiedenen Hintergrundfarben bis hin zu individuellen Elementen, um deine Bio-Seite an deine Bedürfnisse anzupassen.',
  },
  {
    icon: 'https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63f8fb3850a300a676df47fb_Bubble%20Icon%20Safe.svg',
    title: '100% rechtskonforme Bio-Seite',
    body: 'Rechtskonforme Features für Impressum und die Kennzeichnung von Werbung ermöglichen die Erstellung von rechtssicheren Bio-Seiten, um teure und unnötige Abmahnungen vorzubeugen.',
  },
]

const Accordionfeatures = () => {
  const [openIndex, setOpenIndex] = useState(0);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, [])

  return (
    <div className='w-full overflow-hidden'>
      <div data-aos="fade-up"
           className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24
                      flex flex-col lg:flex-row items-center justify-center
                      gap-12 lg:gap-[150px]'>

        <section className='left w-full lg:w-1/2 min-w-0 flex justify-center order-2 lg:order-1'>
          <div className='relative w-[88%] max-w-[450px]'>

            <img className='w-full h-auto'
                 src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/638a2cc14cd8440c59b3c110_mix%20blur.png"
                 alt="" />

            <div className='absolute inset-x-0 top-[11%] flex items-end gap-[2%]'>

              
              <div className='w-[51%] flex flex-col'>
                <img className='w-full mb-3'
                     src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63fa4f806b8a4b434b8f9f42_Feature%20Graphic%20Legal-p-500.png"
                     alt="Legal" />
                <img className='w-full'
                     src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63fa4f800e9534de11a69209_Feature%20Graphic%20Themes-p-500.png"
                     alt="Themes" />
              </div>

              <img className='w-[47%]'
                   src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63fa4f811d416a8599819898_Feature%20Graphic%20Design-p-500.png"
                   alt="Design" />

            </div>

          </div>
        </section>

        <section className='right w-full lg:w-1/2 min-w-0 max-w-xl order-1 lg:order-2'>

          <h1 className='font-bold text-black text-2xl sm:text-3xl pb-4 text-center lg:text-left'>
            Optisch ansprechende und <br className='hidden lg:inline' />rechtskonforme Bio-Seite
          </h1>
          <p className='text-gray-500 leading-6 text-lg sm:text-xl pb-4 text-center lg:text-left'>
            cliqe bietet dir einen holistischen Baukasten, mit <br className='hidden lg:inline' />
            dem du dir optisch ansprechende und 100% <br className='hidden lg:inline' />
            rechtskonforme Bio-Seite erstellen kannst.
          </p>

          <div className='divide-y divide-gray-200 border-t border-gray-200 mt-6'>
            {panels.map((panel, i) => {
              const isOpen = openIndex === i;
              return (
                <div key={panel.title} className='py-4'>
                  <button type='button'
                          onClick={() => setOpenIndex(isOpen ? -1 : i)}
                          aria-expanded={isOpen}
                          className='w-full flex items-center gap-4 text-left'>
                    <img className='w-10 flex-shrink-0' src={panel.icon} alt="" />
                    <span className='flex-1 text-[15px] font-bold'>{panel.title}</span>
                    <svg className={`w-4 h-4 flex-shrink-0 text-gray-500 duration-300 ${isOpen ? 'rotate-180' : ''}`}
                         fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  <div className={`overflow-hidden transition-[max-height] duration-300 ease-in-out
                                   ${isOpen ? 'max-h-64' : 'max-h-0'}`}>
                    <p className='text-[13px] text-gray-600 leading-relaxed pl-14 pr-2 pt-3'>
                      {panel.body}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </section>

      </div>
    </div>
  )
}

export default Accordionfeatures