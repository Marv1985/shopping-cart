import React from "react";
import { render, screen } from "@testing-library/react";
import MainSection from "/home/marv/the-odin-project/react-projects/shopping-cart/src/HomePage/components/MainSection.js";
import HomeHeader from "./components/HomeHeader";

describe("The image component", () => {
  it("alt & src contains correct value", () => {
    render(<MainSection />);
    const testImage = document.querySelector("img");
    expect(testImage.alt).toContain("god-of-war");
    expect(testImage.src).toContain("http://localhost/gow.webp");
  });
});

describe("Header component", () => {
  it("renders correct heading", () => {
    const { getByRole } = render(<HomeHeader />);
    expect(getByRole("heading", { name: "GAME" }).textContent).toMatch(/GAME/i);
  });
});
