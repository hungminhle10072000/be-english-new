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
import { connect } from 'react-redux'
import * as ReactBootstrap from 'react-bootstrap'

class AdminHomePage extends Component {

    constructor(props){
        super(props);

        this.state = ({
            statusCheckItemLoading: false
        })
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps && nextProps.statusItemLoading){
            this.setState({
                statusCheckItemLoading: nextProps.statusItemLoading.statusCheck
            })
        }
    }

    render() {
        return (
            <Router>
                <div className="main-admin-wrapper">
                    <AdminNavBar />
                    <AdminAlertInfo />
                    {this.state.statusCheckItemLoading ? <ReactBootstrap.Spinner animation="border" className='item-loading'/> : ''}
                    <AdminRoutes />        
                </div>         
            </Router>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        statusItemLoading: state.statusItemLoading
    }
}

export default connect(mapStateToProps,null) (AdminHomePage)