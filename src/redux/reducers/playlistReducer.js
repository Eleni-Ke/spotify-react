import { ADD_TO_PLAYLIST, REMOVE_FROM_PLAYLIST } from "../actions";

const initialState = {
  content: [],
};
const playlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_PLAYLIST:
      return {
        ...state,
        content: [...state.content, action.payload],
      };
    case REMOVE_FROM_PLAYLIST:
      return {
        ...state,
        content: state.content.filter((el, i) => el !== action.payload),
      };
    default:
      return state;
  }
};

export default playlistReducer;
