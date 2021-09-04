import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { BiSave, BiReset } from "react-icons/bi";
import './AdminAddAccountPage.css'


export default class AdminAddAccountPage extends Component {
    render() {
        return (
            <Fragment>
                <main>                     
                    <div className="container">

                        {/* row 1 */}
                        <div className="row">
                            <div className="col-md-12">
                                <div style={{marginTop: 10}}>
                                    <div className="jumbotron add-account">
                                        <h2>Thêm tài khoản</h2>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* row 2 */}
                        <form>
                            <div className="row">
                                {/* Left */}
                                <div className="col-md-6">
                                    <label htmlFor="Id"><b>Id</b></label>         
                                    <input className="input-field" type="text" placeholder="Id" name="Id" id="Id" value="1" disabled />

                                    <label htmlFor="fullname"><b>Họ tên</b></label>      
                                    <input className="input-field" type="text" placeholder="Họ tên" name="fullname" id="fullname"/>

                                    <label htmlFor="username"><b>Tên đăng nhập</b></label>    
                                    <input className="input-field" type="text" placeholder="Tên đăng nhập" name="username" id="username" />

                                    <label htmlFor="password"><b>Mật khẩu</b></label>
                                    <input className="input-field" type="password" placeholder="Mật khẩu" name="password" id="password" />

                                    <label htmlFor="repeat_password"><b>Nhập lại mật khẩu</b></label>
                                    <input className="input-field" type="password" placeholder="Nhập lại mật khẩu" name="repeat_password" id="repeat_password" />

                                    <label htmlFor="email"><b>Email</b></label>
                                    <input className="input-field" type="email" placeholder="Email" id="email" name="email" />
                    
                                    <label htmlFor="gender"><b>Giới tính</b></label>
                                        <div>
                                            <input type="radio" id="nam" name="gender" value="nam" defaultChecked />
                                            <label htmlFor="nam">&nbsp; Nam</label> &nbsp; &nbsp; &nbsp;
                                            <input type="radio" id="nu" name="gender" value="nu" />
                                            <label htmlFor="nu">&nbsp;  Nữ</label><br />
                                        </div>    
                                </div>

                                {/* Right */}
                                <div className="col-md-6">
                                    <label htmlFor="address"><b>Địa chỉ</b></label>  
                                    <input className="input-field" type="text" placeholder="Địa chỉ" name="address" id="address" />

                                    <label htmlFor="phone_number"><b>Số điện thoại</b></label>  
                                    <input className="input-field" type="text" placeholder="Số điện thoại" name="phone_number" id="phone_number" />
                                    
                                    <label htmlFor="date_of_birth"><b>Ngày sinh</b></label>  
                                    <input className="input-field" type="date" placeholder="Ngày sinh" name="date_of_birth" id="date_of_birth" />
                                    
                                    <label htmlFor="role"><b>Quyền</b></label>
                                    <div>
                                        <input type="radio" id="Admin" name="role" value="Admin" defaultChecked/>
                                        <label htmlFor="Admin">&nbsp; Admin</label> &nbsp; &nbsp; &nbsp;
                                        <input type="radio" id="User" name="role" value="User"  />
                                        <label htmlFor="User">&nbsp;  User</label><br />
                                    </div>    
                                    <label htmlFor="avatar"><b>Ảnh đại diện</b></label>  
                                    <input className="input-field" type="file" placeholder="Ảnh đại diện" id="avatar" name="avatar"/>
                                </div>
                            </div>

                            <div className="div-button-account">
                                <Link to="/admin/add/account">
                                    <button type="button" className="btn btn-success btn-save-account">Lưu <BiSave /></button> 
                                </Link>

                                <button type="reset" className="btn btn-warning">Reset <BiReset /></button> 
                            </div>
                        </form>  
                    </div>
                </main>
            </Fragment>
        )
    }
}
