import axiosWithAuth from '../utils/axiosAuth';

export const SAVE_FRIEND_START = 'SAVE_FRIEND_START';
export const SAVE_FRIEND_SUCCESS = 'SAVE_FRIEND_SUCCESS';
export const SAVE_FRIEND_FAILURE = 'SAVE_FRIEND_FAILURE';

export const saveFriend = friend => dispatch => {
    dispatch({ type: SAVE_FRIEND_START });
    return axiosWithAuth()
      .post('http://localhost:5000/api/friends', friend)
      .then(res => {
        dispatch({ type: SAVE_FRIEND_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: SAVE_FRIEND_FAILURE, payload: err.response });
      });
  };