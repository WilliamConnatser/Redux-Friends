import {LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE} from '../actions/login';

import {FETCH_DATA_START, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE} from '../actions/fetch';

import {SAVE_FRIEND_START, SAVE_FRIEND_SUCCESS, SAVE_FRIEND_FAILURE} from '../actions/saveFriend';

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
            return {
                ...state,
                error: null,
                fetchingData: false,
                friends: action.payload
            };
        case FETCH_DATA_FAILURE:
            return {
                ...state,
                fetchingData: false,
                error: action.payload
            };
            case SAVE_FRIEND_START:
            return {
                ...state,
                error: null,
                savingFriends: true
            };
        case SAVE_FRIEND_SUCCESS:
            return {
                ...state,
                error: null,
                savingFriends: false,
                friends: action.payload
            };
        case SAVE_FRIEND_FAILURE:
            return {
                ...state,
                savingFriends: false,
                error: action.payload
            };
        default:
            return state;
    }
}