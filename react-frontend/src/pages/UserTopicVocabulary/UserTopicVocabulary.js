import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import allActions from '../../actions';
import './UserTopicVocabulary.css';
import UserItemTopicVocabulary from '../../components/UserItemTopicVocabulary/userItemTopicVocabulary';

class UserTopicVocabulary extends Component {

    constructor(props){
        super(props);
    }

    componentDidMount() {
        this.props.onUserGetAllTopicVocas()
        this.props.onUserGetAllGrammar()
    }

    showItemTopicVoca (topics) {
        var result = null;
        if(topics.length > 0 ){
            result = topics.map((topic, key) => {
                return (
                    <UserItemTopicVocabulary 
                        key={key}
                        id={topic.id}
                        name={topic.name}
                        image={topic.image}
                    />
                )
            })
        }
        return result;
    }

    render() {
        return (
            <div className='container-fluid main-content-user-topic'>
                <div className='row'>
                    {this.showItemTopicVoca(this.props.userVocabularyTopicReducer)}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        userVocabularyTopicReducer: state.userVocabularyTopicReducer
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onUserGetAllTopicVocas: () => {
            dispatch(allActions.userVocabularyTopicAction.actUserFetchVocaTopicsRequest())
        },
        onUserGetAllGrammar: () => {
            dispatch(allActions.userGrammarAction.actUserFetchAllGrammarRequest())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (UserTopicVocabulary);
