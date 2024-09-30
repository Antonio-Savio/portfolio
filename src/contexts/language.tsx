import { createContext, ReactNode, useState } from "react";

interface LanguageProviderProps{
    children: ReactNode;
}

type LanguageContextData = {
    lang: 'pt' | 'en';
    toggleLanguage: () => void;
}

const LanguageContext = createContext({} as LanguageContextData);

const LanguageProvider = ({ children }: LanguageProviderProps) => {
    const [lang, setLanguage] = useState<'pt' | 'en'>('pt')

    const toggleLanguage = () => {
        setLanguage(prevLang => prevLang === 'pt' ? 'en' : 'pt')
    }

    return(
        <LanguageContext.Provider value={{lang, toggleLanguage}}>
            {children}
        </LanguageContext.Provider>
    )
}

export { LanguageContext, LanguageProvider }