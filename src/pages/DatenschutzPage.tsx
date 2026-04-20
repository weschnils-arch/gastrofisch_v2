import { useEffect } from 'react';
import { Shield, Eye } from 'lucide-react';
import { useLang } from '../i18n/LanguageContext';

const DatenschutzPage = () => {
    const { t } = useLang();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const rights = [
        { de: 'Auskunftsrecht (Art. 15)', en: 'Right of access (Art. 15)' },
        { de: 'Recht auf Berichtigung (Art. 16)', en: 'Right to rectification (Art. 16)' },
        { de: 'Recht auf Löschung (Art. 17)', en: 'Right to erasure (Art. 17)' },
        { de: 'Recht auf Einschränkung (Art. 18)', en: 'Right to restriction (Art. 18)' },
        { de: 'Datenübertragbarkeit (Art. 20)', en: 'Data portability (Art. 20)' },
        { de: 'Widerspruchsrecht (Art. 21)', en: 'Right to object (Art. 21)' },
        { de: 'Beschwerderecht (Art. 77)', en: 'Right to lodge a complaint (Art. 77)' },
    ];

    const legalBases = [
        { title: { de: 'Einwilligung', en: 'Consent' }, art: 'Art. 6 (1) (a)', desc: { de: 'Sie haben uns Ihre Einwilligung gegeben.', en: 'You have given us your consent.' } },
        { title: { de: 'Vertrag', en: 'Contract' }, art: 'Art. 6 (1) (b)', desc: { de: 'Zur Erfüllung eines Vertrags notwendig.', en: 'Necessary for the performance of a contract.' } },
        { title: { de: 'Rechtliche Verpflichtung', en: 'Legal obligation' }, art: 'Art. 6 (1) (c)', desc: { de: 'Gesetzliche Pflicht zur Speicherung.', en: 'Legal obligation to store data.' } },
        { title: { de: 'Berechtigte Interessen', en: 'Legitimate interests' }, art: 'Art. 6 (1) (f)', desc: { de: 'Sicherheit und wirtschaftlicher Betrieb.', en: 'Security and economic operation.' } },
    ];

    return (
        <div className="bg-white">
            <div className="relative min-h-[340px] h-[40vh] md:h-[50vh] overflow-hidden">
                <img
                    src="/images/datenschutz_sea_urchin.webp"
                    alt={t({ de: 'Datenschutz', en: 'Privacy Policy' }) as string}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-graphite/40 backdrop-blur-[2px]" />
                <div className="absolute inset-0 flex items-center justify-center pt-20">
                    <div className="text-center text-white px-4">
                        <h1 className="font-playfair text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-4">{t({ de: 'Datenschutzerklärung', en: 'Privacy Policy' })}</h1>
                        <p className="font-lato text-white/80 tracking-widest uppercase text-sm md:text-base">Gastro Fisch Brač</p>
                    </div>
                </div>
            </div>

            <div className="py-20 px-4 max-w-4xl mx-auto">
                <div className="flex items-center gap-4 mb-12">
                    <div className="w-12 h-12 bg-adria/10 rounded-xl flex items-center justify-center text-adria">
                        <Shield size={24} />
                    </div>
                    <div>
                        <p className="font-lato text-sm text-graphite/60 italic">{t({ de: 'Fassung vom 09.11.2022', en: 'Version of 09/11/2022' })}</p>
                    </div>
                </div>

                <div className="prose prose-slate prose-headings:font-playfair prose-headings:font-semibold prose-p:font-lato prose-p:text-graphite/80 max-w-none space-y-12">

                    <section className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                        <h2 className="text-2xl text-adria mb-6 flex items-center gap-2 border-none">
                            <Eye className="w-6 h-6" /> {t({ de: 'Einleitung und Überblick', en: 'Introduction and Overview' })}
                        </h2>
                        <div className="space-y-4 text-sm md:text-base leading-relaxed">
                            <p>{t({
                                de: 'Wir haben diese Datenschutzerklärung verfasst, um Ihnen gemäß der Vorgaben der Datenschutz-Grundverordnung (EU) 2016/679 und anwendbaren nationalen Gesetzen zu erklären, welche personenbezogenen Daten (kurz Daten) wir als Verantwortliche – und die von uns beauftragten Auftragsverarbeiter (z. B. Provider) – verarbeiten, zukünftig verarbeiten werden und welche rechtmäßigen Möglichkeiten Sie haben.',
                                en: 'We have drafted this privacy policy to explain to you — in accordance with the requirements of the General Data Protection Regulation (EU) 2016/679 and applicable national laws — which personal data (in short: data) we as controllers, and the processors we have commissioned (e.g. providers), process, will process in the future, and what lawful options you have.'
                            })}</p>
                            <p>{t({
                                de: 'Diese Datenschutzerklärung gilt für alle von uns im Unternehmen verarbeiteten personenbezogenen Daten und für alle personenbezogenen Daten, die von uns beauftragte Firmen (Auftragsverarbeiter) verarbeiten.',
                                en: 'This privacy policy applies to all personal data processed by us within the company and to all personal data processed by companies commissioned by us (processors).'
                            })}</p>
                        </div>
                    </section>

                    <section className="space-y-6">
                        <h2 className="text-2xl text-adria border-b border-adria/10 pb-2">{t({ de: 'Rechtsgrundlagen', en: 'Legal Bases' })}</h2>
                        <p>{t({
                            de: 'In der folgenden Datenschutzerklärung geben wir Ihnen transparente Informationen zu den rechtlichen Grundsätzen und Vorschriften der DSGVO. Wir verarbeiten Ihre Daten nur, wenn mindestens eine der folgenden Bedingungen zutrifft:',
                            en: 'In the following privacy policy, we provide you with transparent information on the legal principles and provisions of the GDPR. We only process your data if at least one of the following conditions applies:'
                        })}</p>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none p-0">
                            {legalBases.map((item, i) => (
                                <li key={i} className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                                    <span className="block font-bold text-adria text-sm mb-1">{item.art}</span>
                                    <h4 className="font-playfair font-semibold mb-1">{t(item.title)}</h4>
                                    <p className="text-sm text-graphite/60">{t(item.desc)}</p>
                                </li>
                            ))}
                        </ul>
                    </section>

                    <section className="space-y-6">
                        <h2 className="text-2xl text-adria border-b border-adria/10 pb-2">{t({ de: 'Kontaktdaten des Verantwortlichen', en: 'Contact Details of the Controller' })}</h2>
                        <div className="bg-adria/5 p-6 rounded-2xl border border-adria/10">
                            <h3 className="font-playfair text-xl font-bold text-graphite mb-2">Centaurus GmbH</h3>
                            <p className="font-lato text-graphite/80">
                                Lindengasse 30/1-4<br />
                                1070 {t({ de: 'Wien, Österreich', en: 'Vienna, Austria' })}<br /><br />
                                <strong>{t({ de: 'E-Mail:', en: 'Email:' })}</strong> info@gastrofisch.at<br />
                                <strong>{t({ de: 'Telefon:', en: 'Phone:' })}</strong> +43 676 5404906
                            </p>
                        </div>
                    </section>

                    <section className="space-y-6">
                        <h2 className="text-2xl text-adria border-b border-adria/10 pb-2">{t({ de: 'Rechte laut DSGVO', en: 'Your Rights under the GDPR' })}</h2>
                        <p>{t({ de: 'Ihnen stehen gemäß Artikel 13, 14 DSGVO folgende Rechte zu:', en: 'Under Articles 13 and 14 GDPR, you have the following rights:' })}</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {rights.map((right, i) => (
                                <div key={i} className="flex items-center gap-3 p-3 bg-white border border-gray-100 rounded-lg shadow-sm">
                                    <div className="w-1.5 h-1.5 rounded-full bg-adria" />
                                    <span className="font-lato text-xs font-medium">{t(right)}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="space-y-6">
                        <h2 className="text-2xl text-adria border-b border-adria/10 pb-2">{t({ de: 'Sicherheit', en: 'Security' })}</h2>
                        <p>{t({
                            de: 'Wir verwenden HTTPS (TLS-Verschlüsselung), um Daten abhörsicher im Internet zu übertragen.',
                            en: 'We use HTTPS (TLS encryption) to transmit data securely over the internet.'
                        })}</p>
                    </section>

                    <footer className="pt-10 border-t border-adria/10 text-center">
                        <p className="text-xs text-graphite/40 font-lato">
                            {t({ de: 'Erstellt mit Unterstützung von Centaurus GmbH.', en: 'Prepared with the support of Centaurus GmbH.' })}<br />
                            &copy; {new Date().getFullYear()} Gastro Fisch Brač.
                        </p>
                    </footer>
                </div>
            </div>
        </div>
    );
};

export default DatenschutzPage;
