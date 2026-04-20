import { useState } from 'react';
import { MapPin, Clock, Phone, Mail, Send, Check } from 'lucide-react';
import { useLang } from '../i18n/LanguageContext';

const KontaktPage = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const { t } = useLang();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="relative">
      <div className="relative min-h-[340px] h-[40vh] md:h-[50vh] overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/images/19.webp)' }} />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative z-10 h-full flex items-center justify-center px-4">
          <div className="text-center max-w-3xl pt-24 md:pt-32">
            <span className="inline-block font-lato text-xs font-semibold tracking-widest uppercase text-white/80 mb-4">{t({ de: 'Kontakt', en: 'Contact' })}</span>
            <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">{t({ de: 'Kontaktieren Sie uns', en: 'Get in touch' })}</h1>
            <p className="font-lato text-base sm:text-lg md:text-xl text-white/90">{t({ de: 'Wir freuen uns auf Ihre Nachricht!', en: 'We look forward to hearing from you!' })}</p>
          </div>
        </div>
      </div>

      <section className="section-container section-padding bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="space-y-8">
            <div>
              <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-graphite mb-6">{t({ de: 'Besuchen Sie uns', en: 'Visit us' })}</h2>
              <p className="font-lato text-graphite/70 leading-relaxed">{t({ de: 'Wir freuen uns, Sie persönlich bei uns begrüßen zu dürfen.', en: 'We look forward to welcoming you in person.' })}</p>
            </div>

            <div className="space-y-4">
              {[
                { icon: MapPin, eyebrow: t({ de: 'Fisch-Boutique', en: 'Fish Boutique' }), title: 'Gastro Fisch Brač', content: <><p>Zollergasse 12</p><p>1070 {t({ de: 'Wien', en: 'Vienna' })}</p></> },
                { icon: MapPin, eyebrow: t({ de: 'Firmensitz', en: 'Registered Office' }), title: 'Centaurus GmbH', content: <><p>Lindengasse 30/1-4</p><p>1070 {t({ de: 'Wien', en: 'Vienna' })}</p></> },
                { icon: Clock, title: t({ de: 'Öffnungszeiten', en: 'Opening Hours' }), content: <><p>{t({ de: 'Di - Do: 10 - 18 Uhr', en: 'Tue – Thu: 10 AM – 6 PM' })}</p><p>{t({ de: 'Fr & Sa: 9 - 18 Uhr', en: 'Fri & Sat: 9 AM – 6 PM' })}</p><p className="text-xs opacity-50">{t({ de: 'So + Mo geschlossen', en: 'Sun + Mon closed' })}</p><p className="mt-2 font-medium">{t({ de: 'Bistro: Fr & Sa: 11:30 - 18 Uhr', en: 'Bistro: Fri & Sat: 11:30 AM – 6 PM' })}</p><p className="text-xs opacity-70">{t({ de: '(Letzte Bestellannahme 17:15 Uhr)', en: '(Last orders 5:15 PM)' })}</p><a href="https://bookings.zenchef.com/results?rid=381707&pid=1001" target="_blank" rel="noopener noreferrer" className="inline-block mt-2 text-adria hover:underline text-sm font-medium">{t({ de: 'Zur Reservierung →', en: 'Reserve a table →' })}</a></> },
                { icon: Phone, title: t({ de: 'Telefon', en: 'Phone' }), content: <a href="tel:+4314314196" className="hover:text-adria transition-colors">+43 1 431 4196</a> },
                { icon: Mail, title: t({ de: 'E-Mail', en: 'Email' }), content: <a href="mailto:info@gastrofisch.at" className="hover:text-adria transition-colors">info@gastrofisch.at</a> },
              ].map((item, i) => {
                const eyebrow = 'eyebrow' in item ? (item as { eyebrow?: React.ReactNode }).eyebrow : undefined;
                return (
                  <div key={i} className="flex items-start gap-5 p-5 glass-card rounded-2xl shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <div className="w-12 h-12 bg-adria/10 rounded-xl flex items-center justify-center flex-shrink-0"><item.icon className="w-6 h-6 text-adria" /></div>
                    <div>
                      {eyebrow && <p className="font-lato text-[10px] font-semibold tracking-[0.2em] uppercase text-graphite/50 mb-1">{eyebrow}</p>}
                      <h3 className="font-playfair text-lg font-semibold text-graphite mb-1">{item.title}</h3>
                      <div className="font-lato text-graphite/70">{item.content}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="rounded-xl overflow-hidden h-[250px] shadow-lg">
              <iframe
                title="Gastro Fisch Brač Standort"
                src="https://maps.google.com/maps?q=Gastro%20Fisch%20Bra%C4%8D%2C%20Zollergasse%2012%2C%201070%20Wien&t=m&z=16&output=embed&iwloc=near"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div>
            <div className="glass-card rounded-2xl p-6 sm:p-8 md:p-10 shadow-3xl border-white/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-adria/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
              <h2 className="font-playfair text-2xl md:text-3xl font-semibold text-graphite mb-2">{t({ de: 'Nachricht senden', en: 'Send a message' })}</h2>
              <p className="font-lato text-graphite/60 mb-8 font-light italic">{t({ de: 'Wir beraten Sie gerne individuell und unverbindlich.', en: 'We are happy to advise you personally and without obligation.' })}</p>

              {formSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"><Check className="w-8 h-8 text-green-600" /></div>
                  <h3 className="font-playfair text-xl font-semibold text-graphite mb-2">{t({ de: 'Nachricht gesendet!', en: 'Message sent!' })}</h3>
                  <p className="font-lato text-graphite/60">{t({ de: 'Vielen Dank für Ihre Nachricht. Wir werden uns bald bei Ihnen melden.', en: 'Thank you for your message. We will get back to you soon.' })}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block font-lato text-sm font-medium text-graphite mb-2">{t({ de: 'Name *', en: 'Name *' })}</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-3 border border-gray-200 rounded-lg font-lato text-graphite focus:outline-none focus:ring-2 focus:ring-adria/20 focus:border-adria transition-colors bg-white" placeholder={t({ de: 'Ihr Name', en: 'Your name' }) as string} required />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block font-lato text-sm font-medium text-graphite mb-2">{t({ de: 'E-Mail *', en: 'Email *' })}</label>
                      <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 border border-gray-200 rounded-lg font-lato text-graphite focus:outline-none focus:ring-2 focus:ring-adria/20 focus:border-adria transition-colors bg-white" placeholder="email@beispiel.at" required />
                    </div>
                    <div>
                      <label className="block font-lato text-sm font-medium text-graphite mb-2">{t({ de: 'Telefon', en: 'Phone' })}</label>
                      <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 border border-gray-200 rounded-lg font-lato text-graphite focus:outline-none focus:ring-2 focus:ring-adria/20 focus:border-adria transition-colors bg-white" placeholder="+43 1 431 4196" />
                    </div>
                  </div>
                  <div>
                    <label className="block font-lato text-sm font-medium text-graphite mb-2">{t({ de: 'Betreff *', en: 'Subject *' })}</label>
                    <select name="subject" value={formData.subject} onChange={handleChange} className="w-full px-4 py-4 border border-gray-200 rounded-lg font-lato text-graphite focus:outline-none focus:ring-2 focus:ring-adria/20 focus:border-adria transition-colors bg-white" required>
                      <option value="">{t({ de: 'Bitte wählen', en: 'Please select' })}</option>
                      <option value="einzelhandel">{t({ de: 'Einzelhandel-Anfrage', en: 'Retail inquiry' })}</option>
                      <option value="grosshandel">{t({ de: 'Großhandel-Anfrage', en: 'Wholesale inquiry' })}</option>
                      <option value="bistro">{t({ de: 'Bistro-Reservierung', en: 'Bistro reservation' })}</option>
                      <option value="sonstiges">{t({ de: 'Sonstiges', en: 'Other' })}</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-lato text-sm font-medium text-graphite mb-2">{t({ de: 'Nachricht *', en: 'Message *' })}</label>
                    <textarea name="message" value={formData.message} onChange={handleChange} rows={5} className="w-full px-4 py-3 border border-gray-200 rounded-lg font-lato text-graphite focus:outline-none focus:ring-2 focus:ring-adria/20 focus:border-adria transition-colors bg-white resize-none" placeholder={t({ de: 'Ihre Nachricht an uns...', en: 'Your message to us...' }) as string} required />
                  </div>
                  <button type="submit" className="w-full btn-primary flex items-center justify-center gap-2"><Send className="w-5 h-5" />{t({ de: 'Nachricht senden', en: 'Send message' })}</button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KontaktPage;
