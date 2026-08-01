import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";

const steps = [
  {
    img: 'https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/6406315ee94627873a20d29d_Product%20Graphic%20Step%201-p-500.png',
    badge: 'bg-[#D7F9FF]',
    n: '1',
    title: 'Sicher dir deinen individuellen Link',
    body: 'Sicher dir deinen persönlichen Link und erhalte Zugang zu attraktiven Partnerprogrammen',
  },
  {
    img: 'https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/6406308719ea4646b1713be9_Product%20Graphic%20Step%202-p-500.png',
    badge: 'bg-[#E7E3FF]',
    n: '2',
    title: 'Wähle deine Lieblingsmarken aus',
    body: 'Wähle aus über 250+ Programmen aus, die du mit deiner Community teilen und bewerben möchtest',
  },
  {
    img: 'https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/6406315ed70b3bc4f4382add_Product%20Graphic%20Step%203-p-500.png',
    badge: 'bg-[#D0F1F0]',
    n: '3',
    title: 'Teile & verdiene mit deiner Bio-Seite',
    body: 'Nutze deinen Bio-Link auf deinen Social-Media-Kanälen und bewerbe ihn je nach Belieben',
  },
]

const Leidenschaft = () => {

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, [])

  return (
    <div className='w-full'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24'>

        <h1 data-aos="fade-up"
            className="text-black font-bold text-center leading-tight pb-12 lg:pb-20
                       text-2xl sm:text-3xl lg:text-4xl">
          Teile und profitiere von deiner <span className='multicolortext'>Leidenschaft</span>
        </h1>

        <div data-aos="fade-up"
             className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
                        gap-12 lg:gap-10 xl:gap-16'>

          {steps.map(step => (
            <div key={step.n} className='flex flex-col items-center text-center'>

              <div className='h-[200px] flex items-end justify-center mb-8'>
                <img className='max-h-full w-auto' src={step.img} alt={`Schritt ${step.n}`} />
              </div>

              <div className={`${step.badge} w-9 h-8 rounded-[5px] flex items-center justify-center mb-4`}>
                <span className="text-[#6B23AA] text-[15px] font-medium">{step.n}</span>
              </div>

              <h2 className='text-black font-bold text-lg pb-3'>{step.title}</h2>
              <p className='text-gray-700 leading-relaxed max-w-xs'>{step.body}</p>

            </div>
          ))}

        </div>
      </div>
    </div>
  )
}

export default Leidenschaft