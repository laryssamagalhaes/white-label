import React from "react";

import styles from "./index.module.css";

type PropsType = {
  length: number;
  currentPage: number;
  onclick: (page: number) => void;
};

const Pagination = ({ length, currentPage, onclick }: PropsType) => {
  const pages = new Array(length).fill(0);

  return (
    <div className={styles.pagination}>
      {pages.map((_, index) => {
        index = index + 1;
        return (
          <button
            key={index}
            className={currentPage === index ? styles.active : ""}
            onClick={() => onclick(index)}
          >
            {index}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
