import React, { Component, Fragment } from 'react'
import {
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import AdminAccountEdit from '../pages/AdminAccountEdit/AdminAccountEdit';
import AdminAccountPage from '../pages/AdminAccountPage/AdminAccountPage'
import AdminAddAccountPage from '../pages/AdminAddAccountPage/AdminAddAccountPage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage'


export default class AdminRoutes extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    <Route exact path="/admin" render={() => <Redirect to="/admin/account" />} />
                    <Route exact path="/admin/account" component={AdminAccountPage}/>
                    <Route exact path="/admin/account/add" component={AdminAddAccountPage}/>
                    <Route exact path="/admin/account/edit/:id" component={AdminAccountEdit}/>
                    <Route exact path="*" component={NotFoundPage} />
                </Switch>   
            </Fragment>
        )
    }
}
