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

export default {
    actFetchUsersRequest
}