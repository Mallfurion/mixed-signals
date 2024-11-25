// @ts-nocheck
const counter = new Signal.State(0);
const isEven = new Signal.Computed(() => (counter.get() & 1) == 0);
const parity = new Signal.Computed(() => (isEven.get() ? "even" : "odd"));

// A library or framework defines effects based on other Signal primitives
declare function effect(cb: () => void): () => void;

effect(() => (element.innerText = parity.get()));

// Simulate external updates to counter...
setInterval(() => counter.set(counter.get() + 1), 1000);
