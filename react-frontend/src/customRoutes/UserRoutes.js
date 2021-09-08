import React, { Component, Fragment } from 'react'
import {
    Switch,
    Route,
    Redirect,
    BrowserRouter
} from "react-router-dom";
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import ContentPage from '../pages/ContentPage';

export default class UserRoutes extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    <Route exact path="/" component={ContentPage} />
                    <Route path="*" component={NotFoundPage} />
                </Switch>   
            </Fragment>
        )
    }
}
