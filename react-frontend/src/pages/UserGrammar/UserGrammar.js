import React, { Component } from 'react'
import './UserGrammar.css'
import UserGrammarSelect from '../../components/UserGrammarSelect/UserGrammarSelect'
import { connect } from 'react-redux'
import allActions from '../../actions'
import ReactHTMLParser from 'react-html-parser'
import Comments from '../../components/Comment/Comments'

class UserGrammar extends Component {

    constructor(props){
        super(props)
        this.state = {
            itemGrammarLearning: {},
            userValueSelectGrammar: [],
            comments:[],
            learningGrammarId:0,
            userCurrent: {
                id: -1
            }
        }
        this.onChangeGrammarId = this.onChangeGrammarId.bind(this)
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps && nextProps.UserItemLearnGrammar){
            const {UserItemLearnGrammar} = nextProps
            this.setState({
                comments: this.props.comments,
                userCurrent: this.props.userCurrent,
                itemGrammarLearning: UserItemLearnGrammar
            })
        }

        if(nextProps && nextProps.userValueSelectGrammar){
            const {userValueSelectGrammar} = nextProps
            this.setState({
                comments: this.props.comments,
                userCurrent: this.props.userCurrent,
                userValueSelectGrammar: userValueSelectGrammar
            })
        }
    }
    componentDidUpdate(prevProps) {
        if (prevProps.comments !== this.props.comments) {
            this.setState({
                comments: this.props.comments,
            })
            this.props.onGetCommentByGrammarId(this.state.learningGrammarId);
        }
    }

    componentDidMount() {
        this.props.onItemLoading()
        this.props.onUserGetAllGrammar();
        this.setState({
            comments: this.props.comments,
            itemGrammarLearning: this.props.UserItemLearnGrammar
        })
        console.log("Item",this.state.itemGrammarLearning)
        if (this.state.learningGrammarId !== 0) {
            this.props.onGetCommentByGrammarId(this.state.learningGrammarId);
        }
    }
    componentWillMount() {
        this.props.onItemLoading()
        this.props.onUserGetAllGrammar();
        this.setState({
            comments: this.props.comments,
        })
        if (this.state.learningGrammarId !== 0) {
            this.props.onGetCommentByGrammarId(this.state.learningGrammarId);
        }
    }
    
    onChangeGrammarId(grammarId) {
        this.setState({
            learningGrammarId:grammarId
        })
        this.props.onGetCommentByGrammarId(grammarId);
    }

    render() {
        return (
            <div className='container-fluid main-content-user-grammar'>
                <div className='row div-grammar-select justify-content-center'>
                    <div className='col-md-12'>
                        <UserGrammarSelect onChangeGrammarId={this.onChangeGrammarId}/>
                    </div>
                </div>
                <div className='row mt-2 mb-2 div-content-user-learn-grammar pt-3'>
                    <div className='col-md-12 ck-content'>
                        <div className='mb-5 text-center'>
                            <span className='title-user-learn-grammar text-center'>{this.state.itemGrammarLearning.name}</span>
                        </div>
                        {ReactHTMLParser(this.state.itemGrammarLearning.content)}             
                    </div>
                </div>
                <Comments currentUserId={this.state.userCurrent.id} comments={this.state.comments} learningId={this.state.itemGrammarLearning.id} type="3"/>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        userListGrammar: state.userListGrammar,
        UserItemLearnGrammar: state.UserItemLearnGrammar,
        userValueSelectGrammar : state.userValueSelectGrammar,
        userCurrent: state.itemUserLogin,
        comments: state.commentReducer
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onUserGetAllGrammar: () => {
            dispatch(allActions.userGrammarAction.actUserFetchAllGrammarRequest())
        },
        onUserGetGrammarLearning: (grammarId) => {
            dispatch(allActions.userGrammarAction.actUserGetLearnGrammarRequest(grammarId))
        },
        onGetCommentByGrammarId: (grammarId) => {
            dispatch(allActions.commentAction.actGetCommentByGrammarIdRequest(grammarId))
        },
        onItemLoading: () => {
            dispatch(allActions.userItemLoadingAction.openItemLoading())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (UserGrammar);
