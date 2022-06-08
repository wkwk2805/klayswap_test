import React, { useState } from "react";

const Test = () => {
  const [count, setCount] = useState(0);
  const plus = () => {
    setCount(count + 1);
  };
  const minus = () => {
    setCount(count - 1);
  };
  return (
    <div style={{ width: 200, margin: "50px auto" }}>
      <div>{count}</div>
      Test
      <Test2 plus={plus} minus={minus} />
    </div>
  );
};

const Test2 = (props) => {
  return (
    <div>
      Test2
      <Test3 {...props} />
    </div>
  );
};

const Test3 = (props) => {
  return (
    <div>
      Test3
      <Test4 {...props} />
    </div>
  );
};

const Test4 = (props) => {
  return (
    <div>
      Test4
      <div>
        <button onClick={props.plus}>{"+"}</button>
        <button onClick={props.minus}>{"-"}</button>
      </div>
    </div>
  );
};

export default Test;
