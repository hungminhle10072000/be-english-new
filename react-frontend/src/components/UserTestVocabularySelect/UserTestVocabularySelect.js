import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import Select from 'react-select'
import allActions from '../../actions'
import { confirmAlert } from 'react-confirm-alert'
import './UserTestVocabularySelect.css'



class UserTestVocabularySelect extends Component {

    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);    
        this.state = {
            idTestTopic: -1
        }
    }

    hadnleOnChange = (event) => {
        if(event.value){
            this.setState({
                idTestTopic: event.value
            })
        }
    }

    hadnleButtonLearn = () => {
        if(this.props.itemUserLogin.id === -1) {
            this.onCheck()
        } else {
            
        }
        // if(this.state.idTestTopic > 0){
        //     // this.props.onUserGetGrammarLearning(this.state.idLearnGrammar)
        // }
    }

    onCheck = () => {
        confirmAlert({
            title: '',
            message: 'Bạn phải đăng nhập để thực hiện chức năng này !!',
            buttons: [
              {
                label: 'Xác nhận',
                onClick: () => {
                    window.location.pathname = ('/login');
                }
              },
              {
                label: 'Hủy',
                onClick: () => {
                }
              }
            ]
          });
    }


    render() {
        return (
            <Fragment>
                <h6 className='text-title text-center'>Mời bạn chọn chủ đề cần kiểm tra !</h6>
                <div className='group-select-grammar'>
                    <Select className='class-select-grammar' placeholder='Chọn chủ đề kiểm tra ...' onChange={(event) => this.hadnleOnChange(event)} options={this.props.userValueSelectTopic}/>
                    <button className='btn btn-success btn-learn-grammar'
                    onClick={() => this.hadnleButtonLearn()}
                    >Kiểm tra</button>
                </div>       
            </Fragment>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        userValueSelectTopic: state.userValueSelectTopic,
        itemUserLogin: state.itemUserLogin
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        // onUserGetGrammarLearning: (grammarId) => {
        //     dispatch(allActions.userGrammarAction.actUserGetLearnGrammarRequest(grammarId))
        // }
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (UserTestVocabularySelect)
