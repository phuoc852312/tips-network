// IMPORT PACKAGE REFERENCES

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// IMPORT PROJECT REFERENCES

import { TopicCard } from './TopicCard';


// RENDER HELPERS

const renderListItems = topics => (
    topics.map((topic, index) => renderListItem(index, topic))
);

const renderListItem = (index, topic) => (
    <TopicCard key={index} index={index} topic={topic} />
);


// COMPONENT

const TopicsDisplay = (props) => (
    <div className="mx-5">
        {
            props.topics &&
            <div className="card-columns">
                {renderListItems(props.topics)}
            </div>
        }
        
    </div>
);

TopicsDisplay.propTypes = {
    topics: PropTypes.array
};

const mapStateToProps = state => {

    const { data } = state.topics;

    return {
        topics: data
    };
};

const hoc = connect(mapStateToProps)(TopicsDisplay);

export { hoc as TopicsDisplay };