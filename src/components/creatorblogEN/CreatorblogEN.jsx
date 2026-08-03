import React, { useState, useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";

const CreatorblogEN = () => {

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  const scale = isHovered ? 1.1 : 1;

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className='w-full'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>

        <section className='flex flex-col lg:flex-row justify-center items-center
                            mt-10 gap-10 lg:gap-[140px]'>

          <div className='w-full lg:w-auto max-w-xl text-center lg:text-left'>
            <div className='flex items-center gap-4 mb-5 justify-center lg:justify-start'>
              <div className='bg-[#F5F5F5] rounded-[13px] px-4 py-1.5'>
                <h6 className="text-gray-500 text-[12px] cursor-pointer">Product</h6>
              </div>
              <h1 className='text-gray-500 text-sm'>4 Min.</h1>
            </div>

            <h1 className='text-black font-bold text-2xl sm:text-3xl pb-4'>
              How to monetize your <br className='hidden lg:inline' />passion with cliqe
            </h1>
            <p className='text-gray-500 leading-5 text-[15px] font-medium pb-8'>
              At cliqe, not only do we want to help you create, connect,<br className='hidden lg:inline' />
              and collaborate with our large selection of brands, we<br className='hidden lg:inline' />
              strongly believe in helping you monetize your passion.
            </p>
            <button onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
                    className="text-white font-bold px-5 lg:px-7 py-2.5 bg-[#1919BC]
                               duration-200 hover:bg-[#06D5F7] text-sm lg:text-base
                               rounded-[12px] text-center" type="button">
              Read more
            </button>
          </div>

          <div className="w-full lg:w-auto max-w-[450px] group rounded-xl cursor-pointer">
            <div className="overflow-hidden rounded-lg">
              <div className="w-full block group-hover:scale-110 transition-all duration-200">
                <img src="https://uploads-ssl.webflow.com/638a2cc14cd844ed38b3c011/6405a7bc88055300cecbfcf9_2023_Blog_Visuals.png"
                     alt="stock"
                     style={{ transform: `scale(${scale})` }}
                     className="w-full h-auto block transition-all duration-200" />
              </div>
            </div>
          </div>

        </section>

        <section data-aos="fade-up"
                 className='max-w-[900px] mx-auto mt-20 mb-20 rounded-xl border border-gray-200
                            p-5 flex flex-col lg:flex-row lg:items-center gap-6'>

          <div className='flex gap-3 items-center flex-1'>
            <div className='bg-[#FEFCF2] w-[80px] h-[80px] flex-shrink-0 flex items-center justify-center'>
              <img src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/638a2cc14cd8447125b3c046_Frame%205766.svg" alt="" />
            </div>
            <div>
              <h2 className='text-black font-bold text-lg'>Subscribe to newsletter</h2>
              <p className='text-gray-600 text-sm'>Get a round-up of articles about building.</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
            <input type="email" placeholder="Email Address"
                   className="flex-1 min-w-0 px-3 py-2.5 text-sm text-gray-400 rounded-xl
                              border border-gray-200 hover:border-black bg-[#F5F5F5]" />
            <button className="bgcbrands text-white font-bold px-5 lg:px-7 py-2.5 text-sm
                               rounded-xl text-center duration-200 whitespace-nowrap" type="button">
              Subscribe
            </button>
          </div>

        </section>

      </div>
    </div>
  )
}

export default CreatorblogEN