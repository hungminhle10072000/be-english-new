import React, { Component } from 'react'
import './LoginPage.css'
import { FaFacebook,FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";


export default class LoginPage extends Component {
    render() {
        return (
            <div className="container-fluid container-login">
                <div className="login-form">
                    <form>
                        <h1>Đăng nhập</h1>
                        <div className="form-group-login">
                            <input type="username" name="username" placeholder="Tên đăng nhập" />
                            {/* <span className="input-icon"><i className="fa fa-envelope" /></span> */}
                            <span className="input-icon"><FaUser /></span>
                        </div>
                        <div className="form-group-login">
                            <input type="password" name="psw" placeholder="Mật khẩu" />
                            {/* <span className="input-icon"><i className="fa fa-lock" /></span> */}
                            <span className="input-icon"><RiLockPasswordFill /></span>
                        </div>      
                        <button className="login-btn">Đăng nhập</button>      
                        <a className="reset-psw" href="#">Quên mật khẩu ?</a>
                        <div className="seperator"><b>or</b></div>
                        <p>Đăng nhập bằng tài khoản</p>
                        {/* Social login buttons */}
                        <div className="social-icon">
                            <FaFacebook className="icon-login-facebook" />
                            {/* <button type="button"><i className="fa fa-twitter" />  </button> */}
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

