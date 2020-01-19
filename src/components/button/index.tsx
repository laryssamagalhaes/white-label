import React from "react";

import styles from "./index.module.css";

type PropsType = {
  text: string;
  onclick?: () => void;
};

const Button = ({ text, onclick }: PropsType) => {
  return (
    <button className={styles.button} onClick={onclick}>
      {text}
    </button>
  );
};

export default Button;
