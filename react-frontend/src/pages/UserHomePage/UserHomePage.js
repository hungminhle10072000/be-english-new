import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import {withRouter} from 'react-router-dom';
import UserRoutes from '../../customRoutes/UserRoutes';
import './UserHomePage.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import NavigationBar from '../../components/UserNavBar/NavigationBar'
import Sidebar from '../../components/UserSideBar/Sidebar';

class UserHomePage extends Component {
    kiemtra = () => {
        return this.props.history.push('/login');
    }
    render() {
        return (
            <div className="main-user-home">
                <Router>
                        <NavigationBar/>
                        <div className="main-sidebar-user row">
                            <div className="sideBar-user col-md-2">
                                <Sidebar />
                            </div>
                            <div className="col-md-10 offset-md-2 content-user">
                                <UserRoutes />
                            </div>
                        </div>
                </Router>
            </div>
        )
    }
}

export default withRouter(UserHomePage);