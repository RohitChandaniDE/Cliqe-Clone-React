import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";

const Losung = () => {

useEffect(() => {
  Aos.init({duration: 1000});
}, [])

return (
  <div>

  <main data-aos = "fade-up" className='container mx-auto flex justify-center gap-[20px] pt-[100px] pb-20'>
        
<section className='flex gap-3' >
<div className='bg-[#FEFCF2] w-[50px] h-[50px] rounded-[10px]' >
  <img className='w-[30px] pt-1.5 ml-2.5 mt-1 'src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/638a2cc14cd84468e3b3c09a_Flash_perspective_matte.png"/>
</div>
<div>
  <h2 className='text-black font-bold text-xl pb-3' >Bequem & einfach</h2>
  <p className='text-gray-600 text-sm leading-5'>Erstelle deinen individuellen Bio- <br />Link unkompliziert in nur <br />wenigen Minuten.</p>
</div>
<hr className='rotate-90 w-8 mt-12' />
</section>

<section className='flex gap-3' >
<div className='bg-[#FEF0F7] w-[50px] h-[50px] rounded-[10px]' >
  <img className='w-[30px] pt-1.5 ml-2.5 mt-1'src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/638a2cc14cd844158bb3c09d_Chart_perspective_matte.png"/>
</div>
<div>
  <h2 className='text-black font-bold text-xl pb-3' >Bequem & einfach</h2>
  <p className='text-gray-600 text-sm leading-5'>Erhalte Zugang zu attraktiven <br />Partner-programmen deiner <br />Lieblingsmarken.</p>
</div>
<hr className='rotate-90 w-8 mt-12' />
</section>

<section className='flex gap-3' >
<div className='bg-[#F0FDFE] w-[50px] h-[50px] rounded-[10px]' >
  <img className='w-[30px] pt-1.5 ml-2.5 mt-1 'src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/638a2cc14cd84430c6b3c0a0_Shield_perspective_matte.png"/>
</div>
<div>
  <h2 className='text-black font-bold text-xl pb-3' >Rechtlich konform</h2>
  <p className='text-gray-600 text-sm leading-5'>Funktionen für Impressum und <br />Datenschutz sichern dich <br />rechtlich ab.</p>
</div>
</section>

  </main>

  <main data-aos = "fade-up" className='container mx-auto bg-[#FAFAFA] h-[1650px]' >

  <h1 data-aos = "fade-up" className="text-black pt-20 pl-[490px] text-center font-sans pb-1 font-bold 2xl:text-4xl xl:text-5xl lg:text-3xl text-2xl  sm:text-justify"><span className='multicolortext'>All-in-One-Lösung</span>, um von deinem</h1>
  <h1 data-aos = "fade-up" className='text-black text-center font-sans font-bold text-4xl pb-4' >Content zu profitieren</h1>
  <p  data-aos = "fade-up" className='text-center pl-6 text-gray-600 font-sans text-[16px] pb-16' >Mit cliqe erhältst du nicht nur deine persönliche Bio-Seite, sondern auch die <br />Möglichkeit von deinem Content zu profitieren</p>

  <div data-aos = "fade-up" className='topp flex justify-center gap-[50px]' >

         <section className='bg-white h-[620px] w-[500px] rounded-[25px] mb-16' >
          <img className='w-12 pb-6 pt-10 ml-7' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63f8fdac65e24b5d9479e79a_Bubble%20Icon%20Bio-Site.svg" />
          <h1 className='font-bold text-black text-3xl pb-4 pl-7' >Erstelle deine individuelle <br />Bio-Seite</h1>
          <p className='text-gray-500 leading-6 pb-[40px] text-xl pl-7' >Gestalte deine Bio-Seite nach deinem Geschmack<br />und erhalte deinen personalisierter Bio-Link.</p>
          <div className='h-[300px] w-[440px] bg-[#FFF8F6] ml-[30px] rounded-[15px] border border-orange-100'></div>
          <img className='-mt-[260px] ml-[130px] w-[250px]' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/6406315ee94627873a20d29d_Product%20Graphic%20Step%201.png"/>
          </section>

         <section className='bg-white h-[620px] w-[500px] rounded-[25px]'>
         <img className='w-12 pb-6 pt-10 ml-7' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/638a2cc14cd844b5feb3c053_Filter%202.svg" />
          <h1 className='font-bold text-black text-3xl pb-4 pl-7' >Aggregiere & teile deinen <br />Content</h1>
          <p className='text-gray-500 leading-6 pb-[40px] pl-7 text-xl' >Sammle deine Links, Content & Socials, die du mit<br />deiner Community teilen möchtest.</p>
          <div className='h-[300px] w-[440px] bg-[#FFF9FD] ml-[30px] rounded-[15px] border border-pink-100'></div>
          <img className='-mt-[240px] ml-[115px] w-[250px]' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/6406315ed70b3bc4f4382add_Product%20Graphic%20Step%203.png"/>
         </section>

        </div>

        <div data-aos = "fade-up" className='topp flex justify-center gap-[50px]' >

         <section className='bg-white h-[620px] w-[500px] rounded-[25px] mb-16' >
          <img className='w-12 pb-6 pt-10 ml-7' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63f8fda9468558636fbde343_Bubble%20Icon%20Money.svg" />
          <h1 className='font-bold text-black text-3xl pb-4 pl-7' >Monetarisiere deine Social- <br />Media-Kanäle</h1>
          <p className='text-gray-500 leading-6 pb-[40px] text-xl pl-7' >Erhalte bequem und direkt Zugang zu deinen<br />Lieblingsmarken, die du bewerben möchtest.</p>
          <div className='h-[300px] w-[440px] bg-[#FFF1FB] ml-[30px] rounded-[15px] border border-pink-100'></div>
          <img className='-mt-[260px] ml-[130px] w-[250px]' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/6406308719ea4646b1713be9_Product%20Graphic%20Step%202.png"/>
          </section>

         <section className='bg-white h-[620px] w-[500px] rounded-[25px]'>
         <img className='w-12 pb-6 pt-10 ml-7' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63f8fda8321bc8162538bf2a_Bubble%20Icon%20Analytics%20turquoise.svg" />
          <h1 className='font-bold text-black text-3xl pb-4 pl-7' >Erhalte umfangreiche<br />Analytics</h1>
          <p className='text-gray-500 leading-6 pb-[40px] pl-7 text-xl' >Mit Informationen zu Seitenaufrufe, Link-Klicks<br />und Umsätzen, wertvolle Einblicke bekommen.</p>
          <div className='h-[300px] w-[440px] bg-[#F7FFFB] ml-[30px] rounded-[15px] border border-green-100'></div>
          <img className='-mt-[220px] ml-[125px] w-[250px]' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/638a2cc14cd8448182b3c109_Compare%2520Data%2520Image%25203-p-500.png"/>
          <img className='-mt-[110px] ml-[85px] w-[160px]' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63fa56d155817f6022ff6af1_Feauture%20Analytics%20Graphic%20Number-p-500.png"/>
          <img className='-mt-[82px] ml-[255px] w-[160px]' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63fa56d1284d871d051021e0_Feauture%20Analytics%20Graphic%20Graph-p-500.png"/>
         </section>

        </div>
  </main>

  </div>
)
}

export default Losung