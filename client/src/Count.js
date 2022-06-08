import React, { useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0);
  const plus = () => {
    setCount(count + 1);
  };
  return (
    <div>
      {count}
      <button onClick={plus}>+</button>
    </div>
  );
};

export default Count;
