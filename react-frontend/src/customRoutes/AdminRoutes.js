import React, { Component, Fragment } from 'react'
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
import AdminTopicVocabulary from '../pages/AdminTopicVocabulary/AdminTopicVocabulary';
import AdminDetailTopicVocabulary from '../pages/AdminDetailTopicVocabulary/AdminDetailTopicVocabulary';
import AdminEditLessonPage from '../pages/AdminEditLessonPage/AdminEditLessonPage';
import AdminGrammar from '../pages/AdminGrammar/AdminGrammar';
import AdminItemContentGrammar from '../components/AdminItemContentGrammar/AdminItemContentGrammar';
import AdminEditInfo from '../pages/AdminEditInfo/AdminEditInfo';
import AdminCommentPage from '../pages/AdminCommentPage/AdminCommentPage';
import AdminExercises from '../pages/AdminExercises/AdminExercises';
import AdminDetailQuestion from '../pages/AdminDetailQuestion/AdminDetailQuestion'
import AdminAddQuestionRead from '../pages/AdminAddQuestionRead/AdminAddQuestionRead'
import AdminEditQuestionRead from '../pages/AdminEditQuestionRead/AdminEditQuestionRead';

class AdminRoutes extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    <Route exact path="/admin" render={() => <Redirect to="/admin/account" />} />
                    <Route exact path="/admin/account" component={AdminAccountPage}/>
                    <Route exact path="/admin/account/add" component={AdminAddAccountPage}/>
                    <Route exact path="/admin/edit/info" component={AdminEditInfo}/>
                    <Route exact path="/admin/account/edit/:id" component={AdminAccountEdit}/>
                    <Route exact path="/admin/course" component={AdminCoursePage}/> 
                    <Route exact path="/admin/course/add" component={AdminAddCoursePage}/>
                    <Route exact path="/admin/course/edit/:id" component={AdminEditCoursePage}/>
                    <Route exact path="/admin/chapter/add/:courseId" component={AdminAddChapterPage}/>   
                    <Route exact path="/admin/chapter/:id" component={AdminChapterPage}/>     
                    <Route exact path="/admin/chapter/edit/:id" component={AdminEditChapterPage}/>    
                    <Route exact path="/admin/lesson/add" component={AdminAddLessonPage}/>         
                    <Route exact path="/admin/lesson/:id" component={AdminLessonPage}/>
                    <Route exact path = "/admin/topic-vocabulary" component={AdminTopicVocabulary}/>
                    <Route exact path = "/admin/topic-vocabulary/:idTopic/:nameTopicVoca" component={AdminDetailTopicVocabulary} />  
                    <Route exact path="/admin/lesson/add/:chapterId" component={AdminAddLessonPage}/>     
                    <Route exact path="/admin/lesson/edit/:id" component={AdminEditLessonPage}/>
                    <Route exact path="/admin/grammar" component={AdminGrammar}/>
                    <Route exact path="/admin/grammar/:id" component={AdminItemContentGrammar}/>      
                    <Route exact path="/admin/lesson/edit/:id" component={AdminEditLessonPage}/>    
                    <Route exact path="/admin/comments" component={AdminCommentPage}/>
                    <Route exact path = "/admin/exercise" component={AdminExercises}/>
                    <Route exact path = "/admin/exercise/:idExercise/:nameExercise" component={AdminDetailQuestion}/>    
                    <Route exact path = "/admin/addQuestion/:idExercise/:nameExercise" component={AdminAddQuestionRead} />
                    <Route exact path = "/admin/question/edit/:idQuestion" component={AdminEditQuestionRead} />

                    {/* <Route exact path="/user/course" component={UserCoursePage}/>    */}
                    <Route exact path="*" component={NotFoundPage} />
                </Switch>   
            </Fragment>
        )
    }
}

export default AdminRoutes