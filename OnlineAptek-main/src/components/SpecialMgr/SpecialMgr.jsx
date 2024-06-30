import React, { useContext } from 'react'
import { IoLogoWhatsapp } from "react-icons/io";
import styles from './SpecialMgr.module.scss'
import { LanguageContext } from '../../LanguageContext/LanguageContext'; 

const SpecialMgr = () => {
  const { language, texts } = useContext(LanguageContext);
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(
      () => {
        alert("Telefon numarası panoya kopyalandı!");
      },
      (err) => {
        console.error("Kopyalama hatası: ", err);
      }
    );
  };

  return (
    <div className={styles.specialMgr}>
      <div className={styles.container}>
        <h1>Şəxsi menecerinizin xidməti </h1>
        <IoLogoWhatsapp className={styles.wp} size={60} color='rgb(8, 67, 41)'/>
        <p>
          <span onClick={() => copyToClipboard("+994 (99) 204 44 00")} style={{cursor: "pointer", textDecoration: "none"}}>+994 (99) 204 44 00</span> / 09:00-20:00-dək
        </p>
      </div>
    </div>
  )
}

export default SpecialMgr;
