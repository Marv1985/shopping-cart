import React from "react";
import { render } from "@testing-library/react";
import Basket from "./Basket";

describe("Basket component", () => {
  it("renders correct heading", () => {
    const { getByRole } = render(<Basket />);
    expect(getByRole("heading", { name: "Total - £" }).textContent).toMatch(
      /Total - £/i
    );
  });

  it("renders correct heading", () => {
    const { getByRole } = render(<Basket />);
    expect(getByRole("heading", { name: "Quantity -" }).textContent).toMatch(
      /Quantity -/i
    );
  });
});
