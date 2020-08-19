import React from "react";
import styles from "../modules/app.module.css";
import { Link } from "react-router-dom";

const App = (props) => {
  return (
    <div className={styles.appContainer}>
      <div className={styles.title}>Michael Albert's Portfolio</div>
    </div>
  );
};

export default App;
