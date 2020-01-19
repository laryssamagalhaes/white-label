import React from "react";

import { PropsType, OptionsType } from "./types";

import styles from "./index.module.css";

const Select = ({ options, onchange }: PropsType) => {
  return (
    <select className={styles.select} onChange={e => onchange(e.target.value)}>
      {options.map((option: OptionsType, index: number) => (
        <option key={index} value={option.value}>
          {option.text}
        </option>
      ))}
    </select>
  );
};

export default Select;
