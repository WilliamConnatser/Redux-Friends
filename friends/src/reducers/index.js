import {LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE} from '../actions/login';

import {FETCH_DATA_START, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE} from '../actions/fetch';

const initialState = {
    friends: [],
    loggingIn: false,
    error: null,
    fetchingFriends: false,
    savingFriends: false,
    updatingFriend: false,
    deletingFriend: false,
}

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_START:
            return {
                ...state,
                error: null,
                fetchingFriends: false,
                loggingIn: true
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                loggingIn: false
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                error: action.payload,
                loggingIn: false
            }
        case FETCH_DATA_START:
            return {
                ...state,
                error: null,
                fetchingFriends: true
            };
        case FETCH_DATA_SUCCESS:
            console.log(action.payload)
            return {
                ...state,
                error: null,
                fetchingData: false,
                friends: action.payload
            };
        case FETCH_DATA_FAILURE:
            console.log(action.payload)
            return {
                ...state,
                fetchingData: false,
                error: action.payload
            };
        default:
            return state;
    }
}