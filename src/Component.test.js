import React from "react";
import { shallow } from "enzyme";
import Component from "./Component";

describe("<Component />", () => {
  it("renders properly", () => {
    const wrapper = shallow(<Component />);
    console.log(wrapper.debug());
  });
});
