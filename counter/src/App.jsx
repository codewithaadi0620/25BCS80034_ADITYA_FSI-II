import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const updateCount = (value) => {
    setCount((previousValue) => previousValue + value);
  };

  return (
    <div style={{ textAlign: "center", padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1>Counter</h1>
      <p style={{ fontSize: "2rem", margin: "1rem 0" }}>{count}</p>
      <div>
        <button type="button" onClick={() => updateCount(-1)}>Decrease</button>
        <button type="button" onClick={() => updateCount(1)} style={{ marginLeft: "0.5rem" }}>
          Increase
        </button>
      </div>
    </div>
  );
}

export default App;
