import React, { useEffect, useRef } from 'react';
import "./Counter.css"
import Aos from "aos";
import "aos/dist/aos.css";

export const Counter = () => {

  const count1Ref = useRef(null);
  const count2Ref = useRef(null);
  const count3Ref = useRef(null);

  useEffect(() => {
    const total1 = 100, total2 = 250, total3 = 100;
    let start = null;
    let frame;

    function updateCounters(timestamp) {
      if (!start) start = timestamp;
      const progress = timestamp - start;

      const v1 = Math.min(Math.floor(progress / 50), total1);
      const v2 = Math.min(Math.floor(progress / 20), total2);
      const v3 = Math.min(Math.floor(progress / 50), total3);

      // guard — refs can be null if the component unmounts mid-animation
      if (count1Ref.current) count1Ref.current.textContent = v1;
      if (count2Ref.current) count2Ref.current.textContent = v2;
      if (count3Ref.current) count3Ref.current.textContent = v3;

      if (v1 < total1 || v2 < total2 || v3 < total3) {
        frame = requestAnimationFrame(updateCounters);
      }
    }

    frame = requestAnimationFrame(updateCounters);
    Aos.init({ duration: 1000 });

    return () => cancelAnimationFrame(frame);
  }, []);

  const stats = [
    { ref: count1Ref, suffix: '%', label: 'Kostenlos' },
    { ref: count2Ref, suffix: '+', label: 'Partnerprogramme' },
    { ref: count3Ref, suffix: '+', label: 'Creator' },
  ];

  return (
    <div className='w-full'>
      <div className='max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12 py-16 lg:py-24'>

        <section data-aos="fade-up"
                 className='multicolor rounded-[30px] lg:rounded-[50px] max-w-6xl mx-auto
                            px-6 sm:px-10 py-12 lg:py-16'>

          <h2 className="text-black font-bold text-center leading-tight pb-10 lg:pb-12
                         text-2xl sm:text-3xl lg:text-4xl">
            Du möchtest von deiner <br className='hidden sm:inline' />
            <span className='multicolortext'>Leidenschaft</span> profitieren?
          </h2>

          <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 mb-12'>
            {stats.map(s => (
              <div key={s.label} className='text-center'>
                <p className='text-black font-bold text-4xl lg:text-5xl'>
                  <span ref={s.ref}></span>
                  <span className='text-3xl lg:text-4xl'>{s.suffix}</span>
                </p>
                <p className='text-gray-800 mt-1'>{s.label}</p>
              </div>
            ))}
          </div>

          <div className='text-center'>
            <a href="/signup">
              <button className="btn font-bold text-white px-8 py-3 text-sm sm:text-base
                                 rounded-[10px] hover:opacity-90 duration-150
                                 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1919BC]"
                      type="button">
                Jetzt starten
              </button>
            </a>
          </div>

        </section>
      </div>
    </div>
  )
}