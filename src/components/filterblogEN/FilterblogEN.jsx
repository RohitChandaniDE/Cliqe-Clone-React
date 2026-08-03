import React, { useState, useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";

export const FilterblogEN = () => {

  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  const cards = [
    {
      id: 1,
      title: '5 best tools to use as a content creator',
      imageSrc: 'https://uploads-ssl.webflow.com/638a2cc14cd844ed38b3c011/6405a80e3c89a493a5979aef_2023_Blog_Visuals%20(3)-p-500.png',
      authorName: 'Eliza',
      authorImageSrc: 'https://uploads-ssl.webflow.com/638a2cc14cd844ed38b3c011/63e0d9934de6ad5eee3d94af_Eliza%20picture%20round-p-500.png',
      date: '21.2.2023',
      link: 'How to',
    },
    {
      id: 2,
      title: 'Creator trends to watch for in 2023',
      imageSrc: 'https://uploads-ssl.webflow.com/638a2cc14cd844ed38b3c011/6405a7bc88055300cecbfcf9_2023_Blog_Visuals.png',
      authorName: 'Yara',
      authorImageSrc: 'https://uploads-ssl.webflow.com/638a2cc14cd844ed38b3c011/63e0d986203afb16f5214b99_Yara%20picture%20round-p-500.png',
      date: '31.1.2023',
      link: 'Trends',
    },
    {
      id: 3,
      title: 'How to monetize your passion with cliqe',
      imageSrc: 'https://uploads-ssl.webflow.com/638a2cc14cd844ed38b3c011/6405a7e7c9d01b93cdc9399b_2023_Blog_Visuals%20(5).png',
      authorName: 'Felippe',
      authorImageSrc: 'https://uploads-ssl.webflow.com/638a2cc14cd844ed38b3c011/645b8ef5e8e019787425acab_Felippe%20Hoodie%20round-p-500.png',
      date: '7.3.2023',
      link: 'Product',
    },
    {
      id: 4,
      title: 'The story behind our startup cliqe',
      imageSrc: 'https://uploads-ssl.webflow.com/638a2cc14cd844ed38b3c011/64999e090bf30d9944595216_Story%20of%20cliqe-p-800.jpg',
      authorName: 'Tien',
      authorImageSrc: 'https://uploads-ssl.webflow.com/638a2cc14cd844ed38b3c011/645b8eed4e7e787cc7b0b5dd_Tie%CC%82n%20Hoodie%20round-p-500.png',
      date: '10.2.2023',
      link: 'About cliqe',
    },
  ];

  const filteredCards = activeButton
    ? cards.filter((card) => card.id === activeButton)
    : cards;

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">

        <h1
          data-aos="fade-up"
          className="text-black font-bold text-center text-2xl sm:text-3xl pb-4"
        >
          Insights & Reflections
        </h1>

        <p
          data-aos="fade-up"
          className="text-gray-500 leading-5 text-[15px] text-center font-medium pb-8"
        >
          Discover about various content creator topics including industry
          <br className="hidden lg:inline" />
          insights, trends, best practices, our product and more!
        </p>

        <div className="mb-10 flex flex-wrap justify-center gap-[10px]">
          <button
            onClick={() => handleButtonClick(0)}
            className="text-black text-md focus:text-white px-3 py-2 rounded-xl bg-[#F5F5F5] focus:bg-[#06D5F7]"
          >
            All
          </button>

          <button
            onClick={() => handleButtonClick(1)}
            className="text-black text-md focus:text-white px-3 py-2 rounded-xl bg-[#F5F5F5] focus:bg-[#06D5F7]"
          >
            How to
          </button>

          <button
            onClick={() => handleButtonClick(2)}
            className="text-black text-md focus:text-white px-3 py-2 rounded-xl bg-[#F5F5F5] focus:bg-[#06D5F7]"
          >
            Trends
          </button>

          <button
            onClick={() => handleButtonClick(3)}
            className="text-black text-md focus:text-white px-3 py-2 rounded-xl bg-[#F5F5F5] focus:bg-[#06D5F7]"
          >
            Product
          </button>

          <button
            onClick={() => handleButtonClick(4)}
            className="text-black text-md focus:text-white px-3 py-2 rounded-xl bg-[#F5F5F5] focus:bg-[#06D5F7]"
          >
            About cliqe
          </button>
        </div>

        <div className="flex flex-wrap justify-center gap-5 mb-16 max-w-6xl mx-auto">
          {filteredCards.map((card) => (
            <div
              key={card.id}
              className="group rounded-xl cursor-pointer flex flex-col
                         w-full sm:w-[calc(50%-0.625rem)] lg:w-[calc(25%-0.9375rem)]"
            >
              <div className="overflow-hidden rounded-lg mb-4">
                <img
                  src={card.imageSrc}
                  alt="stock"
                  className="w-full h-auto block group-hover:scale-110 transition-all duration-200"
                />
              </div>

              <h1 className="font-bold text-black text-[20px] mb-4 flex-1">
                {card.title}
              </h1>

              <div className="flex items-center justify-between gap-3">
                <div className="flex gap-[15px] items-center min-w-0">
                  <img
                    className="w-10 h-10 flex-shrink-0"
                    src={card.authorImageSrc}
                    alt="author"
                  />

                  <div className="min-w-0">
                    <h2 className="font-bold text-black text-sm">
                      {card.authorName}
                    </h2>

                    <p className="text-gray-500 text-sm">
                      {card.date}
                    </p>
                  </div>
                </div>

                <h1 className="text-[#06D5F7] font-bold text-sm whitespace-nowrap">
                  {card.link}
                </h1>
              </div>
            </div>
          ))}
        </div>

        <h2
          data-aos="fade-up"
          className="text-center font-bold text-xl mb-8"
        >
          Featured in:
        </h2>

        <div
          data-aos="fade-up"
          className="flex flex-wrap justify-center items-center gap-6 lg:gap-10"
        >
          <img
            className="w-[120px] lg:w-[160px] h-auto"
            src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/649999d6446ff0504255c35f_Sifted%20Logo-p-500.png"
            alt="Sifted"
          />

          <img
            className="w-[120px] lg:w-[160px] h-auto"
            src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/649999d6628c4483a795aac8_Startup%20Insider%20Logo%20schwarz-p-500.png"
            alt="Startup Insider"
          />

          <img
            className="w-[120px] lg:w-[160px] h-auto"
            src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/64999b3198cd93faa9c602ea_deutsche%20startups%20logo%20neu-p-500.png"
            alt="Deutsche Startups"
          />

          <img
            className="w-[120px] lg:w-[160px] h-auto"
            src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/64999b31355ca807568ca4e9_Startbase-Logo-p-500.png"
            alt="Startbase"
          />
        </div>

      </div>
    </div>
  );
};

export default FilterblogEN;