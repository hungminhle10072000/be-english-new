import React, { Component } from 'react'
import './AdminAccountPage.css'
import { Link } from 'react-router-dom'
import AdminItemAccount from '../../components/AdminItemAccount/AdminItemAccount'
import AdminPagination from '../../components/AdminPagination/AdminPagination'
import { BsFillPersonPlusFill } from "react-icons/bs";

export default class AdminAccountPage extends Component {
    render() {
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
                         
                            <input type="text" name="search" placeholder="Tìm kiếm ..." className="searchAccount" />
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
                                            <th scope="col">Mật khẩu</th>
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
                                        <AdminItemAccount />
                                        <AdminItemAccount />
                                        <AdminItemAccount />
                                        <AdminItemAccount />
                                        <AdminItemAccount /> 
                                        <AdminItemAccount /> 
                                        <AdminItemAccount /> 
                                        <AdminItemAccount /> 
                                        <AdminItemAccount /> 
                                        <AdminItemAccount />  
                                    </tbody> 
                                    <tfoot>
                                        <tr>
                                            <th scope="col">ID</th>
                                            <th scope="col">Họ Tên</th>
                                            <th scope="col">Tên đăng nhập</th>
                                            <th scope="col">Mật khẩu</th>
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
                        <AdminPagination />
                    </div>
                </div>
            </div>
        )
    }
}
