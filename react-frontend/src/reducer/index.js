import { combineReducers } from "redux";
import users from './users'
import admin_alert_info from './admin_alert_info'

const appReducers = combineReducers({
    users,
    admin_alert_info
});
export default appReducers;