export const SET_USERNAME = "SET_USERNAME";
export const ADD_TO_PLAYLIST = "ADD_TO_PLAYLIST";
export const REMOVE_FROM_PLAYLIST = "REMOVE_FROM_PLAYLIST";
export const GET_SONGS = "GET_SONGS";

export const addToPlaylistAction = (songSelected) => {
  return {
    type: ADD_TO_PLAYLIST,
    payload: songSelected,
  };
};

export const removeFromPlaylistAction = (i) => {
  return {
    type: REMOVE_FROM_PLAYLIST,
    payload: i,
  };
};

export const setUsernameAction = (name) => {
  return {
    type: SET_USERNAME,
    payload: name,
  };
};

export const getSongsActionAsync = (query) => {
  return async (dispatch) => {
    try {
      let res = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=" + query
      );
      if (res.ok) {
        let fetchedSongs = await res.json();
        console.log(fetchedSongs);
        dispatch({
          type: GET_SONGS,
          payload: fetchedSongs,
        });
      } else {
        console.log("error fetching songs");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
