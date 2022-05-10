import axios from "axios";
import {authHeader} from './auth-header';

const TOPIC_VOCA_API_END_POINT = "/api/topic-vocas";
const USER_TOPIC_VOCA_API_END_POINT = '/api/user-topic-vocas';
const USER_TOPIC_VOCA_NEW_API_END_POINT = '/api/user-topic-vocas-new';

const headers = {
    'Content-Type': 'application/json;charset=UTF-8',
    "Access-Control-Allow-Origin": "*",
    Accept: "application/json"
}

class VocabularyTopicService {

    // add topic
    createTopicVoca(nameTopic, image) {
        
        let formData = new FormData();

        formData.append("name_topic",nameTopic);
        formData.append("file",image);

        return axios.post(TOPIC_VOCA_API_END_POINT,formData,{
            headers:{...headers, ...authHeader(),'Content-Type': 'multipart/form-data'}
        })
    }

    // get all vocabulary topic
    getVocabularyTopic(){
        return axios.get(TOPIC_VOCA_API_END_POINT, {
            headers: {...headers, ...authHeader()},
        })
    }

    // delete vocabulary topic
    deleteVocaTopic(vocaTopicId) {
        return axios.delete(TOPIC_VOCA_API_END_POINT + '/' + vocaTopicId, {headers: {...headers, ...authHeader()}});
    }
    
    // get voca topic by id
    getVocaTopicById(vocaTopicId) {
        return axios.get(TOPIC_VOCA_API_END_POINT + '/' + vocaTopicId, {headers: {...headers, ...authHeader()}});
    }

    // update voca topic 
    updateVocaTopic(id, name_topic, image){
        let formData = new FormData();
        formData.append("name_topic",name_topic);
        formData.append("file",image);

        return axios.put(TOPIC_VOCA_API_END_POINT + '/' + id, formData,{
            headers:{...headers,...authHeader(),'Content-Type': 'multipart/form-data'}
        })
    }

    // user get all voca topic
    userGetAllVocaTopic = () => {
        return axios.get(USER_TOPIC_VOCA_API_END_POINT);
    }

    //use get topic new
    userGetTopicNew = () => {
        return axios.get(USER_TOPIC_VOCA_NEW_API_END_POINT);
    }

}

export default new VocabularyTopicService()