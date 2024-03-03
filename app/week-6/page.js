"use client";
import React, { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  return (
    <main className="bg-slate-950 p-2 m-2">
      <div className="max-w-sm w-full">
        <h2 className="text-3xl font-bold mb-4 ml-2">Shopping List</h2>
        <h3 className="text-xl font-bold ml-2">Add New Item</h3>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} />
      </div>
    </main>
  );
}
