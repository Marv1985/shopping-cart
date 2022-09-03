import React from "react";
import { useState, useContext } from "react";
import { ItemList } from "../../ItemList";

function Buttons() {
  const [task, setTask] = useState([]);
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
    let tempArr = task;
    tempArr.push(item);
    setTask(tempArr.reduce((totalTask, tasks) => totalTask + tasks, 0));
    setItem(0);
    console.log(...task);
    setItems(task);
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
        <button type="button" onClick={handleIncrement} className="adjust">
          +
        </button>
        <button type="button" onClick={handleDecrement} className="adjust">
          -
        </button>
        <div>
          <button type="submit" className="submit">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default Buttons;
