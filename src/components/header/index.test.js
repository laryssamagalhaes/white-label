import React from "react";

import { render } from "enzyme";

import Header from "./index";

describe("Component: Header", () => {
  describe("render", () => {
    it("must to render correctly", () => {
      const wrapper = render(<Header />);
      expect(wrapper.length).toEqual(1);

      const link = wrapper.find("a");
      expect(link.length).toEqual(1);
      expect(link.prop("href")).toEqual("https://www.todocartoes.com.br/");

      const image = wrapper.find("img");
      expect(image.length).toEqual(1);
      expect(image.prop("alt")).toEqual("Logo da empresa Todo Cartões");
    });
  });
});
