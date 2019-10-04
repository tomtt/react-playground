import React from "react";
import { create } from "react-test-renderer";
import Button from "../button";

describe("Button component", () => {
  test("it shows the expected text when clicked (testing the wrong way!)", () => {
    const component = create(<Button text="SUBSCRIBE TO BASIC" />);
    const instance = component.root;
    const button = instance.findByType("button");

    button.props.onClick();
    expect(button.props.children).toBe("PROCEED TO CHECKOUT");
  });
});

describe("Button component", () => {
  test("Matches the snapshot", () => {
    const button = create(<Button />);
    expect(button.toJSON()).toMatchSnapshot();
  });
});
