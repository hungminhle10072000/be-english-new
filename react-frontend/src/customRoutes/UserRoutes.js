import React, { Component, Fragment } from 'react'
import {
    Switch,
    Route,
    Redirect,
    BrowserRouter
} from "react-router-dom";
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import ContentPage from '../pages/ContentPage';
import UserCoursePage from '../pages/UserHomePage/UserCoursePage'
import UserLearningPage from '../pages/UserHomePage/UserLearningPage';
import UserTopicVocabulary from '../pages/UserTopicVocabulary/UserTopicVocabulary'

export default class UserRoutes extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    <Route exact path="/" component={UserTopicVocabulary}/> 
                    <Route exact path="/user/topic-vocabulary" component={UserTopicVocabulary}/> 
                    <Route exact path="/user/course" component={UserCoursePage}/>   
                    <Route exact path="/user/learning/:id" component={UserLearningPage}/>   
                    {/* <Route exact path="/" component={ContentPage} />
                    <Route path="*" component={NotFoundPage} /> */}
                </Switch>   
            </Fragment>
        )
    }
}
