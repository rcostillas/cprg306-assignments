"use client";
import { useState } from "react";
import Item from "./item";

export default function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState("name");
  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  return (
    <main className="bg-slate-950">
      <div className="mt-8">
        <label htmlFor="sort">Sort by:</label>
        <button
          onClick={() => setSortBy("name")}
          className={`${
            sortBy === "name" ? "bg-orange-500" : "bg-orange-700"
          } p-1 m-2 w-28`}
        >
          Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          className={`${
            sortBy === "category" ? "bg-orange-500" : "bg-orange-700"
          } p-1 m-2 w-28`}
        >
          Category
        </button>

        <ul>
          {sortedItems.map((item) => (
            <li key={item.id}>
              <Item
                id={item.id}
                name={item.name}
                quantity={item.quantity}
                category={item.category}
                onSelect={() => onItemSelect(item)}
              />
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
