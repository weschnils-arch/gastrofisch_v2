import { useEffect, useRef, useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useLang } from '../i18n/LanguageContext';
import type { Lang } from '../i18n/LanguageContext';

type Bi = { de: string; en: string };

interface Product {
  id: string;
  name: Bi;
  scientificName?: string;
  illustration: string;
  description: Bi;
  features: Bi[];
}

const products: Product[] = [
  {
    id: 'scampi',
    name: { de: 'Scampi', en: 'Scampi' },
    scientificName: 'Nephrops norvegicus',
    illustration: '/images/illustrations/scampi.png',
    description: { de: 'Unsere frischen Scampi stammen aus kroatischem Wildfang.', en: 'Our fresh scampi come from Croatian wild catch.' },
    features: [
      { de: 'Kroatischer Wildfang', en: 'Croatian wild catch' },
      { de: 'Zartes, leicht süßliches Fleisch', en: 'Tender, slightly sweet flesh' },
      { de: 'Delikater Geschmack', en: 'Delicate flavour' },
    ],
  },
  {
    id: 'oktopus',
    name: { de: 'Oktopus', en: 'Octopus' },
    scientificName: 'Octopus vulgaris',
    illustration: '/images/illustrations/oktopus.png',
    description: { de: 'Häufig serviert als Salat oder vom Grill. Eine Besonderheit der mediterranen Küche.', en: 'Often served as a salad or from the grill. A specialty of Mediterranean cuisine.' },
    features: [
      { de: 'Frisch oder tiefgekühlt erhältlich', en: 'Available fresh or frozen' },
      { de: 'Kalt und warm ein Genuss', en: 'A delight cold or warm' },
      { de: 'Mediterraner Geschmack', en: 'Mediterranean taste' },
    ],
  },
  {
    id: 'thunfisch',
    name: { de: 'Blauflossenthunfisch', en: 'Bluefin Tuna' },
    scientificName: 'Thunnus thynnus',
    illustration: '/images/illustrations/blauflossenthunfisch.png',
    description: { de: 'Der Adriatische Blauflossenthunfisch wird international geschätzt.', en: 'Adriatic bluefin tuna is internationally prized.' },
    features: [
      { de: 'Adriatische Zucht', en: 'Adriatic farming' },
      { de: 'Spitzenqualität', en: 'Top quality' },
      { de: 'Reich an Omega-3', en: 'Rich in Omega-3' },
    ],
  },
  {
    id: 'garnele',
    name: { de: 'Garnele', en: 'Prawn' },
    scientificName: 'Parapenaeus longirostris',
    illustration: '/images/illustrations/garnele.png',
    description: { de: 'Kroatische Garnelen aus Wildfang – das Original.', en: 'Croatian wild-caught prawns – the original.' },
    features: [
      { de: 'Kroatischer Wildfang', en: 'Croatian wild catch' },
      { de: 'Das Original', en: 'The original' },
      { de: 'Süß und zart', en: 'Sweet and tender' },
    ],
  },
  {
    id: 'goldbrasse',
    name: { de: 'Goldbrasse', en: 'Gilthead Seabream' },
    scientificName: 'Sparus Aurata',
    illustration: '/images/illustrations/goldbrasse.png',
    description: { de: 'Die Goldbrasse ist ein Klassiker der mediterranen Küche. Sie wird auch Dorade genannt.', en: 'Gilthead seabream is a Mediterranean classic, also known as dorade.' },
    features: [
      { de: 'Mediterraner Klassiker', en: 'Mediterranean classic' },
      { de: 'Feines Fleisch', en: 'Fine flesh' },
      { de: 'Ideal für den Grill', en: 'Ideal for grilling' },
    ],
  },
  {
    id: 'seehecht',
    name: { de: 'Seehecht', en: 'European Hake' },
    scientificName: 'Merluccius merluccius',
    illustration: '/images/illustrations/seehecht.png',
    description: { de: 'Der Seehecht ist ein Klassiker in der dalmatinischen Küche und wird dort besonders gern für klare Suppen verwendet.', en: 'Hake is a classic of Dalmatian cuisine, especially popular for clear soups.' },
    features: [
      { de: 'Festes Fleisch', en: 'Firm flesh' },
      { de: 'Nussiger Geschmack', en: 'Nutty flavour' },
      { de: 'Vielseitig einsetzbar', en: 'Versatile to use' },
    ],
  },
  {
    id: 'sepia',
    name: { de: 'Sepia', en: 'Cuttlefish' },
    scientificName: 'Sepia officinalis',
    illustration: '/images/illustrations/sepia.png',
    description: { de: 'Besonders beliebt ist Sepia für die Zubereitung von Schwarzem Risotto.', en: 'Cuttlefish is especially popular for preparing black risotto.' },
    features: [
      { de: 'Frisch und tiefgekühlt', en: 'Fresh and frozen' },
      { de: 'Mediterrane Delikatesse', en: 'Mediterranean delicacy' },
      { de: 'Besonders beliebt für Risotto', en: 'Especially popular for risotto' },
    ],
  },
  {
    id: 'wolfsbarsch',
    name: { de: 'Wolfsbarsch', en: 'European Seabass' },
    scientificName: 'Dicentrarchus labrax',
    illustration: '/images/illustrations/branzino_wolfsbarsch.png',
    description: { de: 'Hochwertiger und vielseitiger Speisefisch, der in Österreich auch oft als Branzino bezeichnet wird.', en: 'High-quality, versatile food fish, also known as branzino in Austria.' },
    features: [
      { de: 'Sehr festes, aromatisches, weißes Fleisch', en: 'Very firm, aromatic, white flesh' },
      { de: 'Ideal zum Grillen, Braten oder Backen im Ganzen', en: 'Ideal for grilling, frying or baking whole' },
      { de: 'Einer der beliebtesten Speisefische', en: 'One of the most popular food fish' },
    ],
  },
  {
    id: 'drachenkopf',
    name: { de: 'Drachenkopf', en: 'Scorpionfish' },
    scientificName: 'Scorpaena scrofa',
    illustration: '/images/illustrations/drachenkopf.png',
    description: { de: 'Hochgeschätzter Speisefisch der Mittelmeerküche.', en: 'Highly prized food fish of Mediterranean cuisine.' },
    features: [
      { de: 'Sehr festes, aromatisches, weißes Fleisch', en: 'Very firm, aromatic, white flesh' },
      { de: 'Besonders beliebt für Fischsuppen (z. B. Brudet)', en: 'Especially popular for fish soups (e.g. brudet)' },
      { de: 'Wird meist im Ganzen gekocht oder filetiert', en: 'Usually cooked whole or filleted' },
    ],
  },
  {
    id: 'petersfisch',
    name: { de: 'Petersfisch', en: 'John Dory' },
    scientificName: 'Zeus faber',
    illustration: '/images/illustrations/st_petersfisch.png',
    description: { de: 'Hochwertiger Speisefisch mit zartem Aroma.', en: 'High-quality food fish with a delicate aroma.' },
    features: [
      { de: 'Sehr feines, weißes, festes Fleisch', en: 'Very fine, white, firm flesh' },
      { de: 'Wenig Gräten im Filetbereich', en: 'Few bones in the fillet' },
      { de: 'Besonders geschätzt in der gehobenen Küche', en: 'Especially prized in fine cuisine' },
    ],
  },
  {
    id: 'seezunge',
    name: { de: 'Seezunge', en: 'Dover Sole' },
    scientificName: 'Solea solea',
    illustration: '/images/illustrations/seezunge.png',
    description: { de: 'Einer der wertvollsten Speisefische.', en: 'One of the most valuable food fish.' },
    features: [
      { de: 'Hochwertiger Edelfisch', en: 'Premium noble fish' },
      { de: 'Sehr feines, festes, weißes Fleisch', en: 'Very fine, firm, white flesh' },
      { de: 'Mildes, elegantes Aroma', en: 'Mild, elegant aroma' },
    ],
  },
  {
    id: 'miesmuschel',
    name: { de: 'Miesmuschel', en: 'Blue Mussel' },
    scientificName: 'Mytilus galloprovincialis',
    illustration: '/images/illustrations/miesmuschel.png',
    description: { de: 'Miesmuscheln sind reich an Eiweiß, Jod und Vitamin B12.', en: 'Mussels are rich in protein, iodine and vitamin B12.' },
    features: [
      { de: 'Zartes, leicht salziges Fleisch', en: 'Tender, slightly salty flesh' },
      { de: 'Klassiker: „Muscheln in Weißweinsud“', en: 'Classic: "Mussels in white wine broth"' },
      { de: 'Saison traditionell in Monaten mit „R“ (September–April)', en: 'Traditionally in season during months with "R" (September–April)' },
    ],
  },
  {
    id: 'auster',
    name: { de: 'Auster', en: 'Oyster' },
    scientificName: 'Ostrea edulis',
    illustration: '/images/illustrations/auster.png',
    description: { de: 'Die Auster wird meist roh mit ein paar Tropfen Zitronensaft serviert, kann aber auch gekocht oder gebacken werden.', en: 'Oysters are usually served raw with a few drops of lemon juice, but can also be cooked or baked.' },
    features: [
      { de: 'Reich an Zink, Eiweiß und Mineralstoffen', en: 'Rich in zinc, protein and minerals' },
      { de: 'Intensiv-maritimer, leicht nussiger Geschmack', en: 'Intensely maritime, slightly nutty flavour' },
      { de: 'Gilt als Delikatesse', en: 'Considered a delicacy' },
    ],
  },
  {
    id: 'raue-venusmuschel',
    name: { de: 'Raue Venusmuschel', en: 'Warty Venus Clam' },
    scientificName: 'Venus verrucosa',
    illustration: '/images/illustrations/raue_venusmuschel.png',
    description: { de: 'Kulinarisch gilt die Raue Venusmuschel als Delikatesse in der mediterranen Küche.', en: 'Culinary-wise, the warty venus is considered a delicacy of Mediterranean cuisine.' },
    features: [
      { de: 'Sehr aromatisches, festes Muschelfleisch', en: 'Very aromatic, firm shellfish meat' },
      { de: 'Beliebt in mediterranen Nudel- und Reisgerichten', en: 'Popular in Mediterranean pasta and rice dishes' },
      { de: 'Wird gedünstet, gekocht oder in Weißweinsud zubereitet', en: 'Steamed, boiled or prepared in white wine broth' },
    ],
  },
  {
    id: 'calamari',
    name: { de: 'Calamari', en: 'Squid' },
    scientificName: 'Loligo vulgaris',
    illustration: '/images/illustrations/calamari.png',
    description: { de: 'Der Genuss von Calamari reicht bereits in die Antike zurück.', en: 'Enjoying calamari dates back to antiquity.' },
    features: [
      { de: 'Zartes, mildes Fleisch bei kurzer Garzeit', en: 'Tender, mild flesh with short cooking time' },
      { de: 'Vielseitig einsetzbar: Gegrillt, gefüllt oder als frittierte Calamari-Ringe', en: 'Versatile: grilled, stuffed or as fried calamari rings' },
    ],
  },
  {
    id: 'arche-noah-muschel',
    name: { de: 'Arche Noah Muschel', en: 'Noah\'s Ark Clam' },
    scientificName: 'Arca noae',
    illustration: '/images/illustrations/arche_noah_muschel.png',
    description: { de: 'Eine traditionelle Delikatesse aus der Adria mit einem ganz besonderen Aroma.', en: 'A traditional delicacy from the Adriatic with a very distinctive aroma.' },
    features: [
      { de: 'Traditionell aus der Adria', en: 'Traditionally from the Adriatic' },
      { de: 'Besonderes Aroma', en: 'Distinctive aroma' },
      { de: 'Wildfang', en: 'Wild catch' },
    ],
  },
];

const ProductShowcaseSection = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState<boolean[]>(new Array(products.length).fill(false));
  const sectionRef = useRef<HTMLElement>(null);
  const { lang, t } = useLang();

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        products.forEach((_, index) => {
          setTimeout(() => {
            setVisibleCards(prev => { const newState = [...prev]; newState[index] = true; return newState; });
          }, index * 100);
        });
        observer.disconnect();
      }
    }, { threshold: 0.1 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const pick = (b: Bi, l: Lang) => b[l];

  return (
    <section ref={sectionRef} className="section-container section-padding bg-white">
      <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
        <h2 className={`font-playfair text-3xl md:text-4xl lg:text-5xl font-semibold text-adria mb-6 transition-all duration-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>{t({ de: 'Qualität beginnt beim Ursprung', en: 'Quality begins at the origin' })}</h2>
        <p className={`font-lato text-base md:text-lg text-graphite leading-relaxed transition-all duration-600 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>{t({ de: 'Von Wildfang bis zur Zucht – jedes Produkt erzählt seine eigene Geschichte.', en: 'From wild catch to farming — every product tells its own story.' })}</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-12 lg:gap-16">
        {products.map((product, index) => (
          <div key={product.id} onClick={() => setSelectedProduct(product)} className={`group relative bg-gray-50 rounded-xl p-4 md:p-6 cursor-pointer transition-all duration-500 hover:shadow-lg hover:-translate-y-1 ${visibleCards[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="aspect-square flex items-center justify-center mb-4">
              <img src={product.illustration} alt={pick(product.name, lang)} className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105" />
            </div>
            <h3 className="font-playfair text-base md:text-lg font-semibold text-graphite text-center group-hover:text-adria transition-colors duration-300">{pick(product.name, lang)}</h3>
            {product.scientificName && <p className="font-lato text-xs italic text-graphite/60 text-center mt-1">{product.scientificName}</p>}
          </div>
        ))}
      </div>
      <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
        <DialogContent className="max-w-2xl p-0 overflow-hidden max-h-[90vh] overflow-y-auto">
          {selectedProduct && (
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="bg-gray-50 p-6 sm:p-8 flex items-center justify-center">
                <img src={selectedProduct.illustration} alt={pick(selectedProduct.name, lang)} className="w-full max-w-[160px] sm:max-w-[200px] h-auto object-contain" />
              </div>
              <div className="p-5 sm:p-6 md:p-8">
                <DialogHeader>
                  <DialogTitle className="font-playfair text-2xl md:text-3xl font-semibold text-adria mb-1">{pick(selectedProduct.name, lang)}</DialogTitle>
                  {selectedProduct.scientificName && <p className="font-lato text-sm italic text-graphite/60 mb-4">{selectedProduct.scientificName}</p>}
                </DialogHeader>
                <p className="font-lato text-graphite/80 leading-relaxed mb-6">{pick(selectedProduct.description, lang)}</p>
                <div className="space-y-3 mb-6">
                  <h4 className="font-lato text-sm font-semibold text-graphite uppercase tracking-wider">{t({ de: 'Eigenschaften', en: 'Features' })}</h4>
                  <ul className="space-y-2">
                    {selectedProduct.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 font-lato text-sm text-graphite/70"><span className="w-1.5 h-1.5 rounded-full bg-adria flex-shrink-0" />{pick(feature, lang)}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ProductShowcaseSection;
