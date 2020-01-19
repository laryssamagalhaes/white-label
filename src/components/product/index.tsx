import React from "react";

import { ProductType } from "./types";

import styles from "./index.module.css";

const Product = ({ name, image, price }: ProductType) => {
  return (
    <li className={styles.product}>
      <img
        className={styles.productImage}
        src={image}
        alt={`Imagem que representa o produto ${name}`}
      />
      <p className={styles.productName}>{name}</p>
      <p className={styles.productPrice}>{`R$${price}`}</p>
    </li>
  );
};

export default Product;
