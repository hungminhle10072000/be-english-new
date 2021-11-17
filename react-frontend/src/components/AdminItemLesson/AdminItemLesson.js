import React, {Component,Fragment} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import allActions from '../../actions/index'
import { confirmAlert } from 'react-confirm-alert';


class AdminItemLesson extends Component {
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
                    this.props.onDeleteLesson(this.props.lesson.id);
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
                    <td>{this.props.lesson.id}</td>
                    <td>{this.props.lesson.name}</td>
                    <td>{this.props.lesson.chapterName}</td>
                    <td>{this.props.lesson.courseName}</td>
                    <td>        
                        <button style={{ height: "35px" }} onClick={()=>this.props.onOpenModal(this.props.linkVideo)}>
                            Play Video{" "}</button>
                           
                    </td>
                    <td>
                        <Link to={`/admin/lesson/edit/${this.props.lesson.id}`}>
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
        onDeleteLesson : (id) => {
            dispatch(allActions.lessonAction.actDeleteLessonRequest(id));
        },
        changeAdminAlertOn : (admin_alertContent, admin_alertType) => {
            dispatch(allActions.adminAlertInfoAction.changeAdminAlertOn(admin_alertContent, admin_alertType));
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps) (AdminItemLesson);