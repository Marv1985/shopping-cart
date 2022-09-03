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
        <img src={gowRagnarok} alt="pic" />
        <div>
          <div>£50</div>
          <Buttons />
        </div>
      </div>
      <div className="label">
        <img src={ps5} alt="pic" />
        <div>
          <div>£500</div>
          <Buttons />
        </div>
      </div>
      <div className="label">
        <img src={xbox} alt="pic" />
        <div>
          <div>£500</div>
          <Buttons />
        </div>
      </div>
      <div className="label">
        <img src={godofwar} alt="pic" />
        <div>
          <div>£50</div>
          <Buttons />
        </div>
      </div>
      <div className="label">
        <img src={last1} alt="pic" />
        <div>
          <div>£50</div>
          <Buttons />
        </div>
      </div>
      <div className="label">
        <img src={last2} alt="pic" />
        <div>
          <div>£50</div>
          <Buttons />
        </div>
      </div>
      <div className="label">
        <img src={uncharterd4} alt="pic" />
        <div>
          <div>£50</div>
          <Buttons />
        </div>
      </div>
      <div className="label">
        <img src={uncharterd5} alt="pic" />
        <div>
          <div>£50</div>
          <Buttons />
        </div>
      </div>
    </div>
  );
}

export default Cards;
