import React from "react";
import { useState, useContext } from "react";
import { ItemList } from "../../ItemList";

const datas = [];

function Buttons() {
  const [item, setItem] = useState(0);
  const [items, setItems] = useContext(ItemList);

  function handleIncrement() {
    if (item < 10) {
      setItem((prevCount) => prevCount + 1);
    }
  }

  function handleDecrement() {
    if (item > 0) {
      setItem((prevCount) => prevCount - 1);
    }
  }

  function handleChange(e) {
    setItem(Number(e.target.value));
  }

  function onSubmit(e) {
    e.preventDefault();
    datas.push(item);
    setItem(0);
    let data = datas.reduce((totalTask, tasks) => totalTask + tasks, 0);
    console.log(data);
    setItems(data);
  }

  return (
    <div className="buttons">
      <form onSubmit={onSubmit}>
        QTY:
        <input
          value={item}
          onChange={handleChange}
          type="number"
          min="0"
          max="10"
          required
        />
        <button
          type="button"
          data-testid="inc"
          onClick={handleIncrement}
          className="adjust"
        >
          +
        </button>
        <button
          type="button"
          data-testid="dec"
          onClick={handleDecrement}
          className="adjust"
        >
          -
        </button>
        <div>
          <button type="submit" data-testid="add" className="submit">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default Buttons;
