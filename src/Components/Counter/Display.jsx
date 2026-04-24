import { create } from "zustand"
import { useContext } from "react"
import CounterStore from "../../Store/CounterStore"
import CounterContextProvider from "../Contexts/CounterContext"

const Display = () => {

    const counter = CounterStore(state => state.counter)
    const increment = CounterStore(state => state.actions.increment)
    const decrement = CounterStore(state => state.actions.decrement)
    const zero = CounterStore(state => state.actions.zero)

    const state = CounterStore()
    console.log(state)

    return(
        <div>
            <div>{counter}</div>
            <div>
                <button onClick={increment}>Plus</button>
                <button onClick={decrement}>Minus</button>
                <button onClick={zero}>Zero</button>
            </div>
        </div>
    );
};

export default Display;