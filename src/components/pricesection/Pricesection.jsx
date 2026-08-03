import React, { useEffect } from 'react';
import { FaBrush, FaBraille, FaEuroSign } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";

const CHECK = "https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63cfb2148ead0d2cda582acb_Check%20Icon%20cliqe.svg";
const PLUS  = "https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/638a2cc14cd84403b4b3c0db_OK%20%26%20Plus%20(1).svg";

const sections = [
  {
    Icon: FaBrush,
    title: 'Personalisierung',
    rows: [
      { label: 'Individuelle cliqe.bio-Domain',   values: [true, true, true] },
      { label: 'Persönliches Design',             values: ['Basic-Themes', 'Plus-Themes', 'Pro-Themes'] },
      { label: 'Link- & Profilbild-Animationen',  values: [false, true, true] },
      { label: 'cliqe-Logo ausblenden',           values: [false, false, true] },
    ],
  },
  {
    Icon: FaBraille,
    title: 'Content & Links',
    rows: [
      { label: 'Persönliche Links',                          values: [true, true, true] },
      { label: 'Social Media-Icons',                         values: [true, true, true] },
      { label: 'Embedded Content (YouTube, Spotify etc.)',   values: [true, true, true] },
    ],
  },
  {
    Icon: FaEuroSign,
    title: 'Monetarisierung',
    rows: [
      { label: 'Zugang zu Partnerprogrammen',       values: ['50+ Brands', '150+ Brands', '250+ Brands'] },
      { label: '"Paypal Spenden"-Funktion',         values: [true, true, true] },
      { label: '"Buy Me a Coffee"-Funktion',        values: [true, true, true] },
      { label: 'cliqe Referral Programm',           values: [true, true, true] },
      { label: 'Partner-Short-Links für Stories',   values: [false, true, true] },
    ],
  },
  {
    Icon: FaBrush,
    title: 'Analytics',
    rows: [
      { label: 'Bio-Seitenaufrufe',                                  values: [true, true, true] },
      { label: 'Personal-, Social- & Partner-Link-Klicks',           values: [true, true, true] },
      { label: 'Analytics-Historie',                                 values: ['50+ Brands', '150+ Brands', '250+ Brands'] },
      { label: 'Link-spezifische Analytics (Klicks & Conversions)',  values: [false, true, true] },
      { label: 'Zielgruppen-Kanäle (Instagram, Tiktok etc.)',        values: [false, true, true] },
      { label: 'Zielgruppen-Geographie (nach Ländern)',              values: [false, true, true] },
      { label: 'Zielgruppen-Geographie (nach Städten)',              values: [false, false, true] },
      { label: 'Zielgruppen-Endgeräte (iOS, Android etc.)',          values: [false, false, true] },
    ],
  },
  {
    Icon: FaBraille,
    title: 'Rechtliches',
    rows: [
      { label: 'Datenschutzkonforme Bio-Seite',           values: [true, true, true] },
      { label: 'Rechtskonforme Impressums-Funktion',      values: [true, true, true] },
      { label: 'Impressum-as-a-Service',                  values: [false, false, true] },
      { label: 'Steuerlich-konforme Rechnungsstellung',   values: [false, false, true] },
    ],
  },
];

const Cell = ({ value }) => (
  <div className='flex justify-center items-center'>
    {typeof value === 'string'
      ? <p className='text-black text-sm sm:text-base text-center'>{value}</p>
      : <img className={`w-7 ${value ? '' : 'rotate-45'}`} src={value ? CHECK : PLUS} alt={value ? 'enthalten' : 'nicht enthalten'} />}
  </div>
);

const Pricesection = () => {

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, [])

  return (
    <div className='w-full'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20'>

        <h1 className="text-black text-center pb-2 font-bold
                       2xl:text-5xl xl:text-5xl lg:text-3xl text-2xl">
          Unsere <span className='multicolortext'>Features</span>
        </h1>
        <p className='text-gray-500 text-[16.5px] pb-12 text-center'>
          Vergleiche unsere Pläne und entscheide, welcher am besten zu dir passt.
        </p>

        <div className='max-w-5xl mx-auto'>

          {sections.map(({ Icon, title, rows }) => (
            <section key={title} data-aos="fade-up" className='pb-20 lg:pb-28'>

              <div className='grid grid-cols-3 md:grid-cols-[2fr_1fr_1fr_1fr] gap-y-3 pb-6'>
                <div className='col-span-3 md:col-span-1 flex items-center gap-1'>
                  <Icon />
                  <h1 className='text-black font-bold text-xl'>{title}</h1>
                </div>
                <h1 className='text-black font-bold text-base sm:text-xl text-center'>Free</h1>
                <h1 className='text-black font-bold text-base sm:text-xl text-center'>Growth</h1>
                <h1 className='text-black font-bold text-base sm:text-xl text-center'>Professional</h1>
              </div>

              <hr className='mb-6' />

              {rows.map(({ label, values }) => (
                <div key={label}
                     className='grid grid-cols-3 md:grid-cols-[2fr_1fr_1fr_1fr]
                                gap-y-2 items-center mb-6 md:mb-5'>
                  <p className='col-span-3 md:col-span-1 text-black text-sm sm:text-base
                                text-center md:text-left'>
                    {label}
                  </p>
                  <Cell value={values[0]} />
                  <Cell value={values[1]} />
                  <Cell value={values[2]} />
                </div>
              ))}

            </section>
          ))}

          <section className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-[2fr_1fr_1fr_1fr]
                              gap-[27px] pb-20'>
            <div className='hidden md:block' />
            <button className="text-black hover:text-white border-1 border-black font-bold
                               px-5 py-2.5 bg-gray-200 hover:bg-[#1919BC]
                               text-sm lg:text-base rounded-[12px] text-center shadow-lg" type="button">
              Jetzt starten (Free)
            </button>
            <button className="text-white font-bold px-5 py-2.5 bg-[#1919BC]
                               text-sm lg:text-base rounded-[12px] text-center
                               hover:opacity-80 shadow-lg duration-150" type="button">
              Jetzt starten (Growth)
            </button>
            <button className="text-black hover:text-white border-1 border-black font-bold
                               px-5 py-2.5 bg-gray-200 hover:bg-[#1919BC]
                               text-sm lg:text-base rounded-[12px] text-center shadow-lg" type="button">
              Jetzt starten (Professional)
            </button>
          </section>

        </div>
      </div>
    </div>
  )
}

export default Pricesection