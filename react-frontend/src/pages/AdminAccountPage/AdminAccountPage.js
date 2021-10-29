import React, { Component } from 'react'
import './AdminAccountPage.css'
import { Link } from 'react-router-dom'
import AdminItemAccount from '../../components/AdminItemAccount/AdminItemAccount'
import AdminPagination from '../../components/AdminPagination/AdminPagination'
import { BsFillPersonPlusFill } from "react-icons/bs";
import { connect } from 'react-redux'
import allActions from '../../actions'


class AdminAccountPage extends Component {

    constructor(props){
        super(props);

        this.state = {
            term: ''
        }
    }

    componentDidMount() {
        this.props.getAllUsers();
    }

    showItemAccount(users) {
        var result = null;
        if(users.length > 0 ){
            result = users.map((user, key) => {
                return (
                    <AdminItemAccount 
                        key={key}
                        id={user.id}
                        fullname={user.fullname}
                        username={user.username}
                        password={user.password}
                        email={user.email}
                        gender={user.gender}
                        address={user.address}
                        phonenumber={user.phonenumber}
                        birthday={user.birthday}
                        avartar={user.avartar}
                        role={user.role}
                    />
                )
            })
        }
        return result;
    }

    callback = (term) => {
        this.setState({
            term: term
        })
    }

    render() {
        var dataSearch = this.state.term;
        var dataTable = this.props.users;
        var resultSearch = []
        dataTable.forEach((item) => {
            let idSearch = item.id.toString();
            if(idSearch.indexOf(dataSearch) !== -1 || item.fullname.indexOf(dataSearch) !== -1 || item.username.indexOf(dataSearch) !== -1
            || item.password.indexOf(dataSearch) !== -1 || item.email.indexOf(dataSearch) !== -1 || item.gender.indexOf(dataSearch) !== -1
            || item.address.indexOf(dataSearch) !== -1 || item.phonenumber.indexOf(dataSearch) !== -1 || item.role.indexOf(dataSearch) !== -1
            || item.birthday.indexOf(dataSearch) !== -1){
                resultSearch.push(item);
            }
        })

        return (
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
                                            <th scope="col">Họ Tên</th>
                                            <th scope="col">Tên đăng nhập</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Giới tính</th>
                                            <th scope="col">Địa chỉ</th>
                                            <th scope="col">Số điện thoại</th>
                                            <th scope="col">Ngày sinh</th>
                                            <th scope="col">Quyền</th>
                                            <th scope="col">Ảnh đại diện</th>
                                            <th scope="col">Chức năng</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* Item account */}
                                        {this.showItemAccount(resultSearch)}
                                    </tbody> 
                                    <tfoot>
                                        <tr>
                                            <th scope="col">ID</th>
                                            <th scope="col">Họ Tên</th>
                                            <th scope="col">Tên đăng nhập</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Giới tính</th>
                                            <th scope="col">Địa chỉ</th>
                                            <th scope="col">Số điện thoại</th>
                                            <th scope="col">Ngày sinh</th>
                                            <th scope="col">Quyền</th>
                                            <th scope="col">Ảnh đại diện</th>
                                            <th scope="col">Chức năng</th>
                                        </tr>
                                    </tfoot>           
                                </table>
                            </div>
                        {/* <AdminPagination /> */}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        users: state.users
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getAllUsers: () => {
            dispatch(allActions.userAction.actFetchUsersRequest());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (AdminAccountPage)
