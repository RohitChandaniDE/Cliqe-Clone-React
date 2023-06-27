import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";

const Creator = () => {

  useEffect(() => {
    Aos.init({duration: 1000});
   }, [])

  return (
    <div className='container mx-auto bg-[#FAF8FF] h-[1000px]' >
    <h1 data-aos = "fade-up" className="text-black pt-20 pl-[450px] font-sans pb-16 font-bold 2xl:text-4xl xl:text-5xl lg:text-3xl text-2xl text-center sm:text-justify">Unsere aktuellen <span className='multicolortext'>Creator</span>  Beiträge</h1>

   <section data-aos = "fade-up" className='flex justify-center gap-[80px]' >

     <main>
     <div className="max-w-[620px] h-[780px] bg-[#FFFFFF] group rounded-xl cursor-pointer">
              <div className="max-w-[620px] h-[550px] mx-auto overflow-hidden rounded-lg">
                  <img src="https://uploads-ssl.webflow.com/638a2cc14cd844ed38b3c011/6405a7bc88055300cecbfcf9_2023_Blog_Visuals.png" alt="stock"
                      className="w-full h-full block group-hover:scale-110 transition-all duration-200" />
              </div>
              <div className='bg-[#F5F5F5] w-[85px] h-10 rounded-[13px] mt-4 ml-7' >
              <h6 className="text-black 2xl:text-[16px] xl:text-5xl lg:text-3xl text-2xl pt-3 pl-4 text-center sm:text-justify cursor-pointer">Trends</h6>
              </div>
              <h1 className='text-black text-xl pl-[130px] mt-[-33px] pb-9' >4 Min.</h1>
              <h1 className='font-bold text-black text-3xl pl-7' >Aufstrebende Creator Trends für 2023</h1>
           
              <div className='flex absolute mt-8 ml-[25px] gap-[15px]' >

              <img className='w-12' src="https://uploads-ssl.webflow.com/638a2cc14cd844ed38b3c011/63e0d986203afb16f5214b99_Yara%20picture%20round-p-500.png"/>
              <div>
              <h2 className='font-bold text-black text-lg' >Yara</h2>
              <p className='text-gray-500' >January 31, 2023</p>
              </div>

             </div>       

          </div>
     </main>

     <main>
      
        <div class="max-w-[480px] h-[380px] bg-white group rounded-xl cursor-pointer mb-[21px]">
              < div class="max-w-[480px] h-[220px] mx-auto overflow-hidden rounded-lg">
                  <img src="https://uploads-ssl.webflow.com/638a2cc14cd844ed38b3c011/6405a80e3c89a493a5979aef_2023_Blog_Visuals%20(3)-p-500.png" alt="stock"
                      class="w-full h-full block group-hover:scale-110 transition-all duration-200" />
                </div>
                <h1 className='font-bold text-black text-2xl pl-7 pt-4' >Die fünf besten Tools für Content <br />Creator</h1>

             

            <div className='flex absolute gap-[15px] ml-[25px] mt-4' >

              <img className='w-12' src="https://uploads-ssl.webflow.com/638a2cc14cd844ed38b3c011/63e0d9934de6ad5eee3d94af_Eliza%20picture%20round-p-500.png"/>
             <div>
             <h2 className='font-bold text-black text-lg' >Eliza</h2>
             <p className='text-gray-500' >21.2.2023</p>
             </div>

            </div>   

            <h1 className='text-black text-xl pl-[300px] mt-7 pb-9' >4 Min.</h1>
            <div className='bg-[#F5F5F5] w-[85px] h-10 rounded-[13px] ml-[360px] mt-[-70px]' >
              <h6 className="text-black 2xl:text-[16px] xl:text-5xl lg:text-3xl text-2xl pt-3 pl-4 text-center sm:text-justify cursor-pointer">How to</h6>
            </div>
        </div>

        <div class="max-w-[480px] h-[380px] bg-white group rounded-xl cursor-pointer">
              < div class="max-w-[480px] h-[220px] mx-auto overflow-hidden rounded-lg">
                  <img src="https://uploads-ssl.webflow.com/638a2cc14cd844ed38b3c011/6405c1b8b618cebbc866796b_Story%20of%20cliqe-p-500.jpg" alt="stock"
                      class="w-full h-full block group-hover:scale-110 transition-all duration-200" />
                </div>
                <h1 className='font-bold text-black text-2xl pl-7 pt-4' >Wie unser Startup cliqe entstand</h1>

             

            <div className='flex absolute gap-[15px] ml-[25px] mt-10' >

              <img className='w-12' src="https://uploads-ssl.webflow.com/638a2cc14cd844ed38b3c011/645b8eed4e7e787cc7b0b5dd_Tie%CC%82n%20Hoodie%20round-p-500.png"/>
             <div>
             <h2 className='font-bold text-black text-lg' >Tien</h2>
             <p className='text-gray-500' >10.2.2023</p>
             </div>

            </div>   

            <h1 className='text-black text-xl pl-[280px] mt-14 pb-9' >4 Min.</h1>
            <div className='bg-[#F5F5F5] w-[105px] h-10 rounded-[13px] ml-[345px] mt-[-70px]' >
              <h6 className="text-black 2xl:text-[16px] xl:text-5xl lg:text-3xl text-2xl pt-3 pl-3 text-center sm:text-justify cursor-pointer">About cliqe</h6>
            </div>

        </div>


     </main>

   </section>

    </div>
  )
}

export default Creator