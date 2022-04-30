import React, { Component, Fragment } from 'react'
import { confirmAlert } from 'react-confirm-alert'
import { connect } from 'react-redux';
import {
    Link
} from "react-router-dom"
import allActions from '../../actions';

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
        return (
            <Fragment>
                <tr>
                    <td className="align-middle css-td-table">{this.props.ordinal_number}</td>
                    <td style={{textAlign: 'left'}}>
                        {this.props.paragraph} {checkPara ? <br /> : ""}
                        Câu hỏi : {this.props.content_question} <br />
                        A. {this.props.option_1} <br />
                        B. {this.props.option_2} <br />
                        C. {this.props.option_3} <br />
                        D. {this.props.option_4} <br />
                        Đáp án: {this.props.correct_answer}
                    </td>
                    <td className="align-middle css-td-table">
                        <Link to={`/admin/question/edit/${this.props.id}`}>
                            <button type="button" className="btn btn-warning btn-edit-voca-topic">Sửa</button>
                        </Link>
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
