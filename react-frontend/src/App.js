import React, { Component } from 'react'
import AdminNavBar from './components/AdminNavBar/AdminNavBar';
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
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

export default class App extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return(
      <Router>
        <Switch>
            <Route exact path="/" component={UserHomePage} />
            <Route exact path="/login" component={LoginPage} />
            <Route path= "/admin" component={AdminHomePage} />
            <Route path= "*" component={UserHomePage} />
            {/* <Redirect to="/" component={UserHomePage} /> */}
        </Switch>
      </Router>
    )
  }
}
