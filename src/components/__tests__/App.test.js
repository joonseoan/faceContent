import React from "react";
import { shallow } from "enzyme";

import App from "components/App";
import InputComponent from "components/InputComponent";
import InputList from "components/InputList";

let wrapped;

beforeEach(() => {
  wrapped = shallow(<App />);
});

it("shows a inputComponent", () => {
  expect(wrapped.find(InputComponent).length).toEqual(1);
});

it("shows a inputList", () => {
  expect(wrapped.find(InputList).length).toEqual(1);
});
