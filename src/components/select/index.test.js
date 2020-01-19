import React from "react";

import { render, shallow } from "enzyme";

import { OrderByEnum } from "../../api";

import Select from "./index";

const options = [
  {
    value: OrderByEnum.ASC,
    text: "Preço - Mais baixo ao mais alto"
  },
  {
    value: OrderByEnum.DESC,
    text: "Preço - Mais alto ao mais baixo"
  }
];

describe("Component: Select", () => {
  describe("render", () => {
    it("must to render correctly", () => {
      const wrapper = render(<Select options={options} onchange={() => {}} />);
      expect(wrapper.length).toEqual(1);
    });
  });

  describe("onchange event", () => {
    it("should call onchange function when the select has onchange", () => {
      const onChange = jest.fn();

      const wrapper = shallow(<Select options={options} onchange={onChange} />);
      expect(wrapper.length).toEqual(1);
      expect(onChange).not.toHaveBeenCalled();

      wrapper.simulate("change", { target: { value: OrderByEnum.DESC } });
      expect(onChange).toHaveBeenCalled();
    });
  });
});
