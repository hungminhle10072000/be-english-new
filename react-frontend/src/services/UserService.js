import axios from "axios";

const USER_API_BASE_URL = "http://localhost:8080/api/users";

class UserService {
    
    ///get all user
    getUsers() {
        return axios.get(USER_API_BASE_URL);
    }

    // add user
    createUser(userDto, file){
        let formData = new FormData();

        const json = JSON.stringify(userDto);
        const blob = new Blob([json], {
            type: 'application/json'
        });

        formData.append("userDto",blob);
        formData.append("file",file);

        return axios.post(USER_API_BASE_URL,formData,{
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    }

    // update user
    updateUser(userDto, userId, file){
        let formData = new FormData();

        const json = JSON.stringify(userDto);
        const blob = new Blob([json], {
            type: 'application/json'
        });

        formData.append("userDto", blob);
        formData.append("file", file);

        return axios.put(USER_API_BASE_URL + '/' + userId, formData,{
            headers: {
                'Content-Type' : 'multipart/form-data'
            }
        })
    }
    
    // delete user
    deleteUser(userId){
        return axios.delete(USER_API_BASE_URL + '/' + userId);
    }

    //get user by id
    getUserById(userId){
        return axios.get(USER_API_BASE_URL + '/' + userId);
    }

}

export default new UserService()