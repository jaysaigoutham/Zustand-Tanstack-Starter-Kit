import { useCounter } from "./useCounter.js";

const CustomHookCounter = () => {
  const counter = useCounter();
  const leftPressedCounter = useCounter();
  const rightPressedCounter = useCounter();

  return (
    <div>
      <div>{counter.value}</div>

      <button
        onClick={() => {
          counter.increase();
          leftPressedCounter.increase();
        }}
      >
        plus {leftPressedCounter.value}
      </button>
      
      <button
        onClick={() => {
          counter.decrease;
          rightPressedCounter.increase;
        }}
      >
        minus {rightPressedCounter.value}
      </button>
      <button onClick={counter.zero}>zero</button>
    </div>
  );
};

export default CustomHookCounter;
