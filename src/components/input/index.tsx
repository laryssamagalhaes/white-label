import React from "react";
import debounce from "lodash/debounce";

import styles from "./index.module.css";

const DEBOUNCE_TIME = 300;

type PropsType = {
  placeholder: string;
  onchange: (value: string) => void;
};

const Input = ({ placeholder, onchange }: PropsType) => {
  const handleOnChange = debounce(onchange, DEBOUNCE_TIME);

  return (
    <input
      className={styles.input}
      placeholder={placeholder}
      onChange={e => handleOnChange(e.target.value)}
    />
  );
};

export default Input;
