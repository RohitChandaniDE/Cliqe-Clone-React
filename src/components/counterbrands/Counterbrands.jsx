import React, { useEffect, useRef } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";

const Counterbrands = () => {

    const count1Ref = useRef(null);
    const count2Ref = useRef(null);
    const count3Ref = useRef(null);
    
    const total1 = 88;
    const total2 = 60;
    const total3 = 20;
    
  
    let start = null;
  
    function updateCounters(timestamp) {
      if (!start)
      start = timestamp;
      const progress = timestamp - start;
  
      const countValue1 = Math.min(Math.floor(progress / 40), total1);
      const countValue2 = Math.min(Math.floor(progress / 58), total2);
      const countValue3 = Math.min(Math.floor(progress / 167), total3);
      
  
      count1Ref.current.textContent = countValue1;
      count2Ref.current.textContent = countValue2;
      count3Ref.current.textContent = countValue3;
      
  
      if (countValue1 < total1 || countValue2 < total2 || countValue3 < total3) {
        requestAnimationFrame(updateCounters);
      }
    }
  
    useEffect(() => {
      requestAnimationFrame(updateCounters);
      Aos.init({duration: 500});
    }, []);

  return (
    <div className='container mx-auto bg-[#1919BC] h-[347px]' >

    <h1 data-aos = "fade-up" className="text-white pt-20 pb-12 font-bold 2xl:text-center 2xl:text-3xl xl:text-5xl lg:text-3xl text-2xl text-center sm:text-justify">Wieso Brands mit kleineren Creatorn zusammenarbeiten sollten</h1>
     
     <div data-aos = "fade-up" className='flex justify-center gap-[260px] mb-6' >
      <div className='text-white font-bold text-5xl' ref={count1Ref} id="count1"></div>
      <div className='text-white font-bold text-5xl' ref={count2Ref} id="count2"></div>
      <div  className='text-white font-bold text-5xl' ref={count3Ref} id="count3"></div>
     </div> 

    <h1 data-aos = "fade-up" className='text-white font-bold text-4xl ml-[500px] mt-[-67px]' >%</h1>
    <h1 data-aos = "fade-up" className='text-white font-bold text-4xl ml-[810px] mt-[-40px]' >%</h1>
    <h1 data-aos = "fade-up" className='text-white font-bold text-4xl ml-[1122px] mt-[-40px] mb-2' >%</h1>
    

    <div data-aos = "fade-up" className='flex justify-center gap-[130px] mb-2' >
    <p className='text-[#06D5F7] font-bold text-center' >bevorzugen Authentizität</p>
    <p className='text-[#06D5F7] font-bold text-center'>höhere Engagement-Rate</p>
    <p className='text-[#06D5F7] font-bold text-center'>höhere Conversion-Rate</p>
    </div>

    <div data-aos = "fade-up" className='flex justify-center gap-[85px]' >
    <h3 className=' text-white text-[12px] leading-5 font-bold pb-4 text-center' >Social Media-Konsumenten schätzen die
    <br />Glaubwürdigkeit von kleineren Influencern</h3>
    <h3 className=' text-white text-[12px] leading-5 font-bold pb-4 text-center' >Die Nähe der Micro-Creator zu ihren
    <br />Communities fördert die Interaktion</h3>
    <h3 className=' text-white text-[12px] leading-5 font-bold pb-4 text-center' >Die Glaubwürdigkeit und Interaktion fördert die
    <br />Abschlussrate für Brands signifikant</h3>
    </div>
    

    </div>
  )
}

export default Counterbrands