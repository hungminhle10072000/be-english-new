import React, { Component } from 'react'
import { connect } from 'react-redux'
import './AdminAccountEdit.css'
import { BiSave, BiReset } from "react-icons/bi"
import allActions from '../../actions/index'
import validator from 'validator'
import {withRouter} from 'react-router-dom'


class AdminAccountEdit extends Component {

    constructor(props){
        super(props);
        this.state = {
            id: this.props.match.params.id,
            user: {
                fullname: '',
                username: '',
                password: '',
                repeat_password: '',
                phonenumber: '',
                email: '',
                gender: '',
                address: '',
                birthday: '',
                role: ''
            },
            // validation
            validationMsg: {}
        }
    }

    componentDidMount() {
        this.props.onEditUser(this.state.id);
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps && nextProps.itemUserEdit){
            var {itemUserEdit} = nextProps;
            this.setState({
                user: {...itemUserEdit, repeat_password: itemUserEdit.password}
            })
        }
    }

    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            user: {...this.state.user,[name]: value}
        })
    }

    updateUser = (event) => {
        event.preventDefault();
        this.props.onUpdateUser(this.state.user);
        this.props.history.goBack();
        this.props.changeAdminAlertOn("Cập nhật thành công","success");
    }

    handleConfirmationBox = (event) => {
        const isValid = this.validateAll()
        if(!isValid) return 
        else {
            if(!this.state.confirmDialog){
                document.querySelector(".confirm-bg").style.display = "flex"
                document.querySelector(".container-dialog").style.display = "flex"
                this.setState({
                    confirmDialog: true
                })
            } else {
                document.querySelector(".confirm-bg").style.display = "none"
                document.querySelector(".container-dialog").style.display = "none"
                this.setState({
                    confirmDialog: false
                })
            }
        }
    }

    validateAll = () => {
        const msg = {}
        if(validator.isEmpty(this.state.user.fullname)){
            msg.fullname = "Yêu cầu nhập tên !"
        }
        if(validator.isEmpty(this.state.user.username)){
            msg.username = "Yêu cầu nhập tên đăng nhập !"
        }
        if(validator.isEmpty(this.state.user.password)){
            msg.password = "Yêu cầu nhập mật khẩu !"
        }
        if(validator.isEmpty(this.state.user.repeat_password)){
            msg.repeat_password = "Yêu cầu nhập lại mật khẩu !"
        } else if (!validator.equals(this.state.user.password, this.state.user.repeat_password)) {
            msg.repeat_password = "Mật khẩu nhập lại không khớp !"
        }
        if(validator.isEmpty(this.state.user.phonenumber)){
            msg.phonenumber = "Yêu cầu nhập số điện thoại !"
        } else if (!validator.isMobilePhone(this.state.user.phonenumber)){
            msg.phonenumber = "Yêu cầu nhập đúng số điện thoại !"
        }
        if(validator.isEmpty(this.state.user.email)){
            msg.email = "Yêu cầu nhập địa chỉ gmail !"
        } else if (!validator.isEmail(this.state.user.email)) {
            msg.email = "Yêu cầu nhập đúng gmail !"
        }
        if(validator.isEmpty(this.state.user.address)){
            msg.address = "Yêu cầu nhập địa chỉ !"
        }

        this.setState({
            validationMsg: msg
        })
        if(Object.keys(msg).length > 0) return false
        return true;
    }

    resetForm = (event) => {
        event.preventDefault();
        const {itemUserEdit} = this.props
        this.setState({
            user: {...itemUserEdit,repeat_password: itemUserEdit.password}
        })
     }

    render() {
        const {
            validationMsg
        } = this.state;

        return (
            <div className="container-fluid container-admin-add-account">
                <div className="container-dialog">
                    <div className="confirmation-text">
                        Bạn có chắc chắn muốn cập nhật ?
                    </div>
                    <div className="button-container">
                        <button 
                            className="confirmation-button cancel-button" 
                            onClick={(event) => this.handleConfirmationBox(event)}>
                            Hủy
                        </button>
                        <button 
                            className="confirmation-button btn-confirm"
                            onClick={(event) => this.updateUser(event)} >
                            Xác nhận
                        </button>
                    </div>
                </div>
                <div 
                    className="confirm-bg"
                    onClick={(event) => this.handleConfirmationBox(event)}> 
                </div>
                <div className="row">
                    <div className="col-12">
                        <div style={{marginTop: 10}}>
                            <div className="jumbotron manager-account">
                                <h2>Chỉnh sửa tài khoản </h2>  
                            </div>
                        </div>
                    </div>
                </div> 
                <div className="row">
                    <div className="col-12">
                    <form>
                            <div className="row">
                                {/* Left */}
                                <div className="col-sm-6">
                                    <label htmlFor="Id"><b>Id</b></label>         
                                    <input className="input-field" type="text" onChange={(event) => this.isChange(event)}
                                    placeholder="Id" name="Id" id="Id" defaultValue={this.state.id} disabled />
                                     <p className="msg-error">{}</p>

                                    <label htmlFor="fullname"><b>Họ tên</b></label>      
                                    <input onChange={(event) => this.isChange(event)}
                                    className="input-field" value={this.state.user.fullname} type="text" placeholder="Họ tên" name="fullname" id="fullname"/>
                                    <p className="msg-error">{validationMsg.fullname}</p>

                                    <label htmlFor="username"><b>Tên đăng nhập</b></label>    
                                    <input className="input-field" value={this.state.user.username} onChange={(event) => this.isChange(event)}
                                    type="text" placeholder="Tên đăng nhập" name="username" id="username" />
                                    <p className="msg-error">{validationMsg.username}</p>

                                    <label htmlFor="password"><b>Mật khẩu</b></label>
                                    <input className="input-field" type="password" value={this.state.user.password} onChange={(event) => this.isChange(event)}
                                    placeholder="Mật khẩu" name="password" id="password" />
                                    <p className="msg-error">{validationMsg.password}</p>

                                    <label htmlFor="repeat_password"><b>Nhập lại mật khẩu</b></label>
                                    <input className="input-field" type="password" value={this.state.user.repeat_password} onChange={(event) => this.isChange(event)}
                                    placeholder="Nhập lại mật khẩu" name="repeat_password" id="repeat_password" />
                                    <p className="msg-error">{validationMsg.repeat_password}</p>

                                    <label htmlFor="email"><b>Email</b></label>
                                    <input className="input-field" type="email" value={this.state.user.email} onChange={(event) => this.isChange(event)}
                                    placeholder="Email" id="email" name="email" />
                                    <p className="msg-error">{validationMsg.email}</p>
                    
                                    <label htmlFor="gender"><b>Giới tính</b></label>
                                    <div>
                                        <input  onChange={(event) => this.isChange(event)} type="radio" id="nam" name="gender" value="Nam" checked={this.state.user.gender === "Nam"} />
                                        <label htmlFor="nam">&nbsp; Nam</label> &nbsp; &nbsp; &nbsp;
                                        <input  onChange={(event) => this.isChange(event)} type="radio" id="nu" name="gender" value="Nữ" checked={this.state.user.gender === "Nữ"}/>
                                        <label htmlFor="nu">&nbsp;  Nữ</label><br />
                                    </div>  
                                </div>

                                {/* Right */}
                                <div className="col-sm-6">
                                    <label htmlFor="address"><b>Địa chỉ</b></label>  
                                    <input className="input-field" type="text" value={this.state.user.address} onChange={(event) => this.isChange(event)}
                                    placeholder="Địa chỉ" name="address" id="address" />
                                    <p className="msg-error">{validationMsg.address}</p>

                                    <label htmlFor="phonenumber"><b>Số điện thoại</b></label>  
                                    <input className="input-field" type="text" value={this.state.user.phonenumber} onChange={(event) => this.isChange(event)}
                                    placeholder="Số điện thoại" name="phonenumber" id="phonenumber" />
                                    <p className="msg-error">{validationMsg.phonenumber}</p>
                                    
                                    <label htmlFor="birthday"><b>Ngày sinh</b></label>  
                                    <input className="input-field" type="date" value={this.state.user.birthday} onChange={(event) => this.isChange(event)}
                                    placeholder="Ngày sinh" name="birthday" id="birthday" />
                                    
                                    <label htmlFor="role"><b>Quyền</b></label>
                                    <div>
                                        <input onChange={(event) => this.isChange(event)} type="radio" id="Admin" name="role" value="Admin" checked={this.state.user.role === "Admin"}/>
                                        <label htmlFor="Admin">&nbsp; Admin</label> &nbsp; &nbsp; &nbsp;
                                        <input onChange={(event) => this.isChange(event)} type="radio" id="User" name="role" value="User" checked={this.state.user.role === "User"} />
                                        <label htmlFor="User">&nbsp;  User</label><br />
                                    </div>   

                                    <label htmlFor="avatar"><b>Ảnh đại diện</b></label>  
                                    <input className="input-field" type="file" placeholder="Ảnh đại diện" id="avatar" name="avatar"/>
                                </div>
                            </div>

                            <div className="div-button-account">
                                    <button type="button" onClick={(event) => this.handleConfirmationBox(event)}
                                    className="btn btn-success btn-save-account">Cập nhật <BiSave /></button> 

                                    <button type="reset" onClick={(event) =>  this.resetForm(event)}
                                    className="btn btn-warning">Reset <BiReset /></button> 
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        itemUserEdit: state.itemUserEdit,
        users: state.users
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onEditUser: (id) => {
            dispatch(allActions.userAction.actGetUserRequest(id));
        },
        onUpdateUser: (user) => {
            dispatch(allActions.userAction.actUpdateUserRequest(user));
        },
        changeAdminAlertOn : (admin_alertContent, admin_alertType) => {
            dispatch(allActions.adminAlertInfoAction.changeAdminAlertOn(admin_alertContent, admin_alertType));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (withRouter(AdminAccountEdit))