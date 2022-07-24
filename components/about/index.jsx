import React from "react";
import styles from "./About.module.css";
import ME from "../../assets/me-about.jpg";
// import { FaAward } from "react-icons/fa";
// import { FiUsers } from "react-icons/fi";
// import { VscFolderLibrary } from "react-icons/vsc";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className={styles.about__me}>
          <div className={styles.about__me__image}>
            <Image src={ME} alt="about me" />
          </div>
        </div>
        <div className={styles.about__content}>
          {/* <div className={styles.about__cards}>
            <article className={styles.about__card}>
              <FaAward className={styles.about__icon} />
              <h5>Experience</h5>
              <small>3+ Year Working</small>
            </article>
            <article className={styles.about__card}>
              <FiUsers className={styles.about__icon} />
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>
            <article className={styles.about__card}>
              <VscFolderLibrary className={styles.about__icon} />
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </article>
          </div> */}
          <p>
            A person who passionate about learning, likes to collaborate,
            interested in logic and problem solving. Experience in making
            applications based on web and mobile using JavaScript, React, etc.
            Able to take part in the development to deployment process and ready
            to adapt to new technologies.
          </p>
          <Link href="#contact">
            <a className="btn btn-primary">Let's Talk</a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
