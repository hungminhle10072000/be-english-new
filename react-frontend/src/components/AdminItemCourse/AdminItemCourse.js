import React, {Component,Fragment} from 'react'
import { Link } from 'react-router-dom'

class AdminItemCourse extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <Fragment>
                <tr>
                    <td>{this.props.course.id}</td>
                    <td>{this.props.course.name}</td>
                    <td>{this.props.course.introduce}</td>
                    <td><img style={{width:100, height:100}} src={this.props.image}/></td>
                    <td>
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
export default AdminItemCourse;