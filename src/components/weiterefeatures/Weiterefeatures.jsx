import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";

const Weiterefeatures = () => {

useEffect(() => {
 Aos.init({duration: 1000});
}, [])

  return (
    <div className='container mx-auto' >

    <div className='bg-[#DFE8FE] w-[103px] h-9 rounded-[100px] ml-[720px] mt-10 mb-6' >
      <h6 className="text-[#6163B1] 2xl:text-[16px] xl:text-5xl lg:text-3xl text-2xl pt-2.5 pl-5 text-center sm:text-justify cursor-pointer">Features</h6>
    </div>
    <h1 className="text-black font-bold 2xl:text-center 2xl:text-4xl xl:text-5xl lg:text-3xl text-2xl text-center sm:text-justify pb-16">Weitere Features für deine Bio-Seite</h1>

    <section data-aos = "fade-up" className='flex justify-center gap-[100px] mb-[70px]' >
     <div>
     <img className='pb-5 ml-[90px]' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/638a2cc14cd84473aeb3c08b_Sphere.png"/>
     <h1 className='text-black font-bold text-2xl text-center pb-4' >Füge deine Socials <br />hinzu</h1>
     <p className='text-gray-500 text-sm text-center ' >Cross-Traffic zwischen deinen Social <br />Media Kanälen</p>
     </div>

     <div>
     <img className='pb-5 ml-[90px]' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/638a2cc14cd844eb8bb3c093_Helix.png"/>
     <h1 className='text-black font-bold text-2xl text-center pb-4' >Rechtskonforme <br />Bio-Seite</h1>
     <p className='text-gray-500 text-sm text-center ' >Absicherung durch Funktionen für <br />Impressum und Werbekennzeichnung</p>
     </div>

     <div>
     <img className='pb-5 ml-[90px]' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/638a2cc14cd84420beb3c0a5_Icosahedron.png"/>
     <h1 className='text-black font-bold text-2xl text-center pb-4' >Vorteile für deine <br />Community</h1>
     <p className='text-gray-500 text-sm text-center ' >Exklusive Prämien für deine Follower <br />bei vielen Marken</p>
     </div>
    </section>

    <section data-aos = "fade-up" className='flex justify-center gap-[100px] mb-10' >
     <div>
     <img className='pb-5 ml-[90px]' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/638a2cc14cd844816db3c09e_Pyramid%201.png"/>
     <h1 className='text-black font-bold text-2xl text-center pb-4' >Einzelne Werbelinks <br />für Stories & Co.</h1>
     <p className='text-gray-500 text-sm text-center ' >Erhalte zusätzlich einzelne Links, um <br />sie direkt in Stories zu teilen</p>
     </div>

     <div>
     <img className='pb-5 ml-[90px]' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/638a2cc14cd84480cdb3c099_Flat%20Cylinder%202.png"/>
     <h1 className='text-black font-bold text-2xl text-center pb-4' >Trinkgeld &<br />Kaffeespende</h1>
     <p className='text-gray-500 text-sm text-center ' >Als Dankeschön Trinkgeld von deiner<br />Community spenden lassen</p>
     </div>

     <div>
     <img className='pb-5 ml-[90px]' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/638a2cc14cd8440752b3c096_Thorus%20Knot.png"/>
     <h1 className='text-black font-bold text-2xl text-center pb-4' >Performance<br />optimieren</h1>
     <p className='text-gray-500 text-sm text-center ' >Lasse dir Verbesserungsvorschläge <br />durch Analytics geben</p>
     </div>
    </section>

    <h1 data-aos = "fade-up" className="text-black pt-32 2xl:text-center pb-2 font-bold 2xl:text-5xl xl:text-5xl lg:text-3xl text-2xl text-center sm:text-justify">Optimiere deine<span className='pl-3 multicolortext' >Bio-Seite</span></h1>
    <p data-aos = "fade-up" className='text-gray-500 text-[16.5px] text-center' >Instagram, Facebook, Twitter, und LinkedIn — aggregiere deinen Content und <br />teile diesen in nur einem Link auf deinen Social Media Kanälen.</p>

</div>
  )
}

export default Weiterefeatures