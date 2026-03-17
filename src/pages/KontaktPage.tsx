import { useState } from 'react';
import { MapPin, Clock, Phone, Mail, Send, Check } from 'lucide-react';

const KontaktPage = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });

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
      <div className="relative h-[40vh] md:h-[50vh] overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/images/19.webp)' }} />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative z-10 h-full flex items-center justify-center px-4">
          <div className="text-center max-w-3xl pt-24 md:pt-32">
            <span className="inline-block font-lato text-xs font-semibold tracking-widest uppercase text-white/80 mb-4">Kontakt</span>
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Kontaktieren Sie uns</h1>
            <p className="font-lato text-lg md:text-xl text-white/90">Wir freuen uns auf Ihre Nachricht</p>
          </div>
        </div>
      </div>

      <section className="section-container section-padding bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="space-y-8">
            <div>
              <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-graphite mb-6">Besuchen Sie uns</h2>
              <p className="font-lato text-graphite/70 leading-relaxed">Wir freuen uns, Sie persönlich bei uns begrüßen zu dürfen.</p>
            </div>

            <div className="space-y-4">
              {[
                { icon: MapPin, title: 'Adresse', content: <><p>Gastro Fisch Brač</p><p>Zollergasse 12</p><p>1070 Wien</p></> },
                { icon: Clock, title: 'Öffnungszeiten', content: <><p>Di - Do: 10 - 18 Uhr</p><p>Fr &amp; Sa: 9 - 18 Uhr</p><p className="text-xs opacity-50">So + Mo geschlossen</p><p className="mt-2 font-medium">Bistro: Fr &amp; Sa: 11:30 - 18 Uhr</p><p className="text-xs opacity-70">(Letzte Bestellannahme 17:15 Uhr)</p><a href="https://bookings.zenchef.com/results?rid=381707&pid=1001" target="_blank" rel="noopener noreferrer" className="inline-block mt-2 text-adria hover:underline text-sm font-medium">Zur Reservierung →</a></> },
                { icon: Phone, title: 'Telefon', content: <a href="tel:+4314314196" className="hover:text-adria transition-colors">+43 1 431 4196</a> },
                { icon: Mail, title: 'E-Mail', content: <a href="mailto:info@gastrofisch.at" className="hover:text-adria transition-colors">info@gastrofisch.at</a> },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-5 p-5 glass-card rounded-2xl shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="w-12 h-12 bg-adria/10 rounded-xl flex items-center justify-center flex-shrink-0"><item.icon className="w-6 h-6 text-adria" /></div>
                  <div>
                    <h3 className="font-playfair text-lg font-semibold text-graphite mb-1">{item.title}</h3>
                    <div className="font-lato text-graphite/70">{item.content}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-xl overflow-hidden h-[250px] shadow-lg">
              <iframe
                title="Gastro Fisch Brač Standort"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2659.077!2d16.3487!3d48.2016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d079e93f2849f%3A0x2ed651f7ae0a45c7!2sZollergasse%2012%2C%201070%20Wien%2C%20Austria!5e0!3m2!1sde!2sat!4v1"
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
            <div className="glass-card rounded-2xl p-8 md:p-10 shadow-3xl border-white/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-adria/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
              <h2 className="font-playfair text-2xl md:text-3xl font-semibold text-graphite mb-2">Nachricht senden</h2>
              <p className="font-lato text-graphite/60 mb-8 font-light italic">Wir beraten Sie gerne individuell und unverbindlich.</p>

              {formSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"><Check className="w-8 h-8 text-green-600" /></div>
                  <h3 className="font-playfair text-xl font-semibold text-graphite mb-2">Nachricht gesendet!</h3>
                  <p className="font-lato text-graphite/60">Vielen Dank für Ihre Nachricht. Wir werden uns bald bei Ihnen melden.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block font-lato text-sm font-medium text-graphite mb-2">Name *</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-3 border border-gray-200 rounded-lg font-lato text-graphite focus:outline-none focus:ring-2 focus:ring-adria/20 focus:border-adria transition-colors bg-white" placeholder="Ihr Name" required />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block font-lato text-sm font-medium text-graphite mb-2">E-Mail *</label>
                      <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 border border-gray-200 rounded-lg font-lato text-graphite focus:outline-none focus:ring-2 focus:ring-adria/20 focus:border-adria transition-colors bg-white" placeholder="email@beispiel.at" required />
                    </div>
                    <div>
                      <label className="block font-lato text-sm font-medium text-graphite mb-2">Telefon</label>
                      <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 border border-gray-200 rounded-lg font-lato text-graphite focus:outline-none focus:ring-2 focus:ring-adria/20 focus:border-adria transition-colors bg-white" placeholder="+43 1 431 4196" />
                    </div>
                  </div>
                  <div>
                    <label className="block font-lato text-sm font-medium text-graphite mb-2">Betreff *</label>
                    <select name="subject" value={formData.subject} onChange={handleChange} className="w-full px-4 py-4 border border-gray-200 rounded-lg font-lato text-graphite focus:outline-none focus:ring-2 focus:ring-adria/20 focus:border-adria transition-colors bg-white" required>
                      <option value="">Bitte wählen</option>
                      <option value="einzelhandel">Einzelhandel-Anfrage</option>
                      <option value="grosshandel">Großhandel-Anfrage</option>
                      <option value="bistro">Bistro-Reservierung</option>
                      <option value="sonstiges">Sonstiges</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-lato text-sm font-medium text-graphite mb-2">Nachricht *</label>
                    <textarea name="message" value={formData.message} onChange={handleChange} rows={5} className="w-full px-4 py-3 border border-gray-200 rounded-lg font-lato text-graphite focus:outline-none focus:ring-2 focus:ring-adria/20 focus:border-adria transition-colors bg-white resize-none" placeholder="Ihre Nachricht an uns..." required />
                  </div>
                  <button type="submit" className="w-full btn-primary flex items-center justify-center gap-2"><Send className="w-5 h-5" />Nachricht senden</button>
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
