import React, { useState } from "react";
import { connect } from "react-redux";
import { addItem } from "./redux/action/shopping";
import { nanoid } from "nanoid";

function NewItemForm({ addItem }) {
  const [item, setItem] = useState("");

  const handleItemChange = (e) => {
    setItem(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const payload = {
      id: nanoid(),
      name: item,
      checked: false,
    };
    addItem(payload);
    setItem("");
  };

  return (
    <div>
      <h2>Shopping List</h2>
      <form id="myForm" onSubmit={handleSubmit}>
        <label htmlFor="item">Item Name: </label>
        <input value={item} onChange={handleItemChange} placeholder="Name" />
      </form>
    </div>
  );
}

export default connect(null, { addItem })(NewItemForm);
