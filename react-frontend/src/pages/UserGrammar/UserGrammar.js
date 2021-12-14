import React, { Component } from 'react'
import './UserGrammar.css'
import UserGrammarSelect from '../../components/UserGrammarSelect/UserGrammarSelect'
import { connect } from 'react-redux'
import allActions from '../../actions'
import ReactHTMLParser from 'react-html-parser'


class UserGrammar extends Component {

    constructor(props){
        super(props)
        this.state = {
            itemGrammarLearning: {},
            userValueSelectGrammar: []
        }
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps && nextProps.UserItemLearnGrammar){
            const {UserItemLearnGrammar} = nextProps
            this.setState({
                itemGrammarLearning: UserItemLearnGrammar
            })
        }

        if(nextProps && nextProps.userValueSelectGrammar){
            const {userValueSelectGrammar} = nextProps
            this.setState({
                userValueSelectGrammar: userValueSelectGrammar
            })
        }
    }

    componentWillMount() {
        this.props.onUserGetAllGrammar();
    }

    render() {
        return (
            <div className='container-fluid main-content-user-grammar'>
                <div className='row div-grammar-select justify-content-center'>
                    <div className='col-md-12'>
                        <UserGrammarSelect />
                    </div>
                </div>
                <div className='row mt-2 mb-2 div-content-user-learn-grammar pt-3'>
                    <div className='col-md-12 ck-content'>
                        <div className='mb-5'>
                            <span className='title-user-learn-grammar'>{this.state.itemGrammarLearning.name}</span>
                        </div>
                        {ReactHTMLParser(this.state.itemGrammarLearning.content)}             
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        userListGrammar: state.userListGrammar,
        UserItemLearnGrammar: state.UserItemLearnGrammar,
        userValueSelectGrammar : state.userValueSelectGrammar
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onUserGetAllGrammar: () => {
            dispatch(allActions.userGrammarAction.actUserFetchAllGrammarRequest())
        },
        onUserGetGrammarLearning: (grammarId) => {
            dispatch(allActions.userGrammarAction.actUserGetLearnGrammarRequest(grammarId))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (UserGrammar);
