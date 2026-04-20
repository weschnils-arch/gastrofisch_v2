import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Clock, ChefHat, ArrowLeft, Share2, CheckCircle2, Plus, Minus } from 'lucide-react';
import { recipes, pickText } from '@/data/recipes';
import { useLang } from '../i18n/LanguageContext';

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case 'Einfach': return 'bg-green-100 text-green-700';
    case 'Mittel': return 'bg-orange-100 text-orange-700';
    case 'Anspruchsvoll': return 'bg-red-100 text-red-700';
    default: return 'bg-gray-100 text-gray-700';
  }
};

const adjustIngredient = (ingredient: string, originalServings: number, targetServings: number) => {
  const ratio = targetServings / originalServings;
  return ingredient.replace(/(\d+(?:[.,]\d+)?)/g, (match) => {
    const value = parseFloat(match.replace(',', '.'));
    const adjustedValue = value * ratio;
    return adjustedValue % 1 === 0
      ? adjustedValue.toString()
      : adjustedValue.toFixed(1).replace('.', ',');
  });
};

const RezeptDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const recipe = recipes.find((r) => r.id === id);
  const [portionCount, setPortionCount] = useState(recipe?.servings ?? 4);
  const [showCopyFeedback, setShowCopyFeedback] = useState(false);
  const { lang, t } = useLang();

  useEffect(() => {
    if (recipe) setPortionCount(recipe.servings);
  }, [recipe]);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setShowCopyFeedback(true);
      setTimeout(() => setShowCopyFeedback(false), 2500);
    });
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

  if (!recipe) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-white">
        <ChefHat className="w-20 h-20 text-gray-200" />
        <h2 className="font-playfair text-3xl font-semibold text-graphite">{t({ de: 'Rezept nicht gefunden', en: 'Recipe not found' })}</h2>
        <Link to="/rezepte" className="btn-primary inline-flex items-center gap-2">
          <ArrowLeft size={18} /> {t({ de: 'Zurück zu den Rezepten', en: 'Back to recipes' })}
        </Link>
      </div>
    );
  }

  const title = pickText(recipe.title, lang);
  const description = pickText(recipe.description, lang);
  const ingredients = recipe.ingredients.map(i => pickText(i, lang));
  const instructions = recipe.instructions.map(i => pickText(i, lang));

  const related = recipes
    .filter((r) => r.category === recipe.category && r.id !== recipe.id)
    .slice(0, 3);

  return (
    <div className="bg-white min-h-screen">
      <div className="relative h-[55vh] md:h-[65vh] overflow-hidden">
        <img
          src={recipe.image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/60 to-transparent" />

        <button
          onClick={() => navigate('/rezepte')}
          className="absolute top-6 left-6 md:top-8 md:left-8 z-10 flex items-center gap-2 bg-white/20 backdrop-blur-md hover:bg-white/30 transition-all px-4 py-2.5 rounded-xl text-white text-sm font-medium border border-white/30 mt-16 md:mt-20"
        >
          <ArrowLeft size={16} />
          {t({ de: 'Alle Rezepte', en: 'All recipes' })}
        </button>

        <div className="absolute top-8 right-8 w-20 h-20 md:w-28 md:h-28 bg-white/90 backdrop-blur-md rounded-full p-3 shadow-2xl border border-white/20 -rotate-12 hidden md:block mt-20">
          <img src={recipe.illustration} alt="Illustration" className="w-full h-full object-contain" />
        </div>

        <div className="absolute bottom-8 left-6 right-6 md:left-12 md:right-12 text-white">
          <h1 className="font-playfair text-3xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            {title}
          </h1>
          <p className="font-lato text-base md:text-lg text-white/80 mb-5 max-w-2xl">{description}</p>
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2 font-lato text-sm font-medium bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/20">
              <Clock className="w-4 h-4" /> {translatePrepTime(recipe.prepTime)}
            </div>
            <span className={`font-lato text-xs uppercase font-bold px-3 py-1.5 rounded-full ${getDifficultyColor(recipe.difficulty)}`}>
              {translateDifficulty(recipe.difficulty)}
            </span>
            <button
              onClick={handleShare}
              className="flex items-center gap-2 bg-white/20 backdrop-blur-md hover:bg-white/30 transition-all px-4 py-2 rounded-lg text-sm font-medium border border-white/20"
            >
              {showCopyFeedback ? <CheckCircle2 className="w-4 h-4 text-green-400" /> : <Share2 className="w-4 h-4" />}
              {showCopyFeedback ? t({ de: 'Link kopiert!', en: 'Link copied!' }) : t({ de: 'Rezept teilen', en: 'Share recipe' })}
            </button>
          </div>
        </div>
      </div>

      <section className="section-container section-padding">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20">

          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="border border-adria/10 rounded-2xl p-6 md:p-8 bg-adria/3 shadow-lg">
                <div className="flex flex-col gap-4 mb-6 pb-4 border-b border-adria/10">
                  <h2 className="font-playfair text-2xl font-semibold text-adria">{t({ de: 'Zutaten', en: 'Ingredients' })}</h2>
                  <div className="flex items-center gap-1 bg-gray-50 rounded-lg p-0.5 border border-gray-100 self-start">
                    <button
                      onClick={() => setPortionCount(Math.max(1, portionCount - 1))}
                      className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-white hover:shadow-sm transition-all text-graphite"
                    >
                      <Minus size={13} />
                    </button>
                    <div className="flex items-center gap-1 px-2 min-w-[3rem] justify-center text-graphite">
                      <span className="font-playfair text-base font-bold text-adria leading-none">{portionCount}</span>
                      <span className="text-[9px] font-lato text-graphite/40 uppercase font-bold">{t({ de: 'Pers.', en: 'pers.' })}</span>
                    </div>
                    <button
                      onClick={() => setPortionCount(portionCount + 1)}
                      className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-white hover:shadow-sm transition-all text-graphite"
                    >
                      <Plus size={13} />
                    </button>
                  </div>
                </div>
                <ul className="space-y-3">
                  {ingredients.map((ingredient, i) => (
                    <li key={i} className="flex items-start gap-3 font-lato text-graphite/80 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-adria mt-2 flex-shrink-0" />
                      {adjustIngredient(ingredient, recipe.servings, portionCount)}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h2 className="font-playfair text-2xl font-semibold text-adria mb-8 pb-4 border-b border-adria/10">
              {t({ de: 'Zubereitung', en: 'Preparation' })}
            </h2>
            <div className="space-y-10">
              {instructions.map((step, i) => (
                <div key={i} className="flex gap-6 group">
                  <span className="font-playfair text-5xl font-bold text-adria/10 group-hover:text-adria/25 transition-colors shrink-0 leading-none">
                    {(i + 1).toString().padStart(2, '0')}
                  </span>
                  <p className="font-lato text-graphite/80 leading-relaxed pt-3 text-base md:text-lg">
                    {step}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-adria/5 border border-adria/15 rounded-2xl">
              <p className="font-lato text-sm text-adria font-semibold uppercase tracking-wider mb-2">{t({ de: 'Tipp vom Küchenchef', en: 'Chef\'s tip' })}</p>
              <p className="font-lato text-graphite/70 leading-relaxed">
                {t({
                  de: <>Für dieses Rezept empfehlen wir die Verwendung von frischen Zutaten aus unserer Fisch-Boutique in der Zollergasse 12, <Link to="/einzelhandel" className="text-adria hover:underline font-medium">Wien-Neubau</Link>.</>,
                  en: <>For this recipe we recommend using fresh ingredients from our fish boutique at Zollergasse 12, <Link to="/einzelhandel" className="text-adria hover:underline font-medium">Vienna-Neubau</Link>.</>
                })}
              </p>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section-container pb-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-playfair text-2xl md:text-3xl font-semibold text-graphite mb-8">
              {t({ de: 'Ähnliche Rezepte', en: 'Similar recipes' })}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((r) => (
                <Link
                  key={r.id}
                  to={`/rezepte/${r.id}`}
                  className="group glass-card rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img src={r.image} alt={pickText(r.title, lang)} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-playfair text-lg font-semibold text-graphite mb-1 group-hover:text-adria transition-colors">{pickText(r.title, lang)}</h3>
                    <p className="font-lato text-sm text-graphite/60 line-clamp-2">{pickText(r.description, lang)}</p>
                    <div className="flex items-center gap-3 mt-3 text-xs text-graphite/50 font-lato">
                      <span className="flex items-center gap-1"><Clock size={12} /> {translatePrepTime(r.prepTime)}</span>
                      <span className={`px-2 py-0.5 rounded-full font-bold uppercase ${getDifficultyColor(r.difficulty)}`}>{translateDifficulty(r.difficulty)}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default RezeptDetailPage;
