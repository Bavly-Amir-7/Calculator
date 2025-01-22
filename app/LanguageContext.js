import React, { createContext, useState } from 'react';

// إنشاء Context
export const LanguageContext = createContext();

// مزود اللغة
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en'); // اللغة الافتراضية

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'ar' : 'en'));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
