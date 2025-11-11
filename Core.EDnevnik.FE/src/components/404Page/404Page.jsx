import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./404Page.module.css";

const Error404 = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.error_container}>
      <div className={styles.error_content}>
        <div className={styles.error_illustration}>
          <div className={styles.error_number}>404</div>
          <div className={styles.error_icon}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
              <path d="M12 17h.01" />
              <path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
            </svg>
          </div>
        </div>
        <div className={styles.error_text}>
          <h1 className={styles.error_title}>Страната не е пронајдена</h1>
          <p className={styles.error_description}>
            Страната која што ја побара не постои или е преместена.
          </p>
        </div>
        <div className={styles.error_actions}>
          <button
            className={styles.back_button}
            onClick={() => navigate(-1)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M19 12H5" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            <span>Назад</span>
          </button>
          <button
            className={styles.home_button}
            onClick={() => navigate("/")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            <span>Почетна страна</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Error404;
