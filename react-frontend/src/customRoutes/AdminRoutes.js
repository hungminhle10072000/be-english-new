import React, { Component, Fragment } from 'react'
import { Provider } from 'react-redux';
import {
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import AdminAccountEdit from '../pages/AdminAccountEdit/AdminAccountEdit';
import AdminAccountPage from '../pages/AdminAccountPage/AdminAccountPage'
import AdminAddAccountPage from '../pages/AdminAddAccountPage/AdminAddAccountPage';
import AdminCoursePage from '../pages/AdminCoursePage/AdminCoursePage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage'
import {courseStore} from '../store/courseStore'


export default class AdminRoutes extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    <Route exact path="/admin" render={() => <Redirect to="/admin/account" />} />
                    <Route exact path="/admin/account" component={AdminAccountPage}/>
                    <Route exact path="/admin/account/add" component={AdminAddAccountPage}/>
                    <Route exact path="/admin/account/edit/:id" component={AdminAccountEdit}/>
                    <Provider courseStore = {courseStore}>
                        <Route exact path="/admin/course" component={AdminCoursePage}/>
                    </Provider>
                    
                    <Route exact path="*" component={NotFoundPage} />
                </Switch>   
            </Fragment>
        )
    }
}
