import { useEffect, useRef, useState } from 'react';
import { PhotoSlider } from '../components/PhotoSlider';
import { useLang } from '../i18n/LanguageContext';

const AboutPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const { t } = useLang();

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setIsVisible(true); observer.disconnect(); }
    }, { threshold: 0.2 });
    if (heroRef.current) observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  const timeline = [
    { year: '2002', title: t({ de: 'Die Anfänge', en: 'The beginnings' }), description: t({ de: 'Ivo Bartulović gründet das Unternehmen Centaurus d.o.o. in Split.', en: 'Ivo Bartulović founds the company Centaurus d.o.o. in Split.' }) },
    { year: '2004', title: t({ de: 'Familienzuwachs', en: 'Family grows' }), description: t({ de: 'Toni Bartulović kommt ins Unternehmen. Gemeinsam bauen sie den Großhandel aus.', en: 'Toni Bartulović joins the company. Together, they expand the wholesale business.' }) },
    { year: '2008', title: t({ de: 'Einzelhandel trotz Krise', en: 'Retail despite the crisis' }), description: t({ de: 'Mitten in der globalen Finanzkrise eröffnet der erste Einzelhandel in Split – ein mutiger Schritt, der sich auszahlt.', en: 'Amid the global financial crisis, the first retail store opens in Split – a bold move that pays off.' }) },
    { year: '2018', title: t({ de: 'Centaurus GmbH & Wien', en: 'Centaurus GmbH & Vienna' }), description: t({ de: 'Gründung der Centaurus GmbH gemeinsam mit Milan Prgomet und Expansion nach Wien.', en: 'Founding of Centaurus GmbH together with Milan Prgomet and expansion to Vienna.' }) },
    { year: '2019', title: t({ de: 'Etablierung in Wien', en: 'Establishing Vienna' }), description: t({ de: 'Gastro Fisch Brač eröffnet am Neubau und schafft die Etablierung trotz Corona Krise.', en: 'Gastro Fisch Brač opens in Neubau and establishes itself despite the Corona crisis.' }) },
    { year: t({ de: 'Heute', en: 'Today' }), title: t({ de: 'Nachhaltiges Wachstum', en: 'Sustainable growth' }), description: t({ de: 'Weiterentwicklung zur führenden Premium-Marke für Gastronomie und Privatkunden.', en: 'Evolving into the leading premium brand for restaurants and private customers.' }) },
  ];

  return (
    <div className="relative">
      <div ref={heroRef} className="relative min-h-[340px] h-[40vh] md:h-[50vh] overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/images/about_hero_new.webp)' }} />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative z-10 h-full flex items-center justify-center px-4">
          <div className={`text-center max-w-3xl pt-24 md:pt-32 transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <span className="inline-block font-lato text-xs font-semibold tracking-widest uppercase text-white/80 mb-4">{t({ de: 'Über Uns', en: 'About Us' })}</span>
            <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">{t({ de: 'Unsere Geschichte', en: 'Our Story' })}</h1>
            <p className="font-lato text-base sm:text-lg md:text-xl text-white/90">{t({ de: 'Von der Adria nach Wien – eine Erfolgsgeschichte.', en: 'From the Adriatic to Vienna – a success story.' })}</p>
          </div>
        </div>
      </div>

      <section className="section-container section-padding bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-graphite mb-6 text-center">{t({ de: 'Mehr als nur Fisch', en: 'More than just fish' })}</h2>
          <div className="space-y-6 font-lato text-graphite/80 leading-relaxed text-base sm:text-lg">
            <p>{t({
              de: 'Im Jahr 2002 legte Ivo Bartulović in Kroatien den Grundstein für sein Unternehmen Centaurus. Was mit nur einem Mitarbeiter, zwei Tiefkühltruhen und einem einzigen Fahrzeug begann, entwickelte sich rasch zu einer Erfolgsgeschichte. Bereits 2004 wurde daraus auch ein echtes Familienunternehmen: Ivos Bruder Toni Bartulović stieg ein und trug entscheidend zur dynamischen Expansion bei. Heute zählt Centaurus über 170 Mitarbeiter und gilt in Dalmatien als Synonym für höchste Standards im Handel mit Fisch und Meeresprodukten.',
              en: 'In 2002, Ivo Bartulović laid the foundation for his company Centaurus in Croatia. What began with just one employee, two freezers and a single vehicle quickly developed into a success story. As early as 2004, it became a true family business: Ivo\'s brother Toni Bartulović joined and contributed decisively to its dynamic expansion. Today, Centaurus counts over 170 employees and is regarded in Dalmatia as synonymous with the highest standards in fish and seafood trade.'
            })}</p>
            <p>{t({
              de: 'Dass diese Qualität auch in Wien auf große Resonanz stoßen würde, erkannte Milan Prgomet frühzeitig. Der Ökonom mit langjähriger Erfahrung in Finanz-Führungspositionen brachte die Idee einer Expansion nach Österreich ins Spiel.',
              en: 'Milan Prgomet recognised early on that this quality would also resonate in Vienna. The economist with many years of experience in financial leadership positions brought the idea of an expansion to Austria into play.'
            })}</p>
            <p>{t({
              de: '2019 eröffneten die drei Partner schließlich unter dem Namen „Gastro Fisch Brač" ihre erste Fisch-Boutique im Wiener Bezirk Neubau – und setzten damit den nächsten Meilenstein.',
              en: 'In 2019, the three partners finally opened their first fish boutique under the name "Gastro Fisch Brač" in Vienna\'s Neubau district – setting the next milestone.'
            })}</p>
          </div>
        </div>
      </section>

      <section className="section-container section-padding bg-white">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-graphite mb-4">{t({ de: 'Zusammenarbeit mit Fischern', en: 'Working with fishermen' })}</h2>
          <p className="font-lato text-graphite/70 max-w-2xl mx-auto">{t({ de: 'Nachhaltigkeit und Handschlagqualität als Fundament unseres Erfolgs.', en: 'Sustainability and handshake quality as the foundation of our success.' })}</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6 font-lato text-graphite/80 leading-relaxed text-base sm:text-lg">
            <p>{t({
              de: 'Wir arbeiten eng mit über 20 familiengeführten Fischerbetrieben zusammen. Diese langjährigen Partnerschaften basieren auf Vertrauen, fairen Bedingungen und einem gemeinsamen Verständnis für Qualität.',
              en: 'We work closely with over 20 family-run fishing operations. These long-standing partnerships are built on trust, fair conditions and a shared understanding of quality.'
            })}</p>
            <p>{t({
              de: 'Durch unsere langfristigen Partnerschaften sind wir für die Fischer zu einem verlässlichen Abnehmer geworden. Gleichzeitig ermöglicht uns diese Nähe zur Herkunft, Frische, Transparenz und Rückverfolgbarkeit unserer Produkte sicherzustellen.',
              en: 'Through our long-term partnerships, we have become a reliable buyer for the fishermen. At the same time, this proximity to origin enables us to guarantee the freshness, transparency and traceability of our products.'
            })}</p>
            <ul className="space-y-3 pt-4">
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-adria rounded-full" /><span className="text-graphite font-medium underline decoration-adria/30">{t({ de: 'Über 20 Partnerboote in der Adria', en: 'Over 20 partner boats in the Adriatic' })}</span></li>
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-adria rounded-full" /><span className="text-graphite font-medium underline decoration-adria/30">{t({ de: 'Faire Bedingungen für die Fischer', en: 'Fair conditions for fishermen' })}</span></li>
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-adria rounded-full" /><span className="text-graphite font-medium underline decoration-adria/30">{t({ de: 'Transparenz und Rückverfolgbarkeit', en: 'Transparency and traceability' })}</span></li>
            </ul>
          </div>
          <PhotoSlider
            orientation="portrait"
            images={[
              { src: '/images/about/Fischer.jpg' },
              { src: '/images/about/Fischer2.jpg' },
              { src: '/images/about/Fischer_Sortieren.jpg' },
              { src: '/images/about/Centaurus_Kroatien_Lieferwagen.jpg' },
              { src: '/images/about/Centaurus_Produktion_Kroatien.jpeg' },
            ]}
          />
        </div>

        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-graphite mb-4">{t({ de: 'Eigene Produktion: AMARE', en: 'Our own production: AMARE' })}</h2>
          <p className="font-lato text-graphite/70 max-w-2xl mx-auto">{t({ de: 'Vom Meer direkt in die Manufaktur.', en: 'From the sea straight to the workshop.' })}</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 rounded-xl overflow-hidden shadow-2xl aspect-video bg-gray-100">
            <video
              className="w-full h-full object-cover"
              controls
              playsInline
              preload="metadata"
              poster="/images/garnelen_wildfang.webp"
            >
              <source src="/videos/amare_garnelen.webm" type="video/webm" />
            </video>
          </div>
          <div className="order-1 lg:order-2 space-y-6 font-lato text-graphite/80 leading-relaxed text-base sm:text-lg">
            <p>{t({
              de: 'Eines der ersten Produkte, die das Unternehmen verkaufte: Kroatische Garnelen aus Wildfang. Daraus entwickelte sich die Eigenmarke AMARE. Die Geschichte dahinter erzählt Ivo Bartulović im Video.',
              en: 'One of the first products the company sold: Croatian wild-caught prawns. From this, the in-house brand AMARE was born. Ivo Bartulović tells the story behind it in the video.'
            })}</p>
          </div>
        </div>
      </section>

      <section className="section-container section-padding bg-gray-50 overflow-hidden">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-graphite mb-4">{t({ de: 'Unsere Meilensteine', en: 'Our milestones' })}</h2>
          <p className="font-lato text-graphite/70">{t({ de: 'Über 20 Jahre Geschichte', en: 'Over 20 years of history' })}</p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-adria/20 md:-translate-x-1/2" />
            <div className="space-y-8 sm:space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`relative flex flex-col md:flex-row items-start md:items-center gap-3 sm:gap-4 md:gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`pl-10 sm:pl-12 md:pl-0 md:text-right ${index % 2 === 1 ? 'md:order-2' : ''} md:w-1/2`}><span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-adria text-white font-playfair font-bold text-sm sm:text-base rounded-lg">{item.year}</span></div>
                  <div className="absolute left-2.5 sm:left-4 md:left-1/2 top-1 md:top-auto w-3 h-3 sm:w-4 sm:h-4 bg-adria rounded-full border-4 border-white shadow md:-translate-x-1/2 z-10" />
                  <div className={`pl-10 sm:pl-12 md:pl-0 md:w-1/2 ${index % 2 === 1 ? 'md:text-right' : ''}`}>
                    <h3 className="font-playfair text-lg sm:text-xl font-semibold text-graphite mb-1 sm:mb-2">{item.title}</h3>
                    <p className="font-lato text-sm sm:text-base text-graphite/70">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
