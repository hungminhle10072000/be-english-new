import React, { Component } from 'react'
import { connect } from 'react-redux'
import allActions from '../../actions'
import UserTestVocabularySelect from '../../components/UserTestVocabularySelect/UserTestVocabularySelect';
import UserStopWatch from '../../components/UserStopWatch/UserStopWatch';

class UserTestVocabulary extends Component {

    constructor(props){
        super(props)
    }

    componentDidMount() {
        this.props.onUserGetAllTopicVocas();
    }
    

    render() {
        return (
            <div className='container-fluid main-content-user-grammar'>
                <div className='row div-grammar-select justify-content-center'>
                    <div className='col-md-12'>
                        <UserTestVocabularySelect />
                    </div>
                </div>
                <div className='row mt-2 mb-2 pt-3'>
                        {/* <UserStopWatch />  */}
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
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (UserTestVocabulary);
