import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";

const items = [
  { img: 'https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/638a2cc14cd84473aeb3c08b_Sphere.png',
    title: <>Füge deine Socials <br className='hidden lg:inline' />hinzu</>,
    body:  <>Cross-Traffic zwischen deinen Social <br className='hidden lg:inline' />Media Kanälen</> },
  { img: 'https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/638a2cc14cd844eb8bb3c093_Helix.png',
    title: <>Rechtskonforme <br className='hidden lg:inline' />Bio-Seite</>,
    body:  <>Absicherung durch Funktionen für <br className='hidden lg:inline' />Impressum und Werbekennzeichnung</> },
  { img: 'https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/638a2cc14cd84420beb3c0a5_Icosahedron.png',
    title: <>Vorteile für deine <br className='hidden lg:inline' />Community</>,
    body:  <>Exklusive Prämien für deine Follower <br className='hidden lg:inline' />bei vielen Marken</> },
  { img: 'https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/638a2cc14cd844816db3c09e_Pyramid%201.png',
    title: <>Einzelne Werbelinks <br className='hidden lg:inline' />für Stories &amp; Co.</>,
    body:  <>Erhalte zusätzlich einzelne Links, um <br className='hidden lg:inline' />sie direkt in Stories zu teilen</> },
  { img: 'https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/638a2cc14cd84480cdb3c099_Flat%20Cylinder%202.png',
    title: <>Trinkgeld &amp; <br className='hidden lg:inline' />Kaffeespende</>,
    body:  <>Als Dankeschön Trinkgeld von deiner <br className='hidden lg:inline' />Community spenden lassen</> },
  { img: 'https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/638a2cc14cd8440752b3c096_Thorus%20Knot.png',
    title: <>Performance <br className='hidden lg:inline' />optimieren</>,
    body:  <>Lasse dir Verbesserungsvorschläge <br className='hidden lg:inline' />durch Analytics geben</> },
]

const Weiterefeatures = () => {

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, [])

  return (
    <div className='w-full'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20'>

        <div className='bg-[#DFE8FE] rounded-[100px] px-5 py-2 mb-6 mx-auto w-fit'>
          <h6 className="text-[#6163B1] text-[16px] cursor-pointer">Features</h6>
        </div>

        <h1 className="text-black font-bold text-center pb-16
                       2xl:text-4xl xl:text-5xl lg:text-3xl text-2xl">
          Weitere Features für deine Bio-Seite
        </h1>

        <section data-aos="fade-up"
                 className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
                            gap-12 lg:gap-x-[100px] lg:gap-y-[70px] mb-10'>
          {items.map((item, i) => (
            <div key={i} className='flex flex-col items-center text-center'>
              <img className='pb-5' src={item.img} alt="" />
              <h1 className='text-black font-bold text-2xl pb-4'>{item.title}</h1>
              <p className='text-gray-500 text-sm'>{item.body}</p>
            </div>
          ))}
        </section>

        <h1 data-aos="fade-up"
            className="text-black text-center pt-20 lg:pt-32 pb-2 font-bold
                       2xl:text-5xl xl:text-5xl lg:text-3xl text-2xl">
          Optimiere deine <span className='multicolortext'>Bio-Seite</span>
        </h1>
        <p data-aos="fade-up" className='text-gray-500 text-[16.5px] text-center'>
          Instagram, Facebook, Twitter, und LinkedIn — aggregiere deinen Content und <br className='hidden lg:inline' />
          teile diesen in nur einem Link auf deinen Social Media Kanälen.
        </p>

      </div>
    </div>
  )
}

export default Weiterefeatures