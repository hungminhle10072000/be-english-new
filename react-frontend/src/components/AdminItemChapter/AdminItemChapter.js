import React, {Component,Fragment} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import allActions from '../../actions/index'
import { confirmAlert } from 'react-confirm-alert';

class AdminItemChapter extends Component {
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
                    this.props.onDeleteChapter(this.props.chapter.id);
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
                    <td className="align-middle css-td-table">{this.props.chapter.id}</td>
                    <td className="align-middle css-td-table">{this.props.chapter.name}</td>
                    <td className="align-middle css-td-table">{this.props.chapter.numOfLesson}</td>
                    <td className="align-middle css-td-table">{this.props.chapter.courseName}</td>
                    <td className="align-middle css-td-table">
                        <Link to={`/admin/lesson/${this.props.chapter.id}`}>
                            <button type="button" className="btn btn-warning btn-edit-account">Chi tiết</button>
                        </Link>
                        <Link to={`/admin/chapter/edit/${this.props.chapter.id}`}>
                            <button type="button" className="btn btn-warning btn-edit-account">Sửa</button>
                        </Link>
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
        onDeleteChapter : (id) => {
            dispatch(allActions.chapterAction.actDeleteChapterRequest(id));
        },
        changeAdminAlertOn : (admin_alertContent, admin_alertType) => {
            dispatch(allActions.adminAlertInfoAction.changeAdminAlertOn(admin_alertContent, admin_alertType));
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps) (AdminItemChapter);