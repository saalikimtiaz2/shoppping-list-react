import * as types from "../types";

const initialState = [];

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case types.ADD_ITEM:
      return [...state, payload];

    default:
      return state;
  }
}
