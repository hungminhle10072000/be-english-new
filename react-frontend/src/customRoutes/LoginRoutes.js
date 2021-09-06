import React, { Component, Fragment } from 'react'
import {
    Switch,
    Route,
    Redirect,
    BrowserRouter
} from "react-router-dom";
import LoginPage from '../pages/LoginPage/LoginPage'

export default class LoginRoutes extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    <Route exact path="/login" component={LoginPage} />
                </Switch>
            </Fragment>
        )
    }
}
