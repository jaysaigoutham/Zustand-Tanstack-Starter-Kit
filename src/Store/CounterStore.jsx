import { create } from "zustand";

const CounterStore = create((set) => ({
  counter: 0,
  actions: {
    increment: () => set((state) => ({ counter: state.counter + 1 })),
    decrement: () => set((state) => ({ counter: state.counter - 1 })),
    zero: () => set((state) => ({ counter: 0 })),
  },
}));

export default CounterStore;
