import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { ItemList } from "../../ItemList";
import Buttons from "/home/marv/the-odin-project/react-projects/shopping-cart/src/ShopPage/components/Buttons.js";
import { ItemProvider } from "../../ItemList";

function MockShopPage({ value }) {
  return (
    <BrowserRouter>
      <ItemList.Provider value={[value]}>
        <ItemProvider>
          <Buttons />
        </ItemProvider>
      </ItemList.Provider>
    </BrowserRouter>
  );
}

describe("should render input", () => {
  it("default input loads", async () => {
    render(<MockShopPage />);
    const inputData = screen.getByDisplayValue(/0/i);
    expect(inputData.value).toBe("0");
  });

  it("change on input works", async () => {
    render(<MockShopPage />);
    const inputData = screen.getByDisplayValue(/0/i);
    fireEvent.change(inputData, { target: { value: "101" } });
    expect(inputData.value).toBe("101");
  });

  it("increment button works", async () => {
    render(<MockShopPage />);
    const inputData = screen.getByDisplayValue(/0/i);
    const buttonElement = screen.getByTestId("inc");
    fireEvent.change(inputData, { target: { value: "1" } });
    fireEvent.click(buttonElement);
    expect(inputData.value).toBe("2");
  });

  it("decrement button works", async () => {
    render(<MockShopPage />);
    const inputData = screen.getByDisplayValue(/0/i);
    const buttonElement = screen.getByTestId("dec");
    fireEvent.change(inputData, { target: { value: "1" } });
    fireEvent.click(buttonElement);
    expect(inputData.value).toBe("0");
  });

  it("Changes back to 0 when add button is clicked", async () => {
    render(<MockShopPage />);
    const inputData = screen.getByDisplayValue(/0/i);
    const buttonElement = screen.getByTestId("add");
    fireEvent.change(inputData, { target: { value: "1" } });
    fireEvent.click(buttonElement);
    expect(inputData.value).toBe("0");
  });
});
