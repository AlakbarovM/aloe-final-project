import React from "react";
import { FiPhone } from "react-icons/fi";
import styles from "./Footor.module.scss";
import { CiMail } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { Element } from "react-scroll";
const Footor = () => {
  return (
    <Element className={styles.footor} name="Footor" >
      <div className={styles.container}>
        <div className={styles.topFot}>
          <div className={styles.leftTopFot}>
            <h1>Əlaqə</h1>
            <p>
              Hər hansı bir sualınız varsa, bu formadan istifadə edərək bizimlə <br />
              əlaqə saxlaya və ya e-poçta yaza bilərsiniz
            </p>
            <div className={styles.contactFot}>
              <a href="">
                <FiPhone size={20}/>
                *3103
              </a>
              <a href="https://mail.ru/">
                <CiMail size={20}/>
                info@aloe.az
              </a>
            </div>
          </div>
            <div className={styles.iconsFot}>
              <div className={styles.icon}>
                <a href="https://www.facebook.com/">

                <CiFacebook size={22} color="white" />
                </a>
              </div>
              <div className={styles.icon}> 
                <a href="https://www.instagram.com/">

                <FaInstagram size={20} color="white" />
                </a>
              </div>
              <div className={styles.icon}>
                <a href="https://www.youtube.com/"> 

              <FaYoutube size={20} color="white" />
                </a>
              </div>
              <div className={styles.icon}>
                <a href="https://az.linkedin.com/">

              <FaLinkedin size={20} color="white" />
                </a>
              </div>
            </div>
        </div>
      </div>
        <div className={styles.bottomFot}>
            <p>©Aloe 2024. Müəllif hüquqları qorunur</p>
            <p><span>Murad Ələkbərov</span> tərəfindən hazırlanmışdır</p>
        </div>
    </Element>
  );
};

export default Footor;
