import React from "react";
import styles from "./LoadingOverlay.module.css";

const LargeIndicator = () => {
  return (
    <div className={styles["loading-overlay"]}>
      <div className={styles["loading-content"]}>
        <div className={styles["spinner-wrapper"]}>
          <div className={styles.spinner}></div>
        </div>
        <div className={styles["loading-text"]}>
          <p className={styles["loading-title"]}>Вчитување...</p>
          <p className={styles["loading-subtitle"]}>Ве молиме почекајте</p>
        </div>
      </div>
    </div>
  );
};

export default LargeIndicator;
