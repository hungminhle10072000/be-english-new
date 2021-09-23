import axios from "axios";

const USER_API_BASE_URL = "http://localhost:8080/api/users";

class UserService {
    
    ///get all user
    getUsers() {
        return axios.get(USER_API_BASE_URL);
    }

    // add user
    createUser(user) {
        return axios.post(USER_API_BASE_URL, user);
    }
    
    // delete user
    deleteUser(userId){
        return axios.delete(USER_API_BASE_URL + '/' + userId);
    }

    //get user by id
    getUserById(userId){
        return axios.get(USER_API_BASE_URL + '/' + userId);
    }

    // update user
    updateUser(user, userId){
        return axios.put(USER_API_BASE_URL + '/' + userId, user);
    }
    
}

export default new UserService()