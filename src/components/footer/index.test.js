import React from "react";

import { render } from "enzyme";

import Footer from "./index";

describe("Component: Footer", () => {
  describe("render", () => {
    it("must to render correctly", () => {
      const wrapper = render(<Footer />);
      expect(wrapper.length).toEqual(1);
    });
  });
});
