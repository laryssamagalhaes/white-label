import React from "react";

import { render, shallow } from "enzyme";

import Pagination from "./index";
import styles from "./index.module.css";

const pagination = {
  length: 2,
  currentPage: 1
};

describe("Component: Pagination", () => {
  describe("render", () => {
    it("must to render correctly", () => {
      const wrapper = render(
        <Pagination
          currentPage={pagination.currentPage}
          length={pagination.length}
          onclick={() => {}}
        />
      );
      expect(wrapper.length).toEqual(1);
    });
  });

  describe("click event", () => {
    it("should call onclick function when click", () => {
      const onClick = jest.fn();

      const wrapper = shallow(
        <Pagination
          currentPage={pagination.currentPage}
          length={pagination.length}
          onclick={onClick}
        />
      );
      expect(wrapper.length).toEqual(1);
      expect(onClick).not.toHaveBeenCalled();

      const button = wrapper.find("button").not(`.${styles.active}`);
      expect(button.length).toEqual(1);

      button.simulate("click");
      expect(onClick).toHaveBeenCalled();
      button.hasClass(styles.active);
    });
  });
});
