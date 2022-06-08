import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { plus, minus } from "./store/count";

const ReduxTest = () => {
  const count = useSelector((state) => state.count);
  return (
    <div style={{ width: 200, margin: "50px auto" }}>
      <div>{count}</div>
      ReduxTest
      <ReduxTest2 />
    </div>
  );
};

const ReduxTest2 = () => {
  return (
    <div>
      ReduxTest2
      <ReduxTest3 />
    </div>
  );
};

const ReduxTest3 = () => {
  return (
    <div>
      ReduxTest3
      <ReduxTest4 />
    </div>
  );
};

const ReduxTest4 = (props) => {
  const dispatch = useDispatch();
  return (
    <div>
      ReduxTest4
      <div>
        <button
          onClick={() => {
            dispatch(plus());
          }}
        >
          {"+"}
        </button>
        <button
          onClick={() => {
            dispatch(minus());
          }}
        >
          {"-"}
        </button>
      </div>
    </div>
  );
};

export default ReduxTest;
