// IMPORT PACKAGE REFERENCES

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// IMPORT PROJECT REFERENCES

import { TopicsDisplay } from './TopicsDisplay';
import { LoadingIndicator } from '../shared/LoadingIndicator';


// COMPONENT

const Topics = (props) => (
    <Fragment>
    aaaaaaa
        {
            props.fetched &&
            <div className="mt-4">
                <TopicsDisplay className="m-2" />
            </div>
        }
        {
            <LoadingIndicator busy={props.fetching || props.adding} />
        }
    </Fragment>
);


// CONFIGURE COMPONENT PROP TYPES

Topics.propTypes = {
    fetching: PropTypes.bool,
    fetched: PropTypes.bool,
    adding: PropTypes.bool,
    added: PropTypes.bool
};


// CONFIGURE REACT REDUX

const mapStateToProps = state => {

    const { fetching, fetched } = state.topics;
    const { adding, added } = state.favoriteQuote;

    return {
        fetching,
        fetched,
        adding,
        added
    };
};

const hoc = connect(mapStateToProps)(Topics);


// EXPORT COMPONENT

export { hoc as Topics };