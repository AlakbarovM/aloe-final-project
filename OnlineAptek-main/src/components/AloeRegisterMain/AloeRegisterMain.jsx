import React from 'react'
import styles from './AloeRegisterMain.module.scss'
import AloeRegister from '../AloeRegister/AloeRegister'

const AloeRegisterMain = () => {
  return (
    <div className={styles.aloeAccountCart}>
      <div className={styles.container}>
        <div className={styles.aloeAccountCartLogo}>
          <img src="https://my.aloe.az/assets/auth-image-ksAVJgD-.png" alt="Logo" />
        </div>
        <div className={styles.aloeAccountCartInpt}>
          <h1>Xoş gəldiniz!</h1>
          <div className={styles.passwordInp}>
            <p>Ad Soyad*</p>
            <input type="text" placeholder="Ad Soyad" />
          </div>
          <div className={styles.nmbrInp}>
            <p>Mobil nömrə*</p>
            <input
              type="tel"
              placeholder="+994(XX)XXX-XX-XX"
              maxLength="13"
              inputMode="numeric"
              pattern="\+994\d{2}\d{3}\d{2}\d{2}"
              onInput={(e) =>
                (e.target.value = e.target.value.replace(/[^0-9+()\-]/g, ""))
              }
            />
          </div>
          <div className={styles.passwordInp}>
            <p>Kartın nömrəsi *</p>
            <input
              type="tel"
              maxLength="16"
              minLength="8"
              placeholder="********"
              inputMode="numeric"
              pattern="\d*"
              onInput={(e) =>
                (e.target.value = e.target.value.replace(/[^0-9]/g, ""))
              }
            />
          </div>
          <div className={styles.accountBtn}>
            <button>Davam et</button>
            <p>
              Hesabın var? <span>Daxil ol</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AloeRegisterMain;
