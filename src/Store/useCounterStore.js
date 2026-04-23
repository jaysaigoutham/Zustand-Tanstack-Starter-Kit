import CounterStore from "./CounterStore.jsx";

export const useCounter = () => CounterStore((state) => state.counter);
export const useCounterControls = () => CounterStore((state) => state.actions);