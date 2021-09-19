import * as Types from '../constants/ActionTypes';

const initInitialState = {
    AdminAlertShow: false,
    AdminAlertType: ''
}


const admin_alert_info = (state = initInitialState, action) => {
    switch (action.type) {
        case Types.ALERT_ADMIN_ON:
            return {...state, AdminAlertShow: true, AdminAlertContent: action.admin_alertContent, AdminAlertType: action.admin_alertType}
        case Types.ALERT_ADMIN_OFF:
            return {...state, AdminAlertShow: false}
        default:
            return state
    }
}

export default admin_alert_info;