import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLang } from '../i18n/LanguageContext';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { t } = useLang();

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
            <img src="/images/ueber_uns_foto.webp" alt="Gastro Fisch Brač – Über Uns" className="w-full h-[350px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-deepblue/30 to-transparent" />
          </div>
        </div>
        <div className={`space-y-6 transition-all duration-800 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
          <span className="inline-block font-lato text-xs font-semibold tracking-widest uppercase text-adria">{t({ de: 'Über Uns', en: 'About Us' })}</span>
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-semibold text-graphite leading-tight">
            {t({
              de: <>Von der Adria nach Wien.<br /><span className="text-adria">Eine Erfolgsgeschichte.</span></>,
              en: <>From the Adriatic to Vienna.<br /><span className="text-adria">A success story.</span></>
            })}
          </h2>
          <div className="space-y-4 font-lato text-graphite/80 leading-relaxed">
            <p>{t({
              de: 'Der Grundstein für Gastro Fisch Brač wurde im Jahr 2002 mit der Gründung der Firma Centaurus in Kroatien gelegt. Was als visionärer Ein-Mann-Betrieb begann, entwickelte sich durch unermüdliche Arbeit und ein tief verwurzeltes Verständnis für das Produkt zu einer festen Größe in der dalmatinischen Kulinarik.',
              en: 'The foundation for Gastro Fisch Brač was laid in 2002 with the founding of Centaurus in Croatia. What began as a visionary one-man business grew — through tireless work and a deep-rooted understanding of the product — into a fixture of Dalmatian cuisine.'
            })}</p>
            <p>{t({
              de: 'Heute steht hinter diesem Namen ein expandierendes Unternehmen mit über 170 engagierten Mitarbeitern, das für höchste Qualität und Verlässlichkeit steht.',
              en: 'Today, the name stands for an expanding company with more than 170 dedicated employees, synonymous with the highest quality and reliability.'
            })}</p>
            <p>{t({
              de: 'Nach fast zwei Jahrzehnten Markterfolg in der Heimat war es Zeit für ein neues Kapitel: Den Sprung nach Österreich. Im Jahr 2019 eröffnete schließlich Gastro Fisch Brač die erste exklusive Fisch-Boutique in Wien-Neubau. Damit bringen wir die fangfrische Spitzenqualität der Adria und das dalmatinische Lebensgefühl direkt ins Herz der österreichischen Hauptstadt.',
              en: 'After nearly two decades of market success at home, it was time for a new chapter: the leap to Austria. In 2019, Gastro Fisch Brač opened its first exclusive fish boutique in Vienna-Neubau — bringing the freshly-caught premium quality of the Adriatic and the Dalmatian lifestyle straight into the heart of the Austrian capital.'
            })}</p>
          </div>
          <Link to="/ueber-uns" className="inline-flex items-center gap-2 btn-primary mt-4">{t({ de: 'Unsere Geschichte im Detail', en: 'Our story in detail' })}<ArrowRight size={18} /></Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
