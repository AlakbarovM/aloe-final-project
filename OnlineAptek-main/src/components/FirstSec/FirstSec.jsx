import React from "react";
import styles from './FirstSec.module.scss'
const FirstSec = () => {
  return (
    <div className={styles.firstSec}>
      <div className={styles.container}>
        <div className={styles.firstSecAloeText}>
          <p>APTEKLƏR ŞƏBƏKƏSİ</p>
          <h1>
            Bizimlə <br />
            sağlam yaşa!
          </h1>
          <span>
            Biz sizin sağlam olmağınızı istəyirik. Buna görə hər biriniz
            özünüzün və yaxınlarınızın sağlamlığı, gözəlliyi və xoş ovqatının
            gündəlik qayğısına qala bilməyiniz üçün lazımi hər şeyi tapa
            biləcəyiniz bir məkan yaratdıq. Bizim peşəkar əczaçılarımız və
            məsləhətçilərimiz Aloe+ apteklər şəbəkəsinin istənilən filialında
            yolunuzu gözləyir!
          </span>
        </div>
        <div className={styles.firstSecAloeLogo}>
            <img src="https://aloe.az/src/assets/images/intro_img_3_az.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default FirstSec;
