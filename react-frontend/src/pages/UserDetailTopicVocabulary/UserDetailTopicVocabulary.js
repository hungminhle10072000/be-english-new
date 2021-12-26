import React, { Component } from 'react'
import './UserDetailTopicVocabulary.css'
import allActions from '../../actions'
import { connect } from 'react-redux'
import UserItemDetailVocabularyTopic from '../../components/UserItemDetailVocabularyTopic/UserItemDetailVocabularyTopic'
import Comments from '../../components/Comment/Comments'

class UserDetailTopicVocabulary extends Component {

    constructor(props) {
        super(props);
        this.state = ({
            idTopic: this.props.match.params.idTopic,
            nameTopicPara: this.props.match.params.nameTopicVoca,
            userListVocabularyWithTopic: [],
            nameTopic: '',
            userCurrent: {
                id: -1
            },
            comments:[],
            learningTopicId:0
        })
    }

    componentDidUpdate(prevProps) {
        var course = this.props.course;
        if (prevProps.comments.length ===0 && this.props.comments.length !==0) {
            
            this.setState({

                comments: this.props.comments,
                userCurrent: this.props.userCurrent
            })
        }
        if ( prevProps.comments[0] && this.props.comments[0] && prevProps.comments[0].id !== this.props.comments[0].id) {
            
            this.setState({
                comments: this.props.comments,
                userCurrent: this.props.userCurrent
            })
        }
        if (prevProps.comments.length !== this.props.comments.length) {
            
            this.setState({
                comments: this.props.comments,
                userCurrent: this.props.userCurrent
            })
        }
    }

    componentDidMount() {
        const {nameTopicPara,idTopic} = this.state
        this.props.userGetVocaWithTopic(nameTopicPara,idTopic);
        this.props.onGetCommentByTopicId(idTopic)
        this.setState({
            comments: this.props.comments,
            userCurrent: this.props.userCurrent,
            learningTopicId: idTopic
        })
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
                <Comments currentUserId={this.state.userCurrent.id} comments={this.state.comments} learningId={this.state.idTopic} type="2"/>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        comments: state.commentReducer,
        userCurrent: state.itemUserLogin,
        userVocabularyWithTopic: state.userVocabularyWithTopic
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        userGetVocaWithTopic: (nameTopic, topicId) => {
            dispatch(allActions.userVocabularyAction.actUserFetchListVocaWithTopicsRequest(nameTopic, topicId))
        },
        onGetCommentByTopicId: (topicId) => {
            dispatch(allActions.commentAction.actGetCommentByTopicIdRequest(topicId))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (UserDetailTopicVocabulary)
