import React, { useEffect, useRef } from 'react';
import "./Counter.css"
import Aos from "aos";
import "aos/dist/aos.css";

export const Counter = () => {

    const count1Ref = useRef(null);
    const count2Ref = useRef(null);
    const count3Ref = useRef(null);
    
    const total1 = 100;
    const total2 = 250;
    const total3 = 100;
    
  
    let start = null;
  
    function updateCounters(timestamp) {
      if (!start)
      start = timestamp;
      const progress = timestamp - start;
  
      const countValue1 = Math.min(Math.floor(progress / 50), total1);
      const countValue2 = Math.min(Math.floor(progress / 20), total2);
      const countValue3 = Math.min(Math.floor(progress / 50), total3);
      
  
      count1Ref.current.textContent = countValue1;
      count2Ref.current.textContent = countValue2;
      count3Ref.current.textContent = countValue3;
      
  
      if (countValue1 < total1 || countValue2 < total2 || countValue3 < total3) {
        requestAnimationFrame(updateCounters);
      }
    }
  
    useEffect(() => {
      requestAnimationFrame(updateCounters);
      Aos.init({duration: 1000});
    }, []);

    return (
    <div className='container mx-auto h-[630px]' >
     
     <div className='pl-[190px] pt-[100px]' >
     <section data-aos = "fade-up" className='h-[450px] w-[1160px] multicolor rounded-[50px]' >
     <h1 className="text-black pt-20 pl-[370px] pb-12 font-bold 2xl:text-4xl xl:text-5xl lg:text-3xl text-2xl text-center sm:text-justify">Du möchtest von deiner <br /><span className='pr-3 multicolortext' >Leidenschaft</span>profitieren?</h1>
     
     <div className='flex justify-center gap-[260px] mb-2' >
      <div className='text-black font-bold text-5xl' ref={count1Ref} id="count1"></div>
      <div className='text-black font-bold text-5xl' ref={count2Ref} id="count2"></div>
      <div  className='text-black font-bold text-5xl' ref={count3Ref} id="count3"></div>
     </div> 

     
    <h1 className='text-black font-bold text-4xl ml-[300px] mt-[-52px]' >%</h1>
    <h1 className='text-black font-bold text-4xl ml-[620px] mt-[-40px]' >+</h1>
    <h1 className='text-black font-bold text-4xl ml-[960px] mt-[-40px]' >+</h1>
    

    <div className='flex justify-center gap-[240px]' >
    <p className='text-gray-800' >Kostenlos</p>
    <p className='text-gray-800'>Partnerprogramme</p>
    <p className='text-gray-800'>Creator</p>
    </div>

    <a href="/signup">
    <button className="btn font-bold text-white mt-16 px-8 ml-[475px]
      xl:text-l  sm:text-base lg:text-sm text-xs rounded-[10px] hover:opacity-90 duration-150 text-center" type="button">Jetzt starten</button>
    </a>


     </section>
     </div>
    </div>
  )
}
