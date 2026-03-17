import { useEffect, useRef, useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

interface Product {
  id: string;
  name: string;
  scientificName?: string;
  illustration: string;
  description: string;
  features: string[];
  recipeLink?: string;
}

const products: Product[] = [
  {
    id: 'seeteufel',
    name: 'Seeteufel',
    scientificName: 'Lophius piscatorius',
    illustration: '/images/illustrations/seeteufel.png',
    description: 'Der Seeteufel ist ein geschätzter Speisefisch mit festem, weißem Fleisch.',
    features: ['Festes, weißes Fleisch', 'Milder Geschmack'],
    recipeLink: '/rezepte?recipe=27'
  },
  {
    id: 'scampi',
    name: 'Scampi',
    scientificName: 'Nephrops norvegicus',
    illustration: '/images/illustrations/scampi.png',
    description: 'Unsere frischen Scampi stammen aus kroatischem Wildfang.',
    features: ['Kroatischer Wildfang', 'Zartes, leicht süßliches Fleisch', 'Delikater Geschmack'],
    recipeLink: '/rezepte?recipe=5'
  },
  {
    id: 'oktopus',
    name: 'Oktopus',
    scientificName: 'Octopus vulgaris',
    illustration: '/images/illustrations/oktopus.png',
    description: 'Häufig serviert als Salat oder vom Grill. Eine Besonderheit der mediterranen Küche.',
    features: ['Frisch oder tiefgekühlt erhältlich', 'Kalt und warm ein Genuss', 'Mediterraner Geschmack'],
    recipeLink: '/rezepte?recipe=28'
  },
  {
    id: 'thunfisch',
    name: 'Blauflossenthunfisch',
    scientificName: 'Thunnus thynnus',
    illustration: '/images/illustrations/blauflossenthunfisch.png',
    description: 'Der Adriatische Blauflossenthunfisch wird international geschätzt.',
    features: ['Adriatische Zucht', 'Spitzenqualität', 'Reich an Omega-3'],
    recipeLink: '/rezepte?recipe=16'
  },
  {
    id: 'garnele',
    name: 'Garnele',
    scientificName: 'Parapenaeus longirostris',
    illustration: '/images/illustrations/garnele.png',
    description: 'Kroatische Garnelen aus Wildfang – das Original.',
    features: ['Kroatischer Wildfang', 'Das Original', 'Süß und zart'],
    recipeLink: '/rezepte?recipe=1'
  },
  {
    id: 'goldbrasse',
    name: 'Goldbrasse',
    scientificName: 'Sparus Aurata',
    illustration: '/images/illustrations/goldbrasse.png',
    description: 'Die Goldbrasse ist ein Klassiker der mediterranen Küche. Sie wird auch Dorade genannt.',
    features: ['Mediterraner Klassiker', 'Feines Fleisch', 'Ideal für den Grill'],
    recipeLink: '/rezepte?recipe=2'
  },
  {
    id: 'seehecht',
    name: 'Seehecht',
    scientificName: 'Merluccius merluccius',
    illustration: '/images/illustrations/seehecht.png',
    description: 'Der Seehecht ist ein Klassiker in der dalmatinischen Küche und wird dort besonders gern für klare Suppen verwendet.',
    features: ['Festes Fleisch', 'Nussiger Geschmack', 'Vielseitig einsetzbar'],
    recipeLink: '/rezepte?recipe=4'
  },
  {
    id: 'sepia',
    name: 'Sepia',
    scientificName: 'Sepia officinalis',
    illustration: '/images/illustrations/sepia.png',
    description: 'Besonders beliebt ist Sepia für die Zubereitung von Schwarzem Risotto.',
    features: ['Frisch und tiefgekühlt', 'Mediterrane Delikatesse', 'Besonders beliebt für Risotto'],
    recipeLink: '/rezepte?recipe=7'
  },
  {
    id: 'wolfsbarsch',
    name: 'Wolfsbarsch',
    scientificName: 'Dicentrarchus labrax',
    illustration: '/images/illustrations/branzino_wolfsbarsch.png',
    description: 'Hochwertiger und vielseitiger Speisefisch, der in Österreich auch oft als Branzino bezeichnet wird.',
    features: ['Sehr festes, aromatisches, weißes Fleisch', 'Ideal zum Grillen, Braten oder Backen im Ganzen', 'Einer der beliebtesten Speisefische'],
    recipeLink: '/rezepte?recipe=17'
  },
  {
    id: 'drachenkopf',
    name: 'Drachenkopf',
    scientificName: 'Scorpaena scrofa',
    illustration: '/images/illustrations/drachenkopf.png',
    description: 'Hochgeschätzter Speisefisch der Mittelmeerküche.',
    features: ['Sehr festes, aromatisches, weißes Fleisch', 'Besonders beliebt für Fischsuppen (z. B. Brudet)', 'Wird meist im Ganzen gekocht oder filetiert'],
    recipeLink: '/rezepte?recipe=6'
  },
  {
    id: 'petersfisch',
    name: 'Petersfisch',
    scientificName: 'Zeus faber',
    illustration: '/images/illustrations/st_petersfisch.png',
    description: 'Hochwertiger Speisefisch mit zartem Aroma.',
    features: ['Sehr feines, weißes, festes Fleisch', 'Wenig Gräten im Filetbereich', 'Besonders geschätzt in der gehobenen Küche'],
    recipeLink: '/rezepte?recipe=15'
  },
  {
    id: 'seezunge',
    name: 'Seezunge',
    scientificName: 'Solea solea',
    illustration: '/images/illustrations/seezunge.png',
    description: 'Einer der wertvollsten Speisefische.',
    features: ['Hochwertiger Edelfisch', 'Sehr feines, festes, weißes Fleisch', 'Mildes, elegantes Aroma'],
    recipeLink: '/rezepte?recipe=29'
  },
  {
    id: 'miesmuschel',
    name: 'Miesmuschel',
    scientificName: 'Mytilus galloprovincialis',
    illustration: '/images/illustrations/miesmuschel.png',
    description: 'Miesmuscheln sind reich an Eiweiß, Jod und Vitamin B12.',
    features: ['Zartes, leicht salziges Fleisch', 'Klassiker: „Muscheln in Weißweinsud“', 'Saison traditionell in Monaten mit „R“ (September–April)'],
    recipeLink: '/rezepte?recipe=12'
  },
  {
    id: 'auster',
    name: 'Auster',
    scientificName: 'Ostrea edulis',
    illustration: '/images/illustrations/auster.png',
    description: 'Die Auster wird meist roh mit ein paar Tropfen Zitronensaft serviert, kann aber auch gekocht oder gebacken werden.',
    features: ['Reich an Zink, Eiweiß and Mineralstoffen', 'Intensiv-maritimer, leicht nussiger Geschmack', 'Gilt als Delikatesse'],
    recipeLink: '/rezepte?category=meeresfruechte'
  },
  {
    id: 'raue-venusmuschel',
    name: 'Raue Venusmuschel',
    scientificName: 'Venus verrucosa',
    illustration: '/images/illustrations/raue_venusmuschel.png',
    description: 'Kulinarisch gilt die Raue Venusmuschel als Delikatesse in der mediterranen Küche.',
    features: ['Sehr aromatisches, festes Muschelfleisch', 'Beliebt in mediterranen Nudel- und Reisgerichten', 'Wird gedünstet, gekocht oder in Weißweinsud zubereitet'],
    recipeLink: '/rezepte?category=meeresfruechte'
  },
  {
    id: 'calamari',
    name: 'Calamari',
    scientificName: 'Loligo vulgaris',
    illustration: '/images/illustrations/pfeilkalmar.png',
    description: 'Der Genuss von Calamari reicht bereits in die Antike zurück.',
    features: ['Zartes, mildes Fleisch bei kurzer Garzeit', 'Vielseitig einsetzbar: Gegrillt, gefüllt oder als frittierte Calamari-Ringe'],
    recipeLink: '/rezepte?recipe=19'
  },
  {
    id: 'yellowfin-tuna',
    name: 'Yellowfin Tuna',
    scientificName: 'Thunnus albacares',
    illustration: '/images/illustrations/yellowfin_tuna.png',
    description: 'Der Gelbflossen-Thunfisch ist bekannt für sein helles, festes Fleisch und seinen milden Geschmack.',
    features: ['Helles, festes Fleisch', 'Milder Geschmack', 'Vielseitig verwendbar'],
    recipeLink: '/rezepte?recipe=26'
  },
  {
    id: 'rochen',
    name: 'Rochen',
    scientificName: 'Raja clavata',
    illustration: '/images/illustrations/rochen.png',
    description: 'Der Rochen ist eine Delikatesse, besonders die Rochenflügel sind in der gehobenen Küche sehr geschätzt.',
    features: ['Zartes Fleisch', 'Einzigartige Textur', 'Delikatesse'],
    recipeLink: '/rezepte?category=fisch'
  },
  {
    id: 'arche-noah-muschel',
    name: 'Arche Noah Muschel',
    scientificName: 'Arca noae',
    illustration: '/images/illustrations/arche_noah_muschel.png',
    description: 'Eine traditionelle Delikatesse aus der Adria mit einem ganz besonderen Aroma.',
    features: ['Traditionell aus der Adria', 'Besonderes Aroma', 'Wildfang'],
    recipeLink: '/rezepte?category=meeresfruechte'
  },
];

const ProductShowcaseSection = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState<boolean[]>(new Array(products.length).fill(false));
  const sectionRef = useRef<HTMLElement>(null);

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

  return (
    <section ref={sectionRef} className="section-container section-padding bg-white">
      <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
        <h2 className={`font-playfair text-3xl md:text-4xl lg:text-5xl font-semibold text-adria mb-6 transition-all duration-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>Qualität beginnt am Ursprung</h2>
        <p className={`font-lato text-base md:text-lg text-graphite leading-relaxed transition-all duration-600 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>Von Wildfang bis zur Zucht – jedes Produkt erzählt seine eigene Geschichte.</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-16">
        {products.map((product, index) => (
          <div key={product.id} onClick={() => setSelectedProduct(product)} className={`group relative bg-gray-50 rounded-xl p-4 md:p-6 cursor-pointer transition-all duration-500 hover:shadow-lg hover:-translate-y-1 ${visibleCards[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="aspect-square flex items-center justify-center mb-4">
              <img src={product.illustration} alt={product.name} className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105" />
            </div>
            <h3 className="font-playfair text-base md:text-lg font-semibold text-graphite text-center group-hover:text-adria transition-colors duration-300">{product.name}</h3>
            {product.scientificName && <p className="font-lato text-xs italic text-graphite/60 text-center mt-1">{product.scientificName}</p>}
          </div>
        ))}
      </div>
      <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
        <DialogContent className="max-w-2xl p-0 overflow-hidden">
          {selectedProduct && (
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="bg-gray-50 p-8 flex items-center justify-center">
                <img src={selectedProduct.illustration} alt={selectedProduct.name} className="w-full max-w-[200px] h-auto object-contain" />
              </div>
              <div className="p-6 md:p-8">
                <DialogHeader>
                  <DialogTitle className="font-playfair text-2xl md:text-3xl font-semibold text-adria mb-1">{selectedProduct.name}</DialogTitle>
                  {selectedProduct.scientificName && <p className="font-lato text-sm italic text-graphite/60 mb-4">{selectedProduct.scientificName}</p>}
                </DialogHeader>
                <p className="font-lato text-graphite/80 leading-relaxed mb-6">{selectedProduct.description}</p>
                <div className="space-y-3 mb-6">
                  <h4 className="font-lato text-sm font-semibold text-graphite uppercase tracking-wider">Eigenschaften</h4>
                  <ul className="space-y-2">
                    {selectedProduct.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 font-lato text-sm text-graphite/70"><span className="w-1.5 h-1.5 rounded-full bg-adria flex-shrink-0" />{feature}</li>
                    ))}
                  </ul>
                </div>
                {selectedProduct.recipeLink && (
                  <div className="pt-4 border-t border-gray-100">
                    <a href={selectedProduct.recipeLink} className="font-lato text-sm text-adria hover:underline font-semibold">
                      Rezepte mit {selectedProduct.name}
                    </a>
                  </div>
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ProductShowcaseSection;
