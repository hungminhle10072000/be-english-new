import React, { Component, Fragment } from 'react'
import AdminAccountPageCSS from './AdminAccountPage.module.css'

export default class AdminAccountPage extends Component {
    render() {
        return (
            <Fragment>
                <main>                     
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div style={{marginTop: 10}}>
                                    <div className="jumbotron">
                                        <h1>Quản lí tài khoản</h1>
                                    </div>
                                    {/* <Link to="/admin/account/add"> */}
                                        <button type="button" className="btn btn-success">Thêm mới</button> 
                                    {/* </Link> */}
                                    {/* <form style={{ marginTop: 10}}>
                                        <input onChange={(event) => this.callback(event.target.value)} className="styleSearch" type="text" name="search" placeholder="Tìm kiếm.." />
                                    </form> */}

                                    <input type="text" name="search" placeholder="Search.." className="searchAccount" />
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-12">
                                <table className="table table-bordered text-sm-center" style={{marginTop: 10}}>
                                    <thead>
                                        <tr>
                                            <th scope="col">ID</th>
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
                                        <tr>
                                            <td>1</td>
                                            <td>hungadmin</td>
                                            <td>minhle2000</td>
                                            <td>hungduong.mess32@gmail.com</td>
                                            <td>Nam</td>
                                            <td>Thủ Đức</td>
                                            <td>01236659181</td>
                                            <td>10-08-2000</td>
                                            <td>admin</td>
                                            <td>Null</td>
                                            <td>
                                                <button type="button" className="btn btn-warning">Chỉnh sửa</button>
                                                <button type="button" className="btn btn-danger">Xóa</button>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>1</td>
                                            <td>hungadmin</td>
                                            <td>minhle2000</td>
                                            <td>hungduong.mess32@gmail.com</td>
                                            <td>Nam</td>
                                            <td>Thủ Đức</td>
                                            <td>01236659181</td>
                                            <td>10-08-2000</td>
                                            <td>admin</td>
                                            <td>Null</td>
                                            <td>
                                                <button type="button" className="btn btn-warning">Chỉnh sửa</button>
                                                <button type="button" className="btn btn-danger">Xóa</button>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>1</td>
                                            <td>hungadmin</td>
                                            <td>minhle2000</td>
                                            <td>hungduong.mess32@gmail.com</td>
                                            <td>Nam</td>
                                            <td>Thủ Đức</td>
                                            <td>01236659181</td>
                                            <td>10-08-2000</td>
                                            <td>admin</td>
                                            <td>Null</td>
                                            <td>
                                                <button type="button" className="btn btn-warning">Chỉnh sửa</button>
                                                <button type="button" className="btn btn-danger">Xóa</button>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>1</td>
                                            <td>hungadmin</td>
                                            <td>minhle2000</td>
                                            <td>hungduong.mess32@gmail.com</td>
                                            <td>Nam</td>
                                            <td>Thủ Đức</td>
                                            <td>01236659181</td>
                                            <td>10-08-2000</td>
                                            <td>admin</td>
                                            <td>Null</td>
                                            <td>
                                                <button type="button" className="btn btn-warning">Chỉnh sửa</button>
                                                <button type="button" className="btn btn-danger">Xóa</button>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>1</td>
                                            <td>hungadmin</td>
                                            <td>minhle2000</td>
                                            <td>hungduong.mess32@gmail.com</td>
                                            <td>Nam</td>
                                            <td>Thủ Đức</td>
                                            <td>01236659181</td>
                                            <td>10-08-2000</td>
                                            <td>admin</td>
                                            <td>Null</td>
                                            <td>
                                                <button type="button" className="btn btn-warning">Chỉnh sửa</button>
                                                <button type="button" className="btn btn-danger">Xóa</button>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>1</td>
                                            <td>hungadmin</td>
                                            <td>minhle2000</td>
                                            <td>hungduong.mess32@gmail.com</td>
                                            <td>Nam</td>
                                            <td>Thủ Đức</td>
                                            <td>01236659181</td>
                                            <td>10-08-2000</td>
                                            <td>admin</td>
                                            <td>Null</td>
                                            <td>
                                                <button type="button" className="btn btn-warning">Chỉnh sửa</button>
                                                <button type="button" className="btn btn-danger">Xóa</button>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>1</td>
                                            <td>hungadmin</td>
                                            <td>minhle2000</td>
                                            <td>hungduong.mess32@gmail.com</td>
                                            <td>Nam</td>
                                            <td>Thủ Đức</td>
                                            <td>01236659181</td>
                                            <td>10-08-2000</td>
                                            <td>admin</td>
                                            <td>Null</td>
                                            <td>
                                                <button type="button" className="btn btn-warning">Chỉnh sửa</button>
                                                <button type="button" className="btn btn-danger">Xóa</button>
                                            </td>
                                        </tr>
                                    </tbody> 
                                    <tfoot>
                                        <tr>
                                            <th scope="col">ID</th>
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
                        </div>
                    </div>
                </main>
            </Fragment>
        )
    }
}
