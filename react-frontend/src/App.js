import React, { Component } from 'react'
import AdminNavBar from './components/AdminNavBar/AdminNavBar';
import {
  BrowserRouter as Router
} from "react-router-dom";
import LoginRoutes from './customRoutes/LoginRoutes'
import './App.css'
import AdminRoutes from './customRoutes/AdminRoutes'

export default class App extends Component {

  constructor(props){

    super(props);

    this.state = {
      role : 0
    }
  }

  render() {
    if(this.state.role === -1){
      return(
      <Router>
          <LoginRoutes />
      </Router>
      )
    }
    if(this.state.role === 0){
      return (
        <Router>
            <div className="main-admin-wrapper">
                <AdminNavBar />
                <AdminRoutes />        
            </div>    
        </Router>
      )
    } if(this.state.role === 1){
      return(
        <Router>
            <div>
              Đây là trang home
            </div>
        </Router>
      )
    }
  }
}
