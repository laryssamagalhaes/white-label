import React from "react";

import { render, shallow } from "enzyme";

import Button from "./index";

describe("Component: Button", () => {
  describe("render", () => {
    it("must to render correctly", () => {
      const wrapper = render(<Button text="Pesquisar" />);
      expect(wrapper.length).toEqual(1);
    });
  });

  describe("click event", () => {
    it("should call onclick function when click", () => {
      const onClick = jest.fn();

      const wrapper = shallow(<Button text="Pesquisar" onclick={onClick} />);
      expect(onClick).not.toHaveBeenCalled();

      const button = wrapper.find("button");
      button.simulate("click");
      expect(onClick).toHaveBeenCalled();
    });
  });
});
