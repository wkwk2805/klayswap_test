// actionTypes
export const PLUS = "count/PLUS";
export const MINUS = "count/MINUS";

// actions
export const plus = (number) => {
  return { type: PLUS, number: number };
};

export const minus = (number) => {
  return { type: MINUS, number: number };
};

// reducer
const initialState = 0;

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case PLUS:
      return state + action.number;
    case MINUS:
      return state - action.number;
    default:
      return state;
  }
}

// 40분까지 실습 진행해주세요
