import React from "react";
import styles from "./LoadingOverlay.module.css";

const LargeIndicator = () => {
  return (
    <div className={styles["large-indicator"]}>
      <div className={styles.indicator}></div>
      <div
        className={styles.indicator}
        style={{ animationDelay: "0.3s" }}
      ></div>
      <div
        className={styles.indicator}
        style={{ animationDelay: "0.6s" }}
      ></div>
    </div>
  );
};

export default LargeIndicator;
