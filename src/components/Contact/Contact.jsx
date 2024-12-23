import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
    return (
        <footer id="contact" className={styles.container}>
            <div className={styles.text}>
                <h2>Contact</h2>
                <p>Feel free to reach out!</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/emailIcon.png")} alt="Emain Icon" />
                    <a href="mailto:vinicamolese777@gmail.com">vinicamolese777@gmail.com</a>
                </li>
                <li className={styles.link}>
                    <img
                    src={getImageUrl("contact/linkedinIcon.png")}
                    alt="Linkedin Icon" />
                    <a href="https://www.linkedin.com/in/vinicius-camolese/">linkedin.com/in/vinicius-camolese/</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
                    <a href="https://github.com/Kamolese">github.com/Kamolese</a>
                </li>
            </ul>
            </footer>
    );
};