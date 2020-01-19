import React from "react";

import styles from "./index.module.css";

const Nav: React.FC = () => {
  return (
    <nav className={styles.nav}>
      <div>Voltar</div>
      <div>Logo cliente</div>
      <button className={styles.navLogin}>Login</button>
    </nav>
  );
};

export default Nav;
