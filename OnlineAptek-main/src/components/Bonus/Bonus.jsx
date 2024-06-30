import React from "react";
import styles from "./Bonus.module.scss";
const Bonus = () => {
  return (
    <div className={styles.bonusSec}>
      <div className={styles.container}>
        <div className={styles.bonusLogo}>
          <img src="https://aloe.az/src/assets/images/activate-card.png" alt="logo" />
        </div>
        <div className={styles.bonusText}>
          <h1>Bonus kartı</h1>
          <p>Aloe+ kartının aktivləşdirilməsi üçün</p>
          <div className={styles.bonusInp}>
            <input type="text" placeholder="Kart nömrəsi" />
            <button>Aktivləşdir</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bonus;
