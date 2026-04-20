import { useEffect } from 'react';
import { useLang } from '../i18n/LanguageContext';

const ImpressumPage = () => {
    const { t } = useLang();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-white">
            <div className="relative min-h-[340px] h-[40vh] md:h-[50vh] overflow-hidden">
                <img
                    src="/images/impressum_hero_v2.webp"
                    alt={t({ de: 'Impressum', en: 'Legal Notice' }) as string}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-graphite/40 backdrop-blur-[2px]" />
                <div className="absolute inset-0 flex items-center justify-center pt-20">
                    <div className="text-center text-white px-4">
                        <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">{t({ de: 'Impressum', en: 'Legal Notice' })}</h1>
                        <p className="font-lato text-white/80 tracking-widest uppercase text-sm md:text-base">Gastro Fisch Brač</p>
                    </div>
                </div>
            </div>

            <div className="py-20 px-4 max-w-4xl mx-auto">
                <div className="prose prose-lg max-w-none font-lato text-graphite/80 leading-relaxed space-y-12">
                    <section className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                        <h2 className="font-playfair text-2xl font-semibold text-adria mb-6 border-none">{t({ de: 'Firmeninformationen', en: 'Company Information' })}</h2>
                        <div className="space-y-4">
                            <div>
                                <h3 className="text-sm font-bold uppercase tracking-wider text-graphite/40 mb-1">{t({ de: 'Eigentümer', en: 'Owner' })}</h3>
                                <p className="text-lg font-bold text-graphite">Centaurus GmbH</p>
                                <p>Lindengasse 30/1-4<br />1070 {t({ de: 'Wien, Österreich', en: 'Vienna, Austria' })}</p>
                            </div>

                            <hr className="border-gray-200" />

                            <div>
                                <h3 className="text-sm font-bold uppercase tracking-wider text-graphite/40 mb-1">{t({ de: 'Geschäft', en: 'Shop' })}</h3>
                                <p className="text-lg font-bold text-adria">Gastro Fisch Brač</p>
                                <p>Zollergasse 12<br />1070 {t({ de: 'Wien, Österreich', en: 'Vienna, Austria' })}</p>
                            </div>
                        </div>
                    </section>

                    <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="font-playfair text-xl font-semibold text-graphite mb-4">{t({ de: 'Kontakt', en: 'Contact' })}</h3>
                            <p><strong>{t({ de: 'E-Mail:', en: 'Email:' })}</strong> <a href="mailto:info@gastrofisch.at" className="text-adria hover:underline">info@gastrofisch.at</a></p>
                            <p><strong>{t({ de: 'Telefon:', en: 'Phone:' })}</strong> +43 1 431 4196</p>
                        </div>
                        <div>
                            <h3 className="font-playfair text-xl font-semibold text-graphite mb-4">{t({ de: 'Registerdaten', en: 'Company Registration' })}</h3>
                            <p><strong>{t({ de: 'Firmenbuchnummer:', en: 'Company register no.:' })}</strong> FN 495118s</p>
                            <p><strong>{t({ de: 'UID-Nummer:', en: 'VAT no.:' })}</strong> ATU73523537</p>
                        </div>
                    </section>

                    <section>
                        <h3 className="font-playfair text-xl font-semibold text-graphite mb-4">{t({ de: 'Zugehörigkeiten', en: 'Memberships' })}</h3>
                        <p>{t({ de: 'Mitglied bei Wirtschaftskammer Wien, Sparte Lebensmittelhandel', en: 'Member of the Vienna Chamber of Commerce, food trade division' })}</p>
                    </section>

                    <section className="pt-12 border-t border-gray-100 italic text-sm text-graphite/50">
                        <p>{t({
                            de: 'Hinweis: Die auf dieser Webseite bereitgestellten Informationen wurden sorgfältig geprüft. Dennoch kann keine Haftung für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte übernommen werden.',
                            en: 'Note: The information provided on this website has been carefully reviewed. Nevertheless, no liability can be assumed for the accuracy, completeness or timeliness of the content.'
                        })}</p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default ImpressumPage;
