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
const actAddUserRequest = (userDto,file) => {
    return(dispatch) => {
        return(
            UserService.createUser(userDto,file).then((res) => {
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

// get user by id
const actGetUserRequest = (id) => {
    return dispatch => {
        return (
            UserService.getUserById(id).then((res) => {
                dispatch(actGetUser(res.data));
            })
        )
    }
}

const actGetUser = (user) => {
    return {
        type:Types.EDIT_USER,
        user
    }
}


// update user
const actUpdateUserRequest = (userDto, file, checkFile) => {
    return dispatch => {
        return (
            UserService.updateUser(userDto, userDto.id, file, checkFile).then( res => {
                dispatch(actUpdateUser(res.data));
            })
        )
    }
}

const actUpdateUser = (user) => {
    return {
        type: Types.UPDATE_USER,
        user
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    actFetchUsersRequest,
    actAddUserRequest,
    actDeleteUserRequest,
    actUpdateUserRequest,
    actGetUserRequest
}