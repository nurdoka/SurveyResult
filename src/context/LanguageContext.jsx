import { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const storedLanguage = localStorage.getItem("language") || "kg";
    const [language, setLanguage] = useState(storedLanguage);

    useEffect(() => {
        localStorage.setItem("language", language);
    }, [language]);

    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
