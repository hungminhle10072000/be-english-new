import * as Types from '../constants/ActionTypes'

const itemUserLoginState = {
    id: -1
}

const itemUserLogin = (state = itemUserLoginState, action) => {
    switch (action.type) {
        case Types.LOGIN_USER:
            localStorage.setItem('idUser',action.user.id);
            return action.user;
        case Types.REMEMBER_USER_LOGIN:
            return action.user;
        default:
            return state
    }
}

export default itemUserLogin;