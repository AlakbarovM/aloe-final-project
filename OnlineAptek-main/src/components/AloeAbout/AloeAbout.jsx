import React from "react";
import { CiMoneyCheck1 } from "react-icons/ci";
import styles from "./AloeAbout.module.scss";
import { GoClock } from "react-icons/go";
import { BsStars } from "react-icons/bs";

const AloeAbout = () => {
  return (
    <div className={styles.aloeAbout}>
      <div className={styles.container}>
        <div className={styles.aloeAboutTop}>
          <h1>
            <span>Aloe+</span>Privilege Club <br /> kartı haqqında bilməli
            olduğunuz hər şey
          </h1>
        </div>
        <div className={styles.aloeAboutBottom}>
          <div className={styles.oneAbout}>
            <div className={styles.oneAboutIcn}>
              <CiMoneyCheck1 size={30} color="#39b54a" />
            </div>
            <div className={styles.oneAboutTxt}>
              <h1>Daimi istifadə edin</h1>
              <p>
                Aloe+ aptek şəbəkəsində hər alış-veriş zamanı kartınızı təqdim
                edin.
              </p>
            </div>
          </div>
          <div className={styles.oneAbout}>
            <div className={styles.oneAboutIcn}>
              <GoClock size={30} color="#39b54a" />
            </div>
            <div className={styles.oneAboutTxt}>
              <h1>Bonuslar toplayın </h1>
              <p>
                “Gözəllik” və “Qulluq” kateqoriyalarında 10% , “Əczaçılıq
                məhsulları” kateqoriyasında 5%, “Uşaq qidası” və “Uşaq bezləri”
                kateqoriyalarında 1% bonusları qazanın. Alışların məbləği nə
                qədər çox olarsa, bir o qədər çox bonus alacaqsınız.
              </p>
            </div>
          </div>
          <div className={styles.oneAbout}>
            <div className={styles.oneAboutIcn}>
              <BsStars size={30} color="#39b54a" />
            </div>
            <div className={styles.oneAboutTxt}>
              <h1>Bonuslarla ödəniş</h1>
              <p>
              Alış-verişlərinizi yığılmış bonuslarla ödəyin.
              </p>
            </div>
          </div>
          <div className={styles.oneAbout}>
            <div className={styles.oneAboutIcn}>
              <CiMoneyCheck1 size={30} color="#39b54a" />
            </div>
            <div className={styles.oneAboutTxt}>
              <h1>Bonusları vaxtında istifadə edin</h1>
              <p>
              Bonuslar hesablanan tarixindən etibarən 12 ay ərzində istifadə edilə bilər.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AloeAbout;
