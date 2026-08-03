import React, { useEffect, useRef } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";

const Counterbrands = () => {

  const count1Ref = useRef(null);
  const count2Ref = useRef(null);
  const count3Ref = useRef(null);

  useEffect(() => {
    const total1 = 88, total2 = 60, total3 = 20;
    let start = null;
    let frame;

    function updateCounters(timestamp) {
      if (!start) start = timestamp;
      const progress = timestamp - start;

      const v1 = Math.min(Math.floor(progress / 40), total1);
      const v2 = Math.min(Math.floor(progress / 58), total2);
      const v3 = Math.min(Math.floor(progress / 167), total3);

      if (count1Ref.current) count1Ref.current.textContent = v1;
      if (count2Ref.current) count2Ref.current.textContent = v2;
      if (count3Ref.current) count3Ref.current.textContent = v3;

      if (v1 < total1 || v2 < total2 || v3 < total3) {
        frame = requestAnimationFrame(updateCounters);
      }
    }

    frame = requestAnimationFrame(updateCounters);
    Aos.init({ duration: 500 });

    return () => cancelAnimationFrame(frame);
  }, []);

  const stats = [
    { ref: count1Ref, label: 'bevorzugen Authentizität',
      body: <>Social Media-Konsumenten schätzen die <br className='hidden lg:inline' />Glaubwürdigkeit von kleineren Influencern</> },
    { ref: count2Ref, label: 'höhere Engagement-Rate',
      body: <>Die Nähe der Micro-Creator zu ihren <br className='hidden lg:inline' />Communities fördert die Interaktion</> },
    { ref: count3Ref, label: 'höhere Conversion-Rate',
      body: <>Die Glaubwürdigkeit und Interaktion fördert die <br className='hidden lg:inline' />Abschlussrate für Brands signifikant</> },
  ];

  return (
    <div className='w-full bg-[#1919BC]'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20'>

        <h1 data-aos="fade-up"
            className="text-white pb-12 font-bold text-center
                       2xl:text-3xl xl:text-5xl lg:text-3xl text-2xl">
          Wieso Brands mit kleineren Creatorn zusammenarbeiten sollten
        </h1>

        <div data-aos="fade-up" className='grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 max-w-5xl mx-auto'>
          {stats.map((s, i) => (
            <div key={i} className='text-center'>
              <p className='text-white font-bold text-5xl mb-4'>
                <span ref={s.ref}></span>
                <span className='text-4xl'>%</span>
              </p>
              <p className='text-[#06D5F7] font-bold mb-2'>{s.label}</p>
              <h3 className='text-white text-[12px] leading-5 font-bold'>{s.body}</h3>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Counterbrands