import { useEffect, useRef, useState } from 'react';
import { Check, FileText, Truck, Award, Users, MessageCircle, X, Eye, Download } from 'lucide-react';
import { useLang } from '../i18n/LanguageContext';

const GrosshandelPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showPdfModal, setShowPdfModal] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const { t } = useLang();

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setIsVisible(true); observer.disconnect(); }
    }, { threshold: 0.2 });
    if (heroRef.current) observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  const benefits = [
    { icon: Award, title: t({ de: 'Direktimport aus der Adria', en: 'Direct import from the Adriatic' }), description: t({ de: 'Langjährige Zusammenarbeit mit kroatischen Fischern.', en: 'Long-standing partnerships with Croatian fishermen.' }) },
    { icon: Users, title: t({ de: 'Persönliche Beratung', en: 'Personal consultation' }), description: t({ de: 'Unser Expertenteam steht Ihnen für alle Fragen zur Verfügung.', en: 'Our expert team is available for all your questions.' }) },
    { icon: Truck, title: t({ de: 'Selbstabholung möglich', en: 'Self-collection available' }), description: t({ de: 'In unserem zentral gelegenen Shop in Wien-Neubau können Sie auch direkt vor Ort einkaufen.', en: 'You can also shop directly on-site at our centrally located shop in Vienna-Neubau.' }) },
  ];

  const processSteps = [
    { number: '01', title: t({ de: 'Anfrage stellen', en: 'Make an inquiry' }), description: t({ de: 'Kontaktieren Sie uns per Telefon, E-Mail oder über unser Kontaktformular.', en: 'Contact us by phone, email or via our contact form.' }) },
    { number: '02', title: t({ de: 'Persönliche Beratung', en: 'Personal consultation' }), description: t({ de: 'Wir besprechen Ihre Bedürfnisse und erstellen Ihnen ein individuelles Angebot.', en: 'We discuss your needs and prepare an individual offer for you.' }) },
    { number: '03', title: t({ de: 'Lieferung & Qualitätskontrolle', en: 'Delivery & quality control' }), description: t({ de: 'Termingenaue Lieferung mit garantierter Qualität direkt zu Ihnen oder Abholung in unserem Geschäft.', en: 'On-time delivery with guaranteed quality directly to you, or pickup at our shop.' }) },
  ];

  return (
    <div className="relative">
      <div ref={heroRef} className="relative min-h-[340px] h-[40vh] md:h-[50vh] overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/images/grosshandel.jpg)' }} />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative z-10 h-full flex items-center justify-center px-4">
          <div className={`text-center max-w-3xl pt-24 md:pt-32 transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <span className="inline-block font-lato text-xs font-semibold tracking-widest text-white/80 mb-4">{t({ de: 'Großhandel', en: 'Wholesale' })}</span>
            <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">{t({ de: 'Für die Gastronomie', en: 'For Restaurants' })}</h1>
            <p className="font-lato text-base sm:text-lg md:text-xl text-white/90">{t({ de: 'Verlässliche Qualität und Lieferung für Wiens Restaurants.', en: 'Reliable quality and delivery for Vienna\'s restaurants.' })}</p>
          </div>
        </div>
      </div>

      <section className="section-container section-padding bg-white">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-graphite mb-6">{t({ de: 'Unser Versprechen', en: 'Our promise' })}</h2>
          <p className="font-lato text-graphite/70 leading-relaxed">{t({ de: 'Als verlässlicher Partner der Wiener Gastronomie bieten wir Ihnen nicht nur erstklassige Produkte, sondern einen umfassenden Service.', en: 'As a reliable partner of Vienna\'s gastronomy, we offer you not only first-class products, but a comprehensive service.' })}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="p-6 sm:p-8 glass-card rounded-2xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-14 h-14 bg-adria/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-adria group-hover:text-white transition-all duration-300">
                <benefit.icon className="w-7 h-7 text-adria group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="font-playfair text-xl font-semibold text-graphite mb-3">{benefit.title}</h3>
              <p className="font-lato text-sm text-graphite/70 leading-relaxed font-light">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="h-[40vh] md:h-[60vh] relative overflow-hidden">
        <div
          className="absolute inset-0 bg-fixed bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/tuna_underwater.webp)' }}
        />
        <div className="absolute inset-0 bg-black/20" />
      </section>

      <section className="section-container section-padding bg-gray-50">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-graphite mb-6">{t({ de: 'Produktkatalog', en: 'Product catalogue' })}</h2>
            <p className="font-lato text-graphite/70 leading-relaxed mb-6">{t({ de: 'Stöbern Sie in unserem umfangreichen Katalog.', en: 'Browse through our extensive catalogue.' })}</p>
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3"><Check className="w-5 h-5 text-adria flex-shrink-0" /><span className="font-lato text-graphite">{t({ de: 'Über 100 verschiedene Produkte', en: 'Over 100 different products' })}</span></div>
              <div className="flex items-center gap-3"><Check className="w-5 h-5 text-adria flex-shrink-0" /><span className="font-lato text-graphite">{t({ de: 'Specials aus Kroatien', en: 'Specials from Croatia' })}</span></div>
              <div className="flex items-center gap-3"><Check className="w-5 h-5 text-adria flex-shrink-0" /><span className="font-lato text-graphite">{t({ de: 'Individuelle Angebote', en: 'Individual offers' })}</span></div>
            </div>
            <a
              href="/PDF_ONLINE_katalog_2025.pdf"
              download="Gastro_Fisch_Brac_Katalog_2025.pdf"
              className="inline-flex items-center gap-2 btn-primary"
            >
              <FileText size={18} />
              {t({ de: 'Katalog herunterladen', en: 'Download catalogue' })}
            </a>
          </div>
          <div className="flex justify-center">
            <div
              onClick={() => setShowPdfModal(true)}
              className="group relative block cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-xl shadow-2xl transition-all duration-500 group-hover:shadow-3xl group-hover:-translate-y-2">
                <img
                  src="/images/katalog_cover.webp"
                  alt="Gastro Fisch Brač Produktkatalog 2025"
                  className="w-full max-w-[420px] h-auto object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-adria/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                  <span className="inline-flex items-center gap-2 bg-white text-adria px-6 py-3 rounded-lg font-lato font-bold shadow-lg">
                    <Eye size={18} />
                    {t({ de: 'Vorschau öffnen', en: 'Open preview' })}
                  </span>
                </div>
              </div>
              <div className="mt-4 text-center">
                <p className="font-lato text-sm text-graphite/60">{t({ de: 'Klicken für Vorschau • 48 Seiten', en: 'Click for preview • 48 pages' })}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-container section-padding bg-white">
        <div className="mt-16 text-center">
          <div className="glass-card rounded-2xl p-8 max-w-2xl mx-auto border-adria/10">
            <h3 className="font-playfair text-xl font-semibold text-graphite mb-4">{t({ de: 'Direkter Draht für B2B-Anfragen', en: 'Direct line for B2B inquiries' })}</h3>
            <p className="font-lato text-graphite/70 mb-8">{t({ de: 'Haben Sie Fragen zu Preisen oder Verfügbarkeiten? Kontaktieren Sie uns direkt via WhatsApp Business.', en: 'Questions about prices or availability? Contact us directly via WhatsApp Business.' })}</p>
            <a
              href="https://wa.me/436765404906"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-lg font-lato font-bold hover:bg-[#20ba5a] transition-all duration-300 shadow-lg hover:-translate-y-0.5"
            >
              <MessageCircle size={20} />
              WhatsApp Business
            </a>
          </div>
        </div>
      </section>

      <section className="section-container section-padding bg-gray-50">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-graphite mb-6">{t({ de: 'So funktioniert es', en: 'How it works' })}</h2>
          <p className="font-lato text-graphite/70">{t({ de: 'In drei einfachen Schritten zu Ihrer Lieferung', en: 'Three simple steps to your delivery' })}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {processSteps.map((step, index) => (
            <div key={index} className="relative text-center">
              <div className="w-16 h-16 bg-adria rounded-full flex items-center justify-center mx-auto mb-6"><span className="font-playfair text-xl font-bold text-white">{step.number}</span></div>
              <h3 className="font-playfair text-xl font-semibold text-graphite mb-3">{step.title}</h3>
              <p className="font-lato text-graphite/70 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sticky WhatsApp Button */}
      <div className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-50">
        <a
          href="https://wa.me/436765404906"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-[#25D366] text-white rounded-full shadow-2xl hover:bg-[#20ba5a] transition-all duration-300 hover:scale-110 active:scale-95 group"
          title={t({ de: 'WhatsApp Kontakt', en: 'WhatsApp Contact' }) as string}
        >
          <MessageCircle size={24} className="sm:hidden" />
          <MessageCircle size={28} className="hidden sm:block" />
          <span className="hidden sm:block absolute right-full mr-4 bg-white text-graphite px-4 py-2 rounded-lg text-sm font-bold shadow-xl opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all pointer-events-none whitespace-nowrap border border-gray-100">
            {t({ de: 'Haben Sie Fragen?', en: 'Any questions?' })}
          </span>
        </a>
      </div>

      {/* PDF Modal */}
      {showPdfModal && (
        <div
          className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 md:p-8"
          onClick={() => setShowPdfModal(false)}
        >
          <div
            className="relative w-full max-w-5xl h-[90vh] bg-white rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute top-0 left-0 right-0 z-10 bg-white/95 backdrop-blur-sm border-b border-gray-200 px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between gap-2">
              <div className="min-w-0">
                <h3 className="font-playfair text-base sm:text-xl font-semibold text-graphite truncate">{t({ de: 'Gastro Fisch Brač Katalog 2025', en: 'Gastro Fisch Brač Catalogue 2025' })}</h3>
                <p className="font-lato text-xs sm:text-sm text-graphite/60">{t({ de: '48 Seiten', en: '48 pages' })}</p>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
                <a
                  href="/PDF_ONLINE_katalog_2025.pdf"
                  download="Gastro_Fisch_Brac_Katalog_2025.pdf"
                  className="inline-flex items-center gap-2 bg-adria text-white px-3 sm:px-4 py-2 rounded-lg font-lato font-bold text-sm hover:bg-adria/90 transition-colors"
                >
                  <Download size={16} />
                  <span className="hidden sm:inline">{t({ de: 'Download', en: 'Download' })}</span>
                </a>
                <button
                  onClick={() => setShowPdfModal(false)}
                  className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                >
                  <X size={18} className="text-graphite" />
                </button>
              </div>
            </div>

            <div className="w-full h-full pt-20">
              <iframe
                src="/PDF_ONLINE_katalog_2025.pdf"
                className="w-full h-full"
                title="Gastro Fisch Brač Produktkatalog 2025"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GrosshandelPage;
