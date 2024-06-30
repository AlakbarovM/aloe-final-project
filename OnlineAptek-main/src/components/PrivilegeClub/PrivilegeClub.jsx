import React, { useContext } from 'react';
import Slider from "react-slick";
import { TbPoint } from "react-icons/tb";
import styles from './PrivilegeClub.module.scss';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { LanguageContext } from '../../LanguageContext/LanguageContext'; // LanguageContext import edildi
import { useNavigate } from 'react-router';
import { Element } from 'react-scroll';
const PrivilegeClub = () => {
  const navigate = useNavigate()
  const goAccount = () => {
    navigate("/account")
  }

  const { language, texts } = useContext(LanguageContext); 

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: i => (
      <TbPoint className={`${styles.customPaging} ${styles.inactive}`} />
    )
  };

  return (
    <Element className={styles.privilegeClub} name="club" >
      <div className={styles.container}>
        <Slider {...settings}>
          <div>
            <img src="https://privilege.aloe.az/assets/banner-2-az-38797d37.png"  onClick={goAccount} alt="Banner" className={styles.blockImg} />
            <img src="https://privilege.aloe.az/assets/banner-3-mob-az-5b7bfcd4.png" onClick={goAccount} alt="Banner" className={styles.hiddenImg} />
          </div>
          <div>
            <img src="https://privilege.aloe.az/assets/banner-3-az-6d104d43.png" onClick={goAccount} alt="Banner" className={styles.blockImg} />
            <img src="https://privilege.aloe.az/assets/banner-1-mob-az-211abe26.png" alt="Banner" className={styles.hiddenImg} />
          </div>
          <div>
            <img src="https://privilege.aloe.az/assets/banner-1-az-bab661e1.png" onClick={goAccount} alt="Banner" className={styles.blockImg} />
            <img src="https://privilege.aloe.az/assets/banner-4-mob-az-5f523306.png" onClick={goAccount} alt="Banner" className={styles.hiddenImg} />
          </div>
        </Slider>
      </div>
    </Element>
  );
};

export default PrivilegeClub;
