import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";

const Cliqe = () => {

  useEffect(() => {
    Aos.init({duration: 1000});
  }, [])

  return (
    <div className='container mx-auto'>

        <main className='bg-[#FAFAFA] h-[1300px]' >
        <h1 data-aos = "fade-up" className="text-black pt-20 pl-[500px] font-sans pb-4 font-bold 2xl:text-4xl xl:text-5xl lg:text-3xl text-2xl text-center sm:text-justify">Wieso du <span className='multicolortext'>cliqe</span>  nutzen solltest</h1>
        <p  data-aos = "fade-up" className='text-center font-sans text-lg pr-8 pb-16' >Nicht nur Content Sammlung sondern auch Content Monetarisierung</p>
       
        <div className='flex justify-center gap-[50px]' >

         <section data-aos = "zoom-in" className='bg-white h-[600px] w-[500px] rounded-[25px] mb-16' >
          <img className='w-12 pb-6 pt-10 ml-7' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63fa57ea303f2061b8291f87_Bubble%20Icon%20Tap.svg" />
          <h1 className='font-bold text-black text-3xl pb-4 pl-7' >Bequem & Einfach</h1>
          <p className='text-gray-500 leading-6 pb-[40px] text-xl pl-7' >Mit cliqe erhältst du bequem & zeitsparend deinen<br />persönlichen, optisch ansprechenden Bio-Link</p>
          <div className='h-[300px] w-[440px] bg-[#FFF9FD] ml-[30px] rounded-[15px] border border-pink-100'></div>
          <img className='-mt-[245px] ml-[80px]' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63fa70068bac0a82a04f1ff1_Home%20Graphic%20Convenient%20%26%20Simple.png"/>
          </section>

         <section data-aos = "zoom-in" className='bg-white h-[600px] w-[500px] rounded-[25px]'>
         <img className='w-12 pb-6 pt-10 ml-7' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63f92a2fc0c30939c06b9311_Bubble%20Icon%20Safety%20blue.svg" />
          <h1 className='font-bold text-black text-3xl pb-4 pl-7' >Rechtskonform</h1>
          <p className='text-gray-500 leading-6 pb-[40px] pl-7 text-xl' >Der Bio-Link von cliqe ist durch Features für ein<br />Impressum rechts- und datenschutzkonform</p>
          <div className='h-[300px] w-[440px] bg-[#FFF8F6] ml-[30px] rounded-[15px] border border-orange-100'></div>
          <img className='-mt-[245px] ml-[80px]' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/64066d4ff7ec2d63178700b9_Home%20Graphic%20Impressum%20%26%20Cookie%20Consent.png"/>
         </section>

        </div>
        
        <div data-aos = "zoom-in" className='bg-white h-[350px] w-[1050px] rounded-[25px] ml-[245px]' >
          <h1 className='font-bold text-black text-4xl pt-10 pb-4 pl-7'>Attraktive <span className='multicolortext' >Vergütungen</span> </h1>
          <p className='leading-6 pb-[40px] text-xl pl-7 text-gray-500' >Mit cliqe erhältst du Zugang zu attraktiven Provisionen,<br />die bisher nur größeren Creatorn vorenthalten waren</p>
          <button className="btn font-bold text-white ml-7 -mt-10 px-8 
      xl:text-l  sm:text-base lg:text-sm text-xs rounded-[10px] text-center shadow-lg" type="button">Jetzt starten</button>
     
          <div className='h-[300px] w-[440px] bg-[#FEEEF5] ml-[565px] -mt-[195px] rounded-[15px] border border-pink-200'></div>
          <img className='-mt-[275px] ml-[595px] h-[250px] w-[380px] ' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63fa6e93b9bb10fad7f9bacd_Home%20Graphic%20Verticals%20%26%20Brands-p-800.png"/>
        </div>

    </main>

    </div>
  )
}

export default Cliqe

