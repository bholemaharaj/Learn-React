import { useState } from "react";
import "./App.css";

function Counter() {

const [count, setCount] = useState(0)

  function decrementCount(){
   setCount(() => count - 1);
  } 

  function incrementCount(){
   setCount(() => count + 1);
  }

  function decrementPrevStateCount(){
   setCount(prevCount => prevCount - 1);
   setCount(prevCount => prevCount - 1);
  } 

  function incrementPrevStateCount(){
   setCount(prevCount => prevCount + 1);
   setCount(prevCount => prevCount + 1);
  }

  return (
    <>
      <section id="center">
        <button className="counter" onClick={decrementCount} disabled={count <= 0}> - </button>
        <span className="counter">Counter is {count}</span>
        <button className="counter" onClick={incrementCount}>+</button>
      </section>
      <hr />
      <section id="center1">
        <button className="counter" onClick={decrementPrevStateCount} disabled={count <= 0}> - </button>
        <span className="counter">Counter with previous count is {count}</span>
        <button className="counter" onClick={incrementPrevStateCount}>+</button>
      </section>
    </>
  )
}
  export default Counter