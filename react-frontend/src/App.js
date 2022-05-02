import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import './App.css'
import UserHomePage from './pages/UserHomePage/UserHomePage'
import LoginPage from './pages/LoginPage/LoginPage';
import AdminHomePage from './pages/AdminHomePage/AdminHomePage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import UserCoursePage from  './pages/UserHomePage/UserCoursePage';
import { connect } from 'react-redux';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class App extends Component {

  constructor(props){
    super(props);
  }

  render() {
    const checkRoleAdmin = (localStorage.getItem('w2rt3') === "popqw")
    return(
      <Router>
        <Switch>
            <Route path="/" component={UserHomePage} exact/>
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
            <Route path='/admin' render={
              () => ((localStorage.getItem('token') && checkRoleAdmin) ? <AdminHomePage /> : <Redirect to={{pathname: '/login'}}/>)
            } />
            <Route path= "*" component={UserHomePage} />               
        </Switch>
      </Router>
    )
  }
}

export default (App);