import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";


const Accordion = () => {

  useEffect(() => {
    Aos.init({duration: 1000});
   }, [])

  return (
    <div data-aos = "fade-up" className='container h-[800px] mx-auto' >

   <div className='flex justify-center gap-[150px]'>

    <section className='left pt-[150px]'>
    
    <h1 className='font-bold text-black text-3xl pb-4 pl-7' >Bündel deine Inhalte und <br />tracke deine Performance</h1>
    <p className='text-gray-500 leading-6 pb-[20px] text-xl pl-7' >Mit cliqe kannst du nicht nur bequem deine Inhalte<br />aggregieren, sondern ebenfalls deinen Content <br />monetarisieren und deine Performance analysieren.</p>

    <section className='w-[400px] '>

   <img className='w-10 pb-6 pt-10 ml-7' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63f8f91b14bcae7f1c3001e3_Bubble%20Icon%20Share.svg" />
   <div className="collapse collapse-arrow pl-16 mt-[-70px] ">
   <input type="radio" name="my-accordion-2" /> 
   <div className="collapse-title text-[15px] font-bold">
    Teile unterschiedliche Inhalte
   </div>
   <div className="collapse-content text-[13px]"> 
    <p>Egal ob deine anderen Kanäle, externe Links oder <br />Videos/Musik - mit deiner cliqe-Bio-Seite kannst du <br />alle Inhalte bündeln</p>
   </div>
   </div>
   <hr />

   <img className='w-10 pb-6 pt-10 ml-7' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63f8f91b35d1845e533d450d_Bubble%20Icon%20Diversify.svg" />
   <div className="collapse collapse-arrow pl-16 mt-[-70px]">
  <input type="radio" name="my-accordion-2" /> 
  <div className="collapse-title text-[15px] font-bold">
   Diversifiziere deine Einnahmequellen
  </div>
  <div className="collapse-content text-[13px]"> 
  <p>Mit cliqe kannst du bequem und unkompliziert neue <br />Partnerschaften eingehen, um (weitere) Einnahmen <br />zu generieren und diese zu diversifizieren</p>
  </div>
  </div>
  <hr />

  <img className='w-10 pb-6 pt-10 ml-7' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63f8f91b5a868091f80674ac_Bubble%20Icon%20Analytics.svg" />
  <div className="collapse collapse-arrow pl-16 mt-[-70px]">
  <input type="radio" name="my-accordion-2" /> 
  <div className="collapse-title text-[15px] font-bold">
  Analysiere deine Performance
  </div>
  <div className="collapse-content text-[13px]"> 
  <p>Für zukünftige Performance-Steigerungen, erhältst <br />du spannende Insights zu deine Seitenaufrufen,<br />einzelnen Link-Klicks, Zielgruppen-Insights u.v.m.</p>
  </div>
  </div>
    </section>

</section>

<section className='right pt-[100px]'>
     
     <img className='' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/638a2cc14cd8440c59b3c110_mix%20blur.png"/>
     <div>
     <img className='w-[220px] mt-[-550px] ml-[50px]' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63f9e9a576d6a333a15076c0_Home%20Graphic%20Content-p-500.png" />
     <img className='w-[220px] mt-[20px] ml-[50px]' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63f9e9a5f4b80808714655a7_Home%20Graphic%20Monetization-p-500.png" />
     <img className='w-[220px] mt-[20px] ml-[50px]' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63f9e9a58bac0a4c994502de_Home%20Graphic%20Analytics-p-500.png" />
     <img className='w-[275px] h-[523px] mt-[-522px] ml-[280px]' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63f9e9a569cf80d685f8f0aa_Home%20Graphic%20Bio-Site-p-500.png" />
     </div>

    </section>

</div>

    </div>
  )
}

export default Accordion


