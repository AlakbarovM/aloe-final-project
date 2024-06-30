import React, { useState } from "react";
import styles from "./Header.module.scss";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-scroll";
import Healthy from "../Healthy/Healthy";
import { useNavigate } from "react-router";
import Login from "../../Login/Login";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
const navigate = useNavigate()
const goAloeCart  = () => {
  navigate('/PrivilegeHeader')
}
const goAccount  = () => {
  navigate('/account')
}

  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.headLogo}>
          <img src="https://aloe.az/src/assets/icons/Logo.svg" alt="Logo" />
        </div>
        <nav className={styles.headNav}>
          <div className={styles.headNavBtn}>
            <button onClick={goAloeCart} className={styles.pri}>Privilege Club</button>
            <button onClick={goAccount} className={styles.aloe}>Aloe + karti</button>
          </div>
          <ul className={`${isOpen ? styles.open : ""}`}>
            <li>
              <Link to="healthy" smooth={true} duration={500} onClick={toggleMenu}>ÇEŞİDLƏR</Link>
            </li>
            <li>
              <Link to="Brends" smooth={true} duration={500} onClick={toggleMenu}>BRENDLƏR</Link>
            </li>
            <li>
              <Link to="AptekMaps" smooth={true} duration={500} onClick={toggleMenu}>APTEKLƏR</Link>
            </li>
            <li>
              <Link to="Footor" smooth={true} duration={500} onClick={toggleMenu}>ƏLAQƏ</Link>
            </li>
            <li>
              <button className={styles.pri}>Privilege Club</button>
            </li>
            <li>
              <button className={styles.aloe}>Aloe + karti</button>
            </li>
          </ul>
          <div className={styles.hamburger} onClick={toggleMenu}>
            <RxHamburgerMenu className={styles.hamg} style={{ cursor: "pointer" }} size={22} />
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
