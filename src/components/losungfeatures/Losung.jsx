import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";

const Losung = () => {

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, [])

  return (
    <div className='w-full'>

      <main data-aos="fade-up" className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 lg:pt-[100px] pb-20'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8
                        md:divide-x md:divide-gray-200'>

          <section className='flex gap-3 md:px-4'>
            <div className='bg-[#FEFCF2] w-[50px] h-[50px] rounded-[10px] flex-shrink-0 flex items-center justify-center'>
              <img className='w-[30px]' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/638a2cc14cd84468e3b3c09a_Flash_perspective_matte.png" alt="" />
            </div>
            <div>
              <h2 className='text-black font-bold text-xl pb-3'>Bequem &amp; einfach</h2>
              <p className='text-gray-600 text-sm leading-5'>
                Erstelle deinen individuellen Bio-Link unkompliziert in nur wenigen Minuten.
              </p>
            </div>
          </section>

          <section className='flex gap-3 md:px-4'>
            <div className='bg-[#FEF0F7] w-[50px] h-[50px] rounded-[10px] flex-shrink-0 flex items-center justify-center'>
              <img className='w-[30px]' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/638a2cc14cd844158bb3c09d_Chart_perspective_matte.png" alt="" />
            </div>
            <div>
              <h2 className='text-black font-bold text-xl pb-3'>Bequem &amp; einfach</h2>
              <p className='text-gray-600 text-sm leading-5'>
                Erhalte Zugang zu attraktiven Partner-programmen deiner Lieblingsmarken.
              </p>
            </div>
          </section>

          <section className='flex gap-3 md:px-4'>
            <div className='bg-[#F0FDFE] w-[50px] h-[50px] rounded-[10px] flex-shrink-0 flex items-center justify-center'>
              <img className='w-[30px]' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/638a2cc14cd84430c6b3c0a0_Shield_perspective_matte.png" alt="" />
            </div>
            <div>
              <h2 className='text-black font-bold text-xl pb-3'>Rechtlich konform</h2>
              <p className='text-gray-600 text-sm leading-5'>
                Funktionen für Impressum und Datenschutz sichern dich rechtlich ab.
              </p>
            </div>
          </section>

        </div>
      </main>

      <main data-aos="fade-up" className='w-full bg-[#FAFAFA]'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20'>

          <h1 data-aos="fade-up"
              className="text-black text-center font-sans font-bold pb-1
                         2xl:text-4xl xl:text-5xl lg:text-3xl text-2xl">
            <span className='multicolortext'>All-in-One-Lösung</span>, um von deinem
          </h1>
          <h1 data-aos="fade-up"
              className='text-black text-center font-sans font-bold pb-4
                        2xl:text-4xl xl:text-5xl lg:text-3xl text-2xl'>
            Content zu profitieren
          </h1>
          <p data-aos="fade-up" className='text-center text-gray-600 font-sans text-[16px] pb-16'>
            Mit cliqe erhältst du nicht nur deine persönliche Bio-Seite, sondern auch die <br className='hidden lg:inline' />
            Möglichkeit von deinem Content zu profitieren
          </p>

          <div data-aos="fade-up" className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-[50px]'>

            <section className='bg-white rounded-[25px] p-7 lg:p-8 flex flex-col'>
              <img className='w-12 pb-6' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63f8fdac65e24b5d9479e79a_Bubble%20Icon%20Bio-Site.svg" alt="" />
              <h1 className='font-bold text-black text-2xl sm:text-3xl pb-4'>
                Erstelle deine individuelle <br className='hidden lg:inline' />Bio-Seite
              </h1>
              <p className='text-gray-500 leading-6 pb-[40px] text-lg sm:text-xl'>
                Gestalte deine Bio-Seite nach deinem Geschmack <br className='hidden lg:inline' />
                und erhalte deinen personalisierter Bio-Link.
              </p>
              <div className='relative mt-auto h-[240px] sm:h-[300px] bg-[#FFF8F6] rounded-[15px] border border-orange-100 overflow-hidden'>
                <img className='absolute left-1/2 -translate-x-1/2 top-[13%] w-[57%] max-w-[250px]'
                     src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/6406315ee94627873a20d29d_Product%20Graphic%20Step%201.png"
                     alt="" />
              </div>
            </section>

            <section className='bg-white rounded-[25px] p-7 lg:p-8 flex flex-col'>
              <img className='w-12 pb-6' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/638a2cc14cd844b5feb3c053_Filter%202.svg" alt="" />
              <h1 className='font-bold text-black text-2xl sm:text-3xl pb-4'>
                Aggregiere &amp; teile deinen <br className='hidden lg:inline' />Content
              </h1>
              <p className='text-gray-500 leading-6 pb-[40px] text-lg sm:text-xl'>
                Sammle deine Links, Content &amp; Socials, die du mit <br className='hidden lg:inline' />
                deiner Community teilen möchtest.
              </p>
              <div className='relative mt-auto h-[240px] sm:h-[300px] bg-[#FFF9FD] rounded-[15px] border border-pink-100 overflow-hidden'>
                <img className='absolute left-1/2 -translate-x-1/2 top-[20%] w-[57%] max-w-[250px]'
                     src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/6406315ed70b3bc4f4382add_Product%20Graphic%20Step%203.png"
                     alt="" />
              </div>
            </section>

            <section className='bg-white rounded-[25px] p-7 lg:p-8 flex flex-col'>
              <img className='w-12 pb-6' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63f8fda9468558636fbde343_Bubble%20Icon%20Money.svg" alt="" />
              <h1 className='font-bold text-black text-2xl sm:text-3xl pb-4'>
                Monetarisiere deine Social- <br className='hidden lg:inline' />Media-Kanäle
              </h1>
              <p className='text-gray-500 leading-6 pb-[40px] text-lg sm:text-xl'>
                Erhalte bequem und direkt Zugang zu deinen <br className='hidden lg:inline' />
                Lieblingsmarken, die du bewerben möchtest.
              </p>
              <div className='relative mt-auto h-[240px] sm:h-[300px] bg-[#FFF1FB] rounded-[15px] border border-pink-100 overflow-hidden'>
                <img className='absolute left-1/2 -translate-x-1/2 top-[13%] w-[57%] max-w-[250px]'
                     src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/6406308719ea4646b1713be9_Product%20Graphic%20Step%202.png"
                     alt="" />
              </div>
            </section>

            <section className='bg-white rounded-[25px] p-7 lg:p-8 flex flex-col'>
              <img className='w-12 pb-6' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63f8fda8321bc8162538bf2a_Bubble%20Icon%20Analytics%20turquoise.svg" alt="" />
              <h1 className='font-bold text-black text-2xl sm:text-3xl pb-4'>
                Erhalte umfangreiche <br className='hidden lg:inline' />Analytics
              </h1>
              <p className='text-gray-500 leading-6 pb-[40px] text-lg sm:text-xl'>
                Mit Informationen zu Seitenaufrufe, Link-Klicks <br className='hidden lg:inline' />
                und Umsätzen, wertvolle Einblicke bekommen.
              </p>
              <div className='relative mt-auto h-[240px] sm:h-[300px] bg-[#F7FFFB] rounded-[15px] border border-green-100 overflow-hidden'>
                <img className='absolute left-[22%] top-[20%] w-[57%] max-w-[250px]'
                     src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/638a2cc14cd8448182b3c109_Compare%2520Data%2520Image%25203-p-500.png"
                     alt="" />
                <img className='absolute left-[12%] top-[52%] w-[36%] max-w-[160px]'
                     src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63fa56d155817f6022ff6af1_Feauture%20Analytics%20Graphic%20Number-p-500.png"
                     alt="" />
                <img className='absolute left-[51%] top-[48%] w-[36%] max-w-[160px]'
                     src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63fa56d1284d871d051021e0_Feauture%20Analytics%20Graphic%20Graph-p-500.png"
                     alt="" />
              </div>
            </section>

          </div>
        </div>
      </main>

    </div>
  )
}

export default Losung