import axiosWithAuth from '../utils/axiosAuth';

export const FETCH_DATA_START = 'FETCH_DATA_START';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

export const getFriends = () => dispatch => {
    dispatch({ type: FETCH_DATA_START });
    axiosWithAuth()
      .get('http://localhost:5000/api/friends')
      .then(res => {
          console.log(res.data)
        dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data });
      })
      .catch(err => {
        console.log(err.response);
        dispatch({ type: FETCH_DATA_FAILURE, payload: err.response });
      });
  };