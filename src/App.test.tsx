import React from "react";
import { shallow } from "enzyme";

import App from "./App";
import Timer from "./views/Timer/Timer";

describe("App", () => {
  let container: any;

  beforeEach(() => (container = shallow(<App />)));

  it("should render 1 div", () => {
    expect(container.find("div").length).toEqual(1);
  });

  it("should render 1 span", () => {
    expect(container.find("span").length).toEqual(2);
  });

  it("should render the Timer Component", () => {
    expect(container.containsMatchingElement(<Timer />)).toEqual(true);
  });
});
