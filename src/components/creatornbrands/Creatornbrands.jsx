import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import "./Creatornbrands.css"

const Creatornbrands = () => {

useEffect(() => {
    Aos.init({duration: 1000});
}, [])

return (
<div className='container mx-auto h-[500px] bgcbrands' >

<main data-aos = "fade-up" className='ml-[150px] pt-[80px]'>
<div className='mb-4 bg-[#E8E8F8] w-[122px] h-7 rounded-[100px]' >
    <h6 className="text-[#8181FA] 2xl:text-[12px] font-bold xl:text-5xl lg:text-3xl text-2xl pt-2 pl-4 text-center sm:text-justify cursor-pointer">cliqe für Brands</h6>
</div>
<h1 className=" text-white font-bold 2xl:text-5xl xl:text-5xl lg:text-3xl text-2xl text-center sm:text-justify pb-5">Zugang zu <br />authentischen <br /><span className='multicolortextbrands' >Creatorn</span></h1>
<h3 className=' text-gray-100 text-base leading-5 font-bold pb-4' >cliqe verbindet Marken mit authentischen Werbegesichtern <br />und schafft somit für beide Seiten einen Mehrwert.</h3>
<button className="text-[#1919BC] font-bold mt-[10px] 2xl:px-7 lg:px-5 px-3 2xl:py-3 lg:py-2 bg-white 2xl:text-base lg:text-base text-sm rounded-[12px] text-center sm:ml-0
          hover:opacity-90 duration-150" type="button">Kontaktiere uns</button>
</main>

<main>
<img data-aos = "fade-up" className='w-[140px] mt-[-390px] mr-[100px] float-right' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63d901b2d7ee859419ce6cd2_OTTO%203D%20Icon.png" />
<img data-aos = "fade-up" className='w-[140px] mt-[-290px] mr-[300px] float-right' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63d901b2290dd401113f012b_foodspring%203D%20Icon.png" />
<img data-aos = "fade-up" className='w-[140px] mt-[-190px] mr-[500px] float-right' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63d901b2f34469be428df173_Lufthansa%203D%20Icon.png" />
<img data-aos = "fade-up" className='w-[140px] mt-[-90px] mr-[700px] float-right' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63d9020425323b9cb979a027_HelloFresh%203D%20Icon.png"  />
<img data-aos = "fade-up" className='w-[140px] mt-[-190px] mr-[-760px] float-right' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63d901b2ef913286827fb2f9_Thalia%203D%20Icon.png"  />
<img data-aos = "fade-up" className='w-[140px] mt-[-90px] mr-[-560px] float-right' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63d901b2aa3cce77b909f164_Consorsbank%203D%20Icon.png"  />
<img data-aos = "fade-up" className='w-[140px] mr-[-360px] float-right' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63d901b28e897e21d0077f41_ESN%203D%20Icon.png"  />
<img data-aos = "fade-up" className='w-[140px] mr-[-760px] float-right' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63d901b249fdb378f6b016e5_Flaconi%203D%20Icon.png"  />
</main>

    </div>
  )
}

export default Creatornbrands