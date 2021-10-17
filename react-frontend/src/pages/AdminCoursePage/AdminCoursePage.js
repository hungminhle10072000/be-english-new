import React,{Component} from 'react'
import { Link } from 'react-router-dom'
import { BsFillPersonPlusFill } from "react-icons/bs";
import AdminItemCourse from '../../components/AdminItemCourse/AdminItemCourse'

class AdminCoursePage extends Component {
    constructor(props) {
        super(props)
        this.showItemsCourse = this.showItemsCourse.bind(this)
    }

    showItemsCourse(courses) {
        var result = null;
        if (courses.length > 0) {
            result = courses.map((course,key) => <AdminItemCourse course={course} key={key}/>) 
        }
        return result;
    }

    render() {
        return(
            <div className="container-fluid content-admin-acconut">
                <div className="row">
                    <div className="col-12">
                        <div style={{marginTop: 10}}>
                            <div className="jumbotron manager-account">
                                <h2>Quản lí tài khoản</h2>  
                            </div>
                            
                            <Link to="/admin/account/add" style={{textDecoration:"none"}}>
                                <button type="button" className="btn btn-success btn-add-account">Thêm mới<BsFillPersonPlusFill className="iconAddAccount"/></button> 
                            </Link>
                         
                            <input onChange={(event) => this.callback(event.target.value)}
                            type="text" name="search" placeholder="Tìm kiếm ..." className="searchAccount" />
                        </div>
                    </div>
                </div>
                <div className="row">
                        <div className="col-12">
                            <div className="table-responsive">
                                <table className="table table-bordered text-sm-center" style={{marginTop: 10}}>
                                    <thead>
                                        <tr>
                                            <th scope="col">ID</th>
                                            <th scope="col">Tên khoá học</th>
                                            <th scope="col">Giới Thiệu</th>
                                            <th scope="col">Ảnh khoá học</th>
                                            <th scope="col">Chức năng</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* Item course */}
                                        {showItemsCourse(this.props.course)}
                                    </tbody>      
                                </table>
                            </div>
                        {/* <AdminPagination /> */}
                    </div>
                </div>
            </div>
        )
    }
}

export default AdminCoursePage