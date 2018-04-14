// IMPORT ACTION CONSTANTS

import {
    FETCH_TOPICS_PENDING,
    FETCH_TOPICS_FULFILLED,
    FETCH_TOPICS_REJECTED,
} from '../actions/topicActions';


// INITIALIZE STATE

const initialState = {
    topics: [],
    fetching: false,
    fetched: false,
    failed: false
};


// REDUCER

export const FetchTopicsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TOPICS_PENDING:
            return {
                ...state,
                topics: [],
                fetching: true,
                fetched: false,
                failed: false
            };
        case FETCH_TOPICS_FULFILLED:
            return {
                ...state,
                topics: action.payload,
                fetching: false,
                fetched: true,
                failed: false
            };
        case FETCH_TOPICS_REJECTED:
            return {
                ...state,
                topics: [],
                fetching: false,
                fetched: false,
                failed: true
            };
        default:
            return state;
    }
};