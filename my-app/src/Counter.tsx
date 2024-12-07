import React, { useState } from "react";

const App: React.FC = () => {
  let [count, setCount] = useState<number>(0);
  let increment = () => {
    setCount(count + 1);
  };
  return (
    <>
      <h1>{count}</h1>
      <button onClick={increment}>INC</button>
    </>
  );
};

export default App;
