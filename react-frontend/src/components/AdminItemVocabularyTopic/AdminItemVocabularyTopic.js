import React, { Component } from 'react'
import { connect } from 'react-redux'
import allActions from '../../actions'
import { Fragment } from 'react'
import {
    Link
} from "react-router-dom"
import { confirmAlert } from 'react-confirm-alert'
import './AdminItemVocabularyTopic.css'

class AdminItemVocabularyTopic extends Component {

    onDelete = () => {

        confirmAlert({
            title: 'Xác nhận xóa',
            message: 'Bạn có chắc chắn muốn xóa không ?',
            buttons: [
              {
                label: 'Xác nhận',
                onClick: () => {
                    this.props.onDeleteVocaTopic(this.props.id);
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
        this.props.onGetVocaTopicEdit(this.props.id)
        this.props.onFormEditTopicVoca()
    }

    render() {
        return (
            <Fragment>
                <tr>
                    <td>{this.props.id}</td>
                    <td>{this.props.name}</td>
                    <td><img style={{width:100, height:100}} src={this.props.image} alt="Ảnh minh họa chủ đề"/></td>
                    <td>
                        <Link to="#" onClick={() => this.onEdit()}>
                            <button type="button" className="btn btn-warning btn-edit-voca-topic">Sửa</button>
                        </Link>
                        <button onClick={() => this.onDelete()}
                        type="button" className="btn btn-danger btn-delete-voca-topic">Xóa</button>
                         <Link to="#" onClick={() => this.onEdit()}>
                            <button type="button" className="btn btn-info btn-detail-voca-topic">Chi tiết</button>
                        </Link>
                    </td>
                </tr>
            </Fragment>
        )
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onDeleteVocaTopic: (id) => {
            dispatch(allActions.vocabularyTopicAction.actDeleteVocaTopicRequest(id))
        },
        onFormEditTopicVoca: () => {
            dispatch(allActions.openFormAddVocaTopic.chagneFormEditVocaTopicOn());
        },
        onGetVocaTopicEdit: (id) => {
            dispatch(allActions.vocabularyTopicAction.actGetVocaTopicRequest(id))
        }
    }
}

export default connect(null, mapDispatchToProps) (AdminItemVocabularyTopic);

