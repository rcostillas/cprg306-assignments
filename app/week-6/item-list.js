"use client";
import { useState, useEffect } from "react";
import Item from "./item";

export default function ItemList({ items }) {
  const [sortedItems, setSortedItems] = useState(items);
  const [sortBy, setSortBy] = useState("name");

  function sortItems() {
    let sorted;
    const itemsCopy = [...items];

    if (sortBy === "name") {
      sorted = [...itemsCopy].sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "category") {
      sorted = [...itemsCopy].sort((a, b) =>
        a.category.localeCompare(b.category)
      );
    } else if (sortBy === "groupedCategory") {
      sorted = [...sortedItems].sort((a, b) => {
        const categoryComparison = a.category.localeCompare(b.category);
        if (categoryComparison === 0) {
          return a.name.localeCompare(b.name);
        } else {
          return categoryComparison;
        }
      });
    }
    setSortedItems(sorted);
  }

  useEffect(() => {
    sortItems();
  }, [sortBy]);

  return (
    <main className="bg-slate-950">
      <div className="m-3">
        <label htmlFor="sort">Sort By: </label>
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
        {/* <button
          onClick={() => setSortBy("groupedCategory")}
          className={`${
            sortBy === "groupedCategory" ? "bg-orange-500" : "bg-orange-700"
          } p-1 m-2 w-28`}
        >
          Grouped Category
        </button> */}
        {/* <label className="absolute top-20 left-240 text-gray-600 text-xs italic">
          ←"Grouped Category" is an optional extra challenge
        </label> */}

        <div className="flex flex-col">
          {sortedItems.map((item) => (
            <Item key={item.id} {...item} />
          ))}
        </div>
      </div>
    </main>
  );
}
