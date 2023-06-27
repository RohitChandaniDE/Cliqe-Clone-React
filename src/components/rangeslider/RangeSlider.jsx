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
    Aos.init({duration: 1000});
  }, [])

  return (
    <div data-aos = "fade-up" className='container mx-auto' >
      
    <section className='h-[600px]' >
    <h1 className="text-black pt-20 pl-[350px] font-sans pb-20 font-bold 2xl:text-5xl xl:text-5xl lg:text-3xl text-2xl text-center sm:text-justify">Wie deine<span className='multicolortext pl-3 pr-3'>Vergütung</span>aussehen könnte</h1>

    <input type="range" min="0" max="99" step="1" value={value} onChange={handleSliderChange} className='range range-primary ml-[500px] w-[500px] mb-12'/>
      <p className='text-center font-bold text-5xl pr-[300px]'>{calculateFirstText(value)}€</p><div className='pl-[685px] -mt-[36px]' >/Monat</div>
      <p className='text-center font-bold text-5xl mt-[-36.5px] pl-[100px]'>{calculateSecondText(value)}k </p><div className='pl-[875px] -mt-[36px]' >Followers</div>

    <h3 className='text-black text-lg pt-10 text-center pb-5' >verdienen Content Creator mit dieser Followerzahl erfahrungsgemäß*</h3>
    <p  className='text-[10px] text-center' >*die Vergütung soll lediglich der Potential-Veranschaulichung dienen und ist kein garantierter Indikator für zukünftige Einnahmen.</p>
    <button  className="btn font-bold text-white ml-[675px] mt-12 px-8 
      xl:text-l sm:text-base lg:text-sm text-xs rounded-[10px] text-center shadow-lg hover:opacity-90 duration-150" type="button">Jetzt starten</button>

      <div>
       <img className='mt-[-300px] ml-[150px]' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/64482d4d2055cac9e0241431_Rectangle%2027.svg" />
       <img className=' mt-[-100px] ml-[200px]' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/64482d4e2055cac2eb241433_Group%2053.svg" />
      </div>

      <div>
      <img className='float-right mt-[-230px] mr-[150px]' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/64482d4e2055cac2eb241433_Group%2053.svg" />
      <img className='float-right mr-[150px] mt-[-125px] origin-bottom -rotate-12' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/64482d4d2055cac9e0241431_Rectangle%2027.svg" />
       </div>

    </section>

    

    </div>
  );
};

export default RangeSlider;





