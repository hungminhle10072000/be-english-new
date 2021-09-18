import * as Types from '../constants/ActionTypes';

const usersInitialState = []

const users = (state = usersInitialState, action) => {

    switch (action.type) {
        case Types.FETCH_USERS:
            state = action.users
            return [...state]
        default:
            return state
    }
}

export default users;