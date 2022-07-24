import React from "react";
import styles from "./Experience.module.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className={styles.experience__frontend}>
          <h3>Frontend Development</h3>
          <div className={styles.experience__content}>
            <article className={styles.experience__details}>
              <BsPatchCheckFill className={styles.experience__details__icon} />
              <div>
                <h4>HTML & CSS</h4>
                {/* <small className="text-light">Experienced</small> */}
              </div>
            </article>
            <article className={styles.experience__details}>
              <BsPatchCheckFill className={styles.experience__details__icon} />
              <div>
                <h4>JavaScript</h4>
                {/* <small className="text-light">Experienced</small> */}
              </div>
            </article>
            <article className={styles.experience__details}>
              <BsPatchCheckFill className={styles.experience__details__icon} />
              <div>
                <h4>React </h4>
                {/* <small className="text-light">Experienced</small> */}
              </div>
            </article>
            <article className={styles.experience__details}>
              <BsPatchCheckFill className={styles.experience__details__icon} />
              <div>
                <h4>React Native</h4>
                {/* <small className="text-light">Experienced</small> */}
              </div>
            </article>
            <article className={styles.experience__details}>
              <BsPatchCheckFill className={styles.experience__details__icon} />
              <div>
                <h4>Next JS</h4>
                {/* <small className="text-light">Experienced</small> */}
              </div>
            </article>
            <article className={styles.experience__details}>
              <BsPatchCheckFill className={styles.experience__details__icon} />
              <div>
                <h4>Bootstrap</h4>
                {/* <small className="text-light">Experienced</small> */}
              </div>
            </article>
          </div>
        </div>

        <div className={styles.experience__backend}>
          <h3>Backend Development</h3>
          <div className={styles.experience__content}>
            <article className={styles.experience__details}>
              <BsPatchCheckFill className={styles.experience__details__icon} />
              <div>
                <h4>Node JS</h4>
                {/* <small className="text-light">Experienced</small> */}
              </div>
            </article>
            <article className={styles.experience__details}>
              <BsPatchCheckFill className={styles.experience__details__icon} />
              <div>
                <h4>Firebase</h4>
                {/* <small className="text-light">Intermediate</small> */}
              </div>
            </article>
            <article className={styles.experience__details}>
              <BsPatchCheckFill className={styles.experience__details__icon} />
              <div>
                <h4>Express JS</h4>
                {/* <small className="text-light">Experienced</small> */}
              </div>
            </article>
            <article className={styles.experience__details}>
              <BsPatchCheckFill className={styles.experience__details__icon} />
              <div>
                <h4>MongoDB</h4>
                {/* <small className="text-light">Experienced</small> */}
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
