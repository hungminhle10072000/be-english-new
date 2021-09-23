import { combineReducers } from "redux";
import users from './users'
import admin_alert_info from './admin_alert_info'
import itemUserEdit from './itemUserEdit'

const appReducers = combineReducers({
    users,
    itemUserEdit,
    admin_alert_info
});
export default appReducers;