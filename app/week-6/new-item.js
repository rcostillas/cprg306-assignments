"use client";
import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("Produce");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleQuantityChange = (event) => {
    const enteredQty = event.target.value;
    const convertNumber = Number(enteredQty);
    setQuantity(convertNumber);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const item = { name, quantity, category };
    onAddItem(item);
    setName("");
    setQuantity("1");
    setCategory("Produce");
  };

  return (
    <main className="flex justify-center w-full">
      <form
        className="text-black mb-2 p-2 max-w-sm w-full"
        onSubmit={handleSubmit}
      >
        <div className="mb-2">
          <label>
            <input
              className="w-full mt-0 border-2 border-gray-300 p-2 rounded-lg font-sans"
              type="text"
              placeholder="Item name"
              value={name}
              onChange={handleNameChange}
              required
            />
          </label>
        </div>

        <div className="flex justify-between">
          <label>
            <input
              className="w-22 mt-2 border-2 border-gray-300 p-2 rounded-lg font-sans"
              type="number"
              min="1"
              max="99"
              value={quantity}
              onChange={handleQuantityChange}
              required
            />
          </label>

          <select
            className="mt-2 border-2 border-gray-300 p-2 rounded-lg font-sans"
            value={category}
            onChange={handleCategoryChange}
            required
          >
            <optgroup label="Category" disabled></optgroup>
            <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="bakery">Bakery</option>
            <option value="meat">Meat</option>
            <option value="frozenFoods">Frozen Foods</option>
            <option value="cannedGoods">Canned Goods</option>
            <option value="dryGoods">Dry Goods</option>
            <option value="beverages">Beverages</option>
            <option value="snacks">Snacks</option>
            <option value="household">Household</option>
            <option value="other">Other</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full mt-4 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        >
          +
        </button>
      </form>
    </main>
  );
}
