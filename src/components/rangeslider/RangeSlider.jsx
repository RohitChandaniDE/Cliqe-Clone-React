import React, { useState, useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";

const RangeSlider = () => {
  const [value, setValue] = useState(0);

  const handleSliderChange = (event) => {
    setValue(parseInt(event.target.value));
  };

  const calculateFirstText = (value) => {
    return value * 50 + 50;
  };

  const calculateSecondText = (value) => {
    return value + 1;
  };

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, [])

  return (
    <div data-aos="fade-up" className='w-full relative overflow-hidden'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24'>

        <h1 className="text-black font-sans font-bold text-center leading-tight pb-12 lg:pb-16
                       text-2xl sm:text-3xl lg:text-4xl xl:text-5xl">
          Wie deine <span className='multicolortext'>Vergütung</span> aussehen könnte
        </h1>

        <div className='max-w-lg mx-auto relative z-10'>
          <input
            type="range" min="0" max="99" step="1"
            value={value}
            onChange={handleSliderChange}
            className='range range-primary w-full mb-12'
          />
        </div>

        <div className='flex flex-col sm:flex-row justify-center items-center
                        gap-4 sm:gap-12 lg:gap-24 mb-10 relative z-10'>
          <p className='text-center font-bold text-5xl'>
            {calculateFirstText(value)}€
            <span className='text-lg text-gray-600 font-normal ml-1'>/Monat</span>
          </p>
          <p className='text-center font-bold text-5xl'>
            {calculateSecondText(value)}k
            <span className='text-lg text-gray-600 font-normal ml-1'>Followers</span>
          </p>
        </div>

        <h3 className='text-black text-lg text-center pb-5 relative z-10'>
          verdienen Content Creator mit dieser Followerzahl erfahrungsgemäß*
        </h3>
        <p className='text-[10px] text-center max-w-xl mx-auto pb-10 relative z-10'>
          *die Vergütung soll lediglich der Potential-Veranschaulichung dienen und ist
          kein garantierter Indikator für zukünftige Einnahmen.
        </p>

        <div className='text-center relative z-10'>
          <button className="btn font-bold text-white px-8 py-3
                             xl:text-l sm:text-base lg:text-sm text-xs
                             rounded-[10px] text-center shadow-lg hover:opacity-90 duration-150"
                  type="button">
            Jetzt starten
          </button>
        </div>

      </div>

      <div className='hidden lg:block pointer-events-none select-none' aria-hidden="true">
        <img className='absolute left-8 xl:left-24 top-1/3'
             src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/64482d4d2055cac9e0241431_Rectangle%2027.svg" alt="" />
        <img className='absolute left-20 xl:left-40 bottom-1/4'
             src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/64482d4e2055cac2eb241433_Group%2053.svg" alt="" />
        <img className='absolute right-8 xl:right-24 top-1/3'
             src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/64482d4e2055cac2eb241433_Group%2053.svg" alt="" />
        <img className='absolute right-20 xl:right-40 bottom-1/4 -rotate-12'
             src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/64482d4d2055cac9e0241431_Rectangle%2027.svg" alt="" />
      </div>

    </div>
  );
};

export default RangeSlider;




