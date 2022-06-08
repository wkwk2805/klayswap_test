// actionTypes
export const SET_BALANCE = "token/SET_BALANCE";
export const SET_CHANGE_VALUE = "token/SET_CHANGE_VALUE";

// actions
export const setBalance = (account, klay, kEth) => {
  return { type: SET_BALANCE, account, klay, kEth };
};

export const setChangeKEth = (klay, kEth) => {
  return { type: SET_CHANGE_VALUE, changeKlay: klay, changeKEth: kEth };
};

// reducer
const initialState = {
  klay: 0,
  kEth: 0,
  account: "",
  changeKlay: 0,
  changeKEth: 0,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_BALANCE:
      return {
        ...state,
        account: action.account,
        klay: action.klay,
        kEth: action.kEth,
      };
    case SET_CHANGE_VALUE:
      return {
        ...state,
        changeKlay: action.changeKlay,
        changeKEth: action.changeKEth,
      };
    default:
      return state;
  }
}
