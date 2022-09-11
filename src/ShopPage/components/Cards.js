import React from "react";
import "/home/marv/the-odin-project/react-projects/shopping-cart/src/ShopPage/ShopPage.css";
import ps5 from "/home/marv/the-odin-project/react-projects/shopping-cart/src/Images/ps5.jpg";
import xbox from "/home/marv/the-odin-project/react-projects/shopping-cart/src/Images/xbox.jpg";
import godofwar from "/home/marv/the-odin-project/react-projects/shopping-cart/src/Images/gow-ragnarok.webp";
import gowRagnarok from "/home/marv/the-odin-project/react-projects/shopping-cart/src/Images/gow4.jpg";
import last1 from "/home/marv/the-odin-project/react-projects/shopping-cart/src/Images/last1.jpg";
import last2 from "/home/marv/the-odin-project/react-projects/shopping-cart/src/Images/last2.jpeg";
import uncharterd4 from "/home/marv/the-odin-project/react-projects/shopping-cart/src/Images/unchartered4.jpg";
import uncharterd5 from "/home/marv/the-odin-project/react-projects/shopping-cart/src/Images/unchartered5.jpeg";
import Buttons from "./Buttons";

function Cards() {
  return (
    <div className="cards">
      <div className="label">
        <img data-testid="1" src={gowRagnarok} alt="gowRagnarok" />
        <div>
          <div>£50</div>
          <Buttons />
        </div>
      </div>
      <div className="label">
        <img data-testid="2" src={ps5} alt="ps5" />
        <div>
          <div>£500</div>
          <Buttons />
        </div>
      </div>
      <div className="label">
        <img data-testid="3" src={xbox} alt="xbox" />
        <div>
          <div>£500</div>
          <Buttons />
        </div>
      </div>
      <div className="label">
        <img data-testid="4" src={godofwar} alt="godofwar" />
        <div>
          <div>£50</div>
          <Buttons />
        </div>
      </div>
      <div className="label">
        <img data-testid="5" src={last1} alt="last1" />
        <div>
          <div>£50</div>
          <Buttons />
        </div>
      </div>
      <div className="label">
        <img data-testid="6" src={last2} alt="last2" />
        <div>
          <div>£50</div>
          <Buttons />
        </div>
      </div>
      <div className="label">
        <img data-testid="7" src={uncharterd4} alt="uncharterd4" />
        <div>
          <div>£50</div>
          <Buttons />
        </div>
      </div>
      <div className="label">
        <img data-testid="8" src={uncharterd5} alt="uncharterd5" />
        <div>
          <div>£50</div>
          <Buttons />
        </div>
      </div>
    </div>
  );
}

export default Cards;
