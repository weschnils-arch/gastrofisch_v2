import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useLang } from '../i18n/LanguageContext';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { t } = useLang();

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);


  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden">
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="/images/adria_bg.webp"
        >
          <source src="/videos/hero_video.webm" type="video/mp4" />
          <source src="/videos/hero_video.webm" type="video/webm" />
          <img src="/images/adria_bg.webp" alt="Fischerboot auf der Adria" className="w-full h-full object-cover" />
        </video>
      </div>
      <div className="absolute inset-0 hero-overlay" />
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className={`font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight mb-4 sm:mb-6 transition-all duration-800 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Taste the origin.
          </h1>
          <div className={`w-16 sm:w-24 h-0.5 bg-white/50 mx-auto mb-4 sm:mb-6 transition-all duration-600 delay-300 ${isLoaded ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`} />
          <p className={`font-lato text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-8 sm:mb-10 transition-all duration-800 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {t({
              de: <>Der Ursprung zählt — besonders bei Fisch und Meeresfrüchten.<br className="hidden sm:block" />
                Wir liefern erstklassige Qualität.<br className="hidden sm:block" />
                Seit 2002 in Kroatien. Seit 2019 auch in Wien.</>,
              en: <>Origin matters — especially with fish and seafood.<br className="hidden sm:block" />
                We deliver first-class quality.<br className="hidden sm:block" />
                In Croatia since 2002. In Vienna since 2019.</>
            })}
          </p>
        </div>
      </div>
      <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-600 delay-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <div className="animate-bounce-slow">
          <ChevronDown size={32} className="text-white/70" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
