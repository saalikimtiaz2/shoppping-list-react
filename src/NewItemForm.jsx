import React, { useState } from "react";
import { addItem } from "./redux/action/shopping";
import { nanoid } from "nanoid";

export default function NewItemForm() {
  const [item, setItem] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleItemChange = (e) => {
    setItem(e.target.value);
  };
  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleSubmit = () => {
    const payload = {
      id: nanoid(),
      itemName: item,
      quantity: quantity,
    };
    addItem(payload);
  };

  return (
    <div>
      <h2>Shopping List</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="item">Item Name: </label>
        <input value={item} onChange={handleItemChange} placeholder="Name" />
        <input
          value={quantity}
          onChange={handleQuantityChange}
          placeholder="Quantity"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
