import React from 'react';

import styles from "./Hero.module.css";
import {getImageUrl} from "../../../utils";

export const Hero = () => {
  return (<section className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>Hello, I'm Vini</h1>
          <p className={styles.description}>
          Fullstack Developer with experience in JavaScript, React, Node.js,
           Firebase, and Flutter. Building digital solutions with intuitive
            design and high performance.
          </p>
          <a href="mailto:vinicamolese777@gmail.com" className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src={getImageUrl("hero/heroImage.png")} alt='Hero image of me' className={styles.heroImg}/>
        <div className={styles.TopBlur} />
        <div className={styles.bottomBlur} />
        </section>
  )
}
