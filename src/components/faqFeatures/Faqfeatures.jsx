import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import { FaExclamationCircle } from "react-icons/fa";

const Faqfeatures = () => {

useEffect(() => {
    Aos.init({duration: 1000});
}, [])

  return (
    <div className='container mx-auto' >

<h1 className="text-black  2xl:text-center pb-4 font-bold 2xl:text-5xl xl:text-5xl lg:text-3xl text-2xl text-center sm:text-justify">Häufig gestellte Fragen (FAQs)</h1>
    <p className='text-gray-500 text-[16.5px] text-center pb-16' >Fragen und Antworten, die du über unser Produkt und Service wissen solltest.</p>

<section className='w-[900px] ml-[300px]'>
   <div data-aos = "fade-up"  className="collapse collapse-arrow">
   <input type="radio" name="my-accordion-2" /> 
   <div className="collapse-title text-2xl font-medium text-black">
    Welche Vorteile bietet mir cliqe?
   </div>
   <div className="collapse-content pb-10"> 
    <p className='text-lg' >Bei uns stehen du und deine Community im Mittelpunkt. Wir möchten es dir so einfach wie <br />möglich machen deine Lieblingsmarken und Geheimtipps mit deinen Followern zu teilen und <br />für deine Empfehlungen von attraktiven Vergütungen zu profitieren. Mit cliqe erhältst du einen <br />bequemen Zugang zu über 250 Partnerprogrammen bekannter Marken, die du direkt über <br />bequemen Zugang zu über 250 Partnerprogrammen bekannter Marken, die du direkt über</p>
    </div>
   </div>

   <hr data-aos = "fade-up" />

   <div data-aos = "fade-up" className="collapse collapse-arrow">
   <input type="radio" name="my-accordion-2" /> 
   <div className="collapse-title text-2xl font-medium text-black">
    Wie funktioniert cliqe für mich als Content Creator?
   </div>
   <div className="collapse-content pb-10"> 
    <p className='text-lg' >Wir ermöglichen allen Influencern lukrative Partnerschaften mit Marken einzugehen, die bisher <br />häufig größeren Creatorn vorbehalten waren. Mit cliqe kannst du ganz einfach deine eigene <br />Bio-Seite erstellen, deine Lieblingsmarken, die du bewerben möchtest auswählen und deinen <br />Bio-Link auf deinen Social Media-Profilen teilen. Folgt deine Community einer deiner <br />Empfehlungen und meldet sich bei dem Anbieter an oder schließt einen Kauf ab, erhältst du <br />eine Vergütung von dem jeweiligen Partner. Dabei übernehmen wir die Verhandlungen, die <br />Kommunikation und die Verwaltung der Partnerschaften sowie das Reporting und die <br />Auszahlung an dich, so dass du dich in Ruhe auf deine Leidenschaft als Content Creator <br />fokussieren kannst.</p>
    </div>
   </div>

   <hr data-aos = "fade-up"/>

   <div data-aos = "fade-up" className="collapse collapse-arrow">
   <input type="radio" name="my-accordion-2" /> 
   <div className="collapse-title text-2xl font-medium text-black">
    Wie unterscheidet sich cliqe von anderen Link-in-Bio-Anbietern?
   </div>
   <div className="collapse-content pb-10"> 
    <p className='text-lg' >Mit cliqe erhältst du bequem deine persönliche Bio-Seite mit den Lieblingsmarken, die du <br />bewerben möchtest ohne die notwendige Partnerschaften und Ressourcen wie Links, Bilder <br />und Beschreibungen zu den Marken eigenständig auftreiben und einbauen zu müssen. Dies <br />ermöglicht dir als Content Creator schon mit wenigen Empfehlungen attraktive Vergütungen <br />einzunehmen, ohne selbst mühsam Marken zu kontaktieren und Partnerschaften aushandeln <br />zu müssen. Außerdem sind unsere Link-in-Bio-Seiten optisch ansprechender und in der <br />Basisversion kostenlos.</p>
    </div>
   </div>

   <hr data-aos = "fade-up"/>

   <div data-aos = "fade-up" className="collapse collapse-arrow">
   <input type="radio" name="my-accordion-2" /> 
   <div className="collapse-title text-2xl font-medium text-black">
    Wieso muss ich mich für das Angebot von cliqe erst bewerben?
   </div>
   <div className="collapse-content pb-10"> 
    <p className='text-lg' >Um die Qualität unsere Nutzer aufrechtzuerhalten und den Markenauftritt unserer  Partner <br />schützen können, überprüfen wir, ob deine Social Media-Inhalte konform und thematisch <br />relevant sind. Allerdings kannst du in der Zwischenzeit bereits mit der Erstellung und <br />Gestaltung deiner Bio-Seite starten oder unsere Bio-Seiten-Lösung lediglich für die <br />Aggregation von Links und Inhalten nutzen, falls du nicht an Partnerprogrammen von Marken <br />interessiert sein solltest.</p>
    </div>
   </div>

   <hr data-aos = "fade-up"/>

   <div data-aos = "fade-up" className="collapse collapse-arrow">
   <input type="radio" name="my-accordion-2" /> 
   <div className="collapse-title text-2xl font-medium text-black">
    Wie sehe ich wie viele Klicks ich generiert habe?
   </div>
   <div className="collapse-content pb-10"> 
    <p className='text-lg' >In deinem Profil kannst du über das Analytics-Dashboard aufschlussreiche Indikatoren zu <br />deiner Performance verfolgen. Beispielsweise erhältst du Kennzahlen zu Seitenaufrufen, Link- <br />Klicks oder die Anzahl an erfolgreichen Empfehlungen, die du über den jeweiligen Zeitraum <br />erzielt hast.</p>
    </div>
   </div>

   <hr data-aos = "fade-up"/>

   <div data-aos = "fade-up" className="collapse collapse-arrow">
   <input type="radio" name="my-accordion-2" /> 
   <div className="collapse-title text-2xl font-medium text-black">
    Wie funktioniert die Auszahlung über cliqe?
   </div>
   <div className="collapse-content pb-10"> 
    <p className='text-lg' >Nach der Überprüfung von erfolgreichen Leads/Sales durch den Partner und dessen <br />Auszahlung merken wir den Status sowie die Höhe der Provisionen in deinem Profil vor und <br />informieren dich per E-Mail. Wir überweisen jeweils am Anfang des Folgemonats die <br />ausgezahlten Provisionen der Partner für den Vormonat an deine angegebene <br />Bankverbindung.</p>
    </div>
   </div>

   <hr data-aos = "fade-up"/>

   <div data-aos = "fade-up" className="collapse collapse-arrow">
   <input type="radio" name="my-accordion-2" /> 
   <div className="collapse-title text-2xl font-medium text-black">
    Welche Vorteile bietet mir cliqe?
   </div>
   <div className="collapse-content pb-10"> 
    <p className='text-lg' >Bei uns stehen du und deine Community im Mittelpunkt. Wir möchten es dir so einfach wie <br />möglich machen deine Lieblingsmarken und Geheimtipps mit deinen Followern zu teilen und <br />für deine Empfehlungen von attraktiven Vergütungen zu profitieren. Mit cliqe erhältst du einen <br />bequemen Zugang zu über 250 Partnerprogrammen bekannter Marken, die du direkt über <br />bequemen Zugang zu über 250 Partnerprogrammen bekannter Marken, die du direkt über</p>
    </div>
   </div>

   <hr data-aos = "fade-up" />

   <div data-aos = "fade-up" className="collapse collapse-arrow">
   <input type="radio" name="my-accordion-2" /> 
   <div className="collapse-title text-2xl font-medium text-black">
    Muss ich meine Einnahmen versteuern?
   </div>
   <div className="collapse-content pb-10"> 
    <p className='text-lg' >Grundsätzlich musst du Einnahmen als Content Creator, egal ob Einzelunternehmer oder <br />Freiberufler, versteuern. Allerdings gilt bei diesen Einnahmen ein Steuerfreibetrag, der aktuell <br />bei 10.908 Euro liegt. Das bedeutet, dass deine Einkünfte bis zu dieser Grenze steuerfrei sind <br />sowie, dass du dein Einnahmen in einer Steuererklärung erst angeben musst und Steuern <br />fällig werden, wenn du diese Grenze überschreitest. Um auf Nummer Sicher zu gehen, <br />empfiehlt es sich für die genauen Einzelheiten von einem Steuerberater beraten zu lassen.</p>
    </div>
   </div>

   <hr data-aos = "fade-up" />

   <div data-aos = "fade-up" className="collapse collapse-arrow">
   <input type="radio" name="my-accordion-2" /> 
   <div className="collapse-title text-2xl font-medium text-black">
    Benötige ich eine Gewebeanmeldung?
   </div>
   <div className="collapse-content pb-10"> 
    <p className='text-lg' >Content Creator mit dauerhafter Gewinnabsicht, egal ob in Vollzeit oder nebenbei als Hobby, <br />benötigen eine Gewerbeerlaubnis oder müssen ein Gewerbe anmelden. Dies kann man <br />allerdings sehr schnell und unkompliziert per Gang zum örtlichen Gewerbeamt oder teilweise <br />auch online erledigen und kostet in der Regel lediglich 30 bis 40 Euro.</p>
    </div>
   </div>

   <hr data-aos = "fade-up" className='pb-16' />
 
  <div data-aos = "fade-up" className='h-[55px] w-[800px] bg-[#F5F5F5] rounded-[12px] ml-16' >
    
  <p className='pl-[100px] pt-4' >Nicht die gesuchte Antwort auf deine Frage gefunden?<span className='text-blue-400 hover:text-purple-700 font-bold pl-2'>Dann Kontaktiere uns.</span></p>
  <div className='ml-[80px]'><FaExclamationCircle className='mt-[-21px]' /></div>
  </div>

</section>
    
    </div>
  )
}

export default Faqfeatures