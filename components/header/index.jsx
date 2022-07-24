import React from "react";
import styles from "./Header.module.css";
import CTA from "./CTA";
import ME from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";
import Image from "next/image";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container header__container">
        <h4>Hello I'm</h4>
        <h1>Panji Setyo Kurniawan</h1>
        <h4 className="text-align">Frontend Developer</h4>
        <CTA />
        <div className={styles.container__wrapper}>
          <HeaderSocials />
          <div className={styles.me}>
            <Image src={ME} alt="me" />
          </div>
          <a href="#contact" className={styles.scroll__down}>
            Scroll Down
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
