// IMPORT PACKAGE REFERENCES

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// IMPORT PROJECT REFERENCES
import { fetchTopics } from '../state/actions/topicActions';
import { TopicCard } from './TopicCard';
import { LoadingIndicator } from '../shared/LoadingIndicator';


// COMPONENT

class Topics extends Component {
    
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log('fetchTopics');
        this.props.fetchTopics();
    }

    renderTopics() {
        return this.props
            .topics
            .map((topic, index) => this.renderTopic(index, topic));
    }

    renderTopic(index, topic) {
        return <TopicCard key={index} index={index} topic={topic} />;
    }

    render() {
        
        const busy = this.props.fetching;

        return (
            <div className="mx-5 mt-2">
                {
                    !busy && this.props.topics && 
                    <div className="card-columns">
                        {this.renderTopics()}
                    </div>
                }
                {
                    <LoadingIndicator busy={busy} />
                }
            </div>
        );
    }
}


// CONFIGURE COMPONENT PROP TYPES

Topics.propTypes = {
    fetchTopics: PropTypes.func,
    topics: PropTypes.array,
    fetching: PropTypes.bool,
    removing: PropTypes.bool
};



// CONFIGURE REACT REDUX

const mapStateToProps = state => {
    const { topics, fetching } = state.fetchTopics;
    // const { removing } = state.favoriteQuoteRemoval;
    
    return {
        topics,
        fetching,
        // removing,
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ fetchTopics }, dispatch);
};

const hoc = connect(mapStateToProps, mapDispatchToProps)(Topics);


// EXPORT COMPONENT

export { hoc as Topics };