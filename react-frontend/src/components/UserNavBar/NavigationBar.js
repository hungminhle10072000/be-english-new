import React, { Component } from 'react'
import { Nav, Navbar, Form, FormControl,Button } from 'react-bootstrap';
import './NavigationBar.css';
import { withRouter} from 'react-router-dom';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import allActions from '../../actions/index';

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
                        {checkUserLogin ? <div></div> :
                        <Nav className="ml-auto">
                            <Nav.Item><Nav.Link href="/login" className="button-user-login">Đăng nhập</Nav.Link></Nav.Item> 
                        </Nav>}
                        {/* <Nav className="ml-auto">
                            <Nav.Item><Nav.Link href="/login" className="button-user-login">Đăng nhập</Nav.Link></Nav.Item> 
                        </Nav> */}
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
