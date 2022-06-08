import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { plus, minus } from "./store/count";
// 11:15까지 실습 진행해 주세요
export default function ReduxTest2() {
  const count = useSelector((state) => state.count);
  return (
    <div style={{ width: 200, margin: "auto" }}>
      <div>{count}</div>
      ReduxTest2
      <ReduxTest3 />
    </div>
  );
}

function ReduxTest3() {
  return (
    <div>
      ReduxTest3
      <ReduxTest5 />
    </div>
  );
}

function ReduxTest5() {
  const dispatch = useDispatch();
  const p = () => {
    dispatch(plus(5));
  };
  const m = () => {
    dispatch(minus(3));
  };
  return (
    <div>
      ReduxTest5
      <div>
        <button onClick={p}>{"+"}</button>
        <button onClick={m}>{"-"}</button>
      </div>
    </div>
  );
}
