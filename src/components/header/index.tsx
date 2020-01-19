import React from "react";

import logo from "../../images/todo-cartoes-logo.svg";

import styles from "./index.module.css";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <a href="https://www.todocartoes.com.br/">
        <img src={logo} alt="Logo da empresa Todo Cartões" />
      </a>
    </header>
  );
};

export default Header;
