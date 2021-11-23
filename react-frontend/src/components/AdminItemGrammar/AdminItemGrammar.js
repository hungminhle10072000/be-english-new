import React, { Component } from 'react'
import { connect } from 'react-redux'
import allActions from '../../actions'
import { Fragment } from 'react'
import {
    Link
} from "react-router-dom"
import { confirmAlert } from 'react-confirm-alert'
import './AdminItemGrammar.css'

class AdminItemGrammar extends Component {

    onDelete = () => {

        confirmAlert({
            title: 'Xác nhận xóa',
            message: 'Bạn có chắc chắn muốn xóa không ?',
            buttons: [
              {
                label: 'Xác nhận',
                onClick: () => {
                    this.props.onDeleteGrammar(this.props.id);
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
        this.props.onFormEditGrammar();
        this.props.onGetGrammarEdit(this.props.id)
    }

    render() {
        return (
            <Fragment>
                <tr>
                    <td>{this.props.id}</td>
                    <td>{this.props.name}</td>
                    <td>
                        <Link to="#" onClick={() => this.onEdit()}>
                            <button type="button" className="btn btn-warning btn-edit-grammar">Sửa</button>
                        </Link>
                        <button onClick={() => this.onDelete()}
                        type="button" className="btn btn-danger btn-delete-grammar">Xóa</button>
                        <Link to={""}>
                            <button type="button" className="btn btn-info btn-detail-grammar">Chi tiết</button>
                        </Link>
                    </td>
                </tr>
            </Fragment>
        )
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onDeleteGrammar: (id) => {
            dispatch(allActions.grammarAction.actDeleteGrammarRequest(id))
        },
        onFormEditGrammar: () => {
            dispatch(allActions.openFormGrammar.changeFormEditGrammarOn())
        },
        onGetGrammarEdit: (id) => {
            dispatch(allActions.grammarAction.actGetGrammarEditRequest(id))
        }
    }
}
export default connect(null, mapDispatchToProps) (AdminItemGrammar);
