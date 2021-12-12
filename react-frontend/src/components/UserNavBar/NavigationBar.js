import React, { Component } from 'react'
import { Nav, Navbar, Form, FormControl,Button } from 'react-bootstrap';
import './NavigationBar.css';
import { withRouter} from 'react-router-dom';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import allActions from '../../actions/index';
import {BiUserCircle} from 'react-icons/bi'
import {HiOutlineLogout} from 'react-icons/hi'
import {FaUserEdit} from 'react-icons/fa'
import {MdOndemandVideo} from 'react-icons/md'

class NavigationBar extends Component {

    constructor(props){
        super(props);
        this.state = {
            idUserLogin: localStorage.getItem('idUser')
        }     
    }

    static propTypes = {
        history: PropTypes.object.isRequired
    };

    componentDidMount() {
        if(this.state.idUserLogin !== null){
            this.props.onGetUserLogin(this.state.idUserLogin)
        }
    }
    
    logout = (e) => {
        e.preventDefault();
        localStorage.removeItem("token");
        localStorage.removeItem("w2rt3");
        localStorage.removeItem("idUser");
        window.location.pathname = "/"
    }
    
    render() {
        const checkUserLogin = this.state.idUserLogin !== null;
        return (
            <Navbar expand="lg" className="navBar-user-home">
                <div className="div-brand-user">
                    <Navbar.Brand href="/" className="navBrand-user-home">
                        <img
                            src="/logo.jpg"
                            width="80"
                            height="80"
                            className="d-inline-block align-top"
                            alt="Logo website"
                        />
                    </Navbar.Brand>
                    {' '}
                    <span className="text-brand">Cùng nhau học tiếng anh</span>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                </div>

                <div>
                    <Form className="form-center-navbar">
                        <FormControl type="text" placeholder="Tìm kiếm khóa học" style={{width: 400}}/>
                    </Form>
                </div>
               
                <div>
                    <Navbar.Collapse id="basic-navbar-nav">
                        {checkUserLogin ?   
                        <Nav className="ml-auto" className="div-setting-user">
                            <Nav.Item><BiUserCircle color='black' className='icon-user-login'/></Nav.Item> 
                            <div className="setting-user">
                                <div className="setting-user-item setting-edit-info">
                                    <FaUserEdit/> <span>Thay đổi thông tin</span>
                                </div>
                                <div className="setting-user-item">
                                    <MdOndemandVideo/> <span>Khóa học của tôi</span>
                                </div>
                                <div className="setting-user-item setting-logout" onClick={e => this.logout(e)}> 
                                    <HiOutlineLogout/> <span>Đăng xuất</span>
                                </div>
                            </div>
                        </Nav> :
                        <Nav className="ml-auto">
                            <Nav.Item><Nav.Link href="/login" className="button-user-login">Đăng nhập</Nav.Link></Nav.Item> 
                        </Nav>}
                    </Navbar.Collapse>
                </div>
            </Navbar>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        itemUserLogin: state.itemUserLogin
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onGetUserLogin: (id) => {
            dispatch(allActions.userAction.actRememberUserLoginRequest(id))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (withRouter(NavigationBar))
