import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Clock, Users, ChefHat, Search } from 'lucide-react';
import { recipes, pickText } from '@/data/recipes';
import { useLang } from '../i18n/LanguageContext';

const RezeptePage = () => {
  const [searchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState('alle');
  const [searchQuery, setSearchQuery] = useState('');
  const { lang, t } = useLang();

  useEffect(() => {
    const category = searchParams.get('category');
    if (category) {
      setActiveCategory(category);
    }
  }, [searchParams]);

  const categories = [
    { id: 'alle', label: t({ de: 'Alle Rezepte', en: 'All Recipes' }) },
    { id: 'fisch', label: t({ de: 'Fisch', en: 'Fish' }) },
    { id: 'meeresfruechte', label: t({ de: 'Meeresfrüchte', en: 'Seafood' }) },
    { id: 'vorspeisen', label: t({ de: 'Vorspeisen', en: 'Appetizers' }) },
    { id: 'hauptgerichte', label: t({ de: 'Hauptgerichte', en: 'Main Courses' }) },
  ];

  const filteredRecipes = recipes.filter((recipe) => {
    const matchesCategory = activeCategory === 'alle' || recipe.category === activeCategory;
    const title = pickText(recipe.title, lang);
    const description = pickText(recipe.description, lang);
    const matchesSearch = title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Einfach': return 'bg-green-100 text-green-700';
      case 'Mittel': return 'bg-orange-100 text-orange-700';
      case 'Anspruchsvoll': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const translateDifficulty = (d: string) => {
    if (lang === 'de') return d;
    if (d === 'Einfach') return 'Easy';
    if (d === 'Mittel') return 'Medium';
    if (d === 'Anspruchsvoll') return 'Advanced';
    return d;
  };

  const translatePrepTime = (s: string) => {
    if (lang === 'de') return s;
    return s.replace('Minuten', 'minutes').replace('Stunden', 'hours').replace('Stunde', 'hour');
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="relative min-h-[340px] h-[40vh] md:h-[50vh] overflow-hidden mb-12 md:mb-20">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/images/hero_rezepte.jpg)' }} />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative z-10 h-full flex items-center justify-center px-4">
          <div className="text-center max-w-3xl pt-24 md:pt-32">
            <span className="inline-block font-lato text-[10px] font-bold tracking-[0.25em] uppercase text-white/80 mb-4">{t({ de: 'Kulinarik', en: 'Culinary' })}</span>
            <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">{t({ de: 'Rezepte aus Dalmatien', en: 'Recipes from Dalmatia' })}</h1>
            <p className="font-lato text-sm sm:text-base md:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">{t({ de: 'Entdecken Sie die Geheimnisse der mediterranen Küche. Von herzhaften Klassikern bis hin zu leichten Meeresfrüchte-Gerichten.', en: 'Discover the secrets of Mediterranean cuisine. From hearty classics to light seafood dishes.' })}</p>
          </div>
        </div>
      </div>

      <section className="section-container pb-20">

        <div className="flex flex-col md:flex-row gap-6 items-center justify-between mb-12">
          <div className="flex flex-wrap justify-center md:justify-start gap-2 sm:gap-3">
            {categories.map((cat) => (
              <button key={cat.id} onClick={() => setActiveCategory(cat.id)}
                className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-lato text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-all duration-300 ${activeCategory === cat.id ? 'bg-adria text-white shadow-lg' : 'bg-white text-graphite/60 hover:bg-gray-100'}`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-64">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-graphite/30" />
            <input type="text" placeholder={t({ de: 'Rezept suchen...', en: 'Search recipe...' }) as string} value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border-none rounded-full py-3 pl-12 pr-6 font-lato text-sm focus:ring-2 focus:ring-adria/20 transition-all shadow-sm"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRecipes.map((recipe) => (
            <Link key={recipe.id} to={`/rezepte/${recipe.id}`} className="group glass-card rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={recipe.image} alt={pickText(recipe.title, lang)} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-md rounded-full p-2 shadow-lg border border-white/20 transform -rotate-12 group-hover:rotate-0 transition-transform duration-500">
                  <img src={recipe.illustration} alt="Illustration" className="w-full h-full object-contain" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-playfair text-xl font-semibold text-graphite mb-2 group-hover:text-adria transition-colors">{pickText(recipe.title, lang)}</h3>
                <p className="font-lato text-sm text-graphite/70 mb-4 line-clamp-2">{pickText(recipe.description, lang)}</p>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1.5 text-graphite/60"><Clock className="w-4 h-4" /><span className="font-lato">{translatePrepTime(recipe.prepTime)}</span></div>
                  <div className="flex items-center gap-1.5 text-graphite/60"><Users className="w-4 h-4" /><span className="font-lato">{recipe.servings} {t({ de: 'Pers.', en: 'pers.' })}</span></div>
                  <div className="flex items-center gap-1.5 text-graphite/60 tracking-wider">
                    <span className={`font-lato text-[10px] uppercase font-bold px-3 py-1 rounded-full ${getDifficultyColor(recipe.difficulty)}`}>{translateDifficulty(recipe.difficulty)}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredRecipes.length === 0 && (
          <div className="text-center py-16">
            <ChefHat className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="font-playfair text-xl font-semibold text-graphite mb-2">{t({ de: 'Keine Rezepte gefunden', en: 'No recipes found' })}</h3>
            <p className="font-lato text-graphite/60">{t({ de: 'Versuchen Sie es mit einer anderen Suche.', en: 'Try a different search.' })}</p>
          </div>
        )}
      </section>

    </div>
  );
};

export default RezeptePage;
