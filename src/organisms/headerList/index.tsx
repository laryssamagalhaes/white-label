import React from "react";

import styles from "./index.module.css";

import Avatar from "../../components/avatar";

const HeaderList: React.FC = () => {
  const imageAlt = "Imagem da lista de presente O bebê nerd";

  return (
    <section className={styles.headerList}>
      <img
        alt={imageAlt}
        className={styles.headerListBackgroundImage}
        src="https://ugc.kn3.net/i/760x/http://farm3.static.flickr.com/2136/3530914192_351a05bf8b_o.jpg"
      />
      <div className={styles.headerListContainerAvatar}>
        <Avatar
          alt={imageAlt}
          src="https://ugc.kn3.net/i/760x/http://farm3.static.flickr.com/2136/3530914192_351a05bf8b_o.jpg"
        />
      </div>

      <div className="u-flexColumn u-top20">
        <h1 className={styles.headerListTitle}>O bebê nerd</h1>
        <p className={styles.headerListItensDescription}>
          57 items com o total de R$660,00.
        </p>
        <span className={styles.headerListDescription}>
          Você poderá dar um nome exclusivo e escolher uma foto depois.
        </span>
      </div>
    </section>
  );
};

export default HeaderList;
