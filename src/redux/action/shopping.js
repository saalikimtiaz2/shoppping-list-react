import * as types from "../types";

export const addItem = (data) => (dispatch) => {
  dispatch({
    type: types.ADD_ITEM,
    payload: data,
  });
};
