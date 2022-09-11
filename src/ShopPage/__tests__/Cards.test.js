import React from "react";
import { render, screen, fireEvent, getByAltText, getByTestId } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { ItemList } from "../../ItemList";
import { ItemProvider } from "../../ItemList";
import Cards from "/home/marv/the-odin-project/react-projects/shopping-cart/src/ShopPage/components/Cards.js";

function MockPage({ value }) {
    return (
      <BrowserRouter>
        <ItemList.Provider value={[value]}>
          <ItemProvider>
          <Cards />
          </ItemProvider>
        </ItemList.Provider>
      </BrowserRouter>
    );
  }

  describe("Check that individual images render", () => {
      it("check individual img renders", async () => {
        render(<MockPage />);
        const testImage = screen.getByTestId('1');
        expect(testImage.alt).toContain("gowRagnarok");
        expect(testImage.src).toContain("http://localhost/gow4.jpg");
      }); 
      it("check individual img renders", async () => {
        render(<MockPage />);
        const testImage = screen.getByTestId('2');
        expect(testImage.alt).toContain("ps5");
        expect(testImage.src).toContain("http://localhost/ps5.jpg");
    });
    it("check individual img renders", async () => {
        render(<MockPage />);
        const testImage = screen.getByTestId('3');
        expect(testImage.alt).toContain("xbox");
        expect(testImage.src).toContain("http://localhost/xbox.jpg");
      }); 
    it("check individual img renders", async () => {
        render(<MockPage />);
        const testImage = screen.getByTestId('4');
        expect(testImage.alt).toContain("godofwar");
        expect(testImage.src).toContain("http://localhost/gow-ragnarok.webp");
    }); 
    it("check individual img renders", async () => {
        render(<MockPage />);
        const testImage = screen.getByTestId('5');
        expect(testImage.alt).toContain("last1");
        expect(testImage.src).toContain("http://localhost/last1.jpg");
    }); 
    it("check individual img renders", async () => {
        render(<MockPage />);
        const testImage = screen.getByTestId('6');
        expect(testImage.alt).toContain("last2");
        expect(testImage.src).toContain("http://localhost/last2.jpeg");
    }); 
    it("check individual img renders", async () => {
        render(<MockPage />);
        const testImage = screen.getByTestId('7');
        expect(testImage.alt).toContain("uncharterd4");
        expect(testImage.src).toContain("http://localhost/unchartered4.jpg");
    }); 
    it("check individual img renders", async () => {
        render(<MockPage />);
        const testImage = screen.getByTestId('8');
        expect(testImage.alt).toContain("uncharterd5");
        expect(testImage.src).toContain("http://localhost/unchartered5.jpeg");
    }); 
})
