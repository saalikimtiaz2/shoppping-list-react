import * as types from "../types";

const initialState = {
  id: "",
  itemName: "",
  quantity: "",
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case types.ADD_ITEM:
      return {
        ...state,
        id: payload.id,
        itemName: payload.item,
        quantity: payload.quantity,
      };
  }
}
