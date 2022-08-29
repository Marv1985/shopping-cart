import React from "react";

function Buttons() {
  return (
    <div className="buttons">
      <form action="">
        QTY:
        <input type="text" pattern="^\d{1,2}$" />
        <button className="adjust">+</button>
        <button className="adjust">-</button>
        <div>
          <button className="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Buttons;
