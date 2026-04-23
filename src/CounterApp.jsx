import { useCounter } from "./Store/useCounterStore.js";
import Display from "./Components/Counter/Display.jsx";

const CounterApp = () => {
  const countDuplicate = useCounter();

  return (
    <div>
      <div>{countDuplicate}</div>
      <Display />
    </div>
  );
};

export default CounterApp;
