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
import AdminAddCoursePage from '../pages/AdminAddCoursePage/AdminAddCoursePage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage'
import AdminEditCoursePage from '../pages/AdminEditCoursePage/AdminEditCoursePage'
import AdminChapterPage from '../pages/AdminChapterPage/AdminChapterPage';
import AdminAddChapterPage from '../pages/AdminAddChapterPage/AdminAddChapterPage';
import AdminEditChapterPage from '../pages/AdminEditChapterPage/AdminEditChapterPage';
import AdminLessonPage from '../pages/AdminLessonPage/AdminLessonPage';
import AdminAddLessonPage from '../pages/AdminAddLessonPage/AdminAddLessonPage';

class AdminRoutes extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    <Route exact path="/admin" render={() => <Redirect to="/admin/account" />} />
                    <Route exact path="/admin/account" component={AdminAccountPage}/>
                    <Route exact path="/admin/account/add" component={AdminAddAccountPage}/>
                    <Route exact path="/admin/account/edit/:id" component={AdminAccountEdit}/>
                    <Route exact path="/admin/course" component={AdminCoursePage}/> 
                    <Route exact path="/admin/course/add" component={AdminAddCoursePage}/>
                    <Route exact path="/admin/course/edit/:id" component={AdminEditCoursePage}/>
                    <Route exact path="/admin/chapter/add/:courseId" component={AdminAddChapterPage}/>   
                    <Route exact path="/admin/chapter/:id" component={AdminChapterPage}/>     
                    <Route exact path="/admin/chapter/edit/:id" component={AdminEditChapterPage}/>    
                    <Route exact path="/admin/lesson/add" component={AdminAddLessonPage}/>         
                    <Route exact path="/admin/lesson/:id" component={AdminLessonPage}/>   
                   
                    <Route exact path="*" component={NotFoundPage} />
                </Switch>   
            </Fragment>
        )
    }
}

export default AdminRoutes