import { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { useLang } from '../i18n/LanguageContext';

const BistroTeaserSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { t } = useLang();

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setIsVisible(true); observer.disconnect(); }
    }, { threshold: 0.3 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full min-h-[60vh] md:min-h-[70vh] overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/images/frisch_auf_den_tisch.webp)' }} />
      <div className="absolute inset-0" style={{ background: 'rgba(29, 69, 137, 0.5)' }} />
      <div className="relative z-10 h-full min-h-[60vh] md:min-h-[70vh] flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className={`text-center max-w-2xl mx-auto transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-6 leading-tight">{t({ de: 'Frisch auf den Tisch.', en: 'Fresh to the table.' })}</h2>
          <div className="w-16 h-0.5 bg-white/50 mx-auto mb-6" />
          <p className="font-lato text-lg md:text-xl text-white/90 leading-relaxed mb-10">{t({ de: 'Besuchen Sie das kleine, feine Bistro und erleben Sie den wahren Geschmack der Adria.', en: 'Visit our small, refined bistro and experience the true taste of the Adriatic.' })}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/Speisekarte_Web.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 btn-white">{t({ de: 'Speisekarte', en: 'Menu' })}<ArrowRight size={18} /></a>
            <a href="https://bookings.zenchef.com/results?rid=381707&pid=1001" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 btn-white">{t({ de: 'Reservieren', en: 'Reserve' })}<ArrowRight size={18} /></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BistroTeaserSection;
