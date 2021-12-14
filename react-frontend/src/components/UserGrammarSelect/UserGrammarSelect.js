import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import Select from 'react-select'
import './UserGrammarSelect.css'
import allActions from '../../actions'
class UserGrammarSelect extends Component {

    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);    
        this.state = {
            idLearnGrammar: -1
        }
    }

    hadnleOnChange = (event) => {
        if(event.value){
            this.setState({
                idLearnGrammar: event.value
            })
        }
    }

    hadnleButtonLearn = () => {
        if(this.state.idLearnGrammar > 0){
            this.props.onUserGetGrammarLearning(this.state.idLearnGrammar)
        }
    }

    render() {
        return (
            <Fragment>
               <h6 className='text-title-grammar'>Mời bạn chọn bài bên dưới để học NGỮ PHÁP TOEIC nhé!</h6>
               <div className='group-select-grammar'>
                    <Select className='class-select-grammar' onChange={(event) => this.hadnleOnChange(event)} options={this.props.userValueSelectGrammar} defaultValue={this.props.userValueSelectGrammar[0]}/>
                    <button className='btn btn-success btn-learn-grammar' onClick={() => this.hadnleButtonLearn()}>Học</button>
               </div>        
            </Fragment>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        userValueSelectGrammar: state.userValueSelectGrammar
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onUserGetGrammarLearning: (grammarId) => {
            dispatch(allActions.userGrammarAction.actUserGetLearnGrammarRequest(grammarId))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (UserGrammarSelect);
