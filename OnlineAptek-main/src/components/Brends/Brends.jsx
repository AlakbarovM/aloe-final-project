import React, { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styles from "./Brends.module.scss";
import { FaAnglesRight } from "react-icons/fa6";
import { FaAnglesLeft } from "react-icons/fa6";
import { Element } from "react-scroll";
const Brends = () => {
  const [index, setIndex] = useState(0);

  const slides = [
    <div key="1" className={styles.slide}>
      <img src="https://aloe.az/src/assets/icons/brands/1.svg" alt="Logo1" />
      <img src="https://aloe.az/src/assets/icons/brands/2.svg" alt="Logo2" />
      <img src="https://aloe.az/src/assets/icons/brands/3.svg" alt="Logo3" />
      <img src="https://aloe.az/src/assets/icons/brands/4.svg" alt="Logo4" />
      <img src="https://aloe.az/src/assets/icons/brands/5.svg" alt="Logo5" />
      <img src="https://aloe.az/src/assets/icons/brands/6.svg" alt="Logo6" />
      <img src="https://aloe.az/src/assets/icons/brands/7.svg" alt="Logo7" />
      <img src="https://aloe.az/src/assets/icons/brands/8.svg" alt="Logo8" />
    </div>,
    <div key="2" className={styles.slide}>
      <img src="https://aloe.az/src/assets/icons/brands/9.svg" alt="Logo9" />
      <img src="https://aloe.az/src/assets/icons/brands/10.svg" alt="Logo10" />
      <img src="https://aloe.az/src/assets/icons/brands/11.svg" alt="Logo11" />
      <img src="https://aloe.az/src/assets/icons/brands/12.svg" alt="Logo12" />
      <img src="https://aloe.az/src/assets/icons/brands/13.svg" alt="Logo13" />
      <img src="https://aloe.az/src/assets/icons/brands/14.svg" alt="Logo14" />
      <img src="https://aloe.az/src/assets/icons/brands/15.svg" alt="Logo15" />
      <img src="https://aloe.az/src/assets/icons/brands/16.svg" alt="Logo16" />
    </div>,
    <div key="3" className={styles.slide}>
      <img src="https://aloe.az/src/assets/icons/brands/17.svg" alt="Logo17" />
      <img src="https://aloe.az/src/assets/icons/brands/18.svg" alt="Logo18" />
      <img src="https://aloe.az/src/assets/icons/brands/19.svg" alt="Logo19" />
      <img src="https://aloe.az/src/assets/icons/brands/20.svg" alt="Logo20" />
      <img src="https://aloe.az/src/assets/icons/brands/21.svg" alt="Logo21" />
      <img src="https://aloe.az/src/assets/icons/brands/22.svg" alt="Logo22" />
    </div>,
  ];

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <Element className={styles.brend} name="Brends" >
      <div className={styles.container}>
        <div className={styles.topBrend}>
          <h1>
            Aloe+ apteklərində <br />
            500-dən artıq brend təqdim olunur
          </h1>
        </div>
        <div className={styles.bottomBrend}>
          <TransitionGroup>
            <CSSTransition key={index} timeout={5} classNames="slide">
              {slides[index]}
            </CSSTransition>
          </TransitionGroup>
        </div>
        <div className={styles.buttons}>
          <button onClick={prevSlide}>
            <FaAnglesLeft />
            Əvvəlki
          </button>
          <button onClick={nextSlide}>
            Sonrakı <FaAnglesRight />
          </button>
        </div>
      </div>
    </Element>
  );
};

export default Brends;
