import { beforeEach, describe, expect, it } from "vitest";
import CounterStore from "./CounterStore";

beforeEach(() => {
  CounterStore.setState({ counter: 0 });
});

describe('counter store', () => {

    it('initial state is 0', () => {
        expect(CounterStore.getState().counter).toBe(0)
    })

    it('increment increases counter by 1', () => {
    CounterStore.getState().actions.increment()
    expect(CounterStore.getState().counter).toBe(1)
  })

  it('decrement decreases counter by 1', () => {
    CounterStore.getState().actions.decrement()
    expect(CounterStore.getState().counter).toBe(-1)
  })

   it('zero resets counter to 0', () => {
    CounterStore.getState().actions.increment()
    CounterStore.getState().actions.increment()
    CounterStore.getState().actions.zero()
    expect(CounterStore.getState().counter).toBe(0)
  })
});
