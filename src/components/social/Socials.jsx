import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";

const Socials = () => {

  useEffect(() => {
    Aos.init({duration: 1000});
   }, [])

  return (
    <div className='container mx-auto bg-[#FAF8FF] h-[600px]'>
    
    <section className='flex justify-center gap-[100px] pt-[100px]' >

      <div data-aos = "zoom-in" className='left' >
        <img src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63fcea8dee467c9dd2268f8e_Home%20Graohic%20Social%20Media-p-500.png" />
      </div>

      <div data-aos = "fade-up" className='right' >
      <div className='bg-[#F1ECFE] w-[85px] h-10 rounded-[100px] mb-6  ml-7' >
      <h6 className="text-[#6163B1] 2xl:text-[16px] xl:text-5xl lg:text-3xl text-2xl pt-3 pl-4 text-center sm:text-justify cursor-pointer">Socials</h6>
      </div>
        <h1 className='font-bold text-black text-4xl pb-4 pl-7' >Bündle und teile deine <br />Inhalte auf deinen <br />Sozialen Netzwerken</h1>
        <p className='text-gray-500 leading-6 pb-[50px] text-lg pl-7' >Mit cliqe kannst du deine Inhalte und Partnerschaften<br />bequem bündeln und mit einem Link auf deinen Social <br />Media-Kanälen teilen.</p>
          <button className="btn font-bold text-white ml-7 -mt-10 px-8 
      xl:text-l  sm:text-base lg:text-sm text-xs rounded-[10px] hover:opacity-90 duration-150 text-center shadow-lg" type="button">Jetzt starten</button>
      </div>

    </section>

    </div>
  )
}

export default Socials