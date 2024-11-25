import { createEffect, createSignal } from "solid-js";
import { renderLog } from "~/utils/log";

export default function Counter() {
  renderLog("Counter");
  const [count, setCount] = createSignal(1);
  const double = () => count() * 2;

  createEffect(() => {
    console.log(`[count] changed to: ${count()}`);
  }, [count]);

  function increment() {
    setCount(count() + 1);
  }

  return (
    <div class="counter">
      <p>
        {count()} ({double()})
      </p>
      <button class="increment" onClick={() => increment()} type="button">
        Increment
      </button>
    </div>
  );
}
