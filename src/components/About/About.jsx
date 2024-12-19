import React from 'react';
import styles from "./About.module.css";
import { getImageUrl } from "../../utils"

export const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img
                 src={getImageUrl("about/aboutImage.png")}
                 alt=""
                 className={styles.aboutImage}
                 />
                 <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Frontend</h3>
                            <p>Developer with experience modern UI design.
                            Crafting intuitive and responsive user interfaces.
                            </p>
                        </div>
                 </li>
                 <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Backend</h3>
                            <p>Building scalable and efficient server-side solutions.
                            </p>
                        </div>
                 </li>
                 <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/UiIcon.png")} alt="UI icon" />
                        <div className={styles.aboutItemText}>
                            <h3>UI Designer</h3>
                            <p>UI Designer focused on creating intuitive,
                                 user-friendly, and visually appealing interfaces. 
                            </p>
                        </div>
                 </li>
                 </ul>
            </div>
        </section>
    )
}
