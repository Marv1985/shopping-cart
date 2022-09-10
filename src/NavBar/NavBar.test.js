import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { ItemList } from "../ItemList";
import NavBar from "/home/marv/the-odin-project/react-projects/shopping-cart/src/NavBar/NavBar.js";

function MockNavbar({ value }) {
  return (
    <BrowserRouter>
      <ItemList.Provider value={[value]}>
        <NavBar />
      </ItemList.Provider>
    </BrowserRouter>
  );
}

describe("anchor tags are correct", () => {
  it("href tag for shop", async () => {
    render(<MockNavbar />);
    const link = screen.getByRole("link", { name: /shop/i });
    expect(link.getAttribute("href")).toBe("/shop");
  });
  it("href tag for basket", async () => {
    render(<MockNavbar />);
    const link = screen.getByRole("link", { name: /basket/i });
    expect(link.getAttribute("href")).toBe("/basket");
  });
  it("href tag for home", async () => {
    render(<MockNavbar />);
    const link = screen.getByRole("link", { name: /home/i });
    expect(link.getAttribute("href")).toBe("/");
  });
});

describe("useContext rendering a number", () => {
  it("useContext is rendering a number", () => {
    render(<MockNavbar value={[2000]} />);
    const data = screen.getByText(/Basket 2000/i);
    expect(data.textContent).toEqual("Basket 2000");
  });
});
