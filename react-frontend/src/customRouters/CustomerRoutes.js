import React, { Component } from 'react'
import {
    Switch,
    Route,
    BrowserRouter
} from "react-router-dom";
import UserHomePage from '../pages/UserHomePage/UserHomePage';
import LoginPage from '../pages/LoginPage/LoginPage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';

export default class CustomerRoutes extends Component {
    render() {
        return (
            <div>
               <Switch>
                    <Route exact path="/" component={UserHomePage} />
                    <Route exact path="/login" component={LoginPage} />
                    <Route exact path="*" component={NotFoundPage} />
                </Switch>
            </div>
        )
    }
}
