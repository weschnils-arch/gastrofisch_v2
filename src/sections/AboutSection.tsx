import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setIsVisible(true); observer.disconnect(); }
    }, { threshold: 0.2 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="section-container section-padding bg-gray-50">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div className={`relative overflow-hidden transition-all duration-800 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
          <div className="relative rounded-lg overflow-hidden shadow-xl">
            <img src="/images/about/ivo.webp" alt="Ivo Bartulović - Gründer" className="w-full h-[350px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-deepblue/30 to-transparent" />
          </div>
        </div>
        <div className={`space-y-6 transition-all duration-800 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
          <span className="inline-block font-lato text-xs font-semibold tracking-widest uppercase text-adria">Über Uns</span>
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-semibold text-graphite leading-tight">Von der Adria nach Wien.<br /><span className="text-adria">Eine Erfolgsgeschichte.</span></h2>
          <div className="space-y-4 font-lato text-graphite/80 leading-relaxed">
            <p>Der Grundstein für Gastro Fisch Brač wurde im Jahr 2002 mit der Gründung der Firma Centaurus in Kroatien gelegt. Was als visionärer Ein-Mann-Betrieb begann, entwickelte sich durch unermüdliche Arbeit und ein tief verwurzeltes Verständnis für das Produkt zu einer festen Größe in der dalmatinischen Kulinarik.</p>
            <p>Heute steht hinter diesem Namen ein expandierendes Unternehmen mit über 170 engagierten Mitarbeitern, das für höchste Qualität und Verlässlichkeit steht.</p>
            <p>Nach fast zwei Jahrzehnten Markterfolg in der Heimat war es Zeit für ein neues Kapitel: Den Sprung nach Österreich. Im Jahr 2019 eröffnete schließlich Gastro Fisch Brač die erste exklusive Fisch-Boutique in Wien-Neubau. Damit bringen wir die fangfrische Spitzenqualität der Adria und das dalmatinische Lebensgefühl direkt ins Herz der österreichischen Hauptstadt.</p>
          </div>
          <Link to="/ueber-uns" className="inline-flex items-center gap-2 btn-primary mt-4">Unsere Geschichte im Detail<ArrowRight size={18} /></Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
