import { combineReducers } from "redux"
import users from './users'
import admin_alert_info from './admin_alert_info'
import itemUserEdit from './itemUserEdit'
import itemUserLogin from "./itemUserLogin"
import statusRegister from "./statusRegister"

const appReducers = combineReducers({
    users,
    itemUserEdit,
    admin_alert_info,
    itemUserLogin,
    statusRegister
});
export default appReducers;