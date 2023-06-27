import React, { useState, useEffect, useRef } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";

export const FilterblogDE = () => {

  const [activeButton, setActiveButton] = useState(null);
 
   const handleButtonClick = (button) => {
      setActiveButton(button);
    };

    const cards = [
        {
          id: 1,
          title: 'Die fünf besten Tools für Content Creator',
          imageSrc: 'https://uploads-ssl.webflow.com/638a2cc14cd844ed38b3c011/6405a80e3c89a493a5979aef_2023_Blog_Visuals%20(3)-p-500.png',
          authorName: 'Eliza',
          authorImageSrc: 'https://uploads-ssl.webflow.com/638a2cc14cd844ed38b3c011/63e0d9934de6ad5eee3d94af_Eliza%20picture%20round-p-500.png',
          date: '21.2.2023',
          link: 'How to'
        },

        {
            id: 2,
            title: 'Aufstrebende Creator Trends für 2023',
            imageSrc: 'https://uploads-ssl.webflow.com/638a2cc14cd844ed38b3c011/6405a7bc88055300cecbfcf9_2023_Blog_Visuals.png',
            authorName: 'Yara',
            authorImageSrc: 'https://uploads-ssl.webflow.com/638a2cc14cd844ed38b3c011/63e0d986203afb16f5214b99_Yara%20picture%20round-p-500.png',
            date: '31.1.2023',
            link: 'Trends'
          },

          {
            id: 3,
            title: 'Wie du deine Passion mit cliqe monetarisieren kannst',
            imageSrc: 'https://uploads-ssl.webflow.com/638a2cc14cd844ed38b3c011/6405a7e7c9d01b93cdc9399b_2023_Blog_Visuals%20(5).png',
            authorName: 'Felippe',
            authorImageSrc: 'https://uploads-ssl.webflow.com/638a2cc14cd844ed38b3c011/645b8ef5e8e019787425acab_Felippe%20Hoodie%20round-p-500.png',
            date: '7.3.2023',
            link: 'Product'
          },

          {
            id: 4,
            title: 'Wie unser Startup cliqe entstand',
            imageSrc: 'https://uploads-ssl.webflow.com/638a2cc14cd844ed38b3c011/64999e090bf30d9944595216_Story%20of%20cliqe-p-800.jpg',
            authorName: 'Tien',
            authorImageSrc: 'https://uploads-ssl.webflow.com/638a2cc14cd844ed38b3c011/645b8eed4e7e787cc7b0b5dd_Tie%CC%82n%20Hoodie%20round-p-500.png',
            date: '10.2.2023',
            link: 'About cliqe'
          }
        ];
    
      const filteredCards = activeButton ? cards.filter((card) => card.id === activeButton) : cards;

  useEffect(() => {
     Aos.init({duration: 1000});
    }, []);

  return (
    <div>
       
        <h1 data-aos = "fade-up" className='text-black font-bold text-center text-3xl pb-4' >Aktuelle Blog Posts</h1>
        <p data-aos = "fade-up" className='text-gray-500 leading-5 text-[15px] text-center font-medium pb-8'>Erfahre mehr zu verschiedenen Content Creator-Themen wie Industrie-<br />Einblicke, Trends, Best Practices, unser Produkt und vieles mehr!</p>

        <div className='mb-10 flex justify-center gap-[10px]' >
        <button onClick={() => handleButtonClick(0)} className='text-black text-md focus:text-white px-3 py-2 rounded-xl bg-[#F5F5F5] focus:bg-[#06D5F7]'>Alle</button>
        <button onClick={() => handleButtonClick(1)} className='text-black text-md focus:text-white px-3 py-2 rounded-xl bg-[#F5F5F5] focus:bg-[#06D5F7]'>How to</button>
        <button onClick={() => handleButtonClick(2)} className='text-black text-md focus:text-white px-3 py-2 rounded-xl bg-[#F5F5F5] focus:bg-[#06D5F7]'>Trends</button>
        <button onClick={() => handleButtonClick(3)} className='text-black text-md focus:text-white px-3 py-2 rounded-xl bg-[#F5F5F5] focus:bg-[#06D5F7]'>Product</button>
        <button onClick={() => handleButtonClick(4)} className='text-black text-md focus:text-white px-3 py-2 rounded-xl bg-[#F5F5F5] focus:bg-[#06D5F7]'>About cliqe</button>
      </div>

      <div className='flex justify-center gap-5 mb-16' >
        {filteredCards.map((card) => (
          <div
            key={card.id}
            className="max-w-[320px] h-[400px] group rounded-xl cursor-pointer mb-[21px]"
          >
            <div className="max-w-[320px] h-[250px] mx-auto overflow-hidden rounded-lg">
              <img
                src={card.imageSrc}
                alt="stock"
                className="w-full h-full block group-hover:scale-110 transition-all duration-200"
              />
            </div>
            <h1 className="font-bold text-black text-[20px] pl-7 pt-4">
              {card.title}
            </h1>

            <div className="flex absolute gap-[15px] ml-[25px] mt-4">
              <img
                className="w-10"
                src={card.authorImageSrc}
                alt="author"
              />
              <div>
                <h2 className="font-bold text-black text-sm">
                  {card.authorName}
                </h2>
                <p className="text-gray-500 text-sm">{card.date}</p>
              </div>
            </div>

            <h1 className="text-[#06D5F7] font-bold text-sm pl-[230px] mt-7 pb-9">
              {card.link}
            </h1>
          </div>
        ))}
      </div>

      {/* Bekannt aus section */}
      
      <h2  data-aos = "fade-up" className='text-center font-bold text-xl mb-8' >Bekannt aus:</h2>
      <div  data-aos = "fade-up" className='flex justify-center gap-10' >
        <img className='w-[160px] h-[40px] mt-2' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/649999d6446ff0504255c35f_Sifted%20Logo-p-500.png" alt="" />
        <img className='w-[160px] h-[60px]' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/649999d6628c4483a795aac8_Startup%20Insider%20Logo%20schwarz-p-500.png" alt="" />
        <img className='w-[160px] h-[60px]' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/64999b3198cd93faa9c602ea_deutsche%20startups%20logo%20neu-p-500.png" alt="" />
        <img className='w-[160px] h-[40px] mt-2' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/64999b31355ca807568ca4e9_Startbase-Logo-p-500.png" alt="" />
      </div>
    

    </div>

  )
}
