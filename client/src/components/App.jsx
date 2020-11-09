import React from "react";
import styles from "../modules/app.module.css";
import { Link } from "react-router-dom";

const App = (props) => {


  return (
    <div className={styles.appContainer}>
      <div className={styles.title}>
        <div className={styles.titleName}>Michael Albert</div>
        <div className={styles.personalLinks}>
          <div className={styles.individualLink}><a href="https://www.linkedin.com/in/mta630/" target="_blank"><i className="fab fa-linkedin-in"></i></a></div>
          <div className={styles.individualLink}><a href="https://www.instagram.com/shmooby89/" target="_blank"><i className="fab fa-instagram"></i></a></div>
          <div className={styles.individualLink}><a href="https://www.github.com/mta630/" target="_blank"><i className="fab fa-github"></i></a></div>
        </div>
        <div className={styles.siteLinks}>
          <div className={styles.siteLink}>About Me</div>
          <div className={styles.siteLink}>Projects</div>
          <div className={styles.siteLink}>Contact Me</div>
        </div>
      </div>
    </div>
  );
};

export default App;
