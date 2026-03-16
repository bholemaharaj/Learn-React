import { useState } from "react";


export const Counter = () => {
  const [count, setCount] = useState(0);
  
  const handleCount = () => {
    setCount(count + 1);
  }

  const handleResetCount = () => {
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

