import * as Types from '../constants/ActionTypes';

const changeAdminAlertOn = (admin_alertContent, admin_alertType) => {
    return{
        type: Types.ALERT_ADMIN_ON,
        admin_alertContent,admin_alertType
    }
}

const changeAdminAlertOff = () => {
    return {
        type: Types.ALERT_ADMIN_OFF
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    changeAdminAlertOn,
    changeAdminAlertOff
}