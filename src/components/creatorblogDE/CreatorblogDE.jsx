import React, { useState, useEffect, useRef } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";


const CreatorblogDE = () => {

const [isHovered, setIsHovered] = useState(false);

const handleMouseEnter = () => {
    setIsHovered(true);
};
  
const handleMouseLeave = () => {
    setIsHovered(false);
};
  
const scale = isHovered ? 1.1 : 1;

useEffect(() => {
  Aos.init({duration: 1000});
}, []);

return (
    <div className='container mx-auto' >
        
    <section className='flex justify-center mt-10 gap-[140px]' >
        <div>
            <div className='bg-[#F5F5F5] w-[70px] h-8 rounded-[13px]' >
              <h6 className="text-gray-500 2xl:text-[12px] xl:text-5xl lg:text-3xl text-2xl pt-2.5 pl-4 text-center sm:text-justify cursor-pointer">Trends</h6>
            </div>
            <h1 className='text-gray-500 text-sm pl-[85px] mt-[-25px] pb-5' >4 Min.</h1>
            <h1 className='text-black font-bold text-3xl pb-4' >Aufstrebende Creator <br />Trends für 2023</h1>
      <p className='text-gray-500 leading-5 text-[15px] font-medium pb-8' >Laut HubSpot wurde der Markt der Creator Economy im<br />Jahr 2022 auf 104,2 Milliarden US-Dollar geschätzt, was <br />einer Verdopplung des Werts gegenüber 2019 entspricht! <br />Dabei stellt sich uns die Frage: Wird das enorme <br />Wachstum auch 2023 noch bestehen.</p>
      <button   onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="text-white font-bold 2xl:px-7 lg:px-5 px-3 2xl:py-3 lg:py-2 bg-[#1919BC] duration-200 hover:bg-[#06D5F7] 2xl:text-base lg:text-base text-sm rounded-[12px] text-center sm:ml-0" type="button">Weiterlesen</button>
        </div>

        <div className="max-w-[450px] h-[320px] group rounded-xl cursor-pointer">
              <div className="max-w-[450px] h-[320px] mx-auto overflow-hidden rounded-lg">
                <div className="w-full h-full block group-hover:scale-110 transition-all duration-200">
                  <img src="https://uploads-ssl.webflow.com/638a2cc14cd844ed38b3c011/6405a7bc88055300cecbfcf9_2023_Blog_Visuals.png" alt="stock"
                     style={{ transform: `scale(${scale})` }} className="w-full h-full block transition-all duration-200"/>
                </div>
              </div>
         </div>
       </section>

       {/* Email */}

       <section data-aos = "fade-up" className='h-[130px] w-[900px] mt-20 mb-20 ml-[320px] rounded-xl border border-gray-200'>

       <div className='flex gap-3'>
          <div className='bg-[#FEFCF2] w-[80px] h-[80px]' >
          <img className='ml-4 mt-5'src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/638a2cc14cd8447125b3c046_Frame%205766.svg"/>
           </div>
           <div>
           <h2 className='text-black font-bold text-lg pl-3 pt-[37px]' >Newsletter-Anmeldung</h2>
           <p className='text-gray-600 text-sm pl-3'>Erhalte mehr Beiträge zu interessanten Themen.</p>
           </div>
       </div>
         
       <div class="flex ml-[460px] mt-[-47px]">
          <input type="email" placeholder="E-Mail-Adresse" class="pl-3 2xl:pr-22 lg:pr-24 pr-12 2xl:py-3 py-2 2xl:text-sm lg:text-base text-sm
          text-gray-400 rounded-xl hover:border border border-gray-200 mr-6 hover:border-black bg-[#F5F5F5]" />
         <button class="text-white font-bold 2xl:px-7 lg:px-5 px-3 2xl:py-3 lg:py-2 bgcbrands hover:bg-[bg-[#06D5F7]] 2xl:text-sm lg:text-base text-sm rounded-xl text-center sm:-ml-4 duration-200" type="button">Anmelden</button>
       </div>

       </section>

    </div>
  )
}

export default CreatorblogDE