import React from 'react'

const Carousel = () => {
  return (
    <div className='container mx-auto bg-[#FAF8FF] h-[750px]' >
    <h1 className="text-black pt-32 pl-[450px] pb-20 font-bold 2xl:text-4xl xl:text-5xl lg:text-3xl text-2xl text-center sm:text-justify">Was unsere Nutzer über cliqe denken</h1>

    <div class="right carousel xl:w-[1350px] lg:w-[700px] sm:w-[500px] w-[350px] gap-10 ml-[120px]">

    <div id="slide01" class="carousel-item relative w-[420px] h-[370px] bg-white rounded-lg overflow-hidden">
      <div class="absolute flex justify-between transform -translate-y-1/2 top-1/2"> 
        <a href="#slide04" class="btn btn-circle text-white bg-white hover:text-[#00BAF2] border
        hover:bg-white hover:border hover:border-[#00BAF2]">❯</a>
      </div>
      <img src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63a9bdb1c73ddfeee5e60d93_Quotes%20Bubble.svg" class="w-16 absolute mt-[30px] ml-[50px]" />
      <h1 class="absolute mt-[125px] ml-[50px] font-bold text-xl">“Mit cliqe kann ich sowohl meinen <br />Content als auch meine <br />Lieblingsmarken teilen”</h1>

      <div className='flex absolute mt-[250px] ml-[50px] gap-[15px]' >

      <img className='w-20' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63acaa905f0e5933e5fd0899_kapitalkoalas%20Logo-p-500.png"/>
      <div>
      <h2 className='font-bold text-black text-lg' >@kapitalkoalas</h2>
      <h3>cliqe.bio/kapitalkoalas</h3>
      <p className='text-gray-500' >Finance Creator</p>
      </div>

      </div>

    </div> 

    <div id="slide02" class="carousel-item relative w-[420px] h-[370px] bg-white rounded-md">
      <img src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63a9bdb1c73ddfeee5e60d93_Quotes%20Bubble.svg" class="w-16 absolute mt-[30px] ml-[50px]" />
      <h1 class="absolute mt-[125px] ml-[50px] font-bold text-xl">"Super einfachere Erstellung einer <br />Bio-Seite in nur wenigen <br />Minuten."</h1>

      <div className='flex absolute mt-[250px] ml-[50px] gap-[15px]' >
        
      <img className='w-20' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/640271cea141a98dbec8b9f4_Sparfoxy%20Profilbild-p-500.png"/>
      <div>
      <h2 className='font-bold text-black text-lg' >@sparfoxy</h2>
      <h3>cliqe.bio/sparfoxy</h3>
      <p className='text-gray-500' >Finance & Lifestyle Creator</p>
      </div>

      </div>
    </div>  

    <div id="slide03" class="carousel-item relative w-[420px] h-[370px] bg-white rounded-md">
      <img src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63a9bdb1c73ddfeee5e60d93_Quotes%20Bubble.svg" class="w-16 absolute mt-[30px] ml-[50px]" />
      <h1 class="absolute mt-[125px] ml-[50px] font-bold text-xl">“Mit cliqe kann ich endlich<br />unkompliziert meine <br />Lieblingsmarken bewerben.”</h1>

      <div className='flex absolute mt-[250px] ml-[50px] gap-[15px]' >
        
      <img className='w-20 rounded-[100px]' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/6402695dfc671828ffd68c32_WhatsApp%20Image%202023-03-02%20at%2015.48.42-p-500.jpeg"/>
      <div>
      <h2 className='font-bold text-black text-lg' >@nicola_louw</h2>
      <h3>cliqe.bio/nicola</h3>
      <p className='text-gray-500' >Travel & Lifestyle Creatorr</p>
      </div>

      </div>
    </div> 

    <div id="slide04" class="carousel-item relative w-[420px] h-[370px] bg-white rounded-lg overflow-hidden">
      <div class="absolute flex justify-between transform -translate-y-1/2  pl-[370px] top-1/2">
        <a href="#slide01" class="btn btn-circle text-white bg-white hover:text-[#00BAF2] border
        hover:bg-white hover:border hover:border-[#00BAF2]">❮</a> 
      </div>
      <img src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63a9bdb1c73ddfeee5e60d93_Quotes%20Bubble.svg" class="w-16 absolute mt-[30px] ml-[50px]" />
      <h1 class="absolute mt-[125px] ml-[50px] font-bold text-xl">“Schnelle und unkomplizierte <br />Kommunikation mit dem Service <br />von cliqe.”</h1>

      <div className='flex absolute mt-[250px] ml-[50px] gap-[15px]' >
        
      <img className='w-20 rounded-[100px]' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/64026ce42d749e625f8b42df_KMF%20Logo-p-500.png"/>
      <div>
      <h2 className='font-bold text-black text-lg' >@kapitalkoalas</h2>
      <h3>cliqe.bio/kapitalkoalas</h3>
      <p className='text-gray-500' >Finance Creator</p>
      </div>

      </div>
    </div>

  </div>
   
        

    </div>
  )
}

export default Carousel