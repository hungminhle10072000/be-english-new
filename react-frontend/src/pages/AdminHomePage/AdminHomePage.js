import React, { Component } from 'react'
import './AdminHomePage.css'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
  import AdminNavBar from '../../components/AdminNavBar/AdminNavBar';
  import AdminRoutes from '../../customRoutes/AdminRoutes';


export default class AdminHomePage extends Component {
    render() {
        return (
            <Router>
                <div className="main-admin-wrapper">
                    <AdminNavBar />
                    <AdminRoutes />        
                </div>    
            </Router>
        )
    }
}
