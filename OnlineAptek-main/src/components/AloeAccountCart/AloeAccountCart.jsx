import React from "react";
import styles from "./AloeAccountCart.module.scss";
import { useNavigate } from "react-router";
import AloeAccount from "../AloeAccount/AloeAccount";

const AloeAccountCart = () => {
  const navigate = useNavigate();
  const goRegister = () => {
    navigate("/register");
  };
  return (
    <div className={styles.aloeAccountCart}>
      <div className={styles.container}>
        <div className={styles.aloeAccountCartLogo}>
          <img src="https://my.aloe.az/assets/auth-image-ksAVJgD-.png" alt="Logo" />
        </div>
        <div className={styles.aloeAccountCartInpt}>
          <h1>Kabinetə giriş!</h1>
          <div className={styles.nmbrInp}>
            <p>Mobil nömrə*</p>
            <input
              type="text"
              pattern="\d*"
              placeholder="+994(XX)XXX-XX-XX"
              maxLength="13"
              onInput={(e) =>
                (e.target.value = e.target.value.replace(/[^0-9,]/g, ""))
              }
            />
          </div>
          <div className={styles.passwordInp}>
            <p>Şifrə*</p>
            <input
              type="password"
              maxLength="16"
              minLength="8"
              placeholder="********"
            />
          </div>
          <div className={styles.accountBtn}>
            <button>Davam et</button>
            <p>
              Hesabınız yoxdur? <span onClick={goRegister}>Qeydiyyat</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AloeAccountCart;
