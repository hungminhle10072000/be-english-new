import React, { Component } from 'react'
import './LoginPage.css'
import { FaFacebook,FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import PropTypes from "prop-types";
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import allActions from '../../actions';
import validator from 'validator';
import AdminAlertInfo from '../../components/AdminAlertInfo/AdminAlertInfo';
import { Link } from 'react-router-dom';

class LoginPage extends Component {

    constructor(props){
        super(props);

        this.state = {
            username: '',
            psw: '',
            validationMsg: {}
        }
    }
    
    validateAll = () => {
        const msg = {}
        if(validator.isEmpty(this.state.username)){
            msg.username = "Yêu cầu nhập tên đăng nhập !"
        }
        if(validator.isEmpty(this.state.psw)){
            msg.psw = "Yêu cầu nhập mật khẩu !"
        }

        this.setState({
            validationMsg: msg
        })
        if(Object.keys(msg).length > 0) return false
        return true;
    }

    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    };

    handleLogin = () => {
        let {username, psw} = this.state;
        const isValid = this.validateAll();
        if(!isValid) return
        else this.props.onLoginUser(username, psw);         
    }

    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
          [name]:value
        });
      }

    render() {

        const {validationMsg} = this.state;
        if(this.props.itemUserLogin.role === "Admin"){
            window.location.pathname = ('/admin');
        } else if(this.props.itemUserLogin.role === "User"){
            window.location.pathname = ('/');
        }  
        return (
            <div className="container-fluid container-login">
                <AdminAlertInfo />
                <div className="login-form">
                    <div>
                        
                        <h1>Đăng nhập</h1>
                        <p className="msg-error">{validationMsg.username}</p>
                        <div className="form-group-login">
                            <input type="text" name="username" onChange={(event) => this.isChange(event)} placeholder="Tên đăng nhập" />
                            {/* <span className="input-icon"><i className="fa fa-envelope" /></span> */}
                            <span className="input-icon"><FaUser /></span>
                        </div>

                        <p className="msg-error">{validationMsg.psw}</p>  
                        <div className="form-group-login">
                            <input type="password" name="psw"  onChange={(event) => this.isChange(event)} placeholder="Mật khẩu" />
                            {/* <span className="input-icon"><i className="fa fa-lock" /></span> */}
                            <span className="input-icon"><RiLockPasswordFill /></span>
                        </div>
                            
                        <button className="login-btn" onClick={() => this.handleLogin()}>Đăng nhập</button>
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-6">
                                    <Link className="link-login" to="/register">
                                        <span className="reset-psw">Quên mật khẩu ?</span>
                                    </Link>
                                </div>
                                <div className="col-sm-6">
                                    <Link className="link-login" to="/register">
                                        <span className="reset-psw" >Đăng ký tài khoản</span>
                                    </Link>
                                </div>
                            </div>     
                        </div>     
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

const mapStateToProps = (state, ownProps) => {
    return {
        itemUserLogin: state.itemUserLogin
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onLoginUser : (username, password) => {
            dispatch(allActions.userAction.actLoginUserRequest(username,password));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (withRouter(LoginPage))
