import React from "react";

import { render } from "enzyme";

import Avatar from "./index";

const avatar = {
  src: "http://dummyimage.com/600x600.jpg/ff4444/ffffffs",
  alt: "Avatar da lista de presente X"
};

describe("Component: Avatar", () => {
  describe("render", () => {
    it("must to render correctly", () => {
      const wrapper = render(<Avatar src={avatar.src} alt={avatar.alt} />);
      expect(wrapper.length).toEqual(1);

      expect(wrapper.prop("src")).toEqual(avatar.src);
      expect(wrapper.prop("alt")).toEqual(avatar.alt);
    });
  });
});
