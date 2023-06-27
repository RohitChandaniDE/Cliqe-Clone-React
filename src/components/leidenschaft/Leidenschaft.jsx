import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";

const Leidenschaft = () => {

useEffect(() => {
  Aos.init({duration: 1000});
}, [])

return (
    <div className='container mx-auto'>
     <section className='h-[800px]' >
   
        <h1 data-aos = "fade-up" className="text-black pt-32 pl-[370px] pb-20 font-bold 2xl:text-4xl xl:text-5xl lg:text-3xl text-2xl text-center sm:text-justify">Teile und profitiere von deiner<span className='pl-3 multicolortext' >Leidenschaft</span></h1>

        <div data-aos = "fade-up" className='flex justify-center gap-[70px]' >
         <div >
            <img className='w-[220px] h-[200px] ml-10 mb-12' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/6406315ee94627873a20d29d_Product%20Graphic%20Step%201-p-500.png" alt="image1" />
            <div className='bg-[#D7F9FF] w-[35px] h-8 rounded-[5px] ml-[130px] mb-4' >
         <h6 className="text-[#6B23AA]  2xl:text-[15px] xl:text-5xl lg:text-3xl pt-2 text-2xl pl-3 text-center sm:text-justify cursor-pointer">1</h6>
        </div>
            <h1 className='text-black font-bold text-center pb-4 text-lg' >Sicher dir deinen individuellen Link</h1>
            <p className='text-center leading-4'>Sicher dir deinen persönlichen Link und<br />erhalte Zugang zu attraktiven<br />Partnerprogrammen</p>
         </div>

         <div>
            <img className='w-[270px] h-[200px] mb-12' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/6406308719ea4646b1713be9_Product%20Graphic%20Step%202-p-500.png" alt="image1" />
            <div className='bg-[#E7E3FF] w-[35px] h-8 rounded-[5px] ml-[120px] mb-4' >
         <h6 className="text-[#6B23AA]  2xl:text-[15px] xl:text-5xl lg:text-3xl pt-2 text-2xl pl-3 text-center sm:text-justify cursor-pointer">2</h6>
        </div>
            <h1 className='text-black font-bold pb-4 text-center text-lg' >Wähle deine Lieblingsmarken aus</h1>
            <p className='text-center leading-4'>Wähle aus über 250+ Programmen aus,<br />die du mit deiner Community teilen und<br />bewerben möchtest</p>
         </div>
        
         <div>
            <img className='w-[270px] h-[200px] mb-12' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/6406315ed70b3bc4f4382add_Product%20Graphic%20Step%203-p-500.png" alt="image1" />
            <div className='bg-[#D0F1F0] w-[35px] h-8 rounded-[5px] ml-[135px] mb-4' >
         <h6 className="text-[#6B23AA]  2xl:text-[15px] xl:text-5xl lg:text-3xl pt-2 text-2xl pl-3 text-center sm:text-justify cursor-pointer">3</h6>
        </div>
            <h1 className='text-black font-bold pb-4 text-center text-lg' >Teile & verdiene mit deiner Bio-Seite</h1>
            <p className='text-center leading-4'>Nutze deinen Bio-Link auf deinen<br />Social-Media-Kanälen und bewerbe ihn<br />je nach Belieben</p>
         </div>
      </div>

      </section>
     
    </div>
   )
}

export default Leidenschaft