import React from "react";

const Carousel = () => {
  return (
    <div className="w-full bg-[#FAF8FF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <h1
          className="text-black pb-12 lg:pb-20 font-bold text-center
                       2xl:text-4xl xl:text-5xl lg:text-3xl text-2xl"
        >
          Was unsere Nutzer über cliqe denken
        </h1>

        <div
          className="flex gap-10 overflow-x-auto snap-x snap-mandatory scroll-smooth
                        -mx-4 px-4 sm:mx-0 sm:px-0 pb-4
                        [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          <div
            id="slide01"
            className="snap-start flex-shrink-0 relative
                                       w-[85vw] sm:w-[420px] min-h-[370px]
                                       bg-white rounded-lg overflow-hidden
                                       flex flex-col p-[30px] sm:pl-[50px]"
          >
            <div className="absolute left-0 top-1/2 -translate-y-1/2">
              <a
                href="#slide04"
                className="btn btn-circle text-white bg-white hover:text-[#00BAF2] border
                hover:bg-white hover:border hover:border-[#00BAF2]"
              >
                ❯
              </a>
            </div>
            <img
              src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63a9bdb1c73ddfeee5e60d93_Quotes%20Bubble.svg"
              className="w-16 mb-[31px]"
              alt=""
            />
            <h1 className="font-bold text-xl mb-[41px]">
              “Mit cliqe kann ich sowohl meinen{" "}
              <br className="hidden sm:inline" />
              Content als auch meine <br className="hidden sm:inline" />
              Lieblingsmarken teilen”
            </h1>
            <div className="flex gap-[15px] mt-auto">
              <img
                className="w-20 h-20 flex-shrink-0"
                src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63acaa905f0e5933e5fd0899_kapitalkoalas%20Logo-p-500.png"
                alt="kapitalkoalas"
              />
              <div className="min-w-0">
                <h2 className="font-bold text-black text-lg">@kapitalkoalas</h2>
                <h3 className="truncate">cliqe.bio/kapitalkoalas</h3>
                <p className="text-gray-500">Finance Creator</p>
              </div>
            </div>
          </div>

          <div
            id="slide02"
            className="snap-start flex-shrink-0 relative
                                       w-[85vw] sm:w-[420px] min-h-[370px]
                                       bg-white rounded-md overflow-hidden
                                       flex flex-col p-[30px] sm:pl-[50px]"
          >
            <img
              src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63a9bdb1c73ddfeee5e60d93_Quotes%20Bubble.svg"
              className="w-16 mb-[31px]"
              alt=""
            />
            <h1 className="font-bold text-xl mb-[41px]">
              "Super einfachere Erstellung einer{" "}
              <br className="hidden sm:inline" />
              Bio-Seite in nur wenigen <br className="hidden sm:inline" />
              Minuten."
            </h1>
            <div className="flex gap-[15px] mt-auto">
              <img
                className="w-20 h-20 flex-shrink-0"
                src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/640271cea141a98dbec8b9f4_Sparfoxy%20Profilbild-p-500.png"
                alt="sparfoxy"
              />
              <div className="min-w-0">
                <h2 className="font-bold text-black text-lg">@sparfoxy</h2>
                <h3 className="truncate">cliqe.bio/sparfoxy</h3>
                <p className="text-gray-500">Finance &amp; Lifestyle Creator</p>
              </div>
            </div>
          </div>

          <div
            id="slide03"
            className="snap-start flex-shrink-0 relative
                                       w-[85vw] sm:w-[420px] min-h-[370px]
                                       bg-white rounded-md overflow-hidden
                                       flex flex-col p-[30px] sm:pl-[50px]"
          >
            <img
              src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63a9bdb1c73ddfeee5e60d93_Quotes%20Bubble.svg"
              className="w-16 mb-[31px]"
              alt=""
            />
            <h1 className="font-bold text-xl mb-[41px]">
              “Mit cliqe kann ich endlich <br className="hidden sm:inline" />
              unkompliziert meine <br className="hidden sm:inline" />
              Lieblingsmarken bewerben.”
            </h1>
            <div className="flex gap-[15px] mt-auto">
              <img
                className="w-20 h-20 flex-shrink-0 rounded-[100px]"
                src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/6402695dfc671828ffd68c32_WhatsApp%20Image%202023-03-02%20at%2015.48.42-p-500.jpeg"
                alt="nicola_louw"
              />
              <div className="min-w-0">
                <h2 className="font-bold text-black text-lg">@nicola_louw</h2>
                <h3 className="truncate">cliqe.bio/nicola</h3>
                <p className="text-gray-500">Travel &amp; Lifestyle Creatorr</p>
              </div>
            </div>
          </div>

          <div
            id="slide04"
            className="snap-start flex-shrink-0 relative
                                       w-[85vw] sm:w-[420px] min-h-[370px]
                                       bg-white rounded-lg overflow-hidden
                                       flex flex-col p-[30px] sm:pl-[50px]"
          >
            <div className="absolute right-0 top-1/2 -translate-y-1/2">
              <a
                href="#slide01"
                className="btn btn-circle text-white bg-white hover:text-[#00BAF2] border
                hover:bg-white hover:border hover:border-[#00BAF2]"
              >
                ❮
              </a>
            </div>
            <img
              src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63a9bdb1c73ddfeee5e60d93_Quotes%20Bubble.svg"
              className="w-16 mb-[31px]"
              alt=""
            />
            <h1 className="font-bold text-xl mb-[41px]">
              “Schnelle und unkomplizierte <br className="hidden sm:inline" />
              Kommunikation mit dem Service <br className="hidden sm:inline" />
              von cliqe.”
            </h1>
            <div className="flex gap-[15px] mt-auto">
              <img
                className="w-20 h-20 flex-shrink-0 rounded-[100px]"
                src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/64026ce42d749e625f8b42df_KMF%20Logo-p-500.png"
                alt="kapitalkoalas"
              />
              <div className="min-w-0">
                <h2 className="font-bold text-black text-lg">@kapitalkoalas</h2>
                <h3 className="truncate">cliqe.bio/kapitalkoalas</h3>
                <p className="text-gray-500">Finance Creator</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
