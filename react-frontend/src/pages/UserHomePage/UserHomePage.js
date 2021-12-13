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
                        <div className='container-fluid'>
                            <div className="main-sidebar-user row">
                                <div className="sideBar-user col-md-1" style={{paddingRight: 0, paddingLeft: 0}}>
                                    <Sidebar />
                                </div>
                                <div className="col-md-11 offset-md-1 content-user">
                                    <UserRoutes />
                                </div>
                            </div>
                        </div>                    
                </Router>
            </div>
        )
    }
}

export default withRouter(UserHomePage);