import React from 'react'

const steps = [
  { img: 'https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/6406315ee94627873a20d29d_Product%20Graphic%20Step%201-p-500.png',
    badge: 'bg-[#D7F9FF]', n: '1',
    body: <>Creator erstellen mit cliqe ihre<br className='hidden lg:inline' /> individuelle Bio-Seite</> },
  { img: 'https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/6406308719ea4646b1713be9_Product%20Graphic%20Step%202-p-500.png',
    badge: 'bg-[#E7E3FF]', n: '2',
    body: <>Creator können passende Marken zu ihrer Bio-<br className='hidden lg:inline' />Seite hinzufügen</> },
  { img: 'https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/6406315ed70b3bc4f4382add_Product%20Graphic%20Step%203-p-500.png',
    badge: 'bg-[#D0F1F0]', n: '3',
    body: <>Creator bewerben die Marke und<br className='hidden lg:inline' /> werden im Erfolgsfall vergütet</> },
]

const Cliqebrands = () => {
  return (
    <div className='w-full'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20'>

        <h1 data-aos="fade-up"
            className="text-black pb-10 font-bold text-center
                       2xl:text-4xl xl:text-5xl lg:text-3xl text-2xl">
          Wie cliqe für Brands funktioniert
        </h1>

        <div data-aos="fade-up"
             className='grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-[50px] max-w-4xl mx-auto'>
          {steps.map(step => (
            <div key={step.n} className='flex flex-col items-center'>
              <img className='w-[200px] h-[170px] mb-6' src={step.img} alt={`Schritt ${step.n}`} />
              <main className='w-full bg-[#1919BC] py-5 px-4 rounded-2xl flex-1'>
                <div className={`${step.badge} w-[35px] h-8 rounded-[5px] mx-auto mb-4
                                 flex items-center justify-center`}>
                  <h6 className="text-[#6B23AA] text-[15px] cursor-pointer">{step.n}</h6>
                </div>
                <p className='text-center text-white text-[12px] leading-4'>{step.body}</p>
              </main>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Cliqebrands