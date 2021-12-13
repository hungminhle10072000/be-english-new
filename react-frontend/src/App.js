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
import UserCoursePage from  './pages/UserHomePage/UserCoursePage'
import { connect } from 'react-redux';


class App extends Component {

  // eslint-disable-next-line no-useless-constructor
  constructor(props){
    super(props);
    // this.state = {
    //   role: ''
    // }
  }

  // componentWillReceiveProps(nextProps) {
  //     if(nextProps && nextProps.itemUserLogin){
  //         let {itemUserLogin} = nextProps
  //         this.setState({
  //           role: itemUserLogin.role
  //         })
  //     }
  // }
  
  

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