import { useState } from "react";


export const CounterPrevState = () => {
  const [count, setCount] = useState(0);
  console.log("Current count when component renders: ", count);
  
  const handleCount = () => {
    setCount((prev) => {
      console.log("Current count when handleCount is called second time: ", prev);
      return prev + 1;});
    setCount((prev) => {
      console.log("Current count when handleCount is called third time: ", prev);
      return prev + 5;
    });
    setCount((prev) => {
      console.log("Current count when handleCount is called fourth time: ", prev);
      return prev + 10;
    });
  }

  const handleResetCount = () => {
    console.log("Resetting count to 0");
    console.clear();
    setCount(0);
  };
  return (
    <div>
      <h2>Counter: {count}</h2>
      <div className="button-row">
        <button className="custom-button" onClick={handleCount}>
          Increment
        </button>
        <button className="custom-button" onClick={handleResetCount}>
          Reset
        </button>
      </div>
    </div>
  );
};

