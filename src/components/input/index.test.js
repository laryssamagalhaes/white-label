import React from "react";

import { render, shallow } from "enzyme";

import Input from "./index";

describe("Component: Input", () => {
  describe("render", () => {
    it("must to render correctly", () => {
      const wrapper = render(
        <Input placeholder="Pesquisar" onchange={() => {}} />
      );
      expect(wrapper.length).toEqual(1);
    });
  });

  describe("onchange event", () => {
    it("should call onchange function when the input has onchange", () => {
      const onChange = jest.fn();

      const wrapper = shallow(
        <Input placeholder="Pesquisar" onchange={onChange} />
      );
      expect(wrapper.length).toEqual(1);
      expect(onChange).not.toHaveBeenCalled();

      wrapper.simulate("change", { target: { value: "A" } });

      setTimeout(() => {
        expect(onChange).toHaveBeenCalled();
      }, 300);
    });
  });
});
