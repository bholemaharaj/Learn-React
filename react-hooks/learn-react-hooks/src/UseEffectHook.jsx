import { useState, useEffect } from "react";
import "./App.css";

function UseEffectHook() {
  const [resourceType, setResourceType] = useState("posts");
  const [items, setItems] = useState([]);

  useEffect(() => {
    console.log(`Resource type changed to ${resourceType}`);
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => setItems(json));

    return () => {
      setItems([]);
      console.log(`Clean up for ${resourceType}`);
    };
  }, [resourceType]);

  return (
    <>
      <div>
        <h1>{resourceType}</h1>
        <button className="counter" onClick={() => setResourceType("posts")}>
          Posts
        </button>
        <button className="counter" onClick={() => setResourceType("users")}>
          Users
        </button>
        <button className="counter" onClick={() => setResourceType("comments")}>
          Comments
        </button>
      </div>
      <hr />
      <ul>
        {items.map((item) => {
          return (
            <figure>
              <figcaption>Item {item.id}</figcaption>
              <pre key={item.id}>
                <code>{JSON.stringify(item)}</code>
              </pre>
            </figure>
          );
        })}
      </ul>
    </>
  );
}

export default UseEffectHook;
