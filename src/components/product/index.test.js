import React from "react";

import { render } from "enzyme";

import Product from "./index";
import styles from "./index.module.css";

const product = {
  name: "Water",
  price: "1.28",
  image: "http://dummyimage.com/600x600.jpg/ff4444/ffffffs"
};

describe("Component: Product", () => {
  describe("render", () => {
    it("must to render correctly", () => {
      const wrapper = render(
        <Product
          name={product.name}
          price={product.price}
          image={product.image}
        />
      );
      expect(wrapper.length).toEqual(1);

      const name = wrapper.find(`.${styles.productName}`);
      expect(name.length).toEqual(1);
      expect(name.text()).toEqual(product.name);

      const price = wrapper.find(`.${styles.productPrice}`);
      expect(price.length).toEqual(1);
      expect(price.text()).toEqual(`R$${product.price}`);

      const image = wrapper.find("img");
      expect(image.length).toEqual(1);
      expect(image.prop("src")).toEqual(product.image);
    });
  });
});
