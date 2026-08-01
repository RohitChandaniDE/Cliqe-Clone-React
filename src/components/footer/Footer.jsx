import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";

const Footer = () => {

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, [])

  return (
    <div className='w-full'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16'>

        <section data-aos="fade-up"
                 className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8'>

          {/* brand */}
          <div className='text-center lg:text-left'>
            <img className="xl:w-40 xl:h-10 w-28 mb-2 mx-auto lg:mx-0"
                 src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63a1e1ceb4ace16396c01065_cliqe%20logo-p-500.png"
                 alt="logo" />
            <p className='text-[#1919BC] text-[13px] mb-4'>create. connect. collaborate.</p>
            <div className='flex mb-6 gap-[18px] justify-center lg:justify-start'>
              <img src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63a9c1b8d827c54b0b1969a0_Instagram%20Icon.svg" className='w-6 hover:scale-125 duration-200 cursor-pointer' alt="Instagram" />
              <img src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63a9c1be0aa24434af99cddf_Tiktok%20Icon.svg" className='w-6 hover:scale-125 duration-200 cursor-pointer' alt="TikTok" />
              <img src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63a9c1c32e85b39b2594e119_Discord%20Icon.svg" className='w-6 hover:scale-125 duration-200 cursor-pointer' alt="Discord" />
              <img src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63a9c1cd9e32184d8890a730_LinkedIn%20Icon.svg" className='w-6 hover:scale-125 duration-200 cursor-pointer' alt="LinkedIn" />
            </div>
            <p className='text-gray-600 text-sm'>cliqe © 2023 Alle Rechte vorbehalten</p>
          </div>

          {/* link columns — was flex gap-[100px] */}
          <div className='grid grid-cols-2 sm:grid-cols-3 gap-8 lg:gap-[100px]
                          text-center sm:text-left lg:justify-items-end'>

            <div>
              <h1 className='text-black font-bold text-xl pb-3'>Angebot</h1>
              <h1 className='hover:cursor-pointer text-gray-600 hover:text-[#1919BC] text-lg pb-3'>Features</h1>
              <h1 className='hover:cursor-pointer text-gray-600 hover:text-[#1919BC] text-lg pb-3'>Pricing</h1>
              <h1 className='hover:cursor-pointer text-gray-600 hover:text-[#1919BC] text-lg'>Für Brands</h1>
            </div>

            <div>
              <h1 className='text-black font-bold text-xl pb-3'>Unternehmen</h1>
              <h1 className='hover:cursor-pointer text-gray-600 hover:text-[#1919BC] text-lg pb-3'>Über uns</h1>
              <h1 className='hover:cursor-pointer text-gray-600 hover:text-[#1919BC] text-lg pb-3'>Karriere</h1>
              <h1 className='hover:cursor-pointer text-gray-600 hover:text-[#1919BC] text-lg'>FAQs</h1>
            </div>

            <div className='col-span-2 sm:col-span-1'>
              <h1 className='text-black font-bold text-xl pb-3'>Angebot</h1>
              <h1 className='hover:cursor-pointer text-gray-600 hover:text-[#1919BC] text-lg pb-3'>Impressum</h1>
              <h1 className='hover:cursor-pointer text-gray-600 hover:text-[#1919BC] text-lg pb-3'>AGBs</h1>
              <h1 className='hover:cursor-pointer text-gray-600 hover:text-[#1919BC] text-lg'>Datenschutz</h1>
            </div>

          </div>

        </section>
      </div>
    </div>
  )
}

export default Footer