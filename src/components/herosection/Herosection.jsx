// import React, { useState } from 'react';
// import './Herosection.css';

// const Herosection = () => {

// const [isHovered, setIsHovered] = useState(false);

// const handleHover = () => {
//   setIsHovered(!isHovered);
// };

// return (
//     <div className='ml-10' >
//   <button
//     className={`arrow-button ${isHovered ? 'hovered' : ''}`}
//     onMouseEnter={handleHover}
//     onMouseLeave={handleHover}
//   >
//     Button Text
//     <span className="arrow-icon">&rarr;</span>
//   </button>
//   </div>
// );
// }

// export default Herosection

import React from 'react'
import "./Herosection.css"

const Herosection = () => {
  return (
    <div className='w-full bgc'>

      <div className='max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12
                      py-14 lg:py-20 lg:min-h-[700px]
                      flex flex-col lg:flex-row items-center justify-center
                      gap-10 lg:gap-12 xl:gap-20'>

        {/* ---------- LEFT section ---------- */}
        <section className='w-full lg:w-1/2 max-w-xl text-center lg:text-left'>

          <div className='inline-flex items-center bg-[#DFE8FE] rounded-full px-4 py-1.5 mb-5'>
            <span className="text-[#6163B1] text-sm sm:text-base">#LinkinBio</span>
          </div>

          <h1 className="text-black font-bold leading-tight pb-5
                         text-3xl sm:text-4xl xl:text-5xl">
            Profitiere mit deinem <br className='hidden lg:inline' />
            <span className='multicolortext'>Bio-Link</span> von deiner <br className='hidden lg:inline' />
            <span className='multicolortext'>Leidenschaft</span>
          </h1>

          <h3 className='text-black font-bold leading-relaxed pb-7
                         text-base sm:text-lg xl:text-xl'>
            Die All-in-One Bio-Seite mit Zugang zu über 250 <br className='hidden lg:inline' />
            Marken, um deine Reichweite zu monetarisieren.
          </h3>

          <div className="flex flex-col sm:flex-row gap-3 mb-3 max-w-md mx-auto lg:mx-0">
            <input
              type="text"
              aria-label="username"
              placeholder="username"
              className="flex-1 min-w-0 px-4 py-3 text-base text-gray-500 bg-white
                         rounded-xl border border-gray-200 hover:border-black
                         focus:outline-none focus:ring-2 focus:ring-[#1919BC]"
            />
            <button
              className="text-white font-bold px-7 py-3 bg-[#1919BC] text-base
                         rounded-xl shadow-lg hover:opacity-80 duration-150
                         whitespace-nowrap
                         focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1919BC]"
              type="button">
              sichern
            </button>
          </div>

          <div className='flex items-center justify-center lg:justify-start gap-2'>
            <p className='text-gray-600 text-sm sm:text-base'>
              In wenigen Minuten kostenlos starten
            </p>
            <span className='bg-[#E9D4FF] text-[#6163B1] text-xs rounded-full px-3 py-1'>
              beta
            </span>
          </div>

        </section>

        {/* ---------- RIGHT section: hero image ---------- */}
        <section className='w-full lg:w-1/2 flex justify-center'>
          <img
            className='w-full max-w-[600px] h-auto'
            src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/644be847e0ef567adc062e3b_Hero%20Graphic%20v3-p-800.png"
            alt="cliqe Bio-Seiten auf Smartphones, umgeben von Partnermarken"
          />
        </section>

      </div>
    </div>
  )
}

export default Herosection

