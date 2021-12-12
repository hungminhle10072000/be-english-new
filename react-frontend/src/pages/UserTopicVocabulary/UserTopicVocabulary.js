import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import allActions from '../../actions';

class UserTopicVocabulary extends Component {

    constructor(props){
        super(props);
    }

    componentDidMount() {
        this.props.onUserGetAllTopicVocas()
    }

    render() {
        return (
            <React.Fragment>
                Đây là trang user topic
            </React.Fragment>
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
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (UserTopicVocabulary);
