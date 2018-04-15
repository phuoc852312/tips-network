// IMPORT PACKAGE REFERENCES

import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// IMPORT PROJECT REFERENCES

import { addToFavoriteTopics } from '../state/actions/favoriteQuoteActions';


// CONFIGURE COLORS

let bgColors = ['bg-light', 'bg-secondary bg-brand'];
let colors = ['text-dark', 'text-light'];


// COMPONENT

const TopicCard = (props) => {

    const index = props.index % 2;
    const className = `card mb-3 animated fadeIn ${bgColors[index]} ${colors[index]}`;
    const { topic } = props;
    const showTopics = topic.name !== 'No topic found';
    return (
        <div>
            {
                showTopics &&
                <div className={className} >
                    <div className="card-body">
                        <p className="card-text">{topic.name}</p>
                        <span className="fa-stack fa-lg float-right"
                            style={{ cursor: 'pointer' }}>
                            <i className="fa fa-circle fa-stack-2x button-icon"></i>
                            <i className={!topic.checked ? 'fa fas fa-check fa-stack-1x text-dark' : 'fa fas fa-times fa-stack-1x text-dark'}></i>
                        </span>
                    </div>
                </div>
            }
            {
                !showTopics &&
                <div className={className} style={{ maxWidth: '20rem' }}>
                    <div className="card-body">
                        <p className="card-text">{topic.name}</p>
                    </div>
                </div>
            }
        </div>
    );
};


// CONFIGURE COMPONENT PROP TYPES

TopicCard.propTypes = {
    topic: PropTypes.object,
    index: PropTypes.number,
    addToFavoriteTopics: PropTypes.func
};


// CONFIGURE REACT REDUX

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ addToFavoriteTopics }, dispatch);
};

const hoc = connect(null, mapDispatchToProps)(TopicCard);


// EXPORT COMPONENT

export { hoc as TopicCard };