import React, { Component } from 'react'
import {
  BrowserRouter as Router
} from "react-router-dom";
import AdminNavbar from './components/AdminNavbar/AdminNavbar';
import AdminSideNav from './components/AdminSideNav/AdminSideNav';
import AdminRoutes from './customRouters/AdminRoutes';
import CustomerRoutes from './customRouters/CustomerRoutes';

export default class App extends Component {

  constructor(props){

    super(props);

    this.state = {
      role : 0
    }
  }

  render() {
    var check = this.state.role === 0;
    if(check === true){
          return (
            <Router>
              <div className="sb-nav-fixed">
                <AdminNavbar />
                <div id="layoutSidenav">
                  <AdminSideNav />
                    <div id="layoutSidenav_content">
                      {/* <div className="col"> */}
                        <AdminRoutes />
                      {/* </div> */}
                    </div>
                </div>
              </div>
            </Router>
        )
    } else {
          return (
            <Router>
                  <h1>Day la co dinh nha</h1>
                <CustomerRoutes />
            </Router>
          )
    }
   
  }
}
