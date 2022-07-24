import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import styles from "./Header.module.css";

const HeaderSocials = () => {
  return (
    <div className={styles.header__socials}>
      <a href="https://www.linkedin.com/in/panjie97/" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/Panji97" target="_blank">
        <BsGithub />
      </a>
    </div>
  );
};

export default HeaderSocials;
