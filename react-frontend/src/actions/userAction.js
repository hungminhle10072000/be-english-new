import * as Types from '../constants/ActionTypes'
import UserService from '../services/UserService'
import adminAlertInfoAction from './admin-alert-infoAction'

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

///register user
const actRegisterRequest = (userDto, file) => {
    return dispatch => {
        return (
            UserService.register(userDto,file).then(
                (res) => 
                {
                    console.log(res.status)
                    dispatch(actRegisterSuccess())
                }
            ).catch(           
                error => {
                    if(error.response.status === 409){
                        dispatch(adminAlertInfoAction.changeAdminAlertOn("Tên đăng nhập đã tồn tại ! \n Yêu cầu đổi tên đăng nhập khác.", "danger"))           
                    }
                    if(error.response.status === 400){
                        dispatch(adminAlertInfoAction.changeAdminAlertOn("Email đã có tài khoản đăng ký ! Yêu cầu sử dụng email khác", "danger"))           
                    }            
                }        
            )
        )
    }
     
}

const actRegisterFail = () => {
    return {
        type: Types.REGISTER_USER_FAIL
    }
}

const actRegisterSuccess = () => {
    return {
        type: Types.REGISTER_USER_SUCCESS
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

//login
const actLoginUserRequest = (username, password) => {
    return dispatch => {
        return (
            UserService.login(username, password)
            .then(res => {
                    if(res.status === 200){
                        localStorage.setItem('token',res.data.token.token);
                        if(res.data.user.role === "Admin"){
                            localStorage.setItem('w2rt3','popqw');
                        }
                        if(res.data.user.role === "User"){
                            localStorage.setItem('w2rt3','uiasq');
                        }
                        dispatch(actLoginUser(res.data.user));
                    } 
                }
            ).catch(
                error => {
                    dispatch(adminAlertInfoAction.changeAdminAlertOn("Tên đăng nhập hoặc mật khẩu của bạn chưa đúng !","danger"));
                }
                
            )
        )
    }
}

const actLoginUser = (user) => {
    return {
        type: Types.LOGIN_USER,
        user
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    actFetchUsersRequest,
    actAddUserRequest,
    actDeleteUserRequest,
    actUpdateUserRequest,
    actGetUserRequest, 
    actLoginUserRequest,
    actRegisterRequest
}