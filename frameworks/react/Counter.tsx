"use client";

import { renderLog } from "@/utils/log";
import { useEffect, useState } from "react";

export default function Counter() {
  renderLog("Counter");
  // tuple [get, set]
  const [count, setCount] = useState(1);
  const double = count * 2;

  useEffect(() => {
    console.log(`[count] changed to: ${count}`);
  }, [count]);

  function increment() {
    setCount(count + 1);
  }

  return (
    <div className="counter">
      <p>
        {count} ({double})
      </p>
      <button onClick={() => increment()}>
        <span>Increment</span>
      </button>
    </div>
  );
}
