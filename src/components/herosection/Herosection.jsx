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
    <div className='container mx-auto bgc h-[700px] flex justify-center items-center gap-20' >
     
     <section className='mt-[-50px]' >
     <div className='bg-[#DFE8FE] w-[108px] h-10 rounded-[100px] mb-6' >
      <h6 className="text-[#6163B1] lg:text-[16px] text-2xl pt-1 pl-4 text-center sm:text-justify cursor-pointer">#LinkinBio</h6>
      </div>
      <h1 className="text-black font-bold 2xl:text-5xl xl:text-5xl lg:text-3xl text-2xl text-center sm:text-justify pb-6">Profitiere mit deinem <br /><span className='pr-3 multicolortext' >Bio-Link</span>von deiner <br /><span className='multicolortext' >Leidenschaft</span></h1>
      <h3 className=' text-black text-xl leading-7 font-bold pb-8' >Die All-in-One Bio-Seite mit Zugang zu über 250 <br />Marken, um deine Reichweite zu monetarisieren.</h3>
      <div class="flex mb-6 sm:mb-4">
          <input type="text" placeholder="username" class="pl-3 2xl:pr-22 lg:pr-24 pr-12 2xl:py-3 py-2 2xl:text-xl lg:text-base text-sm
          text-gray-400 bg-white rounded-xl hover:border border border-gray-200 mr-6 hover:border-black" />
         <button class="text-white font-bold 2xl:px-7 lg:px-5 px-3 2xl:py-3 lg:py-2 bg-[#1919BC] 2xl:text-xl lg:text-base text-sm rounded-xl text-center sm:-ml-4
          hover:opacity-80 shadow-lg duration-150" type="button">sichern</button>
        </div>
        <p className='text-gray-600 text-base pl-5' >In wenigen Minuten kostenlos starten</p>
        <div className='bg-[#E9D4FF] w-[55px] h-6 rounded-[50px] ml-[295px] mt-[-25px]' ></div>
        <h6 className="text-[#6163B1] lg:text-[12px] text-2xl pl-[310px] mt-[-30px] text-center sm:text-justify cursor-pointer">beta</h6>
      </section>

     <section className='mt-[-50px]'>
     <img className='w-[600px]' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/644be847e0ef567adc062e3b_Hero%20Graphic%20v3-p-800.png" />
     </section>

    </div>

  
  )
}

export default Herosection

