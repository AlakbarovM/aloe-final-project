import React, { useContext } from "react";
import styles from "./AloePrivilege.module.scss";
import { LanguageContext } from "../../LanguageContext/LanguageContext";

const AloePrivilege = () => {
  const { language, texts } = useContext(LanguageContext);

  return (
    <div className={styles.aloePrivilege}>
      <div className={styles.container}>
        <div className={styles.leftAloePrivilege}>
          <h1>
            <span>Aloe+</span> {texts[language].privilegeClub}
          </h1>
          <p>
            {texts[language].benefits} «Aloe+ Privilege Club»
            kartı – alıcıların apteklər şəbəkəmizdə alış-verişini daha sərfəli
            edən bonus sistemidir. Aloe+ kartını aktivləşdirmək rahat və
            asandır. Apteklərdə istənilən alış zamanı sərfəli təkliflərdən
            yararlanın. Aloe+ kartı bütün Aloe+ apteklərində keçərlidir.
            <span>{texts[language].pharmacies}</span>
          </p>
        </div>
        <div className={styles.rightAloePrivilege}>
          <img
            src="https://privilege.aloe.az/assets/card-94185316.png"
            alt="Logo"
          />
        </div>
      </div>
    </div>
  );
};

export default AloePrivilege;
