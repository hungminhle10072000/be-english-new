import { combineReducers } from "redux"
import users from './users'
import admin_alert_info from './admin_alert_info'
import itemUserEdit from './itemUserEdit'
import itemUserLogin from "./itemUserLogin"
import statusRegister from "./statusRegister"

import  courseReducer  from '../reducer/courseReducer/courseReducer'
import courseEditReducer from '../reducer/courseReducer/courseEditReducer'
import chapterReducer from '../reducer/chapterReducer/chapterReducer'
import chapterEditReducer from "../reducer/chapterReducer/chapterEditReducer";
import lessonReducer from "./lessonReducer/lessonReducer";

import statusFormSendMail from "./statusFormSendMail"

const appReducers = combineReducers({
    users,
    courseReducer,
    itemUserEdit,
    admin_alert_info,
    itemUserLogin,
    statusRegister,
    courseEditReducer,
    chapterReducer,
    chapterEditReducer,
    lessonReducer,
    statusFormSendMail
});
export default appReducers;