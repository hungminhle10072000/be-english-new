import { combineReducers } from "redux";
import users from './users'
import admin_alert_info from './admin_alert_info'
import itemUserEdit from './itemUserEdit'
import  courseReducer  from '../reducer/courseReducer/courseReducer'
import courseEditReducer from '../reducer/courseReducer/courseEditReducer'
import chapterReducer from '../reducer/chapterReducer/chapterReducer'
import chapterEditReducer from "../reducer/chapterReducer/chapterEditReducer";
import lessonReducer from "./lessonReducer/lessonReducer";
const appReducers = combineReducers({
    users,
    courseReducer,
    itemUserEdit,
    admin_alert_info, 
    courseEditReducer,
    chapterReducer,
    chapterEditReducer,
    lessonReducer
});
export default appReducers;