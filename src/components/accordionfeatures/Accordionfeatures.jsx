import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";

const Accordionfeatures = () => {
    useEffect(() => {
        Aos.init({duration: 1000});
       }, [])
    
      return (
        <div data-aos = "fade-up" className='container h-[600px] mx-auto mt-[-120px]' >
    
       <div className='flex justify-center gap-[150px]'>

       <section className='left pt-[100px]'>
         
         <img className='w-[450px]' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/638a2cc14cd8440c59b3c110_mix%20blur.png"/>
         <div>
         <img className='w-[230px] mt-[-400px] mr-[100px]' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63fa4f806b8a4b434b8f9f42_Feature%20Graphic%20Legal-p-500.png" />
         <img className='w-[230px] mt-[10px] mr-[50px]' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63fa4f800e9534de11a69209_Feature%20Graphic%20Themes-p-500.png" />

         <img className='w-[210px] h-[262px] mt-[-260px] ml-[240px]' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63fa4f811d416a8599819898_Feature%20Graphic%20Design-p-500.png" />
         </div>
    
        </section>
    
    <section className='right pt-[150px]'>
        
        <h1 className='font-bold text-black text-3xl pb-4 pl-7' >Optisch ansprechende und<br />rechtskonforme Bio-Seite</h1>
        <p className='text-gray-500 leading-6 text-xl pl-7' >cliqe bietet dir einen holistischen Baukasten, mit<br />dem du dir optisch ansprechende und 100% <br />rechtskonforme Bio-Seite erstellen kannst.</p>
    
        <section className='w-[400px] '>
        <img className='w-10 pb-6 pt-10 ml-7' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63f8fb3835d184be3a3d6c55_Bubble%20Icon%20Design.svg" />
       <div className="collapse collapse-arrow pl-16 mt-[-70px] ">
       <input type="radio" name="my-accordion-2" /> 
       <div className="collapse-title text-[15px] font-bold">
       Vielfältige Gestaltungsmöglichkeiten
       </div>
       <div className="collapse-content text-[13px]"> 
        <p>Mit cliqe erhältst du eine Vielzahl von Design-<br />Möglichkeiten von verschiedenen Hintergrundfarben <br />bis hin zu individuellen Elementen, um deine Bio- <br />Seite an deine Bedürfnisse anzupassen. </p>
       </div>
       </div>
       <hr />
    
       <img className='w-10 pb-6 pt-4 ml-7' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63f8fb3850a300a676df47fb_Bubble%20Icon%20Safe.svg" />
       <div className="collapse collapse-arrow pl-16 mt-[-70px]">
      <input type="radio" name="my-accordion-2" /> 
      <div className="collapse-title text-[15px] font-bold">
      100% rechtskonforme Bio-Seite
      </div>
      <div className="collapse-content text-[13px]"> 
      <p>Rechtskonforme Features für Impressum und die <br />Kennzeichnung von Werbung ermöglichen die<br />Erstellung von rechtssicheren Bio-Seiten, um teure <br />und unnötige Abmahnungen vorzubeugen.</p>
      </div>
      </div>
      </section>
    
    </section>
    
</div>
    
        </div>
      )
}

export default Accordionfeatures