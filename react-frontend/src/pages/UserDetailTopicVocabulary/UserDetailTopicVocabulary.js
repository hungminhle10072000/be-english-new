import React, { Component } from 'react'
import './UserDetailTopicVocabulary.css'
import allActions from '../../actions'
import { connect } from 'react-redux'
import UserItemDetailVocabularyTopic from '../../components/UserItemDetailVocabularyTopic/UserItemDetailVocabularyTopic'


class UserDetailTopicVocabulary extends Component {

    constructor(props) {
        super(props);
        this.state = ({
            idTopic: this.props.match.params.idTopic,
            nameTopicPara: this.props.match.params.nameTopicVoca,
            userListVocabularyWithTopic: [],
            nameTopic: ''
        })
    }

    componentDidMount() {
        const {nameTopicPara,idTopic} = this.state
        this.props.userGetVocaWithTopic(nameTopicPara,idTopic);
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps && nextProps.userVocabularyWithTopic){
            const listVoca = nextProps.userVocabularyWithTopic.vocasWithTopic;
            const nameTopic = nextProps.userVocabularyWithTopic.nameTopic;
            this.setState({
                userListVocabularyWithTopic: listVoca,
                nameTopic: nameTopic
            })
        }
    }

    showItemVocabulary = () => {
        let result = null;
        if(this.state.userListVocabularyWithTopic.length > 0){
            result = this.state.userListVocabularyWithTopic.map((voca, key) => {
                return(
                    <UserItemDetailVocabularyTopic
                        key={voca.id}
                        id={voca.id}
                        ordinal = {key+1}
                        content = {voca.content}
                        example_vocabulary = {voca.example_vocabulary}
                        explain_vocabulary = {voca.explain_vocabulary}
                        file_audio = {voca.file_audio}
                        image = {voca.image}
                        mean = {voca.mean}
                        transcribe = {voca.transcribe}
                        mean_example_vocabulary = {voca.mean_example_vocabulary}
                    />
                ) 
            })
        }
        return result;
    }

    render() {
        return (
            <div className='container-fluid main-content-user-topic user-detail-topic pb-1'>
                <div className="row text-center justify-content-center">
                    <div className="col-sm-4 user-title-name-detail-topic">BÀI {this.state.nameTopic.toUpperCase()}</div>
                </div>
                {this.showItemVocabulary()}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        userVocabularyWithTopic: state.userVocabularyWithTopic
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        userGetVocaWithTopic: (nameTopic, topicId) => {
            dispatch(allActions.userVocabularyAction.actUserFetchListVocaWithTopicsRequest(nameTopic, topicId))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (UserDetailTopicVocabulary)
