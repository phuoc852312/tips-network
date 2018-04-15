// IMPORT PACKAGE REFERENCES

import * as firebase from './FirebaseService';


// HELPER FUNCTIONS

// const getTimeStamp = () => Math.floor(+new Date() / 1000 | 0);


// SERVICES

// export const addToFavoriteQuotes = (quote) => {

//     quote.timestamp = getTimeStamp();

//     return new Promise((resolve, reject) => {
//         firebase
//             .addToFavoriteQuotes(quote)
//             .then(() => resolve(quote))
//             .catch(error => reject(error));
//     });
// };


export const fetchTopics = () => {
    return new Promise((resolve, reject) => {
        firebase
            .fetchTopics()
            .then(data => {
                console.log('hello fetchTopics');
                if (data === null || data.val() === null) {
                    return resolve([]);
                }

                const topics = [];

                data.forEach(topic => {
                    topics.push({
                        id: topic.key,
                        ...topic.val()
                    });
                });

                return resolve(topics);
            })
            .catch(error => {
                console.log(error);
                return reject(error);
            });
    });
};


export const pickTopic = (topic) => {
    return new Promise((resolve, reject) => {
        firebase
            .pickTopic(topic)
            .then(() => resolve())
            .catch(error => {
                console.log(error);
                return reject(error);
            });
    });
};