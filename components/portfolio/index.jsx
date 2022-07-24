import React from "react";
import styles from "./Portfolio.module.css";
import IMG1 from "../../assets/portfolio1.png";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.png";
import Image from "next/image";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Nyimas Antam",
    github: "https://github.com/Panji97/bankGold",
  },
  {
    id: 2,
    image: IMG2,
    title: "My Doctor",
    github: "https://github.com/Panji97/MyDoctor-RN",
  },
  {
    id: 3,
    image: IMG3,
    title: "My Doctor",
    github: "https://github.com/Panji97/Server-Staycation",
    demo: "https://server-staycation-panjisk.herokuapp.com/admin/dashboard",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Course & Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className={styles.portfolio__items}>
              <div className={styles.portfolio__items__image}>
                <Image src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className={styles.portfolio__items__cta}>
                <a href={github} target="_blank" className="btn btn-primary">
                  Github
                </a>
                {demo && (
                  <a href={demo} target="_blank" className="btn ">
                    Live Demo
                  </a>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
