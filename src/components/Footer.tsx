import { Link } from 'react-router-dom';
import { Facebook, Instagram, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useLang } from '../i18n/LanguageContext';

const Footer = () => {
  const { t } = useLang();
  const currentYear = new Date().getFullYear();
  const navLinks = [
    { path: '/', label: t({ de: 'Home', en: 'Home' }) },
    { path: '/einzelhandel', label: t({ de: 'Einzelhandel', en: 'Retail' }) },
    { path: '/grosshandel', label: t({ de: 'Großhandel', en: 'Wholesale' }) },
    { path: '/ueber-uns', label: t({ de: 'Über Uns', en: 'About Us' }) },
    { path: '/rezepte', label: t({ de: 'Rezepte', en: 'Recipes' }) },
    { path: '/kontakt', label: t({ de: 'Kontakt', en: 'Contact' }) },
  ];

  return (
    <footer className="bg-deepblue text-white">
      <div className="section-container py-16 sm:py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12 lg:gap-24">
          <div className="space-y-6">
            <Link to="/" className="inline-block">
              <img src="/images/logo_weiss.svg" alt="Gastro Fisch Brač" className="h-16 w-auto mb-2" />
            </Link>
            <p className="font-playfair text-lg italic text-white/80 leading-relaxed">{t({ de: 'Qualität beginnt beim Ursprung', en: 'Quality begins at the origin' })}</p>
            <p className="text-white/70 text-sm leading-relaxed max-w-xs">{t({ de: 'Ihr Partner für hochwertigen Fisch und Meeresfrüchte. Seit 2002 in Kroatien, seit 2019 auch in Wien.', en: 'Your partner for premium fish and seafood. In Croatia since 2002, in Vienna since 2019.' })}</p>
            <div className="flex items-center gap-4 pt-2">
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass-button flex items-center justify-center hover:scale-110 transition-all duration-300" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="https://www.instagram.com/gastrofischbrac" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass-button flex items-center justify-center hover:scale-110 transition-all duration-300" aria-label="Instagram">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="font-playfair text-lg font-semibold text-white">{t({ de: 'Navigation', en: 'Navigation' })}</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-white/70 hover:text-white transition-colors duration-200 text-sm">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="font-playfair text-lg font-semibold text-white">{t({ de: 'Kontakt', en: 'Contact' })}</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-white/60 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white/90 text-sm">Gastro Fisch Brač</p>
                  <p className="text-white/70 text-sm">Zollergasse 12</p>
                  <p className="text-white/70 text-sm">1070 {t({ de: 'Wien', en: 'Vienna' })}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-white/60 flex-shrink-0" />
                <a href="tel:+4314314196" className="text-white/70 hover:text-white transition-colors duration-200 text-sm">+43 1 431 4196</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-white/60 flex-shrink-0" />
                <a href="mailto:info@gastrofisch.at" className="text-white/70 hover:text-white transition-colors duration-200 text-sm">info@gastrofisch.at</a>
              </div>
              <div className="flex items-start gap-3 pt-2">
                <Clock size={18} className="text-white/60 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white/90 text-sm font-medium">{t({ de: 'Öffnungszeiten', en: 'Opening Hours' })}</p>
                  <p className="text-white/70 text-sm">{t({ de: 'Di - Do: 10 - 18 Uhr', en: 'Tue – Thu: 10 AM – 6 PM' })}</p>
                  <p className="text-white/70 text-sm">{t({ de: 'Fr & Sa: 9 - 18 Uhr', en: 'Fri & Sat: 9 AM – 6 PM' })}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="section-container py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/50">
            <p>© {currentYear} Centaurus GmbH. {t({ de: 'Alle Rechte vorbehalten.', en: 'All rights reserved.' })}</p>
            <div className="flex items-center gap-6">
              <Link to="/impressum" className="hover:text-white transition-colors duration-200">{t({ de: 'Impressum', en: 'Legal Notice' })}</Link>
              <Link to="/datenschutz" className="hover:text-white transition-colors duration-200">{t({ de: 'Datenschutz', en: 'Privacy Policy' })}</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
