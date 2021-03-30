import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import FunctionalComponent from "../components/FunctionalComponent";

let container = null;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders with or without a phrase", () => {
  act(() => {
    render(<FunctionalComponent />, container);
  });
  expect(container.textContent).toBe("Hello there!");

  act(() => {
    render(<FunctionalComponent phrase="Hello, Jenny!" />, container);
  });
  expect(container.textContent).toBe("Hello, Jenny!");

  act(() => {
    render(<FunctionalComponent phrase="Hello, Margaret!" />, container);
  });
  expect(container.textContent).toBe("Hello, Margaret!");
});
