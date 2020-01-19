import React from "react";

import { render } from "enzyme";

import Alert from "./index";

describe("Component: Alert", () => {
  describe("render", () => {
    it("must to render correctly", () => {
      const wrapper = render(<Alert message="Resultado não encontrado" />);
      expect(wrapper.length).toEqual(1);

      const message = wrapper.find("span");
      expect(message.length).toEqual(1);
      expect(message.text()).toEqual("Resultado não encontrado");
    });
  });
});
