// IMPORT ACTION CONSTANTS

import {
    PICK_TOPIC_PENDING,
    PICK_TOPIC_FULFILLED,
    PICK_TOPIC_REJECTED
} from '../actions/topicActions';


// INITIALIZE STATE

const initialState = {
    removed: false,
    removing: false,
    failed: false
};


// REDUCER

export const PickTopicReducer = (state = initialState, action) => {
    switch (action.type) {
        case PICK_TOPIC_PENDING:        
            return {
                ...state,
                removed: false,
                removing: true,
                failed: false
            };
        case PICK_TOPIC_FULFILLED:
            return {
                ...state,
                removed: true,
                removing: false,
                failed: false
            };
        case PICK_TOPIC_REJECTED:
            return {
                ...state,
                removed: false,
                removing: false,
                failed: true
            };
        default:
            return state;
    }
};