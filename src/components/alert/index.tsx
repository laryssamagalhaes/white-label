import React from "react";

import styles from "./index.module.css";

type PropsType = {
  message: string;
};

const Alert = ({ message }: PropsType) => {
  return (
    <div className={styles.alert}>
      <span>{message}</span>
    </div>
  );
};

export default Alert;
