import React, { Component, Fragment } from 'react'
import { confirmAlert } from 'react-confirm-alert'
import { connect } from 'react-redux';
import {
    Link
} from "react-router-dom"
import allActions from '../../actions';
import ReactAudioPlayer from 'react-audio-player';

class AdminItemQuestion extends Component {

    onDelete = () => {

        confirmAlert({
            title: 'Xác nhận xóa',
            message: 'Bạn có chắc chắn muốn xóa không ?',
            buttons: [
              {
                label: 'Xác nhận',
                onClick: () => {
                    this.props.onDeleteQuestionById(this.props.id);
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

    onEdit = () => {
        // this.props.onGetVocaTopicEdit(this.props.id)
        // this.props.onFormEditTopicVoca()
    }


    render() {
        const checkPara = this.props.paragraph !== ''
        const checkOption4 = this.props.option_4 !== ''
        const checkAudio = this.props.audio !== null
        const checkImage = this.props.image !== null
        const checkType = this.props.type === 3
        return (
            <Fragment>
                <tr>
                    <td className="align-middle css-td-table">{this.props.ordinal_number}</td>
                    <td style={{textAlign: 'left'}}>
                        {checkAudio ? <ReactAudioPlayer src={this.props.audio} controls/> : null}
                        {this.props.paragraph} {checkPara ? <br /> : ""}
                        Câu hỏi : {this.props.content_question} <br />
                        A. {this.props.option_1} <br />
                        B. {this.props.option_2} <br />
                        C. {this.props.option_3} <br />
                        {checkOption4 ? <div>D. {this.props.option_4}</div> : ""}
                        Đáp án: {this.props.correct_answer}
                    </td>
                    <td>
                        {checkImage ? <img style={{width:150, height:150}} src={this.props.image} alt="Ảnh mô tả" />
                         : null}
                    </td>
                    <td className="align-middle css-td-table">
                        {checkType ? <Link to={`/admin/question/edit/${this.props.id}`}>
                            <button type="button" className="btn btn-warning btn-edit-voca-topic">Sửa</button>
                        </Link> : null}
                        <button onClick={() => this.onDelete()}
                        type="button" className="btn btn-danger btn-delete-voca-topic">Xóa</button>
                    </td>
                </tr>
            </Fragment>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {

    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onDeleteQuestionById: (id) => {
            dispatch(allActions.questionAction.actDeleteQuestionWithIdRequest(id))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (AdminItemQuestion)
