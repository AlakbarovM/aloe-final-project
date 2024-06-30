import React from 'react'
import styles from './AloeCart.module.scss'
import { BsCart4 } from "react-icons/bs";
import { BsPostcardHeart } from "react-icons/bs";
import { FaRegHandPeace } from "react-icons/fa6";

const AloeCart = () => {
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
    <div className={styles.aloeCart}>
        <div className={styles.container}>
            <div className={styles.aloeCartOne}>
                <BsCart4 size={50} color='#5C897C'/>
                <p>Apteklərdə aliş-veriş edin</p>
            </div>
            <div className={styles.aloeCartOne}>
                <BsPostcardHeart size={50} color='#5C897C'/>
                <p>
                  Kartı saytda və ya <span onClick={() => copyToClipboard("+994(99) 204-44-00")} style={{cursor: "pointer", textDecoration: "none"}}>994(99) 204-44-00</span> nömrəsi ilə əlaqə saxlayaraq rəsmiləşdirin
                </p>
            </div>
            <div className={styles.aloeCartOne}>
                <FaRegHandPeace size={50} color='#5C897C'/>
                <p>Fərdi təkliflərdən yararlanın</p>
            </div>
        </div>
    </div>
  )
}

export default AloeCart;
