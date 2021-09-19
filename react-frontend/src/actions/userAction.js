import * as Types from '../constants/ActionTypes'
import UserService from '../services/UserService'

// get all users
const actFetchUsersRequest = () => {
    return(dispatch) => {
        return (
            UserService.getUsers().then((res) => {
                dispatch(actFetchUsers(res.data))
            })
        )
    }
}

const actFetchUsers = (users) => {
    return {
        type: Types.FETCH_USERS,
        users
    }
}

// add user
const actAddUserRequest = (user) => {
    return(dispatch) => {
        return(
            UserService.createUser(user).then((res) => {
                dispatch(actAddUser(res.data))
            })
        )
    }
}

const actAddUser = (user) => {
    return{
        type: Types.ADD_USER,
        user
    }
}

// delete user
const actDeleteUserRequest = (id) => {
    return(dispatch) => {
        return (
            UserService.deleteUser(id).then((res) => {
                dispatch(actDeleteUser(id))
            })
        )
    }
}

const actDeleteUser = (id) => {
    return{
        type: Types.DELETE_USER,
        id
    }
}

export default {
    actFetchUsersRequest,
    actAddUserRequest,
    actDeleteUserRequest
}