import * as Types from '../constants/ActionTypes';

const status = {}
const statusRegister = (state = status, action) => {
    switch (action.type) {
        case Types.REGISTER_USER_FAIL:
            return {statusRegister: false};
        case Types.REGISTER_USER_SUCCESS:
            return {statusRegister: true};
        default:
            return state
    }
}

export default statusRegister;