import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";

const Bioseite = () => {

  useEffect(() => {
    Aos.init({duration: 1500});
   }, [])

  return (
    <div data-aos = "fade-up" className='container mx-auto h-[605px] flex justify-center gap-[100px] ' >

        <section className='left pt-[125px]' >
          <div className='flex items-center gap-3 pb-5' >
          <img  className='w-[130px]' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/644683d6a6ee3548b289dde8_Peer%20Creators%20Graphic-p-500.png"/>
          <h3 className='font-bold text-black' >Join over 100 Creators</h3>
          </div>
          <h1 className="text-black font-bold 2xl:text-[40px] xl:text-5xl lg:text-3xl text-2xl text-center sm:text-justify pb-6">Die besten Features <br />für deine<span className='multicolortext pl-3' >Bio-Seite</span></h1>
        <p className='text-gray-600 text-[15px] pb-8' >Erstelle deine eigene Bio-Seite und erhalte Zugang zu einer Vielzahl <br />an Monetarisierungsoptionen.</p>
        <button className="btn font-bold text-white px-8 
      xl:text-l  sm:text-base lg:text-sm text-xs rounded-[10px] hover:opacity-90 duration-150 text-center shadow-lg" type="button">Jetzt starten</button>

        </section>

        <section className='right pt-[80px]'>
     
     <img className='w-[500px]' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/638a2cc14cd8440c59b3c110_mix%20blur.png"/>
     <div>
     <img className='w-[230px] h-[320px] mt-[-450px] ml-[30px]' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63fa50cd1098aada749447cc_Feature%20Graphic%20Bio-Site-p-500.png" />
     <img className='w-[300px] mt-[-320px] ml-[270px]' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63f924bfe520bf0ee781b805_Feature%20Graphic%20Analytics-p-500.png" />
     <img className='w-[300px] mt-[20px] ml-[270px]' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63fa50cdb898990549c0078e_Feature%20Graphic%20Design%20%2B%20Partner-p-500.png" />
     <img className='w-[200px] mt-[-180px] ml-[130px] animate-bounce-slow' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/638a2cc14cd8443170b3c0bb_Single%2520User%2520Big%2520Image-p-500.png" />
     </div>

        </section>


    </div>
  )
}

export default Bioseite