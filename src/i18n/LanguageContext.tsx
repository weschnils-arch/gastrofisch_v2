import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

export type Lang = 'de' | 'en';

interface LanguageContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: <T extends Record<Lang, unknown>>(dict: T) => T[Lang];
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = 'gfb_lang';

const getInitialLang = (): Lang => {
  if (typeof window === 'undefined') return 'de';
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === 'de' || stored === 'en') return stored;
  const browser = navigator.language?.toLowerCase() ?? '';
  return browser.startsWith('en') ? 'en' : 'de';
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Lang>(getInitialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    localStorage.setItem(STORAGE_KEY, lang);
  }, [lang]);

  const setLang = (l: Lang) => setLangState(l);

  const t = <T extends Record<Lang, unknown>>(dict: T): T[Lang] => dict[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLang = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLang must be used within LanguageProvider');
  return ctx;
};
