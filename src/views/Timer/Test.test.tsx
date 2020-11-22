import React from "react";
import { shallow } from "enzyme";

import Timer from "./Timer";

describe("Timer", () => {
  let container: any;

  beforeEach(() => (container = shallow(<Timer />)));

  it("should render  3 Divs", () => {
    expect(container.find("div").length).toEqual(3);
  });
  it("should render a allButtons Div", () => {
    expect(container.find(".allButtons").length).toEqual(1);
  });
  it("should render 3 Button Component", () => {
    expect(container.find("Button").length).toEqual(3);
  });
  
});
