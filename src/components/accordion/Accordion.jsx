import React, { useState, useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";

const items = [
  {
    icon: 'https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63f8f91b14bcae7f1c3001e3_Bubble%20Icon%20Share.svg',
    title: 'Teile unterschiedliche Inhalte',
    body: 'Egal ob deine anderen Kanäle, externe Links oder Videos/Musik – mit deiner cliqe-Bio-Seite kannst du alle Inhalte bündeln',
  },
  {
    icon: 'https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63f8f91b35d1845e533d450d_Bubble%20Icon%20Diversify.svg',
    title: 'Diversifiziere deine Einnahmequellen',
    body: 'Mit cliqe kannst du bequem und unkompliziert neue Partnerschaften eingehen, um (weitere) Einnahmen zu generieren und diese zu diversifizieren',
  },
  {
    icon: 'https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63f8f91b5a868091f80674ac_Bubble%20Icon%20Analytics.svg',
    title: 'Analysiere deine Performance',
    body: 'Für zukünftige Performance-Steigerungen erhältst du spannende Insights zu deinen Seitenaufrufen, einzelnen Link-Klicks, Zielgruppen-Insights u.v.m.',
  },
]

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(0);

  useEffect(() => { Aos.init({ duration: 1000 }); }, [])

  return (
    <div data-aos="fade-up" className='w-full'>
      <div className='max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12 py-16 lg:py-24'>

        <div className='max-w-6xl mx-auto flex flex-col lg:flex-row items-center
                        gap-12 lg:gap-16 xl:gap-24'>

          {/* LEFT — copy + accordion */}
          <section className='w-full lg:w-1/2 max-w-xl order-2 lg:order-1'>

            <h2 className='font-bold text-black text-2xl sm:text-3xl leading-tight pb-4
                           text-center lg:text-left'>
              Bündel deine Inhalte und tracke deine Performance
            </h2>
            <p className='text-gray-500 leading-relaxed text-base sm:text-lg xl:text-xl pb-8
                          text-center lg:text-left'>
              Mit cliqe kannst du nicht nur bequem deine Inhalte aggregieren, sondern
              ebenfalls deinen Content monetarisieren und deine Performance analysieren.
            </p>

            <div className='divide-y divide-gray-200 border-t border-gray-200'>
              {items.map((item, i) => {
                const isOpen = openIndex === i;
                return (
                  <div key={item.title} className='py-4'>
                    <button
                      type='button'
                      onClick={() => setOpenIndex(isOpen ? -1 : i)}
                      aria-expanded={isOpen}
                      className='w-full flex items-center gap-4 text-left
                                 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1919BC] rounded'>
                      <img className='w-10 flex-shrink-0' src={item.icon} alt="" />
                      <span className='flex-1 text-[15px] font-bold text-black'>{item.title}</span>
                      <svg
                        className={`w-4 h-4 flex-shrink-0 text-gray-500 duration-300 ${isOpen ? 'rotate-180' : ''}`}
                        fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    <div className={`overflow-hidden transition-[max-height] duration-300 ease-in-out
                                     ${isOpen ? 'max-h-48' : 'max-h-0'}`}>
                      <p className='text-[13px] text-gray-600 leading-relaxed pl-14 pr-2 pt-3'>
                        {item.body}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </section>

          {/* RIGHT — image cluster */}
          <section className='w-full lg:w-1/2 max-w-md lg:max-w-lg order-1 lg:order-2 relative'>
            <img className='w-full h-auto'
                 src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/638a2cc14cd8440c59b3c110_mix%20blur.png"
                 alt="" />
            <div className='absolute inset-0 flex items-center justify-center gap-3 sm:gap-4 p-4'>
              <div className='flex flex-col gap-3 sm:gap-4 w-[42%]'>
                <img className='w-full' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63f9e9a576d6a333a15076c0_Home%20Graphic%20Content-p-500.png" alt="Content" />
                <img className='w-full' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63f9e9a5f4b80808714655a7_Home%20Graphic%20Monetization-p-500.png" alt="Monetarisierung" />
                <img className='w-full' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63f9e9a58bac0a4c994502de_Home%20Graphic%20Analytics-p-500.png" alt="Analytics" />
              </div>
              <img className='w-[48%] self-center' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63f9e9a569cf80d685f8f0aa_Home%20Graphic%20Bio-Site-p-500.png" alt="Bio-Seite" />
            </div>
          </section>

        </div>
      </div>
    </div>
  )
}

export default Accordion

