import React from "react";

import { render } from "enzyme";

import Nav from "./index";

describe("Component: Nav", () => {
  describe("render", () => {
    it("must to render correctly", () => {
      const wrapper = render(<Nav />);
      expect(wrapper.length).toEqual(1);
    });
  });
});
