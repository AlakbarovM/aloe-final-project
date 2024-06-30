import React, { createContext, useState } from "react";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("az");

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "az" ? "ru" : "az"));
  };

  const texts = {
    az: {
      privilegeClub:
        "«Aloe+ Privilege Club» kartı – alıcıların apteklər şəbəkəmizdə alış-verişini daha sərfəli edən bonus sistemidir. Aloe+ kartını aktivləşdirmək rahat və asandır. Apteklərdə istənilən alış zamanı sərfəli təkliflərdən yararlanın. Aloe+ kartı bütün Aloe+ apteklərində keçərlidir.",
      activate: "aktivləşdirmək",
      pharmacies: "bütün Aloe+ apteklərində",
      benefits:
        "«Aloe+ Privilege Club» kartı – alıcıların apteklər şəbəkəmizdə alış-verişini daha sərfəli edən bonus sistemidir. Aloe+ kartını aktivləşdirmək rahat və asandır. Apteklərdə istənilən alış zamanı sərfəli təkliflərdən yararlanın. Aloe+ kartı bütün Aloe+ apteklərində keçərlidir.",
    },
    ru: {
      privilegeClub: "Карта «Алоэ+ Клуб Привилегий» — это бонусная система, которая делает покупки в нашей аптечной сети более выгодными. Активировать карту Aloe+ удобно и просто. Воспользуйтесь выгодными предложениями при любой покупке в аптеках. Карта Aloe+ действительна во всех аптеках Aloe+.",
      activate: "активировать",
      pharmacies: "во всех аптеках Aloe+",
      benefits:
        "Карта «Aloe+ Privilege Club» - это бонусная система, которая делает покупки в нашей аптечной сети более выгодными. Активация карты Aloe+ проста и удобна. В любое время покупайте с выгодными предложениями. Карта Aloe+ действует во всех аптеках Aloe+.",
    },
    az: {
      privilegeClub: "Privilege club",
      contact: "Daxil ol",
      phoneNumber: "+994(99) 204-44-00",
      copyAlert: "Telefon numarası panoya kopyalandı!",
    },
    ru: {
      privilegeClub: "Клуб привилегий",
      contact: "Войти",
      phoneNumber: "+994(99) 204-44-00",
      copyAlert: "Номер телефона скопирован в буфер обмена!",
    },
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, texts }}>
      {children}
    </LanguageContext.Provider>
  );
};
