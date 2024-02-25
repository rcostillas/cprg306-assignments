"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    //count = count + 1;
    //setCount(count + 1);
    //alert(count);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <p> Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
