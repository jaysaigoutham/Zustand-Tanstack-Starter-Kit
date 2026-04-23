import { useCounter, useCounterControls } from "../../Store/useCounterStore.js";

const Display = () => {
    const counter = useCounter();
    const { increment, decrement, zero } = useCounterControls();

    return (
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