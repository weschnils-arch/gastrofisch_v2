import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { PhotoSlider } from '../components/PhotoSlider';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';

const EinzelhandelPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setIsVisible(true); observer.disconnect(); }
    }, { threshold: 0.2 });
    if (heroRef.current) observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative">
      <div ref={heroRef} className="relative h-[40vh] md:h-[50vh] overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/images/hero_einzelhandel.png)' }} />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative z-10 h-full flex items-center justify-center px-4">
          <div className={`text-center max-w-3xl pt-24 md:pt-32 transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <span className="inline-block font-lato text-xs font-semibold tracking-widest uppercase text-white/80 mb-4">Einzelhandel</span>
            <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">Fisch-Boutique</h1>
            <p className="font-lato text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto">Erlesener Fisch und Meeresfrüchte für anspruchsvolle Genießer.<br className="hidden sm:block" />Holen Sie sich eine Brise Meeresluft in Ihre Küche.</p>
          </div>
        </div>
      </div>

      <section className="section-container section-padding bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="space-y-6">
            <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-graphite">Das Boutique-Erlebnis</h2>
            <div className="space-y-4 font-lato text-graphite/80 leading-relaxed">
              <p>In unserer Fisch-Boutique in der Zollergasse 12 im Herzen von Wien-Neubau bieten wir Ihnen ein einzigartiges Einkaufserlebnis. Bei uns finden Sie eine sorgfältig ausgewählte Auswahl an frischem Fisch und Meeresfrüchten aus der kroatischen Adria und anderen ausgewählten Regionen.</p>
              <p>Lassen Sie sich von unseren <Link to="/rezepte" className="text-adria hover:underline">Rezepten</Link> inspirieren.</p>
              <p>Unser geschultes Personal berät Sie gerne bei der Auswahl und Zubereitung.</p>
            </div>
            <PhotoSlider images={[
              '/images/retail/photo1.webp',
              '/images/retail/photo2.webp',
              '/images/retail/photo3.webp',
            ]} />
          </div>

          <div className="space-y-8">
            <div className="glass-card rounded-xl border border-adria/10 p-6 md:p-8 bg-adria/5">
              <h3 className="font-playfair text-xl font-semibold text-adria mb-4">Unser Bistro-Tipp</h3>
              <p className="font-lato text-graphite/80 leading-relaxed mb-6">Holen Sie sich eine Brise Meeresluft in Ihre Küche. Unser Bistro ist das perfekte „Lunch Add-On“ zu Ihrem Einkauf – einfach, ehrlich und von höchster Qualität.</p>
              <a
                href="https://bookings.zenchef.com/results?rid=381707&pid=1001"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2 w-full justify-center"
              >
                Tisch reservieren
              </a>
            </div>

            <div className="glass-card rounded-xl p-6 md:p-8 shadow-2xl">
              <h3 className="font-playfair text-xl font-semibold text-graphite mb-6">Kontakt & Öffnungszeiten</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4"><MapPin className="w-5 h-5 text-adria mt-0.5 flex-shrink-0" /><div><p className="font-lato font-medium text-graphite">Gastro Fisch Brač</p><p className="font-lato text-graphite/70">Zollergasse 12</p><p className="font-lato text-graphite/70">1070 Wien</p></div></div>
                <div className="flex items-start gap-4"><Clock className="w-5 h-5 text-adria mt-0.5 flex-shrink-0" /><div><p className="font-lato font-medium text-graphite">Öffnungszeiten</p><p className="font-lato text-graphite/70">Di - Do: 10 bis 18 Uhr</p><p className="font-lato text-graphite/70">Fr & Sa: 9 - 18 Uhr</p></div></div>
                <div className="flex items-center gap-4"><Phone className="w-5 h-5 text-adria flex-shrink-0" /><a href="tel:+4314314196" className="font-lato text-graphite hover:text-adria transition-colors">+43 1 431 4196</a></div>
                <div className="flex items-center gap-4"><Mail className="w-5 h-5 text-adria flex-shrink-0" /><a href="mailto:info@gastrofisch.at" className="font-lato text-graphite hover:text-adria transition-colors">info@gastrofisch.at</a></div>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden h-[250px] shadow-lg">
              <iframe
                title="Gastro Fisch Brač Standort"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2659.077!2d16.3487!3d48.2016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d07be8a42c2cb%3A0xc474eb54e73ad498!2sGastro%20Fisch%20Bra%C4%8D!5e0!3m2!1sde!2sat!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EinzelhandelPage;
