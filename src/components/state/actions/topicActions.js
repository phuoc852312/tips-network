// IMPORT SERVICES

import { fetchTopics, pickTopic } from '../../../services/TopicService';


// FETCH TOPICS ACTION NAMES

export const FETCH_TOPICS = 'FETCH_TOPICS';
export const FETCH_TOPICS_PENDING = 'FETCH_TOPICS_PENDING';
export const FETCH_TOPICS_FULFILLED = 'FETCH_TOPICS_FULFILLED';
export const FETCH_TOPICS_REJECTED = 'FETCH_TOPICS_REJECTED';

export const PICK_TOPIC = 'PICK_TOPIC';
export const PICK_TOPIC_PENDING = 'PICK_TOPIC_PENDING';
export const PICK_TOPIC_FULFILLED = 'PICK_TOPIC_FULFILLED';
export const PICK_TOPIC_REJECTED = 'PICK_TOPIC_REJECTED';

// ACTIONS GENERATORS

const fetchTopicsAction = () => ({
    type: FETCH_TOPICS,
    payload: fetchTopics()
});

const pickTopicAction = (topic) => {
    return dispatch => {
        return dispatch({
            type: PICK_TOPIC,
            payload: pickTopic(topic)
        }).then(() => dispatch(fetchTopicsAction()));
    };
};


// EXPORT ACTIONS

export { fetchTopicsAction as fetchTopics };
export { pickTopicAction as pickTopic };