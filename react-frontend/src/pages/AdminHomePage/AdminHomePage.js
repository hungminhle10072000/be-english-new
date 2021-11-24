import React, { Component } from 'react'
import './AdminHomePage.css'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import AdminNavBar from '../../components/AdminNavBar/AdminNavBar';
import AdminRoutes from '../../customRoutes/AdminRoutes';
import AdminAlertInfo from '../../components/AdminAlertInfo/AdminAlertInfo'

export default class AdminHomePage extends Component {
    render() {
        return (
            <Router>
                <div className="main-admin-wrapper">
                    <AdminNavBar />
                    <AdminAlertInfo />
                    <AdminRoutes />        
                </div>         
            </Router>
        )
    }
}
