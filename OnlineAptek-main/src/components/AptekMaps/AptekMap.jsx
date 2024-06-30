import React, { useState } from 'react';
import styles from './AptekMap.module.scss';
import { BiMap } from 'react-icons/bi';
import { IoCallOutline } from 'react-icons/io5';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { Element } from 'react-scroll';

const AptekMap = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // Şu anki görüntülenen bileşenin indeksi

  const data = [
    {
      location: 'Bakı ş./Xəzər r.,Buzovna qəsəbəsi, Rаsim İmanov küçəsi 24',
      phone: '099 204-44-12',
      hours: '09:00 - 23:00'
    },
    {
      location: 'Bakı ş./Yeni Yasamal r.,Ceyhun Hacıbeyov kucəsi 12',
      phone: '099 204-44-13',
      hours: '10:00 - 23:00'
    },
    {
      location: 'Bakı ş./Xəzər r.,Hacı Zeynalabdin Tağıyev kucəsi 29',
      phone: '099 204-44-14',
      hours: '10:00 - 22:00'
    },
    {
      location: 'Bakı ş./Xəzər r.,Güneş qəsəbəsi, Niyazi küçəsi 21',
      phone: '099 204-44-15',
      hours: '08:00 - 20:00'
    },
    {
      location: 'Bakı ş./Yeni Yasamal r.,Şekil qəsəbəsi, Şeyx Sənan küçəsi 5',
      phone: '099 204-44-16',
      hours: '07:00 - 21:00'
    },
    {
      location: 'Bakı ş./Xəzər r.,Hacı Zeynalabdin Tağıyev kucəsi 29',
      phone: '099 204-44-17',
      hours: '10:00 - 22:00'
    },
    {
      location: 'Bakı ş./Xəzər r.,Güneş qəsəbəsi, Niyazi küçəsi 21',
      phone: '099 204-44-18',
      hours: '08:00 - 20:00'
    },
    {
      location: 'Bakı ş./Yeni Yasamal r.,Şekil qəsəbəsi, Şeyx Sənan küçəsi 5',
      phone: '099 204-44-19',
      hours: '07:00 - 21:00'
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? data.length - 2 : prevIndex - 2));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === data.length - 2 ? 0 : prevIndex + 2));
  };

  return (
    <Element className={styles.apk} name="AptekMaps" >
      <div className={styles.container}>
        <div className={styles.topApk}>
          <h1>Aloe+apteklərini tapın</h1>
        </div>
        <div className={styles.bottomApk}>
          <div className={styles.oneApk}>
            <p><BiMap color="green" size={17} /> {data[currentIndex].location}</p>
            <span><IoCallOutline color="green" size={17} /> {data[currentIndex].phone}</span>
            <span><AiOutlineClockCircle color="green" size={17} /> {data[currentIndex].hours}</span>
          </div>
          <div className={styles.buttons}>
            <button onClick={handlePrev}>Önceki</button>
            <button onClick={handleNext}>Sonraki</button>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default AptekMap;
