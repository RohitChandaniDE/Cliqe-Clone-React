import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";

const Creator = () => {

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, [])

  return (
    <div className='w-full bg-[#FAF8FF]'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24'>

        <h1 data-aos="fade-up"
            className="text-black font-sans pb-12 lg:pb-16 font-bold text-center
                       2xl:text-4xl xl:text-5xl lg:text-3xl text-2xl">
          Unsere aktuellen <span className='multicolortext'>Creator</span> Beiträge
        </h1>

        <section data-aos="fade-up"
                 className='grid grid-cols-1 lg:grid-cols-[620fr_480fr] gap-8 lg:gap-[80px]'>

          <div className="bg-[#FFFFFF] group rounded-xl cursor-pointer overflow-hidden
                          lg:h-[780px] flex flex-col">
            <div className="overflow-hidden rounded-lg lg:h-[550px] flex-shrink-0">
              <img src="https://uploads-ssl.webflow.com/638a2cc14cd844ed38b3c011/6405a7bc88055300cecbfcf9_2023_Blog_Visuals.png"
                   alt="stock"
                   className="w-full h-auto lg:h-full block group-hover:scale-110 transition-all duration-200" />
            </div>

            <div className='p-7 flex-1 min-h-0'>
              <div className='flex items-center gap-4 mb-4'>
                <div className='bg-[#F5F5F5] rounded-[13px] px-4 py-2'>
                  <h6 className="text-black text-base cursor-pointer">Trends</h6>
                </div>
                <h1 className='text-black text-xl'>4 Min.</h1>
              </div>

              <h1 className='font-bold text-black text-2xl sm:text-3xl mb-8'>
                Aufstrebende Creator Trends für 2023
              </h1>

              <div className='flex gap-[15px] items-center'>
                <img className='w-12 h-12 flex-shrink-0' src="https://uploads-ssl.webflow.com/638a2cc14cd844ed38b3c011/63e0d986203afb16f5214b99_Yara%20picture%20round-p-500.png" alt="Yara" />
                <div>
                  <h2 className='font-bold text-black text-lg'>Yara</h2>
                  <p className='text-gray-500'>January 31, 2023</p>
                </div>
              </div>
            </div>
          </div>

          <div className='flex flex-col gap-8 lg:gap-[21px]'>

            <div className="bg-white group rounded-xl cursor-pointer overflow-hidden
                            lg:h-[380px] flex flex-col">
              <div className="overflow-hidden rounded-lg lg:h-[220px] flex-shrink-0">
                <img src="https://uploads-ssl.webflow.com/638a2cc14cd844ed38b3c011/6405a80e3c89a493a5979aef_2023_Blog_Visuals%20(3)-p-500.png"
                     alt="stock"
                     className="w-full h-auto lg:h-full block group-hover:scale-110 transition-all duration-200" />
              </div>

              <div className='p-7 lg:px-7 lg:py-4 flex-1 min-h-0 flex flex-col justify-between'>
                <h1 className='font-bold text-black text-2xl mb-3'>
                  Die fünf besten Tools für Content <br className='hidden lg:inline' />Creator
                </h1>

                <div className='flex items-center justify-between gap-4 flex-wrap'>
                  <div className='flex gap-[15px] items-center'>
                    <img className='w-12 h-12 flex-shrink-0' src="https://uploads-ssl.webflow.com/638a2cc14cd844ed38b3c011/63e0d9934de6ad5eee3d94af_Eliza%20picture%20round-p-500.png" alt="Eliza" />
                    <div>
                      <h2 className='font-bold text-black text-lg'>Eliza</h2>
                      <p className='text-gray-500'>21.2.2023</p>
                    </div>
                  </div>

                  <div className='flex items-center gap-4'>
                    <h1 className='text-black text-xl'>4 Min.</h1>
                    <div className='bg-[#F5F5F5] rounded-[13px] px-4 py-2'>
                      <h6 className="text-black text-base cursor-pointer">How to</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white group rounded-xl cursor-pointer overflow-hidden
                            lg:h-[380px] flex flex-col">
              <div className="overflow-hidden rounded-lg lg:h-[220px] flex-shrink-0">
                <img src="https://uploads-ssl.webflow.com/638a2cc14cd844ed38b3c011/6405c1b8b618cebbc866796b_Story%20of%20cliqe-p-500.jpg"
                     alt="stock"
                     className="w-full h-auto lg:h-full block group-hover:scale-110 transition-all duration-200" />
              </div>

              <div className='p-7 lg:px-7 lg:py-4 flex-1 min-h-0 flex flex-col justify-between'>
                <h1 className='font-bold text-black text-2xl mb-3'>
                  Wie unser Startup cliqe entstand
                </h1>

                <div className='flex items-center justify-between gap-4 flex-wrap'>
                  <div className='flex gap-[15px] items-center'>
                    <img className='w-12 h-12 flex-shrink-0' src="https://uploads-ssl.webflow.com/638a2cc14cd844ed38b3c011/645b8eed4e7e787cc7b0b5dd_Tie%CC%82n%20Hoodie%20round-p-500.png" alt="Tien" />
                    <div>
                      <h2 className='font-bold text-black text-lg'>Tien</h2>
                      <p className='text-gray-500'>10.2.2023</p>
                    </div>
                  </div>

                  <div className='flex items-center gap-4'>
                    <h1 className='text-black text-xl'>4 Min.</h1>
                    <div className='bg-[#F5F5F5] rounded-[13px] px-4 py-2'>
                      <h6 className="text-black text-base cursor-pointer">About cliqe</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </section>
      </div>
    </div>
  )
}

export default Creator