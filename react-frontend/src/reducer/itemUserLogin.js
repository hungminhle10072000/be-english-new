import * as Types from '../constants/ActionTypes'

const itemUserLoginState = {}

const itemUserLogin = (state = itemUserLoginState, action) => {
    switch (action.type) {
        case Types.LOGIN_USER:
            return action.user;

        default:
            return state
    }
}

export default itemUserLogin;