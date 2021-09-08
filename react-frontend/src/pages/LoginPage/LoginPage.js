import React, { Component } from 'react'
import './LoginPage.css'
import { FaFacebook,FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import AdminRoutes from '../../customRoutes/AdminRoutes';
import PropTypes from "prop-types";
import { withRouter } from 'react-router-dom';
import UserRoutes from '../../customRoutes/UserRoutes';
import {Redirect} from 'react-router-dom'

class LoginPage extends Component {

    constructor(props){
        super(props);
    }

    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    };

    handleLogin = (username,psw) => {
        if(this.state.username === 'admin' && this.state.psw === 'admin'){
            window.location.pathname = ('/admin')
        } else if(this.state.username === 'user' && this.state.psw === 'user') {
            window.location.pathname = ('/')
        } 
        else {
            window.location.pathname = ('/')
        }
    }

    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
          [name]:value
        });
      }

    render() {
        return (
            <div className="container-fluid container-login">
                <div className="login-form">
                    <div>
                        <h1>Đăng nhập</h1>
                        <div className="form-group-login">
                            <input type="username" name="username" onChange={(event) => this.isChange(event)} placeholder="Tên đăng nhập" />
                            {/* <span className="input-icon"><i className="fa fa-envelope" /></span> */}
                            <span className="input-icon"><FaUser /></span>
                        </div>
                        <div className="form-group-login">
                            <input type="password" name="psw"  onChange={(event) => this.isChange(event)} placeholder="Mật khẩu" />
                            {/* <span className="input-icon"><i className="fa fa-lock" /></span> */}
                            <span className="input-icon"><RiLockPasswordFill /></span>
                        </div>      
                        <button className="login-btn" onClick={() => this.handleLogin('admin','admin')}>Đăng nhập</button>      
                        <a className="reset-psw" href="#">Quên mật khẩu ?</a>
                        <div className="seperator"><b>or</b></div>
                        <p>Đăng nhập bằng tài khoản</p>
                        {/* Social login buttons */}
                        <div className="social-icon">
                            <FaFacebook className="icon-login-facebook" />
                            {/* <button type="button"><i className="fa fa-twitter" />  </button> */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(LoginPage);
