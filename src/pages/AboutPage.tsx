import { useEffect, useRef, useState } from 'react';
import { PhotoSlider } from '../components/PhotoSlider';

const AboutPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setIsVisible(true); observer.disconnect(); }
    }, { threshold: 0.2 });
    if (heroRef.current) observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  const timeline = [
    { year: '2002', title: 'Die Anfänge', description: 'Ivo Bartulović gründet das Unternehmen Centaurus d.o.o. in Split.' },
    { year: '2004', title: 'Familienzuwachs', description: 'Toni Bartulović kommt ins Unternehmen. Gemeinsam bauen sie den Großhandel aus.' },
    { year: '2008', title: 'Einzelhandel trotz Krise', description: 'Mitten in der globalen Finanzkrise eröffnet der erste Einzelhandel in Split – ein mutiger Schritt, der sich auszahlt.' },
    { year: '2018', title: 'Centaurus GmbH & Wien', description: 'Gründung der Centaurus GmbH gemeinsam mit Milan Prgomet und Expansion nach Wien.' },
    { year: '2019', title: 'Etablierung in Wien', description: 'Gastro Fisch Brač eröffnet am Neubau und schafft die Etablierung trotz Corona Krise.' },
    { year: 'Heute', title: 'Nachhaltiges Wachstum', description: 'Weiterentwicklung zur führenden Premium-Marke für Gastronomie und Privatkunden.' },
  ];


  return (
    <div className="relative">
      <div ref={heroRef} className="relative h-[40vh] md:h-[50vh] overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/images/about_hero_new.webp)' }} />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative z-10 h-full flex items-center justify-center px-4">
          <div className={`text-center max-w-3xl pt-24 md:pt-32 transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <span className="inline-block font-lato text-xs font-semibold tracking-widest uppercase text-white/80 mb-4">Über Uns</span>
            <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">Unsere Geschichte</h1>
            <p className="font-lato text-base sm:text-lg md:text-xl text-white/90">Von der Adria nach Wien – eine Familiengeschichte</p>
          </div>
        </div>
      </div>

      <section className="section-container section-padding bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-graphite mb-6 text-center">Mehr als nur Fisch</h2>
          <div className="space-y-6 font-lato text-graphite/80 leading-relaxed text-base sm:text-lg">
            <p>Im Jahr 2002 legte Ivo Bartulović in Kroatien den Grundstein für sein Unternehmen Centaurus. Was mit nur einem Mitarbeiter, zwei Tiefkühltruhen und einem einzigen Fahrzeug begann, entwickelte sich rasch zu einer Erfolgsgeschichte. Bereits 2004 wurde daraus auch ein echtes Familienunternehmen: Ivos Bruder Toni Bartulović stieg ein und trug entscheidend zur dynamischen Expansion bei. Heute zählt Centaurus über 170 Mitarbeiter und gilt in Dalmatien als Synonym für höchste Standards im Handel mit Fisch und Meeresprodukten.</p>
            <p>Dass diese Qualität auch in Wien auf große Resonanz stoßen würde, erkannte Milan Prgomet frühzeitig. Der Ökonom und langjährige Finanzdirektor des traditionsreichen Fußballclubs Hajduk Split brachte die Idee einer Expansion nach Österreich ins Spiel.</p>
            <p>2019 eröffneten die drei Partner schließlich unter dem Namen „Gastro Fisch Brač" ihre erste Fisch-Boutique im Wiener Bezirk Neubau – und setzten damit den nächsten Meilenstein.</p>
          </div>
        </div>
      </section>



      <section className="section-container section-padding bg-white">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-graphite mb-4">Zusammenarbeit mit Fischern</h2>
          <p className="font-lato text-graphite/70 max-w-2xl mx-auto">Nachhaltigkeit und Handschlagqualität als Fundament unseres Erfolgs.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6 font-lato text-graphite/80 leading-relaxed text-base sm:text-lg">
            <p>Wir arbeiten eng mit über 20 familiengeführten Fischerbetrieben zusammen. Diese langjährigen Partnerschaften basieren auf Vertrauen, fairen Bedingungen und einem gemeinsamen Verständnis für Qualität.</p>
            <p>Durch unsere langfristigen Partnerschaften sind wir für die Fischer zu einem verlässlichen Abnehmer geworden. Gleichzeitig ermöglicht uns diese Nähe zur Herkunft, Frische, Transparenz und Rückverfolgbarkeit unserer Produkte sicherzustellen.</p>
            <ul className="space-y-3 pt-4">
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-adria rounded-full" /><span className="text-graphite font-medium underline decoration-adria/30">Über 20 Partnerboote in der Adria</span></li>
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-adria rounded-full" /><span className="text-graphite font-medium underline decoration-adria/30">Faire Bedingungen für die Fischer</span></li>
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-adria rounded-full" /><span className="text-graphite font-medium underline decoration-adria/30">Transparenz und Rückverfolgbarkeit</span></li>
            </ul>
          </div>
          <div className="rounded-xl overflow-hidden shadow-2xl aspect-video">
            <PhotoSlider images={[
              '/images/about/Fischer.jpg',
              '/images/about/Fischer2.jpg',
              '/images/about/Fischer_Sortieren.jpg',
              '/images/about/Centaurus_Kroatien_Lieferwagen.jpg',
              '/images/about/Centaurus_Produktion_Kroatien.jpeg',
            ]} />
          </div>
        </div>

        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-graphite mb-4">Eigene Produktion: AMARE</h2>
          <p className="font-lato text-graphite/70 max-w-2xl mx-auto">Vom Meer direkt in die Manufaktur.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 rounded-xl overflow-hidden shadow-2xl aspect-video bg-gray-100">
            <video
              className="w-full h-full object-cover"
              controls
              playsInline
              preload="metadata"
              poster="/images/about/ivo.webp"
            >
              <source src="/videos/amare_garnelen.webm" type="video/webm" />
            </video>
          </div>
          <div className="order-1 lg:order-2 space-y-6 font-lato text-graphite/80 leading-relaxed text-base sm:text-lg">
            <p>Eines der ersten Produkte, die das Unternehmen verkaufte: Kroatische Garnelen aus Wildfang. Daraus entwickelte sich die Eigenmarke AMARE. Die Geschichte dahinter erzählt Ivo Bartulović im Video.</p>
          </div>
        </div>
      </section>

      <section className="section-container section-padding bg-gray-50 overflow-hidden">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-graphite mb-4">Unsere Meilensteine</h2>
          <p className="font-lato text-graphite/70">Über 20 Jahre Geschichte</p>
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
