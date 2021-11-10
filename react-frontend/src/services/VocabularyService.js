import axios from "axios";
import {authHeader} from './auth-header';

const VOCA_API_END_POINT = "/api/vocabulary";

const headers = {
    'Content-Type': 'application/json;charset=UTF-8',
    "Access-Control-Allow-Origin": "*",
    Accept: "application/json"
}

class VocabularyService {
    

    // get all vocabulary by topic id
    getAllVocabularyByTopicId(idTopic){
        return axios.get(VOCA_API_END_POINT + '/' + idTopic, {headers: {...headers, ...authHeader()}});
    }

    // add vocabulary for topic
    createVoca(vocaDto, file_audio, file_image){

        let formData = new FormData();

        const json = JSON.stringify(vocaDto);
        const blob = new Blob([json], {
            type: 'application/json'
        });

        formData.append("vocabularyDto", blob);
        formData.append("file_audio", file_audio);
        formData.append("file_image", file_image);

        return axios.post(VOCA_API_END_POINT, formData, {
            headers: {...headers, ...authHeader(), 'Content-Type': 'multipart/form-data'}
        })
    }

    // delete vocabulary
    deleteVocabulary(id) {
        return axios.delete(VOCA_API_END_POINT + '/' + id, {headers: {...headers, ...authHeader()}});
    } 

    // get voca by id
    getVocabylary(id) {
        return axios.get(VOCA_API_END_POINT + '/getVocaByid/' + id , {
            headers:{...headers, ...authHeader()}
        })
    }

    // update vocabulary
    updateVocabulary(id , vocabularyUpdateDto, file_audio, image) {

        let formData = new FormData();
        
        const json = JSON.stringify(vocabularyUpdateDto);
        const blob = new Blob([json], {
            type: 'application/json'
        });

        formData.append("vocabularyUpdateDto",blob);
        formData.append("file_audio",file_audio);
        formData.append("file_image",image);
        
        return axios.put(VOCA_API_END_POINT + '/' + id, formData,{
            headers: {...headers,...authHeader(),'Content-Type': 'multipart/form-data'}
        })
    }
    
}
export default new VocabularyService()