import React, { useEffect, useState } from "react";

const practice = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Counter:</h1>
      <p>Current Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Add</button>
      <button onClick={() => setCount(count - 1)}>Sub</button>
    </div>
  );
};

export default practice;
