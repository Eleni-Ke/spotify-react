import { GET_SONGS } from "../actions";

const initialState = {
  stock: [],
};

const songReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SONGS:
      return {
        ...state,
        stock: action.payload,
      };

    default:
      return state;
  }
};
export default songReducer;
