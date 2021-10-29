import React, {Component,Fragment} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import allActions from '../../actions/index'
import { confirmAlert } from 'react-confirm-alert';

class AdminItemCourse extends Component {
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
                    this.props.onDeleteCourse(this.props.course.id);
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
                    <td>{this.props.course.id}</td>
                    <td>{this.props.course.name}</td>
                    <td>{this.props.course.introduce}</td>
                    <td><img style={{width:100, height:100}} src={this.props.course.image}/></td>
                    <td>
                        <Link to={`/admin/chapter/${this.props.course.id}`}>
                            <button type="button" className="btn btn-warning btn-edit-account">Chi tiết</button>
                        </Link>
                        <Link to={`/admin/course/edit/${this.props.course.id}`}>
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
        onDeleteCourse : (id) => {
            dispatch(allActions.courseAction.actDeleteCourseRequest(id));
        },
        changeAdminAlertOn : (admin_alertContent, admin_alertType) => {
            dispatch(allActions.adminAlertInfoAction.changeAdminAlertOn(admin_alertContent, admin_alertType));
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps) (AdminItemCourse);