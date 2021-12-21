import React, {Component,Fragment} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import allActions from '../../actions/index'
import { confirmAlert } from 'react-confirm-alert';

class AdminItemComment extends Component {
    constructor(props) {
        super(props)
    }

    onDelete = () => {
       
        confirmAlert({
            title: 'Xác nhận xóa',
            message: 'Bạn có chắc chắn muốn xóa không ?',
            buttons: [
              {
                label: 'Xác nhận',
                onClick: () => {
                    this.props.onDeleteComment(this.props.comment.id);
                    this.props.changeAdminAlertOn("Xóa thành công","danger");
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
        return(
            <Fragment>
                <tr>
                    <td>{this.props.comment.id}</td>
                    <td>{this.props.comment.userDto.fullname}</td>
                    <td>{this.props.comment.content}</td>
                    <td>{this.props.comment.time}</td>
                    <td>
                        <button type="button" className="btn btn-warning btn-edit-account" onClick={() =>this.props.handleOpen(this.props.comment.id)}>Trả lời</button>
                        <button onClick={() => this.onDelete()}
                        type="button" className="btn btn-danger btn-delete-account">Xóa</button>
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
        onDeleteComment : (id) => {
            dispatch(allActions.commentAction.actDeleteCommentRequest(id));
        },
        changeAdminAlertOn : (admin_alertContent, admin_alertType) => {
            dispatch(allActions.adminAlertInfoAction.changeAdminAlertOn(admin_alertContent, admin_alertType));
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps) (AdminItemComment);