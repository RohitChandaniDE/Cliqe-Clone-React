import React from 'react'

const benefits = [
  { icon: 'https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/64073ed5a852f62f1f82a36d_Rounded%20Icon%20Access.svg',
    title: 'Bequemer Zugang',
    body: <>Effizienter Zugang zu einer <br className='hidden lg:inline' />Vielzahl an passenden <br className='hidden lg:inline' />Botschaftern</> },
  { icon: 'https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/64073ed545627c7dbc991202_Rounded%20Icon%20Less%20Effort.svg',
    title: 'Wenig Aufwand',
    body: <>Kein Aufwand für die Suche,<br className='hidden lg:inline' /> Outreach und Verwaltung von<br className='hidden lg:inline' /> Creatorn</> },
  { icon: 'https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/64073ed422d711c19a081f8b_Rounded%20Icon%20Protection.svg',
    title: 'Markenschutz',
    body: <>Überwachung und Schutz bei<br className='hidden lg:inline' /> der Verwendung der Marke <br className='hidden lg:inline' />durch Creator</> },
  { icon: 'https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/64073ed42ae32f51ddedc717_Rounded%20Icon%20No%20RIsk.svg',
    title: 'Kein Vorab-Risiko',
    body: <>Im Gegensatz zu teuren<br className='hidden lg:inline' /> Agenturen, zahlen Brands nur<br className='hidden lg:inline' /> im Erfolgsfall</> },
]

const categories = [
  { title: 'Finanzen & Investments', logos: [
    ['https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63c546cc6e01f3c2216f6508_Trade%20Republic.png', 'w-14'],
    ['https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63c546cfb0342dc574cdf6fb_Scalable%20logo%20cut.png', 'w-20'],
    ['https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63c547746e9aaa1e76c64633_Revolut%20Logo.png', 'w-20'],
  ]},
  { title: 'Reisen & Abenteuer', logos: [
    ['https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63c5b824723cee1fde565d55_HRS%20Logo.png', 'w-14'],
    ['https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63c5b824ba954da996271e72_Lufthansa%20Logo.png', 'w-20'],
    ['https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63c5b8249cccb506e4df241b_Jochen%20Schweizer%20Logo.png', 'w-20'],
  ]},
  { title: 'Fitness & Lifestyle', logos: [
    ['https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63c5b82faddf38803cf0f36f_HelloFresh%20Logo.png', 'w-14'],
    ['https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63c5b82f712921f275bed864_ShareNow%20Logo.png', 'w-20'],
    ['https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63c5b82f1a37647d286dcbe8_ESN%20Logo.png', 'w-20'],
  ]},
  { title: 'Fashion & Shopping', logos: [
    ['https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63c5b83ae660e5c4d0957338_CECIL%20Logo.png', 'w-14'],
    ['https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63c85b978eaf6f0f1663b867_Mac%20Logo.png', 'w-20'],
    ['https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63c5b83a0c6998178d64271d_Snipes%20Logo.png', 'w-20'],
  ]},
  { title: 'Technik & Entertainment', logos: [
    ['https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63c5b849addf3838b2f0f469_GRAVIS%20Logo.png', 'w-14'],
    ['https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63c5b849170704f2a6da1e04_audible%20Logo.png', 'w-20'],
    ['https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63c5b849712bfb27cbd3fe8e_Thalia%20Logo.png', 'w-20'],
  ]},
  { title: 'Sonstiges', logos: [
    ['https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63c5b85a7129217c07bed9b1_Hagebau%20Logo.png', 'w-14'],
    ['https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63c5b85ae9196c0df05b6acd_futterplatz%20Logo.png', 'w-20'],
    ['https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63c5b85a88e0b32e953abea0_OH%20MY!%20Fantasy%20Logo.png', 'w-14'],
  ]},
]

const Vorteilbrands = () => {
  return (
    <div className='w-full bg-[#1919BC]'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24'>

        <div className='flex flex-col lg:flex-row gap-12 lg:gap-16 mb-20'>

          <main data-aos="fade-up" className='w-full lg:w-2/5 min-w-0 text-center lg:text-left'>
            <div className='mb-4 bg-[#E8E8F8] w-[140px] h-7 rounded-[100px] mx-auto lg:mx-0
                            flex items-center justify-center'>
              <h6 className="text-[#8181FA] text-[12px] font-bold cursor-pointer">Vorteile für Brands</h6>
            </div>
            <h1 className="text-white font-bold pb-3 leading-tight
                           2xl:text-3xl xl:text-5xl lg:text-3xl text-2xl">
              Kosteneffizientere <br className='hidden lg:inline' />Abschlüsse erzielen
            </h1>
            <h3 className='text-gray-200 text-sm leading-5 pb-4'>
              Mit cliqe können Marken deutlich <br className='hidden lg:inline' />
              kosteneffizienter Abschlüsse erzielen und ihre <br className='hidden lg:inline' />
              Markenbekanntheit steigern, ohne dass diese viel <br className='hidden lg:inline' />
              Aufwand oder Vorab-Risiko eingehen müssen.
            </h3>
            <button className="text-[#1919BC] font-bold mt-[10px] px-5 lg:px-7 py-2.5 bg-white
                               text-sm lg:text-base rounded-[12px] text-center
                               hover:opacity-90 duration-150" type="button">
              Kontaktiere uns
            </button>
          </main>

          <main data-aos="fade-up" className='w-full lg:w-3/5 min-w-0 grid grid-cols-1 sm:grid-cols-2 gap-5'>
            {benefits.map(b => (
              <div key={b.title} className='border border-white rounded-xl p-5 flex gap-4'>
                <img className='w-10 flex-shrink-0' src={b.icon} alt="" />
                <div>
                  <h1 className="text-white font-bold text-lg pb-2">{b.title}</h1>
                  <h3 className='text-gray-200 text-sm leading-5'>{b.body}</h3>
                </div>
              </div>
            ))}
          </main>

        </div>

        <h1 data-aos="fade-up"
            className="text-white pb-12 font-bold text-center
                       2xl:text-3xl xl:text-5xl lg:text-3xl text-2xl">
          Brands, die uns bereits vertrauen
        </h1>

        <main data-aos="fade-up"
              className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10'>
          {categories.map(cat => (
            <div key={cat.title} className='bg-white rounded-xl py-3 px-4'>
              <h1 className="text-[#1919BC] font-bold text-lg text-center pb-3">{cat.title}</h1>
              <div className='flex justify-center items-center gap-[20px]'>
                {cat.logos.map(([src, w]) => (
                  <img key={src} className={w} src={src} alt="" />
                ))}
              </div>
              <h1 className="text-[#1919BC] font-bold text-[11px] text-center pt-3">...und viele mehr</h1>
            </div>
          ))}
        </main>

      </div>
    </div>
  )
}

export default Vorteilbrands