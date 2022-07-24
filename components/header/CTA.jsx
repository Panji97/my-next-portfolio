import React from "react";
import styles from "./Header.module.css";
import Link from "next/link";

const CTA = () => {
  return (
    <div className={styles.cta}>
      <Link href="/Panji-setyo-kurniawan.pdf">
        <a className="btn" target="_blank">
          My CV
        </a>
      </Link>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
