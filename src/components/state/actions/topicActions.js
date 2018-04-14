// IMPORT SERVICES

import { fetchTopics } from '../../../services/TopicService';


// FETCH TOPICS ACTION NAMES

export const FETCH_TOPICS = 'FETCH_TOPICS';
export const FETCH_TOPICS_PENDING = 'FETCH_TOPICS_PENDING';
export const FETCH_TOPICS_FULFILLED = 'FETCH_TOPICS_FULFILLED';
export const FETCH_TOPICS_REJECTED = 'FETCH_TOPICS_REJECTED';


// ACTIONS GENERATORS

const fetchTopicsAction = () => ({
    type: FETCH_TOPICS,
    payload: fetchTopics()
});


// EXPORT ACTIONS

export { fetchTopicsAction as fetchTopics };