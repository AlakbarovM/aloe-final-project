import React from "react";
import styles from "./PrivilegeFootor.module.scss";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-scroll";

const PrivilegeFootor = () => {
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        alert("Telefon numarası panoya kopyalandı!");
      })
      .catch((err) => {
        console.error("Panoya kopyalama işlemi başarısız oldu: ", err);
      });
  };

  return (
    <div className={styles.privilegeFootor}>
      <div className={styles.container}>
        <div className={styles.fotTop}>
          <Link to="club" duration={500} smooth={true}>
            <img
              style={{ cursor: "pointer" }}
              src="https://privilege.aloe.az/assets/logo-light-ea681877.svg"
              alt="Logo"
            />
          </Link>
          <div className={styles.centerFotTop}>
            <p style={{ cursor: "pointer" }}>
              <Link to="club" duration={500} smooth={true}> İstifadə qaydaları</Link>
            </p>
            <p style={{ cursor: "pointer" }}>
              <Link to="club" duration={500} smooth={true}> Kartın aktivləşdirilməsi</Link>
            </p>
          </div>
          <p>
            <span onClick={() => copyToClipboard("+994(99) 204-44-00")} style={{ cursor: "pointer" }}>+994(99) 204-44-00</span> / 09:00-20:00
          </p>
        </div>
      </div>
      <div className={styles.fotbottom}>
        <div className={styles.fotBottomTxt}>
          <p>© Aloe 2021 - 2024. Müəllif hüquqları qorunu</p>
        </div>
        <div className={styles.fotBottomIcn}>
          <a href="https://www.facebook.com/">
            <FaFacebookF size={22} color="white" />
          </a>
          <a href="https://www.instagram.com/">
            <FaInstagram size={25} color="white" />
          </a>
          <a href="https://www.youtube.com/">
            <FaYoutube size={25} color="white" />
          </a>
          <a href="https://az.linkedin.com/">
            <FaLinkedinIn size={25} color="white" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default PrivilegeFootor;
