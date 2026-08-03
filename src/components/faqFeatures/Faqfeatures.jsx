import React, { useState, useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import { FaExclamationCircle } from "react-icons/fa";

const faqs = [
  {
    q: 'Welche Vorteile bietet mir cliqe?',
    a: 'Bei uns stehen du und deine Community im Mittelpunkt. Wir möchten es dir so einfach wie möglich machen deine Lieblingsmarken und Geheimtipps mit deinen Followern zu teilen und für deine Empfehlungen von attraktiven Vergütungen zu profitieren. Mit cliqe erhältst du einen bequemen Zugang zu über 250 Partnerprogrammen bekannter Marken, die du direkt über deine Bio-Seite bewerben kannst.',
  },
  {
    q: 'Wie funktioniert cliqe für mich als Content Creator?',
    a: 'Wir ermöglichen allen Influencern lukrative Partnerschaften mit Marken einzugehen, die bisher häufig größeren Creatorn vorbehalten waren. Mit cliqe kannst du ganz einfach deine eigene Bio-Seite erstellen, deine Lieblingsmarken, die du bewerben möchtest auswählen und deinen Bio-Link auf deinen Social Media-Profilen teilen. Folgt deine Community einer deiner Empfehlungen und meldet sich bei dem Anbieter an oder schließt einen Kauf ab, erhältst du eine Vergütung von dem jeweiligen Partner. Dabei übernehmen wir die Verhandlungen, die Kommunikation und die Verwaltung der Partnerschaften sowie das Reporting und die Auszahlung an dich, so dass du dich in Ruhe auf deine Leidenschaft als Content Creator fokussieren kannst.',
  },
  {
    q: 'Wie unterscheidet sich cliqe von anderen Link-in-Bio-Anbietern?',
    a: 'Mit cliqe erhältst du bequem deine persönliche Bio-Seite mit den Lieblingsmarken, die du bewerben möchtest ohne die notwendige Partnerschaften und Ressourcen wie Links, Bilder und Beschreibungen zu den Marken eigenständig auftreiben und einbauen zu müssen. Dies ermöglicht dir als Content Creator schon mit wenigen Empfehlungen attraktive Vergütungen einzunehmen, ohne selbst mühsam Marken zu kontaktieren und Partnerschaften aushandeln zu müssen. Außerdem sind unsere Link-in-Bio-Seiten optisch ansprechender und in der Basisversion kostenlos.',
  },
  {
    q: 'Wieso muss ich mich für das Angebot von cliqe erst bewerben?',
    a: 'Um die Qualität unsere Nutzer aufrechtzuerhalten und den Markenauftritt unserer Partner schützen können, überprüfen wir, ob deine Social Media-Inhalte konform und thematisch relevant sind. Allerdings kannst du in der Zwischenzeit bereits mit der Erstellung und Gestaltung deiner Bio-Seite starten oder unsere Bio-Seiten-Lösung lediglich für die Aggregation von Links und Inhalten nutzen, falls du nicht an Partnerprogrammen von Marken interessiert sein solltest.',
  },
  {
    q: 'Wie sehe ich wie viele Klicks ich generiert habe?',
    a: 'In deinem Profil kannst du über das Analytics-Dashboard aufschlussreiche Indikatoren zu deiner Performance verfolgen. Beispielsweise erhältst du Kennzahlen zu Seitenaufrufen, Link-Klicks oder die Anzahl an erfolgreichen Empfehlungen, die du über den jeweiligen Zeitraum erzielt hast.',
  },
  {
    q: 'Wie funktioniert die Auszahlung über cliqe?',
    a: 'Nach der Überprüfung von erfolgreichen Leads/Sales durch den Partner und dessen Auszahlung merken wir den Status sowie die Höhe der Provisionen in deinem Profil vor und informieren dich per E-Mail. Wir überweisen jeweils am Anfang des Folgemonats die ausgezahlten Provisionen der Partner für den Vormonat an deine angegebene Bankverbindung.',
  },
  {
    q: 'Muss ich meine Einnahmen versteuern?',
    a: 'Grundsätzlich musst du Einnahmen als Content Creator, egal ob Einzelunternehmer oder Freiberufler, versteuern. Allerdings gilt bei diesen Einnahmen ein Steuerfreibetrag, der aktuell bei 10.908 Euro liegt. Das bedeutet, dass deine Einkünfte bis zu dieser Grenze steuerfrei sind sowie, dass du dein Einnahmen in einer Steuererklärung erst angeben musst und Steuern fällig werden, wenn du diese Grenze überschreitest. Um auf Nummer Sicher zu gehen, empfiehlt es sich für die genauen Einzelheiten von einem Steuerberater beraten zu lassen.',
  },
  {
    q: 'Benötige ich eine Gewebeanmeldung?',
    a: 'Content Creator mit dauerhafter Gewinnabsicht, egal ob in Vollzeit oder nebenbei als Hobby, benötigen eine Gewerbeerlaubnis oder müssen ein Gewerbe anmelden. Dies kann man allerdings sehr schnell und unkompliziert per Gang zum örtlichen Gewerbeamt oder teilweise auch online erledigen und kostet in der Regel lediglich 30 bis 40 Euro.',
  },
];

const Faqfeatures = () => {
  const [openIndex, setOpenIndex] = useState(-1);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, [])

  return (
    <div className='w-full'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20'>

        <h1 className="text-black text-center pb-4 font-bold
                       2xl:text-5xl xl:text-5xl lg:text-3xl text-2xl">
          Häufig gestellte Fragen (FAQs)
        </h1>
        <p className='text-gray-500 text-[16.5px] text-center pb-16'>
          Fragen und Antworten, die du über unser Produkt und Service wissen solltest.
        </p>

        <section className='max-w-4xl mx-auto'>

          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={faq.q} data-aos="fade-up" className='border-b border-gray-200'>
                <button type='button'
                        onClick={() => setOpenIndex(isOpen ? -1 : i)}
                        aria-expanded={isOpen}
                        className='w-full flex items-start justify-between gap-4 text-left py-5'>
                  <span className='text-lg sm:text-xl lg:text-2xl font-medium text-black'>
                    {faq.q}
                  </span>
                  <svg className={`w-5 h-5 mt-1.5 flex-shrink-0 text-gray-500 duration-300 ${isOpen ? 'rotate-180' : ''}`}
                       fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <div className={`overflow-hidden transition-[max-height] duration-300 ease-in-out
                                 ${isOpen ? 'max-h-[600px]' : 'max-h-0'}`}>
                  <p className='text-base sm:text-lg text-gray-700 leading-relaxed pb-10 pr-4'>
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}

          
          <div data-aos="fade-up"
               className='bg-[#F5F5F5] rounded-[12px] mt-16 px-5 py-4
                          flex items-center gap-3 flex-wrap justify-center sm:justify-start'>
            <FaExclamationCircle className='flex-shrink-0' />
            <p className='text-sm sm:text-base text-center sm:text-left'>
              Nicht die gesuchte Antwort auf deine Frage gefunden?
              <span className='text-blue-400 hover:text-purple-700 font-bold pl-2 cursor-pointer'>
                Dann Kontaktiere uns.
              </span>
            </p>
          </div>

        </section>
      </div>
    </div>
  )
}

export default Faqfeatures