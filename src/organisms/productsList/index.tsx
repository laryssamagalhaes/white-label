import React from "react";

import styles from "./index.module.css";

import Product from "../../components/product";
import { ProductType } from "../../components/product/types";

import Alert from "../../components/alert";

const ProductsList = ({ products }: any) => {
  return (
    <div className="u-flexColumn">
      {products.length > 0 ? (
        <ul className={styles.productsList}>
          {products.map((product: ProductType, index: number) => {
            return (
              <Product
                key={index}
                name={product.name}
                image={product.image}
                price={product.price}
              />
            );
          })}
        </ul>
      ) : (
        <Alert message="Oops... Nenhum produto encontrado :( " />
      )}
    </div>
  );
};

export default ProductsList;
