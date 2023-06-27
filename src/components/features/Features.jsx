import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";

const Features = () => {

useEffect(() => {
      Aos.init({duration: 1000});
     }, [])

  return (
    <div className='container mx-auto bg-[#FAFAFA] h-[750px]'> 
    <img className='pt-[200px] pl-[500px] ' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/638a2cc14cd8449109b3c091_Arrow%20Big.svg" />

    <section data-aos = "fade-up"  className='bg-white h-[450px] w-[500px] rounded-[15px] ml-[190px] mt-[-415px] relative' >
    <h1 className='font-bold text-black text-4xl pb-5 pl-7 pt-[50px]' >All-in-one Lösung, um <br />von deinem Content zu <br />profitieren</h1>
          <p className='text-gray-500 leading-6 pb-[60px] text-base pl-7' >Mit cliqe erhältst du bequem & zeitsparend deinen<br />persönlichen, optisch ansprechenden Bio-Link</p>
          <button className="btn font-bold text-white ml-7 -mt-10 px-8 
      xl:text-l  sm:text-base lg:text-sm text-xs rounded-[10px] text-center shadow-lg" type="button">Jetzt starten</button>
    </section>

    <section data-aos = "fade-up"  className='bg-white h-[275px] w-[275px] rounded-[15px] ml-[750px] mt-[-550px] relative' >
    <img className='w-12 pb-6 pt-10 ml-7' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63f92ddf6822514aa7b22163_Rounded%20Icon%20Bio-Site.svg" />
          <h1 className='font-bold text-black text-2xl pb-4 pl-7' >Persönliche Bio- <br />Seite</h1>
          <p className='text-gray-500 leading-6 pb-[40px] text-base pl-7' >Gestalte deine Bio-Seite nach<br />deinem Geschmack</p>
    </section>

    <section data-aos = "fade-up"  className='bg-white h-[275px] w-[275px] rounded-[15px] ml-[1090px] mt-[-245px] relative' >
    <img className='w-12 pb-6 pt-10 ml-7' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63f92ddf93c6e4ec5647dde8_Rounded%20Icon%20Links.svg" />
          <h1 className='font-bold text-black text-2xl pb-4 pl-7' >Aggregiere deinen <br />Content</h1>
          <p className='text-gray-500 leading-6 pb-[40px] text-base pl-7' >Sammle deine Links, Socials,<br />Musik, Videos uvm.</p>
    </section>

    <section data-aos = "fade-up"  className='bg-white h-[275px] w-[275px] rounded-[15px] ml-[750px] mt-[65px] relative' >
    <img className='w-12 pb-6 pt-10 ml-7' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63f92ddf536875fc9824c90d_Rounded%20Icon%20Monetization.svg" />
          <h1 className='font-bold text-black text-2xl pb-4 pl-7' >Monetarisiere <br />deinen Kanal</h1>
          <p className='text-gray-500 leading-6 pb-[40px] text-base pl-7' >Direkter Zugang zu deinen<br />Lieblingsmarken</p>
    </section>

    <section data-aos = "fade-up"  className='bg-white h-[275px] w-[275px] rounded-[15px] ml-[1090px] mt-[-290px] relative' >
    <img className='w-12 pb-6 pt-10 ml-7' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63f92ddf8d520a2f444d48aa_Rounded%20Icon%20Analytics.svg" />
          <h1 className='font-bold text-black text-2xl pb-4 pl-7' >Umfangreiche <br />Analytics</h1>
          <p className='text-gray-500 leading-6 pb-[40px] text-base pl-7' >Erhalte hilfreiche Einblicke zum<br />Erfolg deiner Bio-Seite</p>
    </section> 

    </div>
  )
}

export default Features